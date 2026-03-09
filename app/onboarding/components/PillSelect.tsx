"use client";

interface PillOption {
  value: string;
  label: string;
}

interface PillSelectProps {
  options: PillOption[];
  value: string[];
  onChange: (value: string[]) => void;
  allowOther?: boolean;
  otherValue?: string;
  onOtherChange?: (value: string) => void;
}

export default function PillSelect({
  options,
  value,
  onChange,
  allowOther = false,
  otherValue = "",
  onOtherChange,
}: PillSelectProps) {
  const togglePill = (pillValue: string) => {
    if (value.includes(pillValue)) {
      onChange(value.filter((v) => v !== pillValue));
    } else {
      onChange([...value, pillValue]);
    }
  };

  const isOtherSelected = value.includes("other");

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => {
          const isSelected = value.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => togglePill(option.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-amber-50 text-warm-gold border border-warm-gold/40"
                  : "bg-white text-stone-500 border border-stone-200 hover:border-stone-300 hover:text-stone-700"
              }`}
              aria-pressed={isSelected}
            >
              {option.label}
            </button>
          );
        })}
        {allowOther && (
          <button
            type="button"
            onClick={() => togglePill("other")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              isOtherSelected
                ? "bg-amber-50 text-warm-gold border border-warm-gold/40"
                : "bg-white text-stone-500 border border-stone-200 hover:border-stone-300 hover:text-stone-700"
            }`}
            aria-pressed={isOtherSelected}
          >
            Other
          </button>
        )}
      </div>
      {allowOther && isOtherSelected && (
        <input
          type="text"
          value={otherValue}
          onChange={(e) => onOtherChange?.(e.target.value)}
          placeholder="What else do you use?"
          aria-label="Other tools you use"
          className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-warm-gold/40 focus:border-warm-gold/50 transition-all duration-300 hover:border-stone-300"
        />
      )}
    </div>
  );
}
