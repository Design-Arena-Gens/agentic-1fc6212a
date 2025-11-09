import { MobileShell } from "./MobileShell";

export function ProfileScreen() {
  return (
    <MobileShell header="Zephyr Profile">
      <div className="flex flex-col gap-6 text-white">
        <section className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="h-20 w-20 rounded-full border border-emerald-300/50 bg-gradient-to-br from-emerald-500 via-teal-400 to-sky-400 p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-3xl">
              🛩️
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-white">Aditi Sharma</h2>
            <p className="text-sm text-white/60">Drone Steward · Zephyr</p>
          </div>
          <div className="flex gap-3 text-xs uppercase tracking-[0.25em] text-white/60">
            <span className="rounded-full border border-white/10 px-3 py-1">
              Drone Safe Verified
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              KYC Cleared
            </span>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <header className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Mission Footprint</span>
            <span>India Grid</span>
          </header>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                Dispatches
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">128</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                Avg ETA
              </p>
              <p className="mt-2 text-2xl font-semibold text-emerald-300">08:14</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                Emergency
              </p>
              <p className="mt-2 text-2xl font-semibold text-rose-300">42</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/50">
            <span>Drone Suites</span>
            <span>Certified</span>
          </div>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            {[
              {
                name: "Falcon-X • High Wind",
                status: "Active",
                accent: "text-emerald-300",
                progress: "w-4/5",
              },
              {
                name: "BrahMos-Lite • Hyper Express",
                status: "Active",
                accent: "text-emerald-300",
                progress: "w-3/4",
              },
              {
                name: "Astra-Rescue • Medical",
                status: "Cooldown",
                accent: "text-amber-300",
                progress: "w-2/3",
              },
            ].map((suite) => (
              <div
                key={suite.name}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-white">{suite.name}</p>
                  <span className={`text-xs uppercase tracking-[0.25em] ${suite.accent}`}>
                    {suite.status}
                  </span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-emerald-400 via-[#ff9933] to-orange-400 ${suite.progress}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <header className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/50">
            <span>Support Tier</span>
            <span>24/7</span>
          </header>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-white">Fleet Concierge</p>
              <p className="text-xs text-white/60">
                Direct line to HAL Air Control & DGCA advisors.
              </p>
            </div>
            <button className="rounded-full border border-emerald-300/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100">
              Ping
            </button>
          </div>
        </section>
      </div>
    </MobileShell>
  );
}
