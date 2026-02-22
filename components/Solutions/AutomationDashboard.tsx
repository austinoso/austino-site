"use client";

import { useState, useEffect, useRef } from "react";

/* ── Task feed data ───────────────────────────────────────── */
const TASKS = [
  {
    label: "New booking received",
    detail: "Jane D. — 60min session",
    accent: "cyan",
  },
  {
    label: "Confirmation SMS sent",
    detail: "+1 (555) 012-3456",
    accent: "green",
  },
  {
    label: "Reminder scheduled",
    detail: "24h before appointment",
    accent: "green",
  },
  {
    label: "Review request queued",
    detail: "Sends 2h after visit",
    accent: "green",
  },
  {
    label: "Revenue report generated",
    detail: "Emailed to owner",
    accent: "cyan",
  },
  {
    label: "Low inventory alert",
    detail: "Product #412 — reorder sent",
    accent: "amber",
  },
  {
    label: "Team notified via Slack",
    detail: "#operations channel",
    accent: "green",
  },
  {
    label: "Invoice auto-processed",
    detail: "#1847 — $125.00",
    accent: "green",
  },
  {
    label: "New lead captured",
    detail: "Contact form → CRM synced",
    accent: "cyan",
  },
  {
    label: "Appointment rescheduled",
    detail: "All parties auto-notified",
    accent: "amber",
  },
  {
    label: "Weekly analytics ready",
    detail: "Conversion: 78% (+5%)",
    accent: "cyan",
  },
  {
    label: "Payment reminder sent",
    detail: "Invoice #1832 — 3d overdue",
    accent: "amber",
  },
] as const;

type FeedItem = {
  id: number;
  taskIdx: number;
  status: "processing" | "done";
};

const MAX_VISIBLE = 6;
const ADD_INTERVAL = 2400;
const DONE_DELAY = 700;

/* ── Color helpers ────────────────────────────────────────── */
function accentText(a: string) {
  return a === "amber"
    ? "text-amber-400"
    : a === "green"
      ? "text-emerald-400"
      : "text-cyan-400";
}

function accentBg(a: string) {
  return a === "amber"
    ? "bg-amber-400/15"
    : a === "green"
      ? "bg-emerald-400/15"
      : "bg-cyan-400/15";
}

function accentLine(a: string) {
  return a === "amber"
    ? "bg-amber-400/50"
    : a === "green"
      ? "bg-emerald-400/50"
      : "bg-cyan-400/50";
}

/* ── Component ────────────────────────────────────────────── */
/* Start with a full feed so the dashboard looks populated on first paint */
const INITIAL_ITEMS: FeedItem[] = TASKS.slice(0, MAX_VISIBLE).map((_, i) => ({
  id: i,
  taskIdx: i,
  status: "done",
}));
const INITIAL_COUNT = 47;

export default function AutomationDashboard() {
  const [items, setItems] = useState<FeedItem[]>(INITIAL_ITEMS);
  const [taskCount, setTaskCount] = useState(INITIAL_COUNT);
  const idRef = useRef(MAX_VISIBLE);
  const taskRef = useRef(MAX_VISIBLE);

  useEffect(() => {
    /* Respect reduced-motion preference */
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const doneTimeouts: ReturnType<typeof setTimeout>[] = [];

    /* Continue cycling new tasks into the already-full feed */
    const interval = setInterval(() => {
      const id = idRef.current++;
      const taskIdx = taskRef.current++ % TASKS.length;

      setItems((prev) => {
        const next: FeedItem[] = [
          { id, taskIdx, status: "processing" },
          ...prev,
        ];
        return next.slice(0, MAX_VISIBLE + 1);
      });
      setTaskCount((c) => c + 1);

      /* Transition to "done" after short delay */
      const t = setTimeout(() => {
        setItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, status: "done" } : item,
          ),
        );
      }, DONE_DELAY);
      doneTimeouts.push(t);
    }, ADD_INTERVAL);

    return () => {
      clearInterval(interval);
      doneTimeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      className="rounded-xl border border-white/[0.08] bg-[#0A0E14] overflow-hidden"
      style={{
        boxShadow:
          "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
      }}
      role="img"
      aria-label="Live automation dashboard showing tasks being processed automatically"
    >
      {/* ── Header ──────────────────────────────────────────── */}
      <div className="px-4 py-3 border-b border-white/[0.06] bg-[#0D1117] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              Live
            </span>
          </div>
          <span className="text-xs text-cyber-gray-400 font-medium">
            Activity Monitor
          </span>
        </div>
        <span className="text-[11px] text-cyber-gray-500 font-mono tabular-nums">
          {taskCount} processed
        </span>
      </div>

      {/* ── Feed ────────────────────────────────────────────── */}
      <div
        className="p-3 h-[308px] relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 75%, transparent 100%)",
        }}
      >
        <div className="space-y-0.5">
          {items.slice(0, MAX_VISIBLE).map((item) => {
            const task = TASKS[item.taskIdx];
            const isDone = item.status === "done";

            return (
              <div
                key={item.id}
                className="flex items-center gap-3 py-2 px-2.5 rounded-lg animate-feed-in"
              >
                {/* Accent bar + status icon */}
                <div className="flex items-center gap-2.5 flex-shrink-0">
                  <div
                    className={`w-0.5 h-8 rounded-full transition-colors duration-500 ${
                      isDone ? accentLine(task.accent) : "bg-white/10"
                    }`}
                  />
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isDone ? accentBg(task.accent) : "bg-white/5"
                    }`}
                  >
                    {isDone ? (
                      <svg
                        className={`w-3 h-3 ${accentText(task.accent)}`}
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
                    ) : (
                      <div className="w-3 h-3 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
                    )}
                  </div>
                </div>

                {/* Label + detail */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-white/90 leading-tight truncate">
                    {task.label}
                  </p>
                  <p className="text-[11px] text-cyber-gray-500 leading-tight mt-0.5 truncate">
                    {task.detail}
                  </p>
                </div>

                {/* Status badge */}
                <span
                  className={`flex-shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full transition-all duration-500 ${
                    isDone
                      ? `${accentText(task.accent)} ${accentBg(task.accent)}`
                      : "text-cyber-gray-500 bg-white/[0.03]"
                  }`}
                >
                  {isDone ? "done" : "running"}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Footer ──────────────────────────────────────────── */}
      <div className="px-4 py-2.5 border-t border-white/[0.06] bg-[#0D1117]/50 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[11px] text-cyber-gray-500">
            All systems operational
          </span>
        </div>
        <span className="text-[11px] text-emerald-400/70 font-mono">
          ~3.5h saved today
        </span>
      </div>
    </div>
  );
}
