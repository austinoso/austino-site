"use client";

import type { OnboardingData } from "../types";
import CardSelect from "./CardSelect";
import { Megaphone, HelpCircle, Trophy, Pencil } from "lucide-react";

const WEBSITE_JOBS = [
  {
    value: "bookings",
    label: "Getting new bookings",
    description: "Bring in appointments, quotes, or purchases automatically.",
    icon: <Megaphone className="w-5 h-5" />,
  },
  {
    value: "faq",
    label: "Answering common questions",
    description: "Cut down on repetitive calls, texts, and DMs.",
    icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    value: "credibility",
    label: "Making us look professional",
    description: "Stand out from competitors and build instant trust.",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    value: "other",
    label: "Something else",
    description: "I'll describe it below.",
    icon: <Pencil className="w-5 h-5" />,
  },
];

interface StepHeartbeatProps {
  data: OnboardingData;
  onChange: (field: keyof OnboardingData, value: string) => void;
}

const inputClass =
  "w-full px-4 py-3 bg-[#111318] border border-white/[0.06] rounded-lg text-white text-sm placeholder-cyber-gray-500 focus:outline-none focus:ring-1 focus:ring-cyber-accent/50 focus:border-cyber-accent/50 transition-all duration-300 hover:border-white/[0.12]";

export default function StepHeartbeat({ data, onChange }: StepHeartbeatProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
          The Business Heartbeat
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-tight mb-3">
          What should your website do?
        </h2>
        <p className="text-base text-cyber-gray-300 leading-relaxed max-w-lg">
          If this website were your best employee, what would be its #1 job?
        </p>
      </div>

      <CardSelect
        options={WEBSITE_JOBS}
        value={data.websiteJob}
        onChange={(v) => onChange("websiteJob", v)}
        columns={2}
      />

      {data.websiteJob === "other" && (
        <div>
          <label
            htmlFor="websiteJobOther"
            className="block text-sm text-cyber-gray-400 mb-2"
          >
            Tell me more *
          </label>
          <input
            type="text"
            id="websiteJobOther"
            value={data.websiteJobOther}
            onChange={(e) => onChange("websiteJobOther", e.target.value)}
            className={inputClass}
            placeholder="What's the #1 thing you'd want it to do?"
          />
        </div>
      )}

      <div className="pt-2">
        <label
          htmlFor="secretSauce"
          className="block text-sm text-cyber-gray-400 mb-2"
        >
          What&apos;s the one thing you do better than anyone else in town? *
        </label>
        <textarea
          id="secretSauce"
          value={data.secretSauce}
          onChange={(e) => onChange("secretSauce", e.target.value)}
          rows={3}
          className={`${inputClass} resize-none`}
          placeholder='e.g., "We take the extra time with senior dogs" or "I specialize in complex estate law"'
        />
      </div>
    </div>
  );
}
