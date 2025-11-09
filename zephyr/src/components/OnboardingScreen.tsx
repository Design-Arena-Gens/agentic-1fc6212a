import { useEffect, useMemo, useState } from "react";
import { MobileShell } from "./MobileShell";

const slides = [
  {
    title: "Skip traffic, not deliveries",
    description: "Zephyr drones pierce through India’s skyline to reach you 5x faster.",
    badge: "Autonomous Flight Path",
    accent: "from-orange-500 to-amber-500",
    illustration: (
      <div className="relative flex h-40 items-center justify-center">
        <div className="absolute inset-8 rounded-full border border-white/20" />
        <div className="absolute h-16 w-16 animate-pulse rounded-full bg-orange-500/30 blur-xl" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 shadow-[0_0_30px_rgba(255,140,0,0.45)]">
          <div className="absolute h-24 w-2 rounded-full bg-white/20 blur" />
          <div className="absolute h-24 w-24 rounded-full border border-dashed border-white/30" />
          <span className="text-3xl font-black text-white">🚁</span>
        </div>
      </div>
    ),
  },
  {
    title: "Medicine at 3AM? We deliver",
    description: "Tap SOS and medical essentials dispatch instantly with DGCA clearance.",
    badge: "Critical Care Priority",
    accent: "from-rose-500 to-red-500",
    illustration: (
      <div className="relative flex h-40 items-center justify-center">
        <div className="absolute inset-0 rounded-3xl bg-rose-500/10 blur-xl" />
        <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-rose-200/30 bg-rose-500/20">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl text-rose-500">
            🩺
          </div>
          <p className="mt-2 text-xs text-white/70">DGCA Priority Lane</p>
        </div>
      </div>
    ),
  },
  {
    title: "₹45 delivery across cities",
    description: "Zephyr beats ground couriers by up to ₹110 per order with greener energy.",
    badge: "Nationwide Grid",
    accent: "from-emerald-500 to-teal-500",
    illustration: (
      <div className="relative flex h-40 items-center justify-center">
        <div className="absolute inset-4 rounded-[32px] border border-white/15" />
        <div className="absolute h-28 w-28 animate-pulse rounded-full bg-emerald-500/20 blur-lg" />
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-500 shadow-[0_0_40px_rgba(16,185,129,0.35)]">
          <span className="text-3xl font-black text-white">₹45</span>
        </div>
      </div>
    ),
  },
];

export function OnboardingScreen() {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => {
      setStep((current) => (current + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [auto]);

  const currentSlide = useMemo(() => slides[step], [step]);

  return (
    <MobileShell header="Zephyr Onboarding">
      <div className="flex flex-col gap-6 text-white">
        <div className="flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.35em] text-white/50">
            India · Drone Corridor
          </span>
          <button
            onClick={() => setAuto((value) => !value)}
            className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/70 transition hover:border-white/40 hover:text-white"
          >
            {auto ? "Auto" : "Manual"}
          </button>
        </div>
        <div className={`rounded-3xl bg-gradient-to-br ${currentSlide.accent} p-[1px]`}>
          <div className="rounded-[calc(1.5rem-1px)] bg-slate-950/90 p-6 backdrop-blur">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
              <span>{currentSlide.badge}</span>
              <span>{String(step + 1).padStart(2, "0")}</span>
            </div>
            {currentSlide.illustration}
            <h2 className="mt-6 text-2xl font-semibold">{currentSlide.title}</h2>
            <p className="mt-3 text-sm text-white/70">{currentSlide.description}</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAuto(false);
                      setStep(index);
                    }}
                    className={`h-2 w-8 rounded-full transition ${
                      index === step ? "bg-white" : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Show slide ${index + 1}`}
                  />
                ))}
              </div>
              <button className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.25em] text-white/80 transition hover:border-white/40 hover:text-white">
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </MobileShell>
  );
}
