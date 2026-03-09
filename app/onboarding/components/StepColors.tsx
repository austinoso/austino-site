"use client";

import { useState, useRef, useCallback } from "react";
import type { OnboardingData } from "../types";
import ColorSwatch from "./ColorSwatch";
import { Upload, X, FileImage, Loader2 } from "lucide-react";

const COLOR_OPTIONS = [
  {
    value: "monotone",
    label: "Monotone & Professional",
    description: "Great for lawyers, consultants, and finance.",
    colors: ["#1a1a1a", "#4a4a4a", "#8a8a8a", "#d4d4d4", "#ffffff"],
  },
  {
    value: "warm-earthy",
    label: "Warm & Earthy",
    description: "Great for wellness, massage, and organic brands.",
    colors: ["#5C4033", "#8B7355", "#C4A882", "#E8DCC8", "#2D5A3D"],
  },
  {
    value: "cool-trustworthy",
    label: "Cool & Trustworthy",
    description: "Great for service businesses, tech, and medical.",
    colors: ["#1B3A5C", "#2E6BA6", "#87CEEB", "#E8F4FD", "#ffffff"],
  },
  {
    value: "vibrant-energetic",
    label: "Vibrant & Energetic",
    description: "Great for groomers, fitness, and kid-focused brands.",
    colors: ["#FF6B35", "#FFD166", "#06D6A0", "#118AB2", "#073B4C"],
  },
  {
    value: "trust-you",
    label: "I Trust Your Judgment",
    description: "You're the expert — pick what fits my brand.",
    colors: ["#B45309", "#D97706", "#DB2777", "#7C3AED", "#A78BFA"],
  },
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp", "image/svg+xml", "application/pdf"];

interface StepColorsProps {
  data: OnboardingData;
  onChange: (field: keyof OnboardingData, value: string) => void;
}

const inputClass =
  "w-full px-4 py-3 bg-white border border-stone-200 rounded-lg text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-warm-gold/40 focus:border-warm-gold/50 transition-all duration-300 hover:border-stone-300 resize-none";

export default function StepColors({ data, onChange }: StepColorsProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    async (file: File) => {
      setUploadError("");

      if (file.size > MAX_FILE_SIZE) {
        setUploadError("File is too large (max 5 MB).");
        return;
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        setUploadError("Use PNG, JPG, WebP, SVG, or PDF.");
        return;
      }

      // Show local preview for images
      if (file.type.startsWith("image/")) {
        setPreviewUrl(URL.createObjectURL(file));
      }

      setUploading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/onboarding/upload", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || "Upload failed");
        }

        const { fileId, fileName } = await res.json();
        onChange("logoFileId", fileId);
        onChange("logoFileName", fileName);
      } catch (err) {
        setUploadError(err instanceof Error ? err.message : "Upload failed. Try again.");
        setPreviewUrl(null);
      } finally {
        setUploading(false);
      }
    },
    [onChange],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragActive(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  const handleRemove = () => {
    onChange("logoFileId", "");
    onChange("logoFileName", "");
    setPreviewUrl(null);
    setUploadError("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const hasLogo = !!data.logoFileId && !!data.logoFileName;

  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-xs text-warm-gold uppercase tracking-[0.2em] mb-4">
          Color Palette
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 leading-tight tracking-tight mb-3">
          Choose your flavor.
        </h2>
        <p className="text-base text-stone-600 leading-relaxed max-w-lg">
          No need to get into hex codes — just pick the vibe that feels right.
        </p>
      </div>

      <ColorSwatch
        options={COLOR_OPTIONS}
        value={data.colorPalette}
        onChange={(v) => onChange("colorPalette", v)}
      />

      {/* Brand notes + logo upload */}
      <div
        className="p-5 rounded-xl border border-stone-200 bg-white space-y-5"
        style={{
          boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)",
        }}
      >
        {/* Open-ended brand description */}
        <div className="space-y-3">
          <label htmlFor="brandColor" className="text-sm text-stone-700 font-medium">
            Have a logo or color idea in mind?
          </label>
          <textarea
            id="brandColor"
            value={data.brandColor}
            onChange={(e) => onChange("brandColor", e.target.value)}
            className={inputClass}
            rows={3}
            placeholder="Describe anything — a color you love, a vibe, a competitor's site you like, whatever helps me understand your vision."
          />
        </div>

        {/* Logo upload */}
        <div className="space-y-3">
          <p className="text-sm text-stone-700 font-medium">
            Upload your logo <span className="text-stone-400 font-normal">(optional)</span>
          </p>

          {hasLogo ? (
            /* Uploaded state */
            <div className="flex items-center gap-3 p-3 rounded-lg border border-warm-gold/20 bg-amber-50/50">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Logo preview"
                  className="w-10 h-10 rounded object-contain bg-white/5"
                />
              ) : (
                <FileImage className="w-10 h-10 text-warm-gold/60 p-2" />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-stone-900 truncate">{data.logoFileName}</p>
                <p className="text-xs text-warm-gold/60">Uploaded</p>
              </div>
              <button
                type="button"
                onClick={handleRemove}
                className="p-1.5 rounded-md text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                aria-label="Remove logo"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Drop zone */
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
              className={`relative flex flex-col items-center gap-2 p-6 rounded-lg border-2 border-dashed cursor-pointer transition-all duration-300 ${
                dragActive
                  ? "border-warm-gold/50 bg-amber-50/50"
                  : "border-stone-200 bg-stone-50 hover:border-stone-300"
              }`}
            >
              {uploading ? (
                <Loader2 className="w-6 h-6 text-warm-gold animate-spin" />
              ) : (
                <Upload className="w-6 h-6 text-stone-400" />
              )}
              <p className="text-sm text-stone-500 text-center">
                {uploading ? "Uploading\u2026" : "Drag & drop or click to browse"}
              </p>
              <p className="text-xs text-stone-400">PNG, JPG, WebP, SVG, or PDF — up to 5 MB</p>
              <input
                ref={inputRef}
                type="file"
                accept=".png,.jpg,.jpeg,.webp,.svg,.pdf"
                className="hidden"
                aria-label="Upload logo file"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
              />
            </div>
          )}

          {uploadError && (
            <p className="text-xs text-red-400" role="alert">
              {uploadError}
            </p>
          )}
        </div>

        <p className="text-xs text-stone-400">
          All optional — if you don&apos;t have anything yet, no worries. We&apos;ll figure it out
          together.
        </p>
      </div>
    </div>
  );
}
