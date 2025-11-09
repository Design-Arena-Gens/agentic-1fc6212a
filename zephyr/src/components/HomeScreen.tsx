import { MobileShell } from "./MobileShell";

export function HomeScreen() {
  return (
    <MobileShell header="Zephyr Home">
      <div className="flex flex-col gap-6 text-white">
        <section className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Network Status
            </p>
            <p className="text-lg font-semibold text-white">Drone Fleet · Online</p>
          </div>
          <div className="flex flex-col items-end text-right text-xs text-white/60">
            <span>Wind: 6 km/h</span>
            <span>Visibility: 9 km</span>
          </div>
        </section>

        <section className="rounded-2xl border border-red-500/40 bg-red-500/10 p-4">
          <div className="flex items-center gap-4">
            <button className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 via-red-600 to-orange-500 shadow-[0_20px_40px_-18px_rgba(239,68,68,0.9)]">
              <div className="absolute inset-[-12px] rounded-full border border-red-300/40" />
              <div className="absolute inset-[-22px] animate-ping rounded-full border border-red-500/40" />
              <span className="text-lg font-semibold uppercase tracking-[0.4em] text-white">
                SOS
              </span>
            </button>
            <div className="flex-1 text-sm">
              <p className="font-semibold text-white">Emergency Dispatch Ready</p>
              <p className="mt-1 text-white/70">
                Tap to prioritize drone to your location under 8 minutes.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <label className="text-xs uppercase tracking-[0.3em] text-white/50">
            Drop Location
          </label>
          <div className="flex items-center gap-3 rounded-xl border border-[#ff9933]/50 bg-white/10 px-3 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-2xl">
              📍
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">91, MG Road, Bengaluru</p>
              <p className="text-xs text-emerald-400">Drone Zone verified</p>
            </div>
            <button className="text-xs uppercase tracking-[0.25em] text-emerald-300">
              Change
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/10 p-4">
          <header className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Live Tracker</span>
            <span>3 drones near</span>
          </header>
          <div className="relative h-40 overflow-hidden rounded-xl bg-slate-900">
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at bottom, rgba(255, 153, 0, 0.35), transparent)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(20, 184, 166, 0.4), rgba(99, 102, 241, 0.25))",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg width=\"160\" height=\"160\" viewBox=\"0 0 160 160\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" stroke=\"%23ffffff18\"%3E%3Cpath d=\"M0 40h160M0 80h160M0 120h160M40 0v160M80 0v160M120 0v160\"/%3E%3C/svg%3E')",
              }}
            />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1">
              <span className="text-xs text-white/60">You</span>
              <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.8)]" />
            </div>
            <div className="absolute left-[25%] top-[25%]">
              <div className="animate-pulse rounded-full border-2 border-emerald-400/60 p-2">
                <div className="rounded-full bg-emerald-400/80 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-950">
                  Drone Z3
                </div>
              </div>
            </div>
            <div className="absolute right-[22%] top-[65%]">
              <div className="animate-pulse rounded-full border-2 border-orange-400/60 p-2">
                <div className="rounded-full bg-orange-400/80 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-orange-950">
                  Drone V8
                </div>
              </div>
            </div>
            <div className="absolute left-[60%] top-[30%]">
              <div className="rounded-full border border-white/50 px-2 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80">
                ETA 06:42
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Quick Dispatch
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "💊", label: "Medicine" },
              { icon: "🍱", label: "Food" },
              { icon: "📄", label: "Documents" },
              { icon: "🔌", label: "Electronics" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left transition hover:border-white/30 hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-xl">
                  {icon}
                </div>
                <span className="text-sm font-semibold text-white">{label}</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </MobileShell>
  );
}
