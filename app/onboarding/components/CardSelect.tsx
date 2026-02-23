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

export default function CardSelect({
  options,
  value,
  onChange,
  columns = 3,
}: CardSelectProps) {
  const gridClass =
    columns === 2
      ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
      : "grid grid-cols-1 sm:grid-cols-3 gap-4";

  return (
    <div className={gridClass}>
      {options.map((option) => {
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`relative p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer group ${
              isSelected
                ? "border-cyber-accent/50 bg-cyber-accent/[0.05] ring-1 ring-cyber-accent/30 shadow-[0_0_20px_rgba(64,224,255,0.08)]"
                : "border-white/[0.06] bg-[#111318] hover:border-white/[0.12]"
            }`}
            aria-pressed={isSelected}
          >
            {/* Selection indicator */}
            <div
              className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                isSelected
                  ? "border-cyber-accent bg-cyber-accent"
                  : "border-white/20 bg-transparent"
              }`}
            >
              {isSelected && (
                <svg
                  className="w-3 h-3 text-[#050505]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>

            {option.preview && (
              <div className="mb-4 rounded-lg overflow-hidden border border-white/[0.04] bg-[#0a0c10]">
                {option.preview}
              </div>
            )}
            {option.icon && (
              <div className="mb-3 text-cyber-gray-400 group-hover:text-white transition-colors">
                {option.icon}
              </div>
            )}
            <p
              className={`font-semibold text-sm leading-snug transition-colors ${
                isSelected ? "text-white" : "text-cyber-gray-300"
              }`}
            >
              {option.label}
            </p>
            {option.description && (
              <p className="mt-1.5 text-xs text-cyber-gray-500 leading-relaxed">
                {option.description}
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}
