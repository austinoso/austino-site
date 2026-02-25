import { Clock, Zap, CheckCircle2 } from "lucide-react";

export default function AlwaysOn() {
  return (
    <section data-fade>
      <p className="section-label mb-4">Always On</p>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        It works while you sleep. And doesn&apos;t call in sick.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
        This isn&apos;t an argument against your employees — it&apos;s about
        freeing them up to do work that actually requires a human. The
        repetitive stuff? That&apos;s where code shines.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-white/[0.06]">
        <div className="border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
          <div className="w-10 h-10 rounded-full border border-cyber-accent/25 bg-cyber-accent/[0.06] flex items-center justify-center flex-shrink-0 mb-5">
            <Clock
              className="w-[18px] h-[18px] text-cyber-accent"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">24/7/365</h3>
          <p className="text-sm text-cyber-gray-400 leading-relaxed">
            Runs at 2am on Christmas just as reliably as 10am on a Tuesday. No
            overtime, no holidays.
          </p>
        </div>
        <div className="border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
          <div className="w-10 h-10 rounded-full border border-cyber-accent/25 bg-cyber-accent/[0.06] flex items-center justify-center flex-shrink-0 mb-5">
            <Zap
              className="w-[18px] h-[18px] text-cyber-accent"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">
            Milliseconds, not minutes
          </h3>
          <p className="text-sm text-cyber-gray-400 leading-relaxed">
            A task that takes a person 15 minutes takes code about 200
            milliseconds. That gap adds up fast.
          </p>
        </div>
        <div className="border-b border-r border-white/[0.06] p-6 sm:p-8 flex flex-col">
          <div className="w-10 h-10 rounded-full border border-cyber-accent/25 bg-cyber-accent/[0.06] flex items-center justify-center flex-shrink-0 mb-5">
            <CheckCircle2
              className="w-[18px] h-[18px] text-cyber-accent"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-base font-semibold text-white mb-2">
            Zero human error
          </h3>
          <p className="text-sm text-cyber-gray-400 leading-relaxed">
            No fat-fingered numbers. No skipped rows. No &apos;I forgot to send
            that email.&apos; Every time, exactly right.
          </p>
        </div>
      </div>
    </section>
  );
}
