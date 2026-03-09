"use client";

import { CheckCircle, Calendar, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

interface ConfirmationProps {
  paid: boolean;
  calLink: string;
  name: string;
}

export default function Confirmation({ paid, calLink, name }: ConfirmationProps) {
  const firstName = name.split(" ")[0] || "there";

  return (
    <div className="space-y-8 max-w-xl mx-auto text-center">
      {/* Success icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-warm-green/10 border border-warm-green/20 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-warm-green" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 leading-tight tracking-tight mb-3">
          You&apos;re all set, {firstName}.
        </h2>
        <p className="text-base text-stone-600 leading-relaxed">
          {paid
            ? "Your deposit is confirmed and I'm already reviewing your answers. I'll have a demo ready for our call."
            : "I've got your answers and I'll review everything before our call."}
        </p>
      </div>

      {/* What happens next */}
      <div
        className="p-6 rounded-xl border border-stone-200 bg-white text-left"
        style={{
          boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)",
        }}
      >
        <p className="font-mono text-xs text-warm-gold uppercase tracking-[0.2em] mb-4">
          What Happens Next
        </p>
        <ul className="space-y-3.5">
          {[
            paid
              ? "I start building your demo immediately"
              : "I review your answers within 24 hours",
            "We hop on a discovery call to talk through it",
            paid
              ? "You'll see a working demo during the call"
              : "I send you a clear plan with timeline and cost",
            "We kick off the project — no pressure",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="font-mono text-xs text-warm-gold/60 mt-0.5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-stone-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Schedule CTA */}
      <div className="space-y-4">
        <a
          href={calLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-base rounded-lg transition-all duration-300 hover:brightness-110 shadow-lg shadow-amber-600/15 w-full sm:w-auto"
        >
          <Calendar className="w-4 h-4" aria-hidden="true" />
          <span>Schedule Discovery Call</span>
          <span className="sr-only"> (opens in a new tab)</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>

        <p className="text-xs text-stone-400">
          Or I&apos;ll reach out to schedule within 24 hours.
        </p>
      </div>

      {/* Help line */}
      <div className="pt-4 border-t border-stone-200">
        <div className="flex items-center justify-center gap-2 text-sm text-stone-500">
          <Mail className="w-4 h-4" aria-hidden="true" />
          <span>Questions? Reach me at </span>
          <a href="mailto:connect@austino.dev" className="text-warm-gold hover:underline">
            connect@austino.dev
          </a>
        </div>
      </div>

      {/* Back to home */}
      <Link
        href="/"
        className="inline-block text-sm text-stone-400 hover:text-stone-600 transition-colors"
      >
        ← Back to austino.dev
      </Link>
    </div>
  );
}
