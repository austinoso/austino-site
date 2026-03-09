"use client";

interface CardOption {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  preview?: React.ReactNode;
}

interface CardSelectProps {
  options: CardOption[];
  value: string;
  onChange: (value: string) => void;
  columns?: 2 | 3;
}

export default function CardSelect({ options, value, onChange, columns = 3 }: CardSelectProps) {
  const gridClass =
    columns === 2
      ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
      : "grid grid-cols-1 sm:grid-cols-3 gap-4";

  return (
    <div className={gridClass} role="radiogroup">
      {options.map((option) => {
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`relative p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer group ${
              isSelected
                ? "border-warm-gold/40 bg-amber-50/60 ring-1 ring-warm-gold/20"
                : "border-stone-200 bg-white hover:border-stone-300"
            }`}
            role="radio"
            aria-checked={isSelected}
          >
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

            {option.preview && (
              <div className="mb-4 rounded-lg overflow-hidden border border-stone-200 bg-stone-50">
                {option.preview}
              </div>
            )}
            {option.icon && (
              <div className="mb-3 text-stone-400 group-hover:text-stone-700 transition-colors">
                {option.icon}
              </div>
            )}
            <p
              className={`font-semibold text-sm leading-snug transition-colors ${
                isSelected ? "text-stone-900" : "text-stone-700"
              }`}
            >
              {option.label}
            </p>
            {option.description && (
              <p className="mt-1.5 text-xs text-stone-500 leading-relaxed">{option.description}</p>
            )}
          </button>
        );
      })}
    </div>
  );
}
