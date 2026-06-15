import "./globals.css";

export const metadata = {
  title: "HaatoPay — Demo",
  description: "eWallet for HAAT — Fintech PM Assessment Mockup",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
