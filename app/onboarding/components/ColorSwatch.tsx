"use client";

interface ColorOption {
  value: string;
  label: string;
  description: string;
  colors: string[];
}

interface ColorSwatchProps {
  options: ColorOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function ColorSwatch({ options, value, onChange }: ColorSwatchProps) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      role="radiogroup"
      aria-label="Color palette selection"
    >
      {options.map((option) => {
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`relative p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
              isSelected
                ? "border-warm-gold/40 bg-amber-50/60 ring-1 ring-warm-gold/20"
                : "border-stone-200 bg-white hover:border-stone-300"
            }`}
            role="radio"
            aria-checked={isSelected}
          >
            {/* Color blocks */}
            <div className="flex gap-1.5 mb-3.5">
              {option.colors.map((color, i) => (
                <div key={i} className="h-8 flex-1 rounded-md" style={{ backgroundColor: color }} />
              ))}
            </div>

            <p
              className={`font-semibold text-sm leading-snug transition-colors ${
                isSelected ? "text-stone-900" : "text-stone-700"
              }`}
            >
              {option.label}
            </p>
            <p className="mt-1 text-xs text-stone-500 leading-relaxed">{option.description}</p>

            {/* Selection indicator */}
            <div
              className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                isSelected ? "border-warm-gold bg-warm-gold" : "border-stone-300 bg-transparent"
              }`}
            >
              {isSelected && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
