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
                  ? "bg-cyber-accent/15 text-cyber-accent border border-cyber-accent/40 shadow-[0_0_12px_rgba(64,224,255,0.08)]"
                  : "bg-[#111318] text-cyber-gray-400 border border-white/[0.06] hover:border-white/[0.12] hover:text-cyber-gray-300"
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
                ? "bg-cyber-accent/15 text-cyber-accent border border-cyber-accent/40 shadow-[0_0_12px_rgba(64,224,255,0.08)]"
                : "bg-[#111318] text-cyber-gray-400 border border-white/[0.06] hover:border-white/[0.12] hover:text-cyber-gray-300"
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
          className="w-full px-4 py-3 bg-[#111318] border border-white/[0.06] rounded-lg text-white text-sm placeholder-cyber-gray-500 focus:outline-none focus:ring-1 focus:ring-cyber-accent/50 focus:border-cyber-accent/50 transition-all duration-300 hover:border-white/[0.12]"
        />
      )}
    </div>
  );
}
