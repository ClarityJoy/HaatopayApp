"use client";

import {
  ArrowLeft, ChevronRight, Plus, Gift, Percent, Coins, Users, Shield,
  CheckCircle2, Phone, CreditCard, Building2, ArrowDownLeft, ArrowUpRight,
  X, Sparkles, Eye, EyeOff, Wallet, ShoppingBag, Banknote,
  MoreHorizontal, ChevronLeft, TrendingUp, Smartphone
} from "lucide-react";
import { BottomNav } from "./components";

// ============================================
// WALLET DASHBOARD
// ============================================
export function WalletDashboard({
  balance, transactions, hideBalance, setHideBalance,
  hasFamilyWallet, childName, setScreen
}: any) {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-haat-red to-haat-redLight px-5 pt-3 pb-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => setScreen("demo-menu")}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-xs uppercase tracking-widest opacity-80">HaatoPay</div>
          <button onClick={() => setHideBalance(!hideBalance)}>
            {hideBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>
        </div>

        <div className="text-center">
          <div className="text-[10px] uppercase tracking-widest opacity-80 mb-1">Available balance</div>
          <div className="font-serif text-5xl font-bold">
            {hideBalance ? "•••••" : `₪${balance.toFixed(2)}`}
          </div>
          {balance > 0 && !hideBalance && (
            <div className="text-[11px] opacity-90 mt-1 flex items-center justify-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Earned ₪{transactions.filter((t: any) => t.amount > 0).reduce((s: number, t: any) => s + t.amount, 0).toFixed(2)} this month
            </div>
          )}
        </div>

        <div className="flex justify-around mt-5">
          <button
            onClick={() => setScreen("wallet-topup")}
            className="flex flex-col items-center gap-1.5"
          >
            <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
              <Plus className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-semibold">Top up</span>
          </button>
          <button
            onClick={() => setScreen("haat-home")}
            className="flex flex-col items-center gap-1.5"
          >
            <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-semibold">Pay in HAAT</span>
          </button>
          <button
            onClick={() => setScreen("wallet-transfer")}
            className="flex flex-col items-center gap-1.5 relative"
          >
            <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-semibold">Transfer</span>
            <div className="absolute -top-1 right-0 px-1 py-0 bg-haat-yellow rounded-full">
              <span className="text-[7px] text-haat-dark font-bold">P4</span>
            </div>
          </button>
          <button
            onClick={() => setScreen("wallet-family")}
            className="flex flex-col items-center gap-1.5"
          >
            <div className="w-11 h-11 rounded-full bg-white/15 backdrop-blur flex items-center justify-center relative">
              <Users className="w-5 h-5" />
              {!hasFamilyWallet && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-haat-yellow rounded-full" />
              )}
            </div>
            <span className="text-[10px] font-semibold">Family</span>
          </button>
        </div>
      </div>

      {/* Family wallet card (if active) */}
      {hasFamilyWallet && (
        <div className="px-5 -mt-3">
          <button
            onClick={() => setScreen("wallet-family")}
            className="w-full bg-white border border-gray-200 rounded-2xl p-3.5 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-haat-yellow/30 flex items-center justify-center">
                <Users className="w-5 h-5 text-haat-red" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-gray-500">Sub-wallet</div>
                <div className="font-semibold text-sm text-haat-dark">{childName || "Layla"}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-haat-dark">₪100</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </button>
        </div>
      )}

      {/* Promo / educational */}
      {balance < 50 && (
        <div className="px-5 mt-3">
          <div className="bg-gradient-to-r from-haat-yellow/20 to-haat-yellow/5 border border-haat-yellow/40 rounded-2xl p-3.5">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-haat-red flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-haat-dark mb-0.5">Want to grow your balance faster?</div>
                <div className="text-[11px] text-gray-700 leading-relaxed">
                  Pay with HaatoPay on your next order and earn 3% cashback automatically.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Virtual Card coming soon */}
      <div className="px-5 mt-3">
        <div className="bg-haat-dark rounded-2xl p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-haat-yellow" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Virtual Visa card</div>
              <div className="text-[10px] text-gray-400">Pay everywhere — coming Phase 2</div>
            </div>
          </div>
          <div className="px-2 py-0.5 bg-haat-yellow/20 rounded-full">
            <span className="text-[9px] text-haat-yellow font-bold uppercase tracking-wider">Soon</span>
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="px-5 mt-4 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-sm text-haat-dark">Recent activity</h3>
          {transactions.length > 0 && (
            <button
              onClick={() => setScreen("wallet-history")}
              className="text-[10px] text-haat-red font-semibold flex items-center gap-0.5"
            >
              See all <ChevronRight className="w-3 h-3" />
            </button>
          )}
        </div>

        {transactions.length === 0 ? (
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100">
            <p className="text-sm text-gray-500">No transactions yet</p>
            <p className="text-[11px] text-gray-400 mt-1">Your activity will appear here</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl divide-y divide-gray-100 border border-gray-100">
            {transactions.slice(0, 5).map((t: any) => (
              <TxRow key={t.id} tx={t} />
            ))}
          </div>
        )}
      </div>

      <BottomNav active="wallet" walletBalance={balance} walletActivated={true} setScreen={setScreen} />
    </div>
  );
}

// ============================================
// TX ROW
// ============================================
export function TxRow({ tx }: any) {
  const colors: Record<string, string> = {
    cashback: "bg-haat-red/10 text-haat-red",
    welcome: "bg-haat-yellow/30 text-haat-red",
    change: "bg-green-50 text-green-700",
    payment: "bg-gray-100 text-gray-700",
    topup: "bg-blue-50 text-blue-700",
    transfer: "bg-purple-50 text-purple-700",
  };

  return (
    <div className="flex items-center gap-3 p-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colors[tx.type]}`}>
        <tx.icon className="w-4.5 h-4.5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-sm text-haat-dark">{tx.label}</div>
        <div className="text-[11px] text-gray-500">{tx.sublabel} · {tx.date}</div>
      </div>
      <div className={`font-bold text-sm ${tx.amount > 0 ? "text-green-700" : "text-haat-dark"}`}>
        {tx.amount > 0 ? "+" : ""}₪{Math.abs(tx.amount).toFixed(2)}
      </div>
    </div>
  );
}

// ============================================
// WALLET HISTORY
// ============================================
export function WalletHistory({ transactions, setScreen }: any) {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white px-5 py-3 flex items-center gap-3 border-b border-gray-100">
        <button onClick={() => setScreen("wallet-dashboard")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="font-bold text-base text-haat-dark">Activity</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        {transactions.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-12">No activity yet</p>
        ) : (
          <div className="bg-white rounded-2xl divide-y divide-gray-100 border border-gray-100">
            {transactions.map((t: any) => (
              <TxRow key={t.id} tx={t} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// WALLET TOP UP
// ============================================
export function WalletTopUp({ setScreen }: any) {
  const methods = [
    { Icon: CreditCard, name: "Credit / debit card", desc: "Instant", phase: "MVP", available: true },
    { Icon: Smartphone, name: "Bit transfer", desc: "Instant · Free", phase: "Phase 2", available: false },
    { Icon: Building2, name: "Bank transfer", desc: "1 business day", phase: "Phase 2", available: false },
    { Icon: Banknote, name: "Cash via courier", desc: "Cash-in at delivery", phase: "Phase 4", available: false },
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="bg-white px-5 py-3 flex items-center gap-3 border-b border-gray-100">
        <button onClick={() => setScreen("wallet-dashboard")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="font-bold text-base text-haat-dark">Top up</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="bg-haat-cream rounded-2xl p-4 mb-5 text-center">
          <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Amount</div>
          <div className="font-serif text-3xl font-bold text-haat-dark">₪___</div>
        </div>

        <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">Method</h3>

        <div className="space-y-2">
          {methods.map((m, i) => (
            <button
              key={i}
              disabled={!m.available}
              className={`w-full flex items-center gap-3 p-3.5 rounded-xl border ${
                m.available ? "bg-white border-haat-red/30 active:scale-[0.99]" : "bg-gray-50 border-gray-100 opacity-60"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${m.available ? "bg-haat-cream" : "bg-gray-100"}`}>
                <m.Icon className={`w-5 h-5 ${m.available ? "text-haat-red" : "text-gray-400"}`} />
              </div>
              <div className="flex-1 text-left">
                <div className={`font-semibold text-sm ${m.available ? "text-haat-dark" : "text-gray-500"}`}>{m.name}</div>
                <div className="text-[11px] text-gray-400">{m.desc}</div>
              </div>
              <div className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                m.phase === "MVP" ? "bg-haat-red text-white" :
                m.phase === "Phase 2" ? "bg-gray-200 text-gray-600" :
                "bg-gray-100 text-gray-400"
              }`}>
                {m.phase}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-5 bg-haat-cream/50 rounded-xl p-3 flex gap-2">
          <Shield className="w-4 h-4 text-haat-red flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-700 leading-relaxed">
            <strong className="text-haat-dark">MVP (Months 0-3):</strong> Credit/debit card top-up only. Bit, bank transfer, and cash-via-courier roll out in later phases.
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// WALLET TRANSFER (P2P - Coming Phase 4)
// ============================================
export function WalletTransfer({ setScreen }: any) {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="bg-white px-5 py-3 flex items-center gap-3 border-b border-gray-100">
        <button onClick={() => setScreen("wallet-dashboard")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="font-bold text-base text-haat-dark">Transfer</h2>
        <div className="ml-auto px-2 py-0.5 bg-haat-yellow/20 rounded-full">
          <span className="text-[9px] text-haat-red font-bold uppercase tracking-wider">Phase 4</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 rounded-3xl bg-haat-cream flex items-center justify-center mb-5">
          <ArrowUpRight className="w-10 h-10 text-haat-red" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-haat-dark mb-2">P2P Transfers</h2>
        <p className="text-sm text-gray-500 mb-6 max-w-xs leading-relaxed">
          Send money to any HAAT user. Receive from family. Available in Phase 4 (Months 9-12) after full KYC rollout.
        </p>

        <div className="w-full space-y-2 mb-6">
          {[
            { label: "Send to any HAAT user", phase: "Phase 4" },
            { label: "Receive from family", phase: "Phase 4" },
            { label: "Requires Tier 1 KYC", phase: "Compliance" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="text-sm text-gray-600">{item.label}</span>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                item.phase === "Compliance" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"
              }`}>{item.phase}</span>
            </div>
          ))}
        </div>

        <div className="w-full bg-haat-cream/50 rounded-xl p-3 flex gap-2 text-left">
          <Shield className="w-4 h-4 text-haat-red flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-700 leading-relaxed">
            P2P is deferred to Phase 4 to prioritize adoption and compliance. Cashback, top-up, and family wallets come first.
          </p>
        </div>
      </div>

      <div className="px-5 pb-6">
        <button
          onClick={() => setScreen("wallet-dashboard")}
          className="w-full bg-gray-100 text-haat-dark font-bold py-3.5 rounded-xl text-sm"
        >
          Back to wallet
        </button>
      </div>
    </div>
  );
}
export function FamilyWalletIntro({ hasFamilyWallet, childName, childLimit, setScreen }: any) {
  if (hasFamilyWallet) {
    return (
      <div className="h-full flex flex-col bg-gray-50">
        <div className="bg-white px-5 py-3 flex items-center gap-3 border-b border-gray-100">
          <button onClick={() => setScreen("wallet-dashboard")}>
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="font-bold text-base text-haat-dark">Family</h2>
        </div>

        <div className="px-5 py-5">
          <div className="bg-gradient-to-br from-haat-red to-haat-redLight rounded-2xl p-5 text-white">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10px] uppercase tracking-widest opacity-80">Child wallet</div>
              <MoreHorizontal className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center font-serif text-2xl font-bold text-haat-red">
                {(childName || "L")[0].toUpperCase()}
              </div>
              <div>
                <div className="font-serif text-2xl font-bold">{childName || "Layla"}</div>
                <div className="text-xs opacity-80">Age 12 · Daily limit ₪{childLimit}</div>
              </div>
            </div>
            <div className="bg-white/15 rounded-xl p-3 mb-2">
              <div className="text-[10px] uppercase tracking-widest opacity-80">Balance available today</div>
              <div className="font-serif text-3xl font-bold">₪{childLimit}</div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">Layla's activity</h3>
            <div className="bg-white rounded-2xl p-3.5 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-haat-dark">Café Lazza</div>
                  <div className="text-[11px] text-gray-500">2 hours ago · School lunch</div>
                </div>
                <div className="text-sm font-bold text-haat-dark">-₪22</div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button className="bg-white border border-gray-200 rounded-xl p-3 text-xs font-semibold text-haat-dark">
              Adjust limits
            </button>
            <button className="bg-white border border-gray-200 rounded-xl p-3 text-xs font-semibold text-haat-dark">
              Top up Layla
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="bg-white px-5 py-3 flex items-center gap-3 border-b border-gray-100">
        <button onClick={() => setScreen("wallet-dashboard")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="font-bold text-base text-haat-dark">Family wallets</h2>
      </div>

      <div className="px-6 pt-6 flex-1">
        <div className="w-12 h-12 rounded-2xl bg-haat-cream flex items-center justify-center mb-4">
          <Users className="w-6 h-6 text-haat-red" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-haat-dark mb-2 leading-tight">
          A wallet for<br/>your kids.
        </h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Create a sub-wallet for your child under your KYC. Set daily limits. See every transaction. They order, you approve.
        </p>

        <div className="space-y-3 mb-6">
          {[
            { Icon: Shield, title: "Industry-standard structure", desc: "Parent KYC, child as authorized user. Same model banks use for ages 14+." },
            { Icon: Eye, title: "Full visibility", desc: "Real-time notifications for every spend." },
            { Icon: Coins, title: "Daily & monthly limits", desc: "You control how much, how often." },
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-haat-cream/30 rounded-xl">
              <f.Icon className="w-4 h-4 text-haat-red flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-sm text-haat-dark">{f.title}</div>
                <div className="text-[11px] text-gray-600 mt-0.5">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 pb-6">
        <button
          onClick={() => setScreen("wallet-family-create")}
          className="w-full bg-haat-red text-white font-bold py-3.5 rounded-xl text-sm"
        >
          Create sub-wallet
        </button>
      </div>
    </div>
  );
}

// ============================================
// FAMILY WALLET CREATE
// ============================================
export function FamilyWalletCreate({
  childName, setChildName, childLimit, setChildLimit, onCreate, setScreen
}: any) {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="bg-white px-5 py-3 flex items-center gap-3 border-b border-gray-100">
        <button onClick={() => setScreen("wallet-family")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="font-bold text-base text-haat-dark">New sub-wallet</h2>
      </div>

      <div className="px-6 pt-6 flex-1">
        <div className="mb-5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Child's name
          </div>
          <input
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            placeholder="Layla"
            className="w-full px-3 py-3.5 bg-gray-100 rounded-xl text-sm border-none focus:outline-none"
          />
        </div>

        <div className="mb-5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Age
          </div>
          <div className="flex gap-2">
            {["8-12", "13-15", "16-18"].map((age, i) => (
              <button
                key={age}
                className={`flex-1 py-2.5 rounded-xl border-2 text-xs font-semibold ${
                  i === 0 ? "border-haat-red bg-haat-cream text-haat-red" : "border-gray-200 text-gray-500"
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Daily limit
          </div>
          <div className="flex gap-2 mb-2">
            {["50", "100", "200"].map((amt, i) => (
              <button
                key={amt}
                onClick={() => setChildLimit(amt)}
                className={`flex-1 py-2.5 rounded-xl border-2 text-xs font-semibold ${
                  childLimit === amt ? "border-haat-red bg-haat-cream text-haat-red" : "border-gray-200 text-gray-500"
                }`}
              >
                ₪{amt}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-haat-cream/50 rounded-xl p-3 flex gap-2 mt-6">
          <Shield className="w-4 h-4 text-haat-red flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-700 leading-relaxed">
            <strong className="text-haat-dark">Regulatory note:</strong> Sub-wallet operates under your full KYC. You are legally responsible for {childName || "the child"}'s activity. Standard practice for ages 8-18 in Israel.
          </p>
        </div>
      </div>

      <div className="px-5 pb-6">
        <button
          onClick={onCreate}
          disabled={!childName}
          className={`w-full font-bold py-3.5 rounded-xl text-sm ${
            childName ? "bg-haat-red text-white" : "bg-gray-200 text-gray-400"
          }`}
        >
          Create wallet
        </button>
      </div>
    </div>
  );
}

// ============================================
// FAMILY WALLET SUCCESS
// ============================================
export function FamilyWalletSuccess({ childName, childLimit, setScreen }: any) {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-haat-yellow/20 to-white">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 bg-haat-red rounded-3xl flex items-center justify-center mb-5 shadow-xl">
          <Users className="w-10 h-10 text-white" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-haat-dark mb-2">
          {childName}'s wallet is ready
        </h2>
        <p className="text-sm text-gray-600 mb-6 max-w-xs">
          Daily limit set to ₪{childLimit}. {childName} can now order on HAAT directly — within your limits.
        </p>

        <div className="w-full max-w-xs bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-haat-red flex items-center justify-center font-serif text-xl font-bold text-white">
              {childName[0].toUpperCase()}
            </div>
            <div className="text-left">
              <div className="font-bold text-sm text-haat-dark">{childName}</div>
              <div className="text-[11px] text-gray-500">Sub-wallet · Age 8-12</div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="text-[10px] uppercase tracking-wider text-gray-500">Daily limit</div>
            <div className="font-bold text-sm text-haat-dark">₪{childLimit}</div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-6">
        <button
          onClick={() => setScreen("wallet-dashboard")}
          className="w-full bg-haat-red text-white font-bold py-3.5 rounded-xl text-sm"
        >
          Back to wallet
        </button>
      </div>
    </div>
  );
}
