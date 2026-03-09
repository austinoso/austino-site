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
  "w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-warm-gold/40 focus:border-warm-gold/50 transition-all duration-300 hover:border-stone-300";

const lockedClass =
  "w-full px-4 py-3 bg-stone-50 border border-warm-gold/20 rounded-lg text-stone-500 text-sm cursor-not-allowed";

export default function StepContact({ data, onChange, prefilled }: StepContactProps) {
  // When prefilled from Notion, contact fields are read-only
  const locked = prefilled && data.name && data.email && data.businessName;

  const hasSocials = data.existingSite || data.instagram || data.facebook || data.otherSocials;
  const [showSocials, setShowSocials] = useState(!!hasSocials);

  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-xs text-warm-gold uppercase tracking-[0.2em] mb-4">
          The Basics
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 leading-tight tracking-tight mb-3">
          {locked ? "Welcome back." : "Let\u2019s get started."}
        </h2>
        <p className="text-base text-stone-600 leading-relaxed max-w-lg">
          {locked
            ? "I\u2019ve pre-filled some info already. Review it and continue when you\u2019re ready."
            : "First, the basics \u2014 so I know who I\u2019m building for."}
        </p>
      </div>

      <div className="space-y-5 max-w-lg">
        <div>
          <label htmlFor="name" className="block text-sm text-stone-500 mb-2">
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
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-stone-500 mb-2">
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
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="businessName" className="block text-sm text-stone-500 mb-2">
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
            aria-required="true"
          />
        </div>

        {locked && (
          <p className="text-xs text-stone-400 font-mono">
            Not you?{" "}
            <button
              type="button"
              onClick={() => {
                onChange("name", data.name);
              }}
              className="text-warm-gold/70 hover:text-warm-gold underline underline-offset-2 cursor-pointer"
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
            className="flex items-center gap-2 text-sm text-stone-400 hover:text-stone-600 transition-colors cursor-pointer group"
          >
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            <span>Add existing website &amp; socials</span>
            <span className="text-xs text-stone-400">(optional)</span>
          </button>
        ) : (
          <div className="space-y-5 animate-fade-step">
            <p className="text-xs font-mono text-stone-400 uppercase tracking-[0.15em]">
              Online Presence{" "}
              <span className="text-stone-400 normal-case tracking-normal">&mdash; optional</span>
            </p>

            <div>
              <label
                htmlFor="existingSite"
                className="flex items-center gap-1.5 text-sm text-stone-500 mb-2"
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
                className="flex items-center gap-1.5 text-sm text-stone-500 mb-2"
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
                className="flex items-center gap-1.5 text-sm text-stone-500 mb-2"
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
              <label htmlFor="otherSocials" className="block text-sm text-stone-500 mb-2">
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
