"use client";

import type { OnboardingData } from "../types";
import PillSelect from "./PillSelect";

const TOOL_OPTIONS = [
  { value: "moego", label: "MoeGo" },
  { value: "square", label: "Square" },
  { value: "stripe", label: "Stripe" },
  { value: "gmail", label: "Gmail" },
  { value: "google-calendar", label: "Google Calendar" },
  { value: "quickbooks", label: "QuickBooks" },
  { value: "excel-sheets", label: "Excel / Sheets" },
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "yelp", label: "Yelp" },
  { value: "paper-pen", label: "Paper & Pen" },
];

interface StepToolsProps {
  data: OnboardingData;
  onChangeArray: (field: keyof OnboardingData, value: string[]) => void;
  onChange: (field: keyof OnboardingData, value: string) => void;
}

const inputClass =
  "w-full px-4 py-3 bg-[#111318] border border-white/[0.06] rounded-lg text-white text-sm placeholder-cyber-gray-500 focus:outline-none focus:ring-1 focus:ring-cyber-accent/50 focus:border-cyber-accent/50 transition-all duration-300 hover:border-white/[0.12]";

export default function StepTools({
  data,
  onChangeArray,
  onChange,
}: StepToolsProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
          Tech &amp; Tools
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-tight mb-3">
          What are you working with?
        </h2>
        <p className="text-base text-cyber-gray-300 leading-relaxed max-w-lg">
          This helps me know which &ldquo;pipes&rdquo; to connect. Select all
          that apply.
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-cyber-gray-400">
          What software are you currently using? *
        </p>
        <PillSelect
          options={TOOL_OPTIONS}
          value={data.currentTools}
          onChange={(v) => onChangeArray("currentTools", v)}
          allowOther
          otherValue={data.currentToolsOther}
          onOtherChange={(v) => onChange("currentToolsOther", v)}
        />
      </div>

      <div className="pt-2">
        <label
          htmlFor="automationWish"
          className="block text-sm text-cyber-gray-400 mb-2"
        >
          If I could automate one &ldquo;annoying&rdquo; task for you, what
          would it be?
        </label>
        <textarea
          id="automationWish"
          value={data.automationWish}
          onChange={(e) => onChange("automationWish", e.target.value)}
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder='e.g., "I re-enter every appointment from Instagram DMs into my calendar manually"'
        />
        <p className="mt-1.5 text-xs text-cyber-gray-500">
          Optional — but this is where the magic happens.
        </p>
      </div>
    </div>
  );
}
