import { CheckCircle2, MapPin } from "lucide-react";

const bulletPoints = [
  "GBP earns the click — your site earns the customer",
  "Schema markup connects your site and profile so Google ranks both higher",
  "Fast load times keep the trust your 5-star reviews started",
  "Every visit lands on a page designed to convert, not just inform",
];

const stats = [
  { label: "Website Speed", value: "0.8s", status: "Helps ranking" },
  { label: "Mobile Score", value: "100/100", status: "Helps ranking" },
  { label: "Schema Markup", value: "Active", status: "Verified" },
  { label: "NAP Consistency", value: "Match", status: "Verified" },
];

export default function FullPicture() {
  return (
    <section data-fade className="mb-24 sm:mb-32">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 space-y-5">
          <p className="section-label">The Full Picture</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance">
            Your GBP is the front door. Your website closes the deal.
          </h2>
          <p className="text-base text-cyber-gray-300 leading-relaxed">
            Your Google Business Profile gets you noticed — it&apos;s the first
            thing people see when they search. But when they tap your website
            link, that&apos;s where the real decision happens. A slow or
            outdated site kills the momentum your profile just built.
          </p>
          <div className="pt-2 space-y-3">
            {bulletPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="w-4 h-4 text-[#4ADE80] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-cyber-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GBP Visual mockup */}
        <div className="lg:col-span-7">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.015] overflow-hidden">
            <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-3">
              <MapPin
                className="w-4 h-4 text-cyber-accent"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-white">
                Google Business Profile
              </p>
            </div>
            <div className="p-5 space-y-4">
              <div className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      My Massage Cottage
                    </p>
                    <p className="text-xs text-cyber-gray-400 mt-0.5">
                      Massage Therapist · Northern California
                    </p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-xs font-mono text-[#4ADE80] font-semibold">
                      4.9
                    </span>
                    <span className="text-[#FEBC2E] text-xs">★★★★★</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="px-2 py-1 rounded bg-cyber-accent/10 text-cyber-accent font-mono">
                    #3 in local results
                  </span>
                  <span className="px-2 py-1 rounded bg-white/[0.04] text-cyber-gray-400 font-mono">
                    mymassagecottage.com
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-3"
                  >
                    <p className="text-[10px] text-cyber-gray-500 uppercase tracking-wider font-mono mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-white font-mono">
                      {item.value}
                    </p>
                    <p className="text-[10px] text-[#4ADE80] mt-0.5">
                      ✓ {item.status}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-cyber-gray-500 leading-relaxed pt-1">
                Your profile gets them to the door. Your website is what makes
                them walk in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
