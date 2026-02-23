"use client";

import { CheckCircle, Calendar, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

interface ConfirmationProps {
  paid: boolean;
  calLink: string;
  name: string;
}

export default function Confirmation({
  paid,
  calLink,
  name,
}: ConfirmationProps) {
  const firstName = name.split(" ")[0] || "there";

  return (
    <div className="space-y-8 max-w-xl mx-auto text-center">
      {/* Success icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/20 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-[#4ADE80]" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-tight mb-3">
          You&apos;re all set, {firstName}.
        </h2>
        <p className="text-base text-cyber-gray-300 leading-relaxed">
          {paid
            ? "Your deposit is confirmed and I'm already reviewing your answers. I'll have a demo ready for our call."
            : "I've got your answers and I'll review everything before our call."}
        </p>
      </div>

      {/* What happens next */}
      <div
        className="p-6 rounded-xl border border-white/[0.06] bg-[#111318] text-left"
        style={{
          boxShadow:
            "0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
        }}
      >
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
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
              <span className="font-mono text-xs text-cyber-accent/60 mt-0.5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-cyber-gray-300 leading-relaxed">
                {item}
              </span>
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
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-cyber-accent text-[#050505] font-semibold text-base rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)] w-full sm:w-auto"
        >
          <Calendar className="w-4 h-4" />
          <span>Schedule Discovery Call</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <p className="text-xs text-cyber-gray-500">
          Or I&apos;ll reach out to schedule within 24 hours.
        </p>
      </div>

      {/* Help line */}
      <div className="pt-4 border-t border-white/[0.06]">
        <div className="flex items-center justify-center gap-2 text-sm text-cyber-gray-400">
          <Mail className="w-4 h-4" />
          <span>Questions? Reach me at </span>
          <a
            href="mailto:connect@austino.dev"
            className="text-cyber-accent hover:underline"
          >
            connect@austino.dev
          </a>
        </div>
      </div>

      {/* Back to home */}
      <Link
        href="/"
        className="inline-block text-sm text-cyber-gray-500 hover:text-cyber-gray-300 transition-colors"
      >
        ← Back to austino.dev
      </Link>
    </div>
  );
}
