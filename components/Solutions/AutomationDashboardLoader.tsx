"use client";

import dynamic from "next/dynamic";

const AutomationDashboard = dynamic(() => import("@/components/Solutions/AutomationDashboard"), {
  ssr: false,
  loading: () => (
    <div
      className="relative rounded-xl border border-stone-200 bg-[#1E1E20] overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#161618]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/60" />
        </div>
      </div>
      <div style={{ aspectRatio: "640/400" }} />
    </div>
  ),
});

export default AutomationDashboard;
