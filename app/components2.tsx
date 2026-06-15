"use client";

import {
  ArrowLeft, ChevronRight, Plus, Gift, Percent, Coins, Users, Shield,
  CheckCircle2, Phone, CreditCard, Building2, ArrowDownLeft, ArrowUpRight,
  X, Sparkles, Eye, EyeOff, Wallet, ShoppingBag, Banknote, Zap,
  Lock, BadgeCheck, Camera, ChevronLeft, ScrollText, MoreHorizontal,
  AlertCircle
} from "lucide-react";
import { BottomNav } from "./components";

// ============================================
// HAAT CHECKOUT
// ============================================
export function HaatCheckout({
  walletBalance, walletActivated, changeToWallet, setChangeToWallet,
  completeOrder, setScreen
}: any) {
  const subtotal = 87;
  const delivery = 8;
  const total = subtotal + delivery; // 95
  const cashbackPreview = +(total * 0.03).toFixed(2);
  const cashReceived = 100;
  const change = cashReceived - total;

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white px-5 py-3 flex items-center gap-3 border-b border-gray-100">
        <button onClick={() => setScreen("haat-restaurant")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="font-bold text-base text-haat-dark">Checkout</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Order summary */}
        <div className="bg-white p-4 mb-2">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">Order</h3>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between text-haat-dark">
              <span>1× Hummus Beiruti</span>
              <span>₪32</span>
            </div>
            <div className="flex justify-between text-haat-dark">
              <span>2× Falafel Wrap</span>
              <span>₪56</span>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-2 pt-2 space-y-1 text-xs">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>₪87</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Delivery</span>
              <span>₪8</span>
            </div>
            <div className="flex justify-between font-bold text-haat-dark text-sm pt-1">
              <span>Total</span>
              <span>₪{total}</span>
            </div>
          </div>
        </div>

        {/* Payment method */}
        <div className="bg-white p-4 mb-2">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-3">Payment</h3>

          {/* HaatoPay option */}
          {walletActivated && (
            <div className={`border-2 rounded-xl p-3 mb-2 ${
              walletBalance >= total
                ? "border-haat-red bg-gradient-to-br from-haat-cream to-white"
                : "border-gray-200 bg-gray-50"
            }`}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-haat-red flex items-center justify-center flex-shrink-0">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-sm text-haat-dark">HaatoPay Balance</div>
                    <div className="text-xs font-semibold text-haat-dark">₪{walletBalance.toFixed(2)}</div>
                  </div>
                  {walletBalance >= total ? (
                    <div className="flex items-center gap-1 mt-0.5">
                      <Percent className="w-3 h-3 text-haat-red" />
                      <span className="text-[11px] text-haat-red font-semibold">
                        Earn ₪{cashbackPreview} back (3%)
                      </span>
                    </div>
                  ) : (
                    <div className="text-[11px] text-gray-500 mt-0.5">
                      Balance too low — pay cash to earn change
                    </div>
                  )}
                </div>
              </div>
              {walletBalance >= total && (
                <button
                  onClick={() => completeOrder(total, true)}
                  className="w-full mt-3 bg-haat-red text-white font-bold text-sm py-2.5 rounded-lg active:scale-[0.98] transition"
                >
                  Pay ₪{total} & earn ₪{cashbackPreview}
                </button>
              )}
            </div>
          )}

          {/* Cash option */}
          <div className={`border ${walletActivated ? "border-gray-200" : "border-haat-red"} rounded-xl p-3`}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                <Banknote className="w-5 h-5 text-green-700" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm text-haat-dark">Cash on delivery</div>
                <div className="text-[11px] text-gray-500 mt-0.5">
                  Pay the courier in cash
                </div>
              </div>
            </div>

            {/* Change-to-wallet option (when paying cash) - Pre-declaration model */}
            {walletActivated && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-start gap-2.5">
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-haat-dark mb-0.5 flex items-center gap-1">
                      <Coins className="w-3.5 h-3.5 text-haat-red" />
                      Pay with a larger bill — keep change in wallet
                    </div>
                    <div className="text-[10px] text-gray-500">
                      Pre-declare. Courier takes the bill, no change handling.
                    </div>
                  </div>
                  <button
                    onClick={() => setChangeToWallet(!changeToWallet)}
                    className={`w-9 h-5 rounded-full flex-shrink-0 transition relative ${
                      changeToWallet ? "bg-haat-red" : "bg-gray-300"
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition ${
                      changeToWallet ? "right-0.5" : "left-0.5"
                    }`} />
                  </button>
                </div>

                {changeToWallet && (
                  <div className="mt-3 p-3 bg-haat-cream/50 rounded-lg">
                    <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-2 font-bold">
                      I'll pay with
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[100, 200, 500].map(bill => (
                        <div
                          key={bill}
                          className={`text-center py-2 rounded-lg border-2 ${
                            bill === 100 ? "border-haat-red bg-white" : "border-gray-200 bg-white opacity-60"
                          }`}
                        >
                          <div className="text-sm font-bold text-haat-dark">₪{bill}</div>
                          <div className="text-[9px] text-gray-500">→ ₪{bill - total} to wallet</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-[10px] text-gray-600">
                      <CheckCircle2 className="w-3 h-3 text-green-600" />
                      <span>Courier will take ₪100 — no change needed</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => completeOrder(total, false, changeToWallet && walletActivated ? change : 0)}
              className="w-full mt-3 bg-gray-100 text-haat-dark font-bold text-sm py-2.5 rounded-lg active:scale-[0.98] transition"
            >
              Pay ₪{total} in cash
            </button>
          </div>
        </div>

        {/* Wallet activation prompt if not active */}
        {!walletActivated && (
          <div className="mx-4 mb-2 bg-haat-dark rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-haat-yellow flex-shrink-0" />
              <div className="flex-1">
                <div className="font-bold text-sm text-white mb-0.5">
                  Get ₪5 + 3% cashback
                </div>
                <div className="text-[11px] text-gray-400 mb-2">
                  Activate HaatoPay in 30 seconds
                </div>
                <button
                  onClick={() => setScreen("wallet-empty")}
                  className="bg-haat-yellow text-haat-dark text-xs font-bold px-3 py-1.5 rounded-lg"
                >
                  Activate now →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// PAYMENT SUCCESS
// ============================================
export function PaymentSuccess({ lastTx, setScreen }: any) {
  const cashbackTx = lastTx.find((t: any) => t.type === "cashback");
  const changeTx = lastTx.find((t: any) => t.type === "change");

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-5">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-haat-dark mb-2">Order placed!</h2>
        <p className="text-sm text-gray-500 mb-8">Mahmoud's Hummus · ETA 25 min</p>

        {(cashbackTx || changeTx) && (
          <div className="w-full bg-gradient-to-br from-haat-cream to-white border-2 border-haat-red/20 rounded-2xl p-5 mb-4">
            <div className="text-[10px] font-bold uppercase tracking-wider text-haat-red mb-2">
              Added to your wallet
            </div>
            <div className="flex items-center justify-center gap-2">
              <Coins className="w-6 h-6 text-haat-red" />
              <span className="font-serif text-3xl font-bold text-haat-dark">
                +₪{(cashbackTx?.amount || changeTx?.amount).toFixed(2)}
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {cashbackTx ? "3% cashback earned" : "Change saved to balance"}
            </div>
          </div>
        )}
      </div>

      <div className="px-5 pb-6 space-y-2">
        <button
          onClick={() => setScreen("wallet-dashboard")}
          className="w-full bg-haat-red text-white font-bold py-3.5 rounded-xl text-sm"
        >
          Open HaatoPay
        </button>
        <button
          onClick={() => setScreen("haat-home")}
          className="w-full bg-gray-100 text-haat-dark font-bold py-3.5 rounded-xl text-sm"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

// ============================================
// WALLET EMPTY (pre-activation)
// ============================================
export function WalletEmpty({ setScreen }: any) {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-haat-dark to-[#2c2c2c] text-white">
      <div className="px-5 pt-3 pb-2 flex items-center gap-3">
        <button onClick={() => setScreen("demo-menu")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-xs uppercase tracking-widest text-haat-yellow">HaatoPay</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-24 h-24 rounded-3xl bg-haat-yellow flex items-center justify-center mb-6 shadow-xl">
          <Gift className="w-12 h-12 text-haat-dark" />
        </div>

        <h2 className="font-serif text-3xl font-bold mb-3 leading-tight">
          Welcome to<br/><span className="text-haat-yellow">HaatoPay</span>
        </h2>

        <p className="text-sm text-gray-300 mb-8 max-w-xs leading-relaxed">
          The wallet that doesn't ask you to deposit. We give you ₪5 to start — and 3% cashback on every HAAT order.
        </p>

        <div className="w-full space-y-2 mb-6 max-w-xs">
          {[
            { Icon: Gift, text: "Get ₪5 instantly. No deposit needed." },
            { Icon: Percent, text: "Earn 3% back — first 90 days, up to ₪50." },
            { Icon: Users, text: "Create wallets for your kids." },
          ].map(({ Icon, text }, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 backdrop-blur">
              <Icon className="w-4 h-4 text-haat-yellow flex-shrink-0" />
              <span className="text-xs text-left">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 pb-6 space-y-2">
        <button
          onClick={() => setScreen("wallet-onboarding-1")}
          className="w-full bg-haat-yellow text-haat-dark font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2"
        >
          Activate in 30 seconds <Zap className="w-4 h-4" />
        </button>
        <p className="text-[10px] text-center text-gray-500">
          Licensed PSP · Funds protected · Israeli regulatory compliance
        </p>
      </div>
    </div>
  );
}

// ============================================
// ONBOARDING — STEP 1 (phone)
// ============================================
export function Onboarding1({ phoneNumber, setPhoneNumber, setScreen }: any) {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="px-5 pt-3 pb-2 flex items-center justify-between">
        <button onClick={() => setScreen("wallet-empty")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-[10px] uppercase tracking-widest text-gray-400">Step 1 of 2</div>
      </div>

      <div className="px-6 pt-6 flex-1">
        <div className="w-12 h-12 rounded-2xl bg-haat-cream flex items-center justify-center mb-4">
          <Phone className="w-5 h-5 text-haat-red" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-haat-dark mb-2 leading-tight">
          What's your phone number?
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          We'll send you a code to verify.
        </p>

        <div className="mb-3">
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Mobile phone
          </div>
          <div className="flex gap-2">
            <div className="bg-gray-100 px-3 py-3.5 rounded-xl text-sm font-semibold text-haat-dark">
              +972
            </div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="50 123 4567"
              className="flex-1 bg-gray-100 px-3 py-3.5 rounded-xl text-sm border-none focus:outline-none"
            />
          </div>
        </div>

        <div className="bg-haat-cream/50 rounded-xl p-3 flex gap-2 mt-6">
          <Lock className="w-4 h-4 text-haat-red flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-gray-700 leading-relaxed">
            <strong className="text-haat-dark">Why so little?</strong> This is Tier 0 — a closed-loop wallet (HAAT-only spend, no withdrawal). ₪400 cap. AML-exempt under Israeli law. Upgrade to full KYC anytime for higher limits.
          </p>
        </div>
      </div>

      <div className="px-5 pb-6">
        <button
          onClick={() => setScreen("wallet-onboarding-2")}
          className="w-full bg-haat-red text-white font-bold py-3.5 rounded-xl text-sm"
        >
          Send code
        </button>
      </div>
    </div>
  );
}

// ============================================
// ONBOARDING — STEP 2 (SMS)
// ============================================
export function Onboarding2({ smsCode, setSmsCode, setScreen }: any) {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="px-5 pt-3 pb-2 flex items-center justify-between">
        <button onClick={() => setScreen("wallet-onboarding-1")}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-[10px] uppercase tracking-widest text-gray-400">Step 2 of 2</div>
      </div>

      <div className="px-6 pt-6 flex-1">
        <div className="w-12 h-12 rounded-2xl bg-haat-cream flex items-center justify-center mb-4">
          <BadgeCheck className="w-5 h-5 text-haat-red" />
        </div>

        <h2 className="font-serif text-2xl font-bold text-haat-dark mb-2 leading-tight">
          Enter the code
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          We sent a 4-digit code to +972 50 123 4567
        </p>

        <div className="flex gap-2 justify-center mb-4">
          {["4", "8", "1", "2"].map((d, i) => (
            <div
              key={i}
              className="w-14 h-16 border-2 border-haat-red rounded-xl flex items-center justify-center font-serif text-2xl font-bold text-haat-dark bg-haat-cream/30"
            >
              {d}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-2">
          Didn't get it? <span className="text-haat-red font-semibold">Resend</span>
        </p>
      </div>

      <div className="px-5 pb-6">
        <button
          onClick={() => setScreen("wallet-onboarding-3")}
          className="w-full bg-haat-red text-white font-bold py-3.5 rounded-xl text-sm"
        >
          Verify & activate
        </button>
      </div>
    </div>
  );
}

// ============================================
// ONBOARDING — ACTIVATING (loading)
// ============================================
export function Onboarding3({ onComplete }: any) {
  // Auto-advance after a "load" animation
  if (typeof window !== "undefined") {
    setTimeout(() => onComplete(), 1500);
  }

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-haat-dark to-[#2c2c2c] text-white">
      <div className="w-20 h-20 rounded-3xl bg-haat-yellow flex items-center justify-center mb-6 animate-pulse">
        <Wallet className="w-10 h-10 text-haat-dark" />
      </div>

      <h2 className="font-serif text-2xl font-bold mb-2">Activating...</h2>
      <p className="text-sm text-gray-400">Setting up your wallet</p>

      <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-haat-yellow rounded-full animate-pulse" style={{ width: "70%" }} />
      </div>
    </div>
  );
}

// ============================================
// ONBOARDING — SUCCESS
// ============================================
export function OnboardingSuccess({ setScreen }: any) {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-haat-red to-haat-redLight text-white">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center mb-6 shadow-2xl">
          <Gift className="w-12 h-12 text-haat-red" />
        </div>

        <h2 className="font-serif text-3xl font-bold mb-2">You got ₪5!</h2>
        <p className="text-sm opacity-90 mb-8 max-w-xs">
          Your HaatoPay wallet is active. Spend your ₪5 on your next HAAT order — and start earning cashback.
        </p>

        <div className="w-full max-w-xs bg-white/10 backdrop-blur rounded-2xl p-5 mb-2">
          <div className="text-[10px] uppercase tracking-widest opacity-80 mb-1">Your balance</div>
          <div className="font-serif text-5xl font-bold">₪5.00</div>
        </div>
      </div>

      <div className="px-5 pb-6">
        <button
          onClick={() => setScreen("wallet-dashboard")}
          className="w-full bg-white text-haat-red font-bold py-3.5 rounded-xl text-sm"
        >
          Open my wallet →
        </button>
      </div>
    </div>
  );
}
