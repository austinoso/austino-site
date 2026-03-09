"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-warm-gold uppercase tracking-[0.2em]">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="font-mono text-[11px] text-stone-400 tracking-wider">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-1 bg-stone-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
