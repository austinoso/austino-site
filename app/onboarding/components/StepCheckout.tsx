"use client";

import { CreditCard, Calendar, ArrowRight, Sparkles } from "lucide-react";

interface StepCheckoutProps {
  isSubmitting: boolean;
  onPayDeposit: () => void;
  onSkipToCall: () => void;
}

export default function StepCheckout({
  isSubmitting,
  onPayDeposit,
  onSkipToCall,
}: StepCheckoutProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-xs text-warm-gold uppercase tracking-[0.2em] mb-4">
          Almost Done
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 leading-tight tracking-tight mb-3">
          Let&apos;s lock it in.
        </h2>
        <p className="text-base text-stone-600 leading-relaxed max-w-lg">
          You&apos;ve told me everything I need to get started. Now choose how you&apos;d like to
          move forward.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Pay deposit */}
        <button
          type="button"
          onClick={onPayDeposit}
          disabled={isSubmitting}
          className="group relative p-6 sm:p-8 rounded-xl border border-warm-gold/30 bg-amber-50/40 text-left transition-all duration-300 hover:border-warm-gold/50 hover:bg-amber-50/70 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-warm-gold/10">
              <CreditCard className="w-5 h-5 text-warm-gold" />
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-warm-gold" />
              <span className="font-mono text-[10px] text-warm-gold uppercase tracking-wider">
                Recommended
              </span>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-stone-900 mb-2 leading-snug">
            Pay $200 Deposit
          </h3>
          <p className="text-sm text-stone-500 leading-relaxed mb-5">
            I&apos;ll start building a demo before our call. You&apos;ll see real progress on day
            one.
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold text-warm-gold group-hover:gap-3 transition-all duration-300">
            <span>Pay & Schedule Call</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </div>
        </button>

        {/* Skip to call */}
        <button
          type="button"
          onClick={onSkipToCall}
          disabled={isSubmitting}
          className="group relative p-6 sm:p-8 rounded-xl border border-stone-200 bg-white text-left transition-all duration-300 hover:border-stone-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <div className="mb-4">
            <div className="p-2 rounded-lg bg-stone-100 inline-block">
              <Calendar className="w-5 h-5 text-stone-400" />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-stone-900 mb-2 leading-snug">
            Skip to Discovery Call
          </h3>
          <p className="text-sm text-stone-500 leading-relaxed mb-5">
            No payment needed — let&apos;s just talk first. I&apos;ll learn more and follow up with
            a plan.
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold text-stone-500 group-hover:gap-3 group-hover:text-stone-900 transition-all duration-300">
            <span>Schedule Call</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </div>
        </button>
      </div>

      {isSubmitting && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-amber-50 border border-warm-gold/20">
          <svg
            className="animate-spin h-4 w-4 text-warm-gold"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span className="text-sm text-warm-gold">Saving your info...</span>
        </div>
      )}
    </div>
  );
}
