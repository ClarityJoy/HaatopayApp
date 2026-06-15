"use client";

import {
  Home, Search, ShoppingBag, User, Wallet, ArrowLeft, ChevronRight,
  Plus, Gift, Percent, Coins, Users, Shield, CheckCircle2, Phone,
  CreditCard, Building2, ArrowDownLeft, ArrowUpRight, Star, MapPin,
  Clock, X, Sparkles, AlertCircle, Eye, EyeOff, MoreHorizontal,
  TrendingUp, ShoppingCart, Heart, Smartphone, FileText, ChevronDown,
  Camera, Zap, Lock, BadgeCheck, ScrollText, ChevronLeft, Banknote
} from "lucide-react";

// ============================================
// DEMO MENU
// ============================================
export function DemoMenu({ walletActivated, hasFamilyWallet, setScreen }: any) {
  const scenes = [
    {
      title: "Browse HAAT",
      desc: walletActivated ? `Wallet active · explore tabs` : `See how the wallet tab appears`,
      icon: Home,
      action: () => setScreen("haat-home"),
      tag: "Entry",
    },
    {
      title: walletActivated ? "Open wallet" : "Activate wallet",
      desc: walletActivated ? "Dashboard, history, family" : "30-second onboarding (Tier 0)",
      icon: Wallet,
      action: () => setScreen(walletActivated ? "wallet-dashboard" : "wallet-empty"),
      tag: walletActivated ? "Active" : "Onboard",
    },
    {
      title: "Order with cashback",
      desc: "Pay from wallet → earn 3% back",
      icon: Percent,
      action: () => setScreen("haat-restaurant"),
      tag: "Hook",
      disabled: !walletActivated,
    },
    {
      title: "Family Sub-Wallet",
      desc: hasFamilyWallet ? "Edit child's wallet" : "Create wallet for your child",
      icon: Users,
      action: () => setScreen("wallet-family"),
      tag: "Differentiator",
      disabled: !walletActivated,
    },
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-haat-cream to-white">
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-9 h-9 rounded-full bg-haat-red flex items-center justify-center">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-serif text-lg font-bold text-haat-dark leading-tight">HaatoPay</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-widest">Demo Mode</div>
          </div>
        </div>

        <h2 className="font-serif text-2xl font-bold text-haat-dark mb-1 leading-tight">
          Walk through<br/>the experience.
        </h2>
        <p className="text-sm text-gray-600">Tap any scenario to start.</p>
      </div>

      <div className="flex-1 px-5 pb-6 space-y-2.5 overflow-y-auto">
        {scenes.map((s, i) => (
          <button
            key={i}
            onClick={s.disabled ? undefined : s.action}
            disabled={s.disabled}
            className={`w-full text-left p-4 rounded-2xl bg-white border transition ${
              s.disabled
                ? "opacity-40 border-gray-200 cursor-not-allowed"
                : "border-gray-200 hover:border-haat-red active:scale-[0.98]"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-haat-cream flex items-center justify-center flex-shrink-0">
                <s.icon className="w-5 h-5 text-haat-red" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <div className="font-semibold text-sm text-haat-dark">{s.title}</div>
                  <div className="text-[9px] uppercase tracking-wider text-haat-red font-bold">{s.tag}</div>
                </div>
                <div className="text-xs text-gray-500">{s.desc}</div>
              </div>
              {!s.disabled && <ChevronRight className="w-4 h-4 text-gray-300 mt-3" />}
            </div>
          </button>
        ))}

        <div className="mt-4 px-3 py-3 rounded-xl bg-haat-dark/5 border border-haat-dark/10">
          <div className="flex items-start gap-2">
            <Sparkles className="w-3.5 h-3.5 text-haat-red mt-0.5 flex-shrink-0" />
            <p className="text-[11px] text-gray-600 leading-relaxed">
              <strong className="text-haat-dark">Suggested path:</strong> Activate wallet → Order with cashback → See balance grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// HAAT HOME (app with new HaatoPay tab)
// ============================================
export function HaatHome({ walletBalance, walletActivated, setScreen }: any) {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="px-5 pt-3 pb-4 bg-white">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-haat-red" />
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider">Deliver to</div>
              <div className="text-sm font-semibold text-haat-dark">Rabat, Morocco ▾</div>
            </div>
          </div>
          <button onClick={() => setScreen("demo-menu")} className="text-[10px] text-gray-400">
            Menu
          </button>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search restaurants, groceries..."
            className="w-full pl-9 pr-3 py-2.5 bg-gray-100 rounded-xl text-sm border-none focus:outline-none"
            readOnly
          />
        </div>
      </div>

      {/* Cashback banner if wallet active */}
      {walletActivated && (
        <div className="px-5 py-3 bg-gradient-to-r from-haat-yellow/30 to-haat-yellow/10">
          <button
            onClick={() => setScreen("wallet-dashboard")}
            className="w-full flex items-center justify-between p-3 bg-white rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-haat-red flex items-center justify-center">
                <Wallet className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">HaatoPay balance</div>
                <div className="text-base font-bold text-haat-dark">₪{walletBalance.toFixed(2)}</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}

      {/* Categories */}
      <div className="px-5 py-3 bg-white">
        <div className="flex justify-between">
          {[
            { Icon: ShoppingBag, label: "Food", c: "bg-red-50 text-haat-red" },
            { Icon: ShoppingCart, label: "Grocery", c: "bg-green-50 text-green-700" },
            { Icon: Heart, label: "Pharmacy", c: "bg-blue-50 text-blue-700" },
            { Icon: Smartphone, label: "Tech", c: "bg-purple-50 text-purple-700" },
          ].map(({ Icon, label, c }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${c}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-medium text-haat-dark">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm text-haat-dark">Popular near you</h3>
            <button className="text-[10px] text-haat-red font-semibold">See all</button>
          </div>

          {[
            { name: "Mahmoud's Hummus", cuisine: "Middle Eastern · ₪₪", time: "20-30 min", rating: "4.8", featured: true },
            { name: "Café Lazza", cuisine: "Cafe · ₪", time: "15-20 min", rating: "4.6" },
            { name: "Royal Tagine", cuisine: "Moroccan · ₪₪", time: "30-40 min", rating: "4.7" },
          ].map((r, i) => (
            <button
              key={i}
              onClick={() => r.featured && setScreen("haat-restaurant")}
              className="w-full bg-white rounded-2xl mb-2.5 overflow-hidden border border-gray-100 active:scale-[0.99] transition"
            >
              <div className="h-24 bg-gradient-to-br from-orange-100 via-red-50 to-yellow-50 relative">
                {walletActivated && r.featured && (
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-haat-red text-white text-[9px] font-bold rounded-full flex items-center gap-1">
                    <Percent className="w-2.5 h-2.5" /> 3% CASHBACK
                  </div>
                )}
              </div>
              <div className="p-3 text-left">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-sm text-haat-dark">{r.name}</div>
                    <div className="text-xs text-gray-500">{r.cuisine}</div>
                  </div>
                  <div className="flex items-center gap-0.5 text-xs">
                    <Star className="w-3 h-3 fill-haat-yellow text-haat-yellow" />
                    <span className="font-semibold">{r.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-gray-500 mt-1">
                  <Clock className="w-3 h-3" />
                  {r.time}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <BottomNav
        active="home"
        walletBalance={walletBalance}
        walletActivated={walletActivated}
        setScreen={setScreen}
      />
    </div>
  );
}

// ============================================
// BOTTOM NAV (shared)
// ============================================
export function BottomNav({ active, walletBalance, walletActivated, setScreen }: any) {
  const tabs = [
    { id: "home", icon: Home, label: "Home", screen: "haat-home" },
    { id: "search", icon: Search, label: "Search", screen: "haat-home" },
    { id: "orders", icon: ShoppingBag, label: "Orders", screen: "haat-home" },
    {
      id: "wallet",
      icon: Wallet,
      label: "HaatoPay",
      screen: walletActivated ? "wallet-dashboard" : "wallet-empty",
      special: true
    },
    { id: "account", icon: User, label: "Account", screen: "haat-home" },
  ];

  return (
    <div className="bg-white border-t border-gray-100 px-2 pt-1.5 pb-5">
      <div className="flex justify-around">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setScreen(t.screen)}
            className="flex flex-col items-center gap-0.5 py-1 px-2 relative"
          >
            <t.icon
              className={`w-5 h-5 ${
                active === t.id ? "text-haat-red" : "text-gray-400"
              } ${t.special && walletActivated && active !== t.id ? "text-haat-red" : ""}`}
            />
            <span className={`text-[9px] font-medium ${
              active === t.id ? "text-haat-red" : "text-gray-400"
            }`}>
              {t.label}
            </span>
            {t.special && walletActivated && (
              <div className="absolute top-0 right-1 w-1.5 h-1.5 bg-haat-yellow rounded-full" />
            )}
            {t.special && !walletActivated && (
              <div className="absolute -top-1 right-0 px-1 py-0 bg-haat-red rounded-full">
                <span className="text-[7px] text-white font-bold">NEW</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================
// HAAT RESTAURANT
// ============================================
export function HaatRestaurant({ setScreen }: any) {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Hero */}
      <div className="h-40 bg-gradient-to-br from-orange-100 via-red-50 to-yellow-50 relative flex-shrink-0">
        <button
          onClick={() => setScreen("haat-home")}
          className="absolute top-3 left-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-haat-red text-white text-[10px] font-bold rounded-full flex items-center gap-1">
          <Percent className="w-2.5 h-2.5" /> 3% CASHBACK
        </div>
      </div>

      <div className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-serif text-xl font-bold text-haat-dark">Mahmoud's Hummus</h2>
        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
          <span className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-haat-yellow text-haat-yellow" />
            <span className="font-semibold text-haat-dark">4.8</span>
            <span>(2.1k)</span>
          </span>
          <span>·</span>
          <span>Middle Eastern</span>
          <span>·</span>
          <span>20-30 min</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Popular</h3>

        {[
          { name: "Hummus Beiruti", desc: "With pine nuts, parsley, paprika", price: "32" },
          { name: "Mixed Grill Plate", desc: "Lamb, chicken, kebab + sides", price: "78" },
          { name: "Falafel Wrap", desc: "Tahini, pickles, fresh vegetables", price: "28" },
        ].map((item, i) => (
          <div key={i} className="flex gap-3 py-3 border-b border-gray-100">
            <div className="flex-1">
              <div className="font-semibold text-sm text-haat-dark">{item.name}</div>
              <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
              <div className="text-sm font-bold text-haat-dark mt-1">₪{item.price}</div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-50 rounded-xl flex-shrink-0 relative">
              <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-haat-red text-white rounded-full flex items-center justify-center shadow">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky cart */}
      <div className="px-5 py-3 border-t border-gray-100 bg-white">
        <button
          onClick={() => setScreen("haat-checkout")}
          className="w-full bg-haat-red text-white font-bold py-3.5 rounded-xl flex items-center justify-between px-5 active:scale-[0.98] transition"
        >
          <span className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm">2 items</span>
          </span>
          <span className="text-sm">View cart  ·  ₪87</span>
        </button>
      </div>
    </div>
  );
}
