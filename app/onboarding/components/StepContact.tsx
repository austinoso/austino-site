"use client";

import { useState } from "react";
import { Globe, Instagram, Facebook, ChevronDown } from "lucide-react";
import type { OnboardingData } from "../types";

interface StepContactProps {
  data: OnboardingData;
  onChange: (field: keyof OnboardingData, value: string) => void;
  prefilled?: boolean;
}

const inputClass =
  "w-full px-4 py-3 bg-[#111318] border border-white/[0.06] rounded-lg text-white text-sm placeholder-cyber-gray-500 focus:outline-none focus:ring-1 focus:ring-cyber-accent/50 focus:border-cyber-accent/50 transition-all duration-300 hover:border-white/[0.12]";

const lockedClass =
  "w-full px-4 py-3 bg-[#111318]/60 border border-cyber-accent/20 rounded-lg text-cyber-gray-300 text-sm cursor-not-allowed";

export default function StepContact({
  data,
  onChange,
  prefilled,
}: StepContactProps) {
  // When prefilled from Notion, contact fields are read-only
  const locked = prefilled && data.name && data.email && data.businessName;

  const hasSocials =
    data.existingSite || data.instagram || data.facebook || data.otherSocials;
  const [showSocials, setShowSocials] = useState(!!hasSocials);

  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
          The Basics
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-tight mb-3">
          {locked ? "Welcome back." : "Let\u2019s get started."}
        </h2>
        <p className="text-base text-cyber-gray-300 leading-relaxed max-w-lg">
          {locked
            ? "I\u2019ve pre-filled some info already. Review it and continue when you\u2019re ready."
            : "First, the basics \u2014 so I know who I\u2019m building for."}
        </p>
      </div>

      <div className="space-y-5 max-w-lg">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-cyber-gray-400 mb-2"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => onChange("name", e.target.value)}
            className={locked ? lockedClass : inputClass}
            placeholder="Jane Smith"
            readOnly={!!locked}
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm text-cyber-gray-400 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            className={locked ? lockedClass : inputClass}
            placeholder="jane@mybusiness.com"
            readOnly={!!locked}
            required
          />
        </div>

        <div>
          <label
            htmlFor="businessName"
            className="block text-sm text-cyber-gray-400 mb-2"
          >
            Business Name *
          </label>
          <input
            type="text"
            id="businessName"
            value={data.businessName}
            onChange={(e) => onChange("businessName", e.target.value)}
            className={locked ? lockedClass : inputClass}
            placeholder="Acme Co."
            readOnly={!!locked}
            required
          />
        </div>

        {locked && (
          <p className="text-xs text-cyber-gray-500 font-mono">
            Not you?{" "}
            <button
              type="button"
              onClick={() => {
                onChange("name", data.name);
              }}
              className="text-cyber-accent/70 hover:text-cyber-accent underline underline-offset-2 cursor-pointer"
            >
              Edit details
            </button>
          </p>
        )}
      </div>

      {/* ── Optional: Online Presence ── */}
      <div className="max-w-lg pt-2">
        {!showSocials ? (
          <button
            type="button"
            onClick={() => setShowSocials(true)}
            className="flex items-center gap-2 text-sm text-cyber-gray-500 hover:text-cyber-gray-300 transition-colors cursor-pointer group"
          >
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            <span>Add existing website &amp; socials</span>
            <span className="text-xs text-cyber-gray-600">(optional)</span>
          </button>
        ) : (
          <div
            className="space-y-5 animate-fade-step"
            style={{ animation: "fadeStep 0.3s ease-out both" }}
          >
            <p className="text-xs font-mono text-cyber-gray-500 uppercase tracking-[0.15em]">
              Online Presence{" "}
              <span className="text-cyber-gray-600 normal-case tracking-normal">
                &mdash; optional
              </span>
            </p>

            <div>
              <label
                htmlFor="existingSite"
                className="flex items-center gap-1.5 text-sm text-cyber-gray-400 mb-2"
              >
                <Globe className="w-3.5 h-3.5" />
                Current Website
              </label>
              <input
                type="url"
                id="existingSite"
                value={data.existingSite}
                onChange={(e) => onChange("existingSite", e.target.value)}
                className={inputClass}
                placeholder="https://mybusiness.com"
              />
            </div>

            <div>
              <label
                htmlFor="instagram"
                className="flex items-center gap-1.5 text-sm text-cyber-gray-400 mb-2"
              >
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                value={data.instagram}
                onChange={(e) => onChange("instagram", e.target.value)}
                className={inputClass}
                placeholder="@yourbusiness"
              />
            </div>

            <div>
              <label
                htmlFor="facebook"
                className="flex items-center gap-1.5 text-sm text-cyber-gray-400 mb-2"
              >
                <Facebook className="w-3.5 h-3.5" />
                Facebook
              </label>
              <input
                type="text"
                id="facebook"
                value={data.facebook}
                onChange={(e) => onChange("facebook", e.target.value)}
                className={inputClass}
                placeholder="facebook.com/yourbusiness"
              />
            </div>

            <div>
              <label
                htmlFor="otherSocials"
                className="block text-sm text-cyber-gray-400 mb-2"
              >
                Other Links
              </label>
              <input
                type="text"
                id="otherSocials"
                value={data.otherSocials}
                onChange={(e) => onChange("otherSocials", e.target.value)}
                className={inputClass}
                placeholder="TikTok, Yelp, LinkedIn, etc."
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
