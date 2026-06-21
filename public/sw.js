// Service Worker — תמיכה מלאה באופליין לאפליקציית הטיול
const CACHE = "thai26-v3";
const TILES = "thai26-tiles-v1";
const API = "thai26-api-v1";
const SHELL = ["/", "/manifest.json", "/icons/icon.svg", "/icons/icon-192.png", "/icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => ![CACHE, TILES, API].includes(k)).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// cache-first עם הגבלת גודל קל (מוחק ישנים כשהמטמון גדל)
async function cacheFirst(req, cacheName, max) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    cache.put(req, res.clone());
    if (max) trim(cache, max);
    return res;
  } catch (e) {
    return hit || Response.error();
  }
}

async function networkFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(req);
    cache.put(req, res.clone());
    return res;
  } catch (e) {
    const hit = await cache.match(req);
    return hit || Response.error();
  }
}

async function trim(cache, max) {
  const keys = await cache.keys();
  if (keys.length > max) {
    for (let i = 0; i < keys.length - max; i++) cache.delete(keys[i]);
  }
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // אריחי מפה (OpenStreetMap) — נשמרים אחרי צפייה ראשונה, זמינים אופליין
  if (/tile\.openstreetmap\.org$/.test(url.hostname)) {
    e.respondWith(cacheFirst(req, TILES, 600));
    return;
  }

  // מזג אוויר ומטבע — רשת קודם, נפילה לערך האחרון שנשמר
  if (url.hostname === "api.open-meteo.com" || url.hostname === "open.er-api.com") {
    e.respondWith(networkFirst(req, API));
    return;
  }

  // ניווטים: רשת קודם, נפילה למטמון / לעמוד הבית
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match("/")))
    );
    return;
  }

  // נכסים מאותו מקור: מטמון קודם, ואז רשת
  if (url.origin === self.location.origin) {
    e.respondWith(cacheFirst(req, CACHE));
  }
});
