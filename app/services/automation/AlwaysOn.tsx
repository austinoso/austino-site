import { Clock, Zap, CheckCircle2 } from "lucide-react";

export default function AlwaysOn() {
  return (
    <section data-fade>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-warm-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Runs at 2&nbsp;AM. Never calls in&nbsp;sick.
      </h2>
      <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mb-10">
        This isn&apos;t an argument against your employees. It&apos;s about
        freeing them up to do work that actually requires a human. The
        repetitive stuff? That&apos;s where code shines.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {/* 24/7/365 — featured card */}
        <div className="rounded-xl border border-warm-gold/20 bg-warm-gold/[0.03] p-7 sm:p-8 flex flex-col transition-colors duration-300 hover:bg-warm-gold/[0.06] hover:border-warm-gold/30">
          <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 rounded-md border border-warm-gold/15 bg-warm-gold/10 flex items-center justify-center flex-shrink-0">
              <Clock
                className="w-[18px] h-[18px] text-warm-gold"
                aria-hidden="true"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[11px] font-medium text-emerald-400/80 uppercase tracking-wider">
                Online
              </span>
            </div>
          </div>
          <p className="font-display text-[2.5rem] sm:text-5xl font-bold text-warm-white tracking-tight leading-none mb-3">
            24
            <span className="text-warm-gold/30 text-[0.6em] mx-[0.05em]">
              /
            </span>
            7
            <span className="text-warm-gold/30 text-[0.6em] mx-[0.05em]">
              /
            </span>
            365
          </p>
          <p className="text-sm text-stone-400 leading-relaxed">
            Runs at 2am on Christmas just as reliably as 10am on a Tuesday. No
            overtime, no holidays.
          </p>
        </div>

        {/* Speed card */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-7 sm:p-8 flex flex-col transition-colors duration-300 hover:bg-white/[0.04] hover:border-white/[0.10]">
          <div className="w-10 h-10 rounded-md border border-warm-gold/15 bg-warm-gold/10 flex items-center justify-center flex-shrink-0 mb-6">
            <Zap
              className="w-[18px] h-[18px] text-warm-gold"
              aria-hidden="true"
            />
          </div>
          <p className="font-display text-[2.5rem] sm:text-5xl font-bold text-warm-white tracking-tight leading-none mb-1">
            ~200
            <span className="text-base sm:text-lg text-stone-500 font-medium ml-1">
              ms
            </span>
          </p>
          <p className="text-[11px] text-stone-500 uppercase tracking-wider font-medium mb-3">
            vs 15 min by hand
          </p>
          <p className="text-sm text-stone-400 leading-relaxed">
            A task that takes a person 15 minutes takes code about 200
            milliseconds. That gap adds up fast.
          </p>
        </div>

        {/* Accuracy card */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-7 sm:p-8 flex flex-col transition-colors duration-300 hover:bg-white/[0.04] hover:border-white/[0.10]">
          <div className="w-10 h-10 rounded-md border border-warm-gold/15 bg-warm-gold/10 flex items-center justify-center flex-shrink-0 mb-6">
            <CheckCircle2
              className="w-[18px] h-[18px] text-warm-gold"
              aria-hidden="true"
            />
          </div>
          <p className="font-display text-[2.5rem] sm:text-5xl font-bold text-warm-white tracking-tight leading-none mb-3">
            0
            <span className="text-base sm:text-lg text-stone-500 font-medium ml-1.5">
              errors
            </span>
          </p>
          <p className="text-sm text-stone-400 leading-relaxed">
            No fat-fingered numbers. No skipped rows. No &lsquo;I forgot to send
            that email.&rsquo; Every time, exactly right.
          </p>
        </div>
      </div>
    </section>
  );
}
