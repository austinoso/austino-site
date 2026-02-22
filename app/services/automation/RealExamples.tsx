"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CalendarCheck,
  BarChart3,
  Receipt,
  Globe,
  Star,
  Play,
  Terminal,
  Loader2,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Types ────────────────────────────────────────────────── */
type LogEntry = {
  id: number;
  time: string;
  text: string;
  kind: "info" | "ok" | "warn" | "work";
};

type VisibleLog = LogEntry & { uid: number };

type Tool = {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  mode: "auto" | "manual";
  desc: string;
  logs: LogEntry[];
  runLabel?: string;
};

/* ── Deterministic fake timestamps (seconds from 09:00:00) ── */
const ts = (s: number) => {
  const total = 9 * 3600 + s;
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const sec = total % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
};

/* ── Tool definitions ─────────────────────────────────────── */
const TOOLS: Tool[] = [
  {
    id: "booking",
    name: "Booking Pipeline",
    icon: CalendarCheck,
    mode: "auto",
    desc: "Monitors incoming bookings, sends confirmations, schedules reminders, and queues review requests — hands-free.",
    logs: [
      { id: 1, time: ts(0), text: "Watching for new bookings…", kind: "info" },
      {
        id: 2,
        time: ts(2),
        text: "New booking: Jane D. — 60 min deep tissue",
        kind: "work",
      },
      {
        id: 3,
        time: ts(2),
        text: "Confirmation SMS → +1 (555) 012-3456",
        kind: "ok",
      },
      {
        id: 4,
        time: ts(3),
        text: "Reminder scheduled — 24h before appointment",
        kind: "ok",
      },
      {
        id: 5,
        time: ts(3),
        text: "Review request queued — 2h after visit",
        kind: "ok",
      },
      {
        id: 6,
        time: ts(8),
        text: "New booking: Marcus T. — 90 min sports",
        kind: "work",
      },
      {
        id: 7,
        time: ts(8),
        text: "Confirmation SMS → +1 (555) 987-6543",
        kind: "ok",
      },
      { id: 8, time: ts(9), text: "Google Calendar synced", kind: "ok" },
      {
        id: 9,
        time: ts(9),
        text: "Reminder scheduled — 24h before appointment",
        kind: "ok",
      },
      {
        id: 10,
        time: ts(15),
        text: "Listening for next booking…",
        kind: "info",
      },
    ],
  },
  {
    id: "revenue",
    name: "Revenue Sync",
    icon: BarChart3,
    mode: "auto",
    desc: "Pulls daily transactions from your POS, categorizes them, updates your revenue spreadsheet, and emails you a summary every evening.",
    logs: [
      {
        id: 1,
        time: ts(0),
        text: "Daily sync triggered — pulling POS data…",
        kind: "info",
      },
      {
        id: 2,
        time: ts(1),
        text: "Retrieved 23 transactions",
        kind: "work",
      },
      {
        id: 3,
        time: ts(2),
        text: "Categorizing: 18 services · 3 products · 2 gift cards",
        kind: "work",
      },
      {
        id: 4,
        time: ts(3),
        text: "Revenue spreadsheet updated — Row 847",
        kind: "ok",
      },
      {
        id: 5,
        time: ts(3),
        text: "Daily total: $2,847.00 (+12% vs last Tue)",
        kind: "ok",
      },
      {
        id: 6,
        time: ts(4),
        text: "Summary email → owner@business.com",
        kind: "ok",
      },
      {
        id: 7,
        time: ts(5),
        text: "Next sync scheduled: tomorrow 9:00 PM",
        kind: "info",
      },
    ],
  },
  {
    id: "receipts",
    name: "Receipt Import",
    icon: Receipt,
    mode: "manual",
    runLabel: "Import batch",
    desc: "Upload receipt photos or PDFs. Extracts vendor, amount, date, and category via OCR — then adds everything to your expense tracker.",
    logs: [
      {
        id: 1,
        time: ts(0),
        text: "Starting receipt import…",
        kind: "info",
      },
      {
        id: 2,
        time: ts(1),
        text: "Scanning 14 files in /uploads/receipts",
        kind: "work",
      },
      {
        id: 3,
        time: ts(2),
        text: "OCR → receipt_001.jpg — Office Depot $127.45",
        kind: "work",
      },
      {
        id: 4,
        time: ts(3),
        text: "OCR → receipt_002.pdf — Costco $342.18",
        kind: "work",
      },
      {
        id: 5,
        time: ts(4),
        text: "OCR → receipt_003.jpg — Amazon $89.99",
        kind: "work",
      },
      { id: 6, time: ts(6), text: "… 11 more processed", kind: "work" },
      {
        id: 7,
        time: ts(7),
        text: "14/14 receipts extracted and categorized",
        kind: "ok",
      },
      {
        id: 8,
        time: ts(7),
        text: "Expense tracker updated — $2,104.33 total",
        kind: "ok",
      },
      { id: 9, time: ts(8), text: "Import complete.", kind: "ok" },
    ],
  },
  {
    id: "scraper",
    name: "Competitor Watch",
    icon: Globe,
    mode: "manual",
    runLabel: "Run scan",
    desc: "Scans competitor websites for pricing changes, new services, and availability. Delivers a comparison report to your inbox.",
    logs: [
      {
        id: 1,
        time: ts(0),
        text: "Initializing competitor scan…",
        kind: "info",
      },
      {
        id: 2,
        time: ts(2),
        text: "→ relaxmassage.com — 3 price changes detected",
        kind: "work",
      },
      {
        id: 3,
        time: ts(5),
        text: "→ citywellness.com — 1 new service added",
        kind: "work",
      },
      {
        id: 4,
        time: ts(7),
        text: "→ healinghands.co — no changes",
        kind: "info",
      },
      {
        id: 5,
        time: ts(9),
        text: "Comparison report generated",
        kind: "ok",
      },
      {
        id: 6,
        time: ts(9),
        text: "Report emailed → owner@business.com",
        kind: "ok",
      },
      {
        id: 7,
        time: ts(10),
        text: "Scan complete — 4 actionable insights found.",
        kind: "ok",
      },
    ],
  },
  {
    id: "reviews",
    name: "Review Collector",
    icon: Star,
    mode: "auto",
    desc: "Reaches out to recent customers post-visit, collects feedback, and routes 4–5\u2605 reviews straight to your Google Business profile.",
    logs: [
      {
        id: 1,
        time: ts(0),
        text: "Checking for completed appointments…",
        kind: "info",
      },
      {
        id: 2,
        time: ts(1),
        text: "3 customers eligible for review request",
        kind: "work",
      },
      {
        id: 3,
        time: ts(2),
        text: 'SMS → Jane D.: "How was your visit?"',
        kind: "ok",
      },
      {
        id: 4,
        time: ts(2),
        text: 'SMS → Tom R.: "How was your visit?"',
        kind: "ok",
      },
      {
        id: 5,
        time: ts(3),
        text: "Email → Lisa M. (no phone on file)",
        kind: "ok",
      },
      {
        id: 6,
        time: ts(12),
        text: "Response: Jane D. — \u2605\u2605\u2605\u2605\u2605",
        kind: "work",
      },
      {
        id: 7,
        time: ts(12),
        text: "Positive review → Google Business link sent",
        kind: "ok",
      },
      {
        id: 8,
        time: ts(18),
        text: "Response: Tom R. — \u2605\u2605\u2605\u2605\u2606",
        kind: "work",
      },
      {
        id: 9,
        time: ts(18),
        text: "Feedback logged internally (below 5\u2605)",
        kind: "ok",
      },
      {
        id: 10,
        time: ts(20),
        text: "Waiting for remaining responses…",
        kind: "info",
      },
    ],
  },
];

/* ── Color helpers ────────────────────────────────────────── */
const logColor = (k: LogEntry["kind"]) =>
  k === "ok"
    ? "text-emerald-400/90"
    : k === "warn"
      ? "text-amber-400/90"
      : k === "work"
        ? "text-cyber-gray-300"
        : "text-cyber-gray-500";

const logDot = (k: LogEntry["kind"]) =>
  k === "ok"
    ? "bg-emerald-400/60"
    : k === "warn"
      ? "bg-amber-400/60"
      : k === "work"
        ? "bg-cyan-400/60"
        : "bg-white/20";

/* ── Component ────────────────────────────────────────────── */
export default function RealExamples() {
  const [activeTool, setActiveTool] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<VisibleLog[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const dashRef = useRef<HTMLDivElement>(null);
  const logBoxRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const uidRef = useRef(0);
  const activeRef = useRef(0);
  const booted = useRef(false);

  /* ── Cleanup ────────────────────────────────── */
  const flush = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  /* ── Play a set of log entries one-by-one ───── */
  const playLogs = useCallback(
    (
      logs: LogEntry[],
      opts?: { delay?: number; onDone?: () => void; toolIdx?: number },
    ) => {
      const startDelay = opts?.delay ?? 300;
      const toolIdx = opts?.toolIdx ?? activeRef.current;

      setIsRunning(true);

      const MAX_LOG_LINES = 12;

      logs.forEach((log, i) => {
        const d = startDelay + i * 520;
        const handle = setTimeout(() => {
          if (activeRef.current !== toolIdx) return;
          setVisibleLogs((prev) =>
            [...prev, { ...log, uid: uidRef.current++ }].slice(-MAX_LOG_LINES),
          );
        }, d);
        timers.current.push(handle);
      });

      const total = startDelay + logs.length * 520 + 400;
      const done = setTimeout(() => {
        if (activeRef.current !== toolIdx) return;
        setIsRunning(false);
        opts?.onDone?.();
      }, total);
      timers.current.push(done);
    },
    [],
  );

  /* ── Start a tool (auto-plays or waits) ─────── */
  const startTool = useCallback(
    (idx: number, manual = false) => {
      flush();
      const tool = TOOLS[idx];

      if (tool.mode === "auto") {
        setVisibleLogs([]);

        const play = (cycle: number) => {
          if (activeRef.current !== idx) return;
          setVisibleLogs([]);

          playLogs(tool.logs, {
            delay: cycle === 0 ? 400 : 200,
            toolIdx: idx,
            onDone: () => {
              if (cycle < 2) {
                const gap = setTimeout(() => {
                  if (activeRef.current !== idx) return;
                  play(cycle + 1);
                }, 5000);
                timers.current.push(gap);
              }
            },
          });
        };

        play(0);
      } else if (manual) {
        setVisibleLogs([]);
        playLogs(tool.logs, { toolIdx: idx });
      } else {
        setVisibleLogs([]);
        setIsRunning(false);
      }
    },
    [flush, playLogs],
  );

  /* ── Select a tool ──────────────────────────── */
  const selectTool = useCallback(
    (idx: number) => {
      activeRef.current = idx;
      setActiveTool(idx);
      startTool(idx);
    },
    [startTool],
  );

  /* ── Manual run button ──────────────────────── */
  const handleRun = useCallback(() => {
    startTool(activeTool, true);
  }, [activeTool, startTool]);

  /* ── Scroll entrance + dashboard boot ───────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Section fade-in */
      gsap.fromTo(
        sectionRef.current!,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: sectionRef.current!, start: "top 85%" },
        },
      );

      /* Boot automation on scroll */
      ScrollTrigger.create({
        trigger: dashRef.current!,
        start: "top 80%",
        once: true,
        onEnter: () => {
          if (booted.current) return;
          booted.current = true;
          startTool(0);
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      flush();
    };
  }, [startTool, flush]);

  /* ── Animate new log entries ─────────────────── */
  useEffect(() => {
    if (!logBoxRef.current) return;
    const entries = logBoxRef.current.querySelectorAll("[data-log]");
    const last = entries[entries.length - 1];
    if (last) {
      gsap.fromTo(
        last,
        { y: 5, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
      );
    }
  }, [visibleLogs.length]);

  /* ── Derived state ──────────────────────────── */
  const tool = TOOLS[activeTool];
  const ToolIcon = tool.icon;
  const idle = tool.mode === "manual" && !isRunning && visibleLogs.length === 0;

  return (
    <section ref={sectionRef} className="mb-24 sm:mb-32">
      {/* Section header */}
      <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
        Live Demo
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        This is what you&apos;d actually get.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12 sm:mb-14">
        A custom automation hub built around your business. Some tools run on
        their own. Others are ready when you are.{" "}
        <span className="text-white/80">
          Click around&nbsp;&mdash; it&apos;s a live demo.
        </span>
      </p>

      {/* ── Dashboard shell ───────────────────────── */}
      <div
        ref={dashRef}
        className="rounded-xl border border-white/[0.08] bg-[#0A0E14] overflow-hidden"
        style={{
          boxShadow:
            "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        {/* Header bar */}
        <div className="px-4 sm:px-5 py-3 border-b border-white/[0.06] bg-[#0D1117] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
              Online
            </span>
            <span className="text-xs text-cyber-gray-400 font-medium hidden sm:inline">
              Automation Hub
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-cyber-accent/50" aria-hidden />
            <span className="text-[11px] text-cyber-gray-500 font-mono tabular-nums">
              {TOOLS.length} automations
            </span>
          </div>
        </div>

        {/* Body: sidebar + main */}
        <div className="flex flex-col lg:flex-row min-h-[350px] sm:min-h-[400px] lg:min-h-[420px]">
          {/* ── Sidebar ──────────────────────────── */}
          <div className="lg:w-52 xl:w-56 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-white/[0.06] bg-[#0C1018]">
            <div className="flex lg:flex-col gap-1 p-2 overflow-x-auto lg:overflow-visible">
              {TOOLS.map((entry, i) => {
                const SideIcon = entry.icon;
                const on = i === activeTool;
                return (
                  <button
                    key={entry.id}
                    onClick={() => selectTool(i)}
                    style={{ animationDelay: `${i * 70}ms` }}
                    className={`group flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition-all duration-200 flex-shrink-0 lg:flex-shrink lg:w-full animate-feed-in ${
                      on
                        ? "bg-white/[0.06] border border-white/[0.08]"
                        : "bg-transparent border border-transparent hover:bg-white/[0.03] hover:border-white/[0.04]"
                    }`}
                  >
                    <SideIcon
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${
                        on
                          ? "text-cyber-accent"
                          : "text-cyber-gray-500 group-hover:text-cyber-gray-400"
                      }`}
                    />
                    <span
                      className={`text-xs font-medium truncate transition-colors ${
                        on
                          ? "text-white"
                          : "text-cyber-gray-400 group-hover:text-cyber-gray-300"
                      }`}
                    >
                      {entry.name}
                    </span>
                    <span
                      className={`ml-auto text-[9px] font-mono px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                        entry.mode === "auto"
                          ? "text-emerald-400/70 bg-emerald-400/10"
                          : "text-amber-400/70 bg-amber-400/10"
                      }`}
                    >
                      {entry.mode}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Main panel ───────────────────────── */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Tool bar */}
            <div className="px-4 sm:px-5 py-3 border-b border-white/[0.06] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-6 h-6 rounded-md bg-cyber-accent/10 flex items-center justify-center flex-shrink-0">
                  <ToolIcon
                    className="w-3.5 h-3.5 text-cyber-accent"
                    aria-hidden
                  />
                </div>
                <span className="text-sm font-medium text-white truncate">
                  {tool.name}
                </span>
                {tool.mode === "auto" && (
                  <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400/60 flex-shrink-0">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    running
                  </span>
                )}
              </div>

              {tool.mode === "manual" && (
                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 flex-shrink-0 ${
                    isRunning
                      ? "bg-white/[0.04] text-cyber-gray-500 cursor-not-allowed"
                      : "bg-cyber-accent/15 text-cyber-accent hover:bg-cyber-accent/25 border border-cyber-accent/20 hover:border-cyber-accent/40"
                  }`}
                >
                  {isRunning ? (
                    <>
                      <Loader2 className="w-3 h-3 animate-spin" aria-hidden />
                      Running&hellip;
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3" aria-hidden />
                      {tool.runLabel ?? "Run"}
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Log output area */}
            <div
              ref={logBoxRef}
              role="log"
              aria-live="polite"
              className="relative px-4 sm:px-5 py-4 overflow-hidden font-mono text-[11px] sm:text-[12px] leading-relaxed h-[260px] sm:h-[300px]"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 12%, black 100%)",
              }}
            >
              {idle ? (
                /* Manual tool — idle state */
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-3">
                    <Terminal
                      className="w-4 h-4 text-cyber-gray-500"
                      aria-hidden
                    />
                  </div>
                  <p className="text-cyber-gray-500 text-xs mb-1">
                    Ready to run
                  </p>
                  <p className="text-cyber-gray-500/60 text-[11px]">
                    Click &ldquo;{tool.runLabel ?? "Run"}&rdquo; to execute
                  </p>
                </div>
              ) : visibleLogs.length === 0 ? (
                /* Initializing spinner */
                <div className="flex items-center gap-2 text-cyber-gray-500">
                  <div className="w-3 h-3 border-2 border-cyber-gray-600 border-t-cyber-gray-400 rounded-full animate-spin" />
                  Initializing&hellip;
                </div>
              ) : (
                /* Log feed — stacks from bottom, older entries fade at top */
                <div className="absolute inset-x-0 bottom-0 px-4 sm:px-5 pb-4 space-y-0.5">
                  {visibleLogs.map((l) => (
                    <div
                      key={l.uid}
                      data-log
                      className="flex gap-2.5 sm:gap-3 py-[3px]"
                    >
                      <span className="text-cyber-gray-600 flex-shrink-0 select-none tabular-nums">
                        {l.time}
                      </span>
                      <span
                        className={`w-1 flex-shrink-0 rounded-full ${logDot(l.kind)}`}
                      />
                      <span className={logColor(l.kind)}>{l.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tool description */}
            <div className="px-4 sm:px-5 py-3 border-t border-white/[0.06] bg-[#0C1018]/50">
              <p className="text-[11px] sm:text-[12px] text-cyber-gray-500 leading-relaxed">
                {tool.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="px-4 sm:px-5 py-2.5 border-t border-white/[0.06] bg-[#0D1117]/50 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] text-cyber-gray-500">
              All systems operational
            </span>
          </div>
          <span className="text-[11px] text-cyber-gray-500/60 font-mono">
            custom-built for your business
          </span>
        </div>
      </div>
    </section>
  );
}
