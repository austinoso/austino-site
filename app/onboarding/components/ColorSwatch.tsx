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

export default function ColorSwatch({
  options,
  value,
  onChange,
}: ColorSwatchProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {options.map((option) => {
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`relative p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
              isSelected
                ? "border-cyber-accent/50 bg-cyber-accent/[0.05] ring-1 ring-cyber-accent/30 shadow-[0_0_20px_rgba(64,224,255,0.08)]"
                : "border-white/[0.06] bg-[#111318] hover:border-white/[0.12]"
            }`}
            aria-pressed={isSelected}
          >
            {/* Color blocks */}
            <div className="flex gap-1.5 mb-3.5">
              {option.colors.map((color, i) => (
                <div
                  key={i}
                  className="h-8 flex-1 rounded-md"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <p
              className={`font-semibold text-sm leading-snug transition-colors ${
                isSelected ? "text-white" : "text-cyber-gray-300"
              }`}
            >
              {option.label}
            </p>
            <p className="mt-1 text-xs text-cyber-gray-500 leading-relaxed">
              {option.description}
            </p>

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
          </button>
        );
      })}
    </div>
  );
}
