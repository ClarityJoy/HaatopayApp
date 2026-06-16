"use client";

import { useState } from "react";
import {
  Home, Search, ShoppingBag, User, Wallet, ArrowLeft, ChevronRight,
  Plus, Gift, Percent, Coins, Users, Shield, CheckCircle2, Phone,
  CreditCard, Building2, ArrowDownLeft, ArrowUpRight, Star, MapPin,
  Clock, X, Sparkles, AlertCircle, Eye, EyeOff, MoreHorizontal,
  TrendingUp, ShoppingCart, Heart, Smartphone, FileText, ChevronDown
} from "lucide-react";
import { DemoMenu, HaatHome, HaatRestaurant, BottomNav } from "./components";
import {
  HaatCheckout, PaymentSuccess, WalletEmpty,
  Onboarding1, Onboarding2, Onboarding3, OnboardingSuccess
} from "./components2";
import {
  WalletDashboard, WalletHistory, WalletTopUp, WalletTransfer,
  FamilyWalletIntro, FamilyWalletCreate, FamilyWalletSuccess
} from "./components3";

// ============================================
// TYPES & STATE
// ============================================
type Screen =
  | "haat-home"
  | "haat-restaurant"
  | "haat-checkout"
  | "haat-payment-success"
  | "wallet-empty"
  | "wallet-onboarding-1"
  | "wallet-onboarding-2"
  | "wallet-onboarding-3"
  | "wallet-onboarding-success"
  | "wallet-dashboard"
  | "wallet-history"
  | "wallet-topup"
  | "wallet-transfer"
  | "wallet-family"
  | "wallet-family-create"
  | "wallet-family-success"
  | "demo-menu";

type Transaction = {
  id: string;
  type: "cashback" | "payment" | "topup" | "welcome" | "change" | "transfer";
  amount: number;
  label: string;
  sublabel: string;
  date: string;
  icon: any;
};

const PHONE_W = 390;
const PHONE_H = 844;

// ============================================
// MAIN APP COMPONENT
// ============================================
export default function HaatoPayMockup() {
  const [screen, setScreen] = useState<Screen>("demo-menu");
  const [walletBalance, setWalletBalance] = useState(0);
  const [walletActivated, setWalletActivated] = useState(false);
  const [hideBalance, setHideBalance] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [showCashback, setShowCashback] = useState(false);
  const [changeToWallet, setChangeToWallet] = useState(true);
  const [hasFamilyWallet, setHasFamilyWallet] = useState(false);

  // For onboarding flow
  const [phoneNumber, setPhoneNumber] = useState("");
  const [smsCode, setSmsCode] = useState("");

  // For family wallet
  const [childName, setChildName] = useState("");
  const [childLimit, setChildLimit] = useState("100");

  const activateWallet = () => {
    setWalletActivated(true);
    setWalletBalance(5);
    setTransactions([
      {
        id: "welcome",
        type: "welcome",
        amount: 5,
        label: "Welcome bonus",
        sublabel: "Your first ₪5 — on us",
        date: "Just now",
        icon: Gift,
      },
    ]);
  };

  const completeOrder = (orderAmount: number, paidFromWallet: boolean, changeAmount: number = 0) => {
    const newTransactions: Transaction[] = [];
    let newBalance = walletBalance;

    if (paidFromWallet) {
      newBalance -= orderAmount;
      newTransactions.push({
        id: `pay-${Date.now()}`,
        type: "payment",
        amount: -orderAmount,
        label: "Mahmoud's Hummus",
        sublabel: "Paid from HaatoPay",
        date: "Just now",
        icon: ShoppingBag,
      });

      const cashback = +(orderAmount * 0.03).toFixed(2);
      newBalance += cashback;
      newTransactions.push({
        id: `cb-${Date.now()}`,
        type: "cashback",
        amount: cashback,
        label: "3% Cashback",
        sublabel: "Earned on your order",
        date: "Just now",
        icon: Percent,
      });
    } else if (changeAmount > 0 && changeToWallet) {
      newBalance += changeAmount;
      newTransactions.push({
        id: `change-${Date.now()}`,
        type: "change",
        amount: changeAmount,
        label: "Change to wallet",
        sublabel: `From cash payment at Mahmoud's`,
        date: "Just now",
        icon: Coins,
      });
    }

    setWalletBalance(newBalance);
    setTransactions(prev => [...newTransactions, ...prev]);
    setScreen("haat-payment-success");
  };

  const reset = () => {
    setWalletActivated(false);
    setWalletBalance(0);
    setTransactions([]);
    setHasFamilyWallet(false);
    setScreen("demo-menu");
  };

  // ============================================
  // RENDER WRAPPER
  // ============================================
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#F5F5F5] py-6">
      {/* Top control bar */}
      <div className="w-full max-w-2xl mb-4 px-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-serif text-2xl text-haat-dark">
            HaatoPay <span className="text-gray-400 text-sm font-sans font-normal align-middle">— Interactive Demo</span>
          </h1>
          <button
            onClick={reset}
            className="text-xs text-gray-500 hover:text-haat-red transition"
          >
            Reset demo
          </button>
        </div>
        <p className="text-xs text-gray-500">
          Walk through the HaatoPay experience. Tap "Demo Menu" anytime to jump scenes.
        </p>
      </div>

      {/* Phone frame */}
      <div
        className="relative bg-black rounded-[44px] p-2 shadow-2xl"
        style={{ width: PHONE_W + 16, height: PHONE_H + 16 }}
      >
        <div
          className="relative bg-white rounded-[36px] overflow-hidden"
          style={{ width: PHONE_W, height: PHONE_H }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-50" />

          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-7 pt-2 z-40 text-xs font-semibold">
            <span>9:41</span>
            <span></span>
          </div>

          {/* Content */}
          <div className="absolute inset-0 pt-11 pb-0">
            {screen === "demo-menu" && (
              <DemoMenu
                walletActivated={walletActivated}
                hasFamilyWallet={hasFamilyWallet}
                setScreen={setScreen}
              />
            )}
            {screen === "haat-home" && (
              <HaatHome
                walletBalance={walletBalance}
                walletActivated={walletActivated}
                setScreen={setScreen}
              />
            )}
            {screen === "haat-restaurant" && (
              <HaatRestaurant setScreen={setScreen} />
            )}
            {screen === "haat-checkout" && (
              <HaatCheckout
                walletBalance={walletBalance}
                walletActivated={walletActivated}
                changeToWallet={changeToWallet}
                setChangeToWallet={setChangeToWallet}
                completeOrder={completeOrder}
                setScreen={setScreen}
              />
            )}
            {screen === "haat-payment-success" && (
              <PaymentSuccess
                lastTx={transactions.slice(0, 2)}
                setScreen={setScreen}
              />
            )}
            {screen === "wallet-empty" && (
              <WalletEmpty setScreen={setScreen} />
            )}
            {screen === "wallet-onboarding-1" && (
              <Onboarding1
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                setScreen={setScreen}
              />
            )}
            {screen === "wallet-onboarding-2" && (
              <Onboarding2
                smsCode={smsCode}
                setSmsCode={setSmsCode}
                setScreen={setScreen}
              />
            )}
            {screen === "wallet-onboarding-3" && (
              <Onboarding3
                onComplete={() => { activateWallet(); setScreen("wallet-onboarding-success"); }}
              />
            )}
            {screen === "wallet-onboarding-success" && (
              <OnboardingSuccess setScreen={setScreen} />
            )}
            {screen === "wallet-dashboard" && (
              <WalletDashboard
                balance={walletBalance}
                transactions={transactions}
                hideBalance={hideBalance}
                setHideBalance={setHideBalance}
                hasFamilyWallet={hasFamilyWallet}
                childName={childName}
                setScreen={setScreen}
              />
            )}
            {screen === "wallet-history" && (
              <WalletHistory
                transactions={transactions}
                setScreen={setScreen}
              />
            )}
            {screen === "wallet-topup" && (
              <WalletTopUp setScreen={setScreen} />
            )}
            {screen === "wallet-transfer" && (
              <WalletTransfer setScreen={setScreen} />
            )}
            {screen === "wallet-family" && (
              <FamilyWalletIntro
                hasFamilyWallet={hasFamilyWallet}
                childName={childName}
                childLimit={childLimit}
                setScreen={setScreen}
              />
            )}
            {screen === "wallet-family-create" && (
              <FamilyWalletCreate
                childName={childName}
                setChildName={setChildName}
                childLimit={childLimit}
                setChildLimit={setChildLimit}
                onCreate={() => { setHasFamilyWallet(true); setScreen("wallet-family-success"); }}
                setScreen={setScreen}
              />
            )}
            {screen === "wallet-family-success" && (
              <FamilyWalletSuccess
                childName={childName}
                childLimit={childLimit}
                setScreen={setScreen}
              />
            )}
          </div>
        </div>
      </div>

      {/* Caption below phone */}
      <div className="mt-6 max-w-md text-center">
        <p className="text-xs text-gray-500">
          {screenLabels[screen] || ""}
        </p>
      </div>
    </div>
  );
}

const screenLabels: Record<string, string> = {
  "demo-menu": "Start by picking a scenario. Each shows a different part of the wallet experience.",
  "haat-home": "The familiar HAAT app — with a new HaatoPay tab.",
  "haat-restaurant": "Standard browse experience.",
  "haat-checkout": "Notice 'Pay & Earn 3%' option. This is where adoption happens.",
  "haat-payment-success": "Cashback lands instantly — that's the hook.",
  "wallet-empty": "First time clicking the wallet tab: a clear value proposition.",
  "wallet-onboarding-1": "Tier 0 KYC — just a phone number.",
  "wallet-onboarding-2": "SMS verification — 30 seconds total.",
  "wallet-onboarding-3": "Quick branding moment while we activate.",
  "wallet-onboarding-success": "₪5 lands instantly. The wallet is alive.",
  "wallet-dashboard": "The home screen of the wallet — balance, recent activity, actions.",
  "wallet-history": "Full transaction history with category icons.",
  "wallet-topup": "Multiple top-up methods (Phase 2 in our timeline).",
  "wallet-family": "Family Sub-Wallets — the differentiator.",
  "wallet-family-create": "Create a child sub-wallet under the parent's KYC.",
  "wallet-family-success": "Sub-wallet active. Industry-standard, no gray area.",
};
