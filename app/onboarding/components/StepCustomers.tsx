"use client";

import type { OnboardingData } from "../types";

interface StepCustomersProps {
  data: OnboardingData;
  onChange: (field: keyof OnboardingData, value: string) => void;
}

const inputClass =
  "w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 text-sm placeholder-cyber-gray-500 focus:outline-none focus:ring-2 focus:ring-cyber-accent/60 focus:border-cyber-accent/50 transition-all duration-300 hover:border-stone-300";

export default function StepCustomers({ data, onChange }: StepCustomersProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
          Your Customers
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 leading-tight tracking-tight mb-3">
          Tell me about the people you serve.
        </h2>
        <p className="text-base text-cyber-gray-300 leading-relaxed max-w-lg">
          This helps me write copy that speaks directly to your ideal customer.
        </p>
      </div>

      <div className="space-y-6 max-w-lg">
        <div>
          <label
            htmlFor="phoneFaq"
            className="block text-sm text-cyber-gray-400 mb-2"
          >
            What&apos;s the #1 question you&apos;re tired of answering on the
            phone? *
          </label>
          <textarea
            id="phoneFaq"
            value={data.phoneFaq}
            onChange={(e) => onChange("phoneFaq", e.target.value)}
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="This becomes your primary FAQ — the first thing visitors see answered."
            aria-required="true"
          />
        </div>

        <div>
          <label
            htmlFor="idealCustomer"
            className="block text-sm text-cyber-gray-400 mb-2"
          >
            Describe your favorite regular customer — who are they, and why do
            they love coming to you?
          </label>
          <textarea
            id="idealCustomer"
            value={data.idealCustomer}
            onChange={(e) => onChange("idealCustomer", e.target.value)}
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="e.g., Busy working moms who need evening appointments and always rebook before they leave."
          />
          <p className="mt-1.5 text-xs text-cyber-gray-500">
            Optional — but helps a lot with targeting.
          </p>
        </div>
      </div>
    </div>
  );
}
