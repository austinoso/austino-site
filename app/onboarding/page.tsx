"use client";

import {
  Suspense,
  useReducer,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, ArrowLeft, ArrowRight } from "lucide-react";

import { initialData, onboardingReducer, type OnboardingData } from "./types";

import ProgressBar from "./components/ProgressBar";
import StepContact from "./components/StepContact";
import StepHeartbeat from "./components/StepHeartbeat";
import StepCustomers from "./components/StepCustomers";
import StepVibe from "./components/StepVibe";
import StepColors from "./components/StepColors";
import StepTools from "./components/StepTools";
import StepCheckout from "./components/StepCheckout";
import Confirmation from "./components/Confirmation";

const TOTAL_STEPS = 7;
const STORAGE_KEY = "austino-onboarding";
const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK || "https://cal.com/austino/discovery";

// ── Validation per step ──
function isStepValid(step: number, data: OnboardingData): boolean {
  switch (step) {
    case 1:
      return (
        data.name.trim() !== "" &&
        data.email.trim() !== "" &&
        data.businessName.trim() !== ""
      );
    case 2:
      return (
        data.websiteJob !== "" &&
        (data.websiteJob !== "other" || data.websiteJobOther.trim() !== "") &&
        data.secretSauce.trim() !== ""
      );
    case 3:
      return data.phoneFaq.trim() !== "";
    case 4:
      return data.heroStyle !== "" && data.personality !== "";
    case 5:
      return data.colorPalette !== "";
    case 6:
      return data.currentTools.length > 0;
    case 7:
      return true; // Checkout step — always valid
    default:
      return false;
  }
}

export default function OnboardingPage() {
  return (
    <Suspense
      fallback={
        <main className="relative min-h-screen bg-[#050505]">
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-cyber-accent/30 border-t-cyber-accent rounded-full animate-spin" />
          </div>
        </main>
      }
    >
      <OnboardingInner />
    </Suspense>
  );
}

function OnboardingInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paidParam = searchParams.get("paid");
  const slugParam = searchParams.get("id");
  const stepParam = searchParams.get("step");

  const [data, dispatch] = useReducer(onboardingReducer, initialData);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasPaid, setHasPaid] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [isSaving, setIsSaving] = useState(false);
  const [loadingPrefill, setLoadingPrefill] = useState(!!slugParam);

  // Notion page ID for existing projects (two-way sync)
  const [pageId, setPageId] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(slugParam);
  const [prefilled, setPrefilled] = useState(false);

  // Track whether we've done initial hydration
  const hasHydrated = useRef(false);

  // Storage key can be scoped to slug if available
  const storageKey = slug ? `${STORAGE_KEY}-${slug}` : STORAGE_KEY;

  // ── Fetch prefill from Notion when ?id= is present ──
  useEffect(() => {
    if (!slugParam || hasHydrated.current) return;

    const fetchPrefill = async () => {
      try {
        const res = await fetch(
          `/api/onboarding?id=${encodeURIComponent(slugParam)}`,
        );
        if (res.ok) {
          const result = await res.json();
          setPageId(result.pageId);
          setSlug(result.slug);

          // Hydrate form data from Notion
          if (result.data) {
            dispatch({ type: "HYDRATE", data: result.data });
          }

          // Resume from last saved step
          if (result.step && result.step > 1) {
            setStep(result.step);
          }

          // If already paid, go directly to confirmation
          if (result.depositPaid) {
            setHasPaid(true);
            setIsComplete(true);
          }

          setPrefilled(true);
        } else {
          console.warn("Project not found for slug:", slugParam);
        }
      } catch (error) {
        console.error("Failed to fetch prefill:", error);
      } finally {
        setLoadingPrefill(false);
        hasHydrated.current = true;
        setHydrated(true);
      }
    };

    fetchPrefill();
  }, [slugParam]);

  // ── Hydrate from localStorage (only if no slug prefill) ──
  useEffect(() => {
    if (slugParam || hasHydrated.current) return;

    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.data) {
          dispatch({ type: "HYDRATE", data: parsed.data });
        }
        if (parsed.step && typeof parsed.step === "number") {
          setStep(parsed.step);
        }
        if (parsed.pageId) {
          setPageId(parsed.pageId);
        }
        if (parsed.slug) {
          setSlug(parsed.slug);
        }
      }
    } catch {
      // Ignore malformed data
    }
    hasHydrated.current = true;
    setHydrated(true);
  }, [slugParam, storageKey]);

  // ── Handle Stripe redirect ──
  useEffect(() => {
    if (paidParam === "true") {
      setHasPaid(true);
      setIsComplete(true);
      localStorage.removeItem(storageKey);
    }
  }, [paidParam, storageKey]);

  // ── Handle ?step= param (e.g. from Stripe cancel) ──
  useEffect(() => {
    if (stepParam) {
      const s = parseInt(stepParam, 10);
      if (s >= 1 && s <= TOTAL_STEPS) setStep(s);
    }
  }, [stepParam]);

  // ── Persist to localStorage ──
  useEffect(() => {
    if (!hydrated || isComplete) return;
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ data, step, pageId, slug }),
      );
    } catch {
      // Storage full or unavailable
    }
  }, [data, step, hydrated, isComplete, pageId, slug, storageKey]);

  // ── Auto-save to Notion on step change ──
  const saveToNotion = useCallback(
    async (currentStep: number) => {
      if (!pageId || !hydrated) return;

      setIsSaving(true);
      try {
        await fetch("/api/onboarding", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pageId, data, step: currentStep }),
        });
      } catch (error) {
        console.error("Auto-save failed:", error);
      } finally {
        setIsSaving(false);
      }
    },
    [pageId, data, hydrated],
  );

  // ── Field change handlers ──
  const handleChange = useCallback(
    (field: keyof OnboardingData, value: string) => {
      dispatch({ type: "SET_FIELD", field, value });
    },
    [],
  );

  const handleArrayChange = useCallback(
    (field: keyof OnboardingData, value: string[]) => {
      dispatch({ type: "SET_ARRAY_FIELD", field, value });
    },
    [],
  );

  // ── Navigation (auto-saves to Notion on each step) ──
  const goNext = () => {
    if (step < TOTAL_STEPS && isStepValid(step, data)) {
      const nextStep = step + 1;
      setDirection("forward");
      setStep(nextStep);
      saveToNotion(nextStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goBack = () => {
    if (step > 1) {
      const prevStep = step - 1;
      setDirection("backward");
      setStep(prevStep);
      saveToNotion(prevStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ── Submit / ensure Notion row exists ──
  const submitData = async (): Promise<string | null> => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // If we already have a pageId, just do a final PATCH
      if (pageId) {
        const res = await fetch("/api/onboarding", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pageId, data, step }),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: "Server error" }));
          throw new Error(err.error || "Failed to save");
        }
        const result = await res.json();
        return result.slug || slug || pageId;
      }

      // Otherwise create a new row
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, step }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Server error" }));
        throw new Error(err.error || "Failed to save");
      }

      const result = await res.json();
      // Capture the new pageId/slug for future saves
      if (result.pageId) setPageId(result.pageId);
      if (result.slug) setSlug(result.slug);
      return result.slug || result.id || null;
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong",
      );
      setIsSubmitting(false);
      return null;
    }
  };

  // ── Payment flow ──
  const handlePayDeposit = async () => {
    const submissionSlug = await submitData();
    if (!submissionSlug) return;

    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId: pageId,
          slug: submissionSlug,
          email: data.email,
          name: data.name,
          businessName: data.businessName,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await res.json();
      if (url) {
        localStorage.removeItem(storageKey);
        window.location.href = url;
      }
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Payment setup failed",
      );
      setIsSubmitting(false);
    }
  };

  // ── Skip payment flow ──
  const handleSkipToCall = async () => {
    const submissionSlug = await submitData();
    if (!submissionSlug) return;

    setIsSubmitting(false);
    setIsComplete(true);
    setHasPaid(false);
    localStorage.removeItem(storageKey);
  };

  // ── Don't render until hydrated (prevents flash) ──
  if (!hydrated || loadingPrefill) {
    return (
      <main className="relative min-h-screen bg-[#050505]">
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-cyber-accent/30 border-t-cyber-accent rounded-full animate-spin" />
        </div>
      </main>
    );
  }

  // ── Confirmation screen ──
  if (isComplete) {
    return (
      <main className="relative min-h-screen bg-[#050505]">
        {/* Noise grain */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "128px 128px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 md:px-12 pt-20 sm:pt-28 pb-20 sm:pb-28">
          {/* Logo */}
          <div className="mb-12 text-center">
            <Link href="/" className="text-xl font-extrabold inline-block">
              <span className="text-white">austin</span>
              <span className="text-cyber-accent">o</span>
            </Link>
          </div>

          <Confirmation paid={hasPaid} calLink={CAL_LINK} name={data.name} />
        </div>
      </main>
    );
  }

  // ── Render current step ──
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepContact
            data={data}
            onChange={handleChange}
            prefilled={prefilled}
          />
        );
      case 2:
        return <StepHeartbeat data={data} onChange={handleChange} />;
      case 3:
        return <StepCustomers data={data} onChange={handleChange} />;
      case 4:
        return <StepVibe data={data} onChange={handleChange} />;
      case 5:
        return <StepColors data={data} onChange={handleChange} />;
      case 6:
        return (
          <StepTools
            data={data}
            onChange={handleChange}
            onChangeArray={handleArrayChange}
          />
        );
      case 7:
        return (
          <StepCheckout
            isSubmitting={isSubmitting}
            onPayDeposit={handlePayDeposit}
            onSkipToCall={handleSkipToCall}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen bg-[#050505]">
      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 30% 10%, rgba(64,224,255,0.04), transparent), radial-gradient(ellipse 60% 30% at 80% 60%, rgba(120,75,255,0.025), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 md:px-12 pt-8 sm:pt-12 pb-20 sm:pb-28">
        {/* Header bar: logo + help */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <Link href="/" className="text-xl font-extrabold">
            <span className="text-white">austin</span>
            <span className="text-cyber-accent">o</span>
          </Link>
          <div className="flex items-center gap-3">
            {isSaving && (
              <span className="flex items-center gap-1.5 text-xs font-mono text-cyber-gray-500 animate-pulse">
                <span className="w-1.5 h-1.5 bg-cyber-accent/50 rounded-full" />
                Saving…
              </span>
            )}
            <a
              href="mailto:connect@austino.dev"
              className="flex items-center gap-1.5 text-xs font-mono text-cyber-gray-500 hover:text-cyber-gray-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Need help?</span>
            </a>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-10 sm:mb-14">
          <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
        </div>

        {/* Step content with transition */}
        <div
          key={step}
          className="animate-fade-step"
          style={{
            animation: `fadeStep 0.35s ease-out both`,
          }}
        >
          {renderStep()}
        </div>

        {/* Error */}
        {submitError && (
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {submitError}
          </div>
        )}

        {/* Navigation buttons */}
        {step < TOTAL_STEPS && (
          <div className="flex items-center justify-between mt-10 sm:mt-14 pt-6 border-t border-white/[0.06]">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 1}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-cyber-gray-400 border border-white/[0.06] rounded-lg transition-all duration-300 hover:border-white/[0.12] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              onClick={goNext}
              disabled={!isStepValid(step, data)}
              className="flex items-center gap-2 px-6 py-2.5 bg-cyber-accent text-[#050505] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 7 back button */}
        {step === TOTAL_STEPS && (
          <div className="mt-10 sm:mt-14 pt-6 border-t border-white/[0.06]">
            <button
              type="button"
              onClick={goBack}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-cyber-gray-400 border border-white/[0.06] rounded-lg transition-all duration-300 hover:border-white/[0.12] hover:text-white cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
