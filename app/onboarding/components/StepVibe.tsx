"use client";

import type { OnboardingData } from "../types";
import CardSelect from "./CardSelect";
import { Truck, Car, Zap } from "lucide-react";

/* ── Wireframe SVG mockups ────────────────────────────────────── */

/** Shared palette for wireframes — keeps them subtle & on-brand */
const W = {
  bg: "#0a0c10",
  line: "#1a1d24",
  block: "#14171d",
  text: "#2a2e38",
  accent: "#40E0FF",
  accentDim: "rgba(64,224,255,0.25)",
} as const;

/**
 * "Action Taker" — prominent CTA button, nav bar, service list.
 * Communicates: transactional, get-straight-to-business.
 */
const ActionTakerPreview = (
  <svg
    viewBox="0 0 260 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    aria-hidden="true"
  >
    {/* nav bar */}
    <rect x="0" y="0" width="260" height="18" fill={W.block} />
    <rect x="8" y="6" width="28" height="6" rx="1" fill={W.text} />
    <rect
      x="200"
      y="5"
      width="52"
      height="8"
      rx="4"
      fill={W.accent}
      opacity={0.9}
    />
    {/* headline */}
    <rect x="16" y="30" width="120" height="8" rx="2" fill={W.text} />
    <rect x="16" y="42" width="90" height="5" rx="1" fill={W.line} />
    {/* big CTA */}
    <rect
      x="16"
      y="56"
      width="80"
      height="14"
      rx="7"
      fill={W.accent}
      opacity={0.85}
    />
    <rect x="30" y="61" width="50" height="4" rx="1" fill={W.bg} />
    {/* service list */}
    <rect x="150" y="30" width="94" height="22" rx="4" fill={W.block} />
    <rect x="158" y="36" width="48" height="4" rx="1" fill={W.text} />
    <rect x="158" y="44" width="36" height="3" rx="1" fill={W.line} />
    <rect x="150" y="56" width="94" height="22" rx="4" fill={W.block} />
    <rect x="158" y="62" width="48" height="4" rx="1" fill={W.text} />
    <rect x="158" y="70" width="36" height="3" rx="1" fill={W.line} />
    <rect x="150" y="82" width="94" height="22" rx="4" fill={W.block} />
    <rect x="158" y="88" width="48" height="4" rx="1" fill={W.text} />
    <rect x="158" y="96" width="36" height="3" rx="1" fill={W.line} />
    {/* divider */}
    <rect x="16" y="114" width="228" height="1" fill={W.line} />
    {/* bottom row — quick stats */}
    <rect x="16" y="122" width="50" height="6" rx="1" fill={W.text} />
    <rect x="76" y="122" width="50" height="6" rx="1" fill={W.text} />
    <rect x="136" y="122" width="50" height="6" rx="1" fill={W.text} />
  </svg>
);

/**
 * "Storyteller" — large hero image, About-Us section, team photo area.
 * Communicates: warmth, trust, narrative-driven.
 */
const StorytellerPreview = (
  <svg
    viewBox="0 0 260 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    aria-hidden="true"
  >
    {/* nav bar */}
    <rect x="0" y="0" width="260" height="18" fill={W.block} />
    <rect x="8" y="6" width="28" height="6" rx="1" fill={W.text} />
    <rect x="120" y="6" width="20" height="5" rx="1" fill={W.line} />
    <rect x="146" y="6" width="20" height="5" rx="1" fill={W.line} />
    <rect x="172" y="6" width="20" height="5" rx="1" fill={W.line} />
    {/* large hero image area */}
    <rect x="0" y="18" width="260" height="72" fill={W.block} />
    {/* mountains / landscape icon inside hero */}
    <path
      d="M100 70 L120 40 L135 55 L150 30 L180 70 Z"
      fill={W.text}
      opacity={0.5}
    />
    <circle cx="175" cy="35" r="6" fill={W.text} opacity={0.3} />
    {/* centered headline over image */}
    <rect
      x="70"
      y="50"
      width="120"
      height="7"
      rx="2"
      fill="white"
      opacity={0.15}
    />
    <rect
      x="90"
      y="60"
      width="80"
      height="4"
      rx="1"
      fill="white"
      opacity={0.08}
    />
    {/* "About Us" section */}
    <rect x="16" y="98" width="60" height="6" rx="1" fill={W.text} />
    <rect x="16" y="108" width="130" height="4" rx="1" fill={W.line} />
    <rect x="16" y="115" width="110" height="4" rx="1" fill={W.line} />
    <rect x="16" y="122" width="120" height="4" rx="1" fill={W.line} />
    {/* team photo placeholder */}
    <rect x="180" y="96" width="64" height="36" rx="4" fill={W.block} />
    <circle cx="212" cy="108" r="8" fill={W.text} opacity={0.4} />
    <path d="M196 126 Q212 114 228 126" fill={W.text} opacity={0.2} />
  </svg>
);

/**
 * "Authority" — minimal layout, badges, certifications, results.
 * Communicates: credibility, polish, expertise.
 */
const AuthorityPreview = (
  <svg
    viewBox="0 0 260 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    aria-hidden="true"
  >
    {/* nav bar */}
    <rect x="0" y="0" width="260" height="18" fill={W.block} />
    <rect x="8" y="6" width="28" height="6" rx="1" fill={W.text} />
    {/* centered headline */}
    <rect x="65" y="28" width="130" height="8" rx="2" fill={W.text} />
    <rect x="80" y="40" width="100" height="4" rx="1" fill={W.line} />
    {/* certification badges row */}
    <g>
      {/* badge 1 */}
      <circle
        cx="68"
        cy="68"
        r="14"
        fill="none"
        stroke={W.accentDim}
        strokeWidth="1.5"
      />
      <path
        d="M61 68 L66 73 L76 63"
        stroke={W.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.7}
      />
      <rect x="52" y="86" width="32" height="3" rx="1" fill={W.line} />
      {/* badge 2 */}
      <circle
        cx="130"
        cy="68"
        r="14"
        fill="none"
        stroke={W.accentDim}
        strokeWidth="1.5"
      />
      <path
        d="M123 68 L128 73 L138 63"
        stroke={W.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.7}
      />
      <rect x="114" y="86" width="32" height="3" rx="1" fill={W.line} />
      {/* badge 3 */}
      <circle
        cx="192"
        cy="68"
        r="14"
        fill="none"
        stroke={W.accentDim}
        strokeWidth="1.5"
      />
      <path
        d="M185 68 L190 73 L200 63"
        stroke={W.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.7}
      />
      <rect x="176" y="86" width="32" height="3" rx="1" fill={W.line} />
    </g>
    {/* results / stats row */}
    <rect x="16" y="102" width="228" height="1" fill={W.line} />
    <rect x="26" y="112" width="40" height="10" rx="2" fill={W.block} />
    <rect
      x="32"
      y="116"
      width="28"
      height="3"
      rx="1"
      fill={W.accent}
      opacity={0.4}
    />
    <rect x="82" y="112" width="40" height="10" rx="2" fill={W.block} />
    <rect
      x="88"
      y="116"
      width="28"
      height="3"
      rx="1"
      fill={W.accent}
      opacity={0.4}
    />
    <rect x="138" y="112" width="40" height="10" rx="2" fill={W.block} />
    <rect
      x="144"
      y="116"
      width="28"
      height="3"
      rx="1"
      fill={W.accent}
      opacity={0.4}
    />
    <rect x="194" y="112" width="40" height="10" rx="2" fill={W.block} />
    <rect
      x="200"
      y="116"
      width="28"
      height="3"
      rx="1"
      fill={W.accent}
      opacity={0.4}
    />
  </svg>
);

const HERO_STYLES = [
  {
    value: "action-taker",
    label: "The Action Taker",
    description:
      'Large "Book Now" button, clean service list, very transactional. Gets straight to business.',
    preview: ActionTakerPreview,
  },
  {
    value: "storyteller",
    label: "The Storyteller",
    description:
      "Large, beautiful image of the shop and team. Focus on the About Us and building trust.",
    preview: StorytellerPreview,
  },
  {
    value: "authority",
    label: "The Authority",
    description:
      "Clean, minimal layout. Focus on certifications, awards, and professional results.",
    preview: AuthorityPreview,
  },
];

const PERSONALITY_OPTIONS = [
  {
    value: "reliable-truck",
    label: "A Reliable Truck",
    description: "Rugged, hardworking, local. No-nonsense and dependable.",
    icon: <Truck className="w-5 h-5" />,
  },
  {
    value: "luxury-sedan",
    label: "A Luxury Sedan",
    description: "Premium, quiet, high-end. Polished and refined.",
    icon: <Car className="w-5 h-5" />,
  },
  {
    value: "friendly-ev",
    label: "A Friendly Electric Car",
    description: "Modern, clean, approachable. Fresh and forward-thinking.",
    icon: <Zap className="w-5 h-5" />,
  },
];

interface StepVibeProps {
  data: OnboardingData;
  onChange: (field: keyof OnboardingData, value: string) => void;
}

export default function StepVibe({ data, onChange }: StepVibeProps) {
  return (
    <div className="space-y-10">
      <div>
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
          The Visual Vibe
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-tight mb-3">
          How should your site feel?
        </h2>
        <p className="text-base text-cyber-gray-300 leading-relaxed max-w-lg">
          No design jargon — just pick what feels right.
        </p>
      </div>

      {/* Hero style */}
      <div className="space-y-4">
        <p className="text-sm text-cyber-gray-400">
          Which &ldquo;Hero&rdquo; layout feels most like your business? *
        </p>
        <CardSelect
          options={HERO_STYLES}
          value={data.heroStyle}
          onChange={(v) => onChange("heroStyle", v)}
          columns={3}
        />
      </div>

      {/* Personality */}
      <div className="space-y-4">
        <p className="text-sm text-cyber-gray-400">
          If your business was a car, what would it be? *
        </p>
        <CardSelect
          options={PERSONALITY_OPTIONS}
          value={data.personality}
          onChange={(v) => onChange("personality", v)}
          columns={3}
        />
      </div>
    </div>
  );
}
