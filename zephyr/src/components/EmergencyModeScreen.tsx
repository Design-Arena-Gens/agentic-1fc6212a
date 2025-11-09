import { useEffect, useState } from "react";
import { MobileShell } from "./MobileShell";

export function EmergencyModeScreen() {
  const [countdown, setCountdown] = useState(330);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = String(Math.floor(countdown / 60)).padStart(2, "0");
  const seconds = String(countdown % 60).padStart(2, "0");

  return (
    <MobileShell header="Zephyr Emergency" footer="SOP · DGCA Airspace Corridor-19">
      <div className="flex flex-col gap-6 text-white">
        <section className="rounded-3xl border border-red-400/60 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 p-[1px] shadow-[0_35px_80px_-45px_rgba(239,68,68,0.8)]">
          <div className="rounded-[calc(1.75rem-1px)] bg-slate-950/95 p-6 text-center">
            <button className="mx-auto flex h-28 w-28 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-red-500 via-red-600 to-orange-500 text-xl font-semibold uppercase tracking-[0.4em] text-white shadow-[0_30px_80px_-30px_rgba(239,68,68,0.8)]">
              SOS
            </button>
            <p className="mt-4 text-sm text-white/70">
              Critical payload dispatched to Manipal Hospital rooftop pad.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-xs uppercase tracking-[0.25em] text-white/60">
              <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3">
                <p className="text-white/70">Drone</p>
                <p className="mt-1 text-lg font-semibold text-white">Astra-X9</p>
              </div>
              <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3">
                <p className="text-white/70">Route</p>
                <p className="mt-1 text-lg font-semibold text-white">Priority A</p>
              </div>
              <div className="rounded-xl border border-red-400/30 bg-red-500/10 p-3">
                <p className="text-white/70">Payload</p>
                <p className="mt-1 text-lg font-semibold text-white">1.6 kg</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <header className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Priority Routing</span>
            <span>ATC Green</span>
          </header>
          <div className="mt-4 space-y-4">
            <div className="relative h-28 overflow-hidden rounded-xl bg-slate-900/80">
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1), transparent)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml,%3Csvg width=\"180\" height=\"180\" viewBox=\"0 0 180 180\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"%23ffffff0f\"%3E%3Cpath d=\"M0 45h180M0 90h180M0 135h180M45 0v180M90 0v180M135 0v180\"/%3E%3C/svg%3E')",
                }}
              />
              <div className="absolute inset-6 rounded-2xl border border-red-500/40" />
              <div className="absolute inset-x-6 bottom-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/60">
                <span>Koramangala Pad</span>
                <span>→</span>
                <span>Manipal Hospital</span>
              </div>
              <div className="absolute inset-x-10 top-8">
                <div className="h-1 rounded-full bg-white/10">
                  <div className="relative h-full w-4/5 rounded-full bg-gradient-to-r from-red-400 via-orange-400 to-emerald-400">
                    <div className="absolute -right-4 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs text-red-500 shadow-[0_0_12px_rgba(255,255,255,0.9)]">
                      🚁
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-white/70">
              <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                <p>Weather Override</p>
                <p className="mt-2 text-lg font-semibold text-emerald-300">Clear</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                <p>Airspace Corridor</p>
                <p className="mt-2 text-lg font-semibold text-white">DGCA-19</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Arrival Countdown</span>
            <span>Real Time</span>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            <div>
              <p className="text-sm font-semibold text-white">ETA</p>
              <p className="text-3xl font-black text-emerald-300">
                {minutes}:{seconds}
              </p>
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/60">
              <p>Battery 82%</p>
              <p>Wind vector 2m/s</p>
              <p>Fallback pad ready</p>
            </div>
          </div>
        </section>
      </div>
    </MobileShell>
  );
}
