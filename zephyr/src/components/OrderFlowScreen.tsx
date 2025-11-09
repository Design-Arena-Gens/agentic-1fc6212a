import { useState } from "react";
import { MobileShell } from "./MobileShell";

const catalog = [
  {
    title: "Apollo Pharmacy",
    subtitle: "24/7 Critical Care",
    items: ["Insulin pens", "Nebulizer kit", "Child fever pack"],
    accent: "from-emerald-500 to-teal-400",
  },
  {
    title: "Midnight Meals",
    subtitle: "Gourmet Hydration",
    items: ["Electrolyte bowls", "Ayur Boost soup", "Protein wraps"],
    accent: "from-orange-500 to-amber-400",
  },
];

export function OrderFlowScreen() {
  const [selection, setSelection] = useState(0);

  return (
    <MobileShell header="Zephyr Order">
      <div className="flex flex-col gap-6 text-white">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Select Dispatch Partner</h2>
            <span className="rounded-full border border-emerald-300/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200">
              DGCA Cleared
            </span>
          </div>
          <div className="mt-4 grid gap-4">
            {catalog.map((option, index) => (
              <button
                key={option.title}
                onClick={() => setSelection(index)}
                className={`rounded-2xl border p-[1px] transition ${
                  selection === index
                    ? "border-emerald-300/70 shadow-[0_25px_60px_-35px_rgba(16,185,129,0.8)]"
                    : "border-white/10"
                }`}
              >
                <div className="rounded-[calc(1.5rem-1px)] bg-slate-950/90 p-5 text-left">
                  <div
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${option.accent} px-3 py-1 text-xs uppercase tracking-[0.25em] text-emerald-950`}
                  >
                    {index === 0 ? "Medical" : "Hydration"}
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{option.title}</h3>
                  <p className="text-sm text-white/60">{option.subtitle}</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {option.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.25em] text-white/60">
          <div className="flex items-center justify-between rounded-xl bg-emerald-500/10 px-4 py-3 text-[11px] text-emerald-100">
            <span>Drone ETA</span>
            <div className="flex items-center gap-2 text-white">
              <span className="rounded-full bg-emerald-500/80 px-3 py-1 text-[12px] font-semibold text-emerald-950">
                08:32
              </span>
              <span className="font-normal lowercase text-white/60">vs Ground 45:15</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-[10px] leading-4">
              <p className="text-white/50">Drone</p>
              <p className="text-lg font-semibold text-white">VX-22</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-[10px] leading-4">
              <p className="text-white/50">Battery</p>
              <p className="text-lg font-semibold text-emerald-400">87%</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center text-[10px] leading-4">
              <p className="text-white/50">Payload</p>
              <p className="text-lg font-semibold text-white">3.2 kg</p>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[11px] leading-5">
            <p className="text-white/50">Live Route</p>
            <div className="mt-2 flex items-center justify-between text-white">
              <span>Koramangala</span>
              <span className="text-white/50">→</span>
              <span>Whitefield Hub</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-500 via-[#ff9933] to-amber-400" />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white">
          <header className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Dispatch Integrity</span>
            <span>Encrypted</span>
          </header>
          <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
            <div>
              <p className="text-sm font-semibold text-white">Pilot Override</p>
              <p className="text-xs text-white/60">Ground support ready</p>
            </div>
            <div className="flex items-center gap-3 text-right">
              <span className="text-emerald-300">Auto</span>
              <label className="inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <span className="h-5 w-10 rounded-full bg-white/20 after:ml-[2px] after:mt-[2px] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:transition peer-checked:bg-emerald-400 peer-checked:after:translate-x-5 peer-checked:after:bg-emerald-950" />
              </label>
            </div>
          </div>
        </section>
      </div>
    </MobileShell>
  );
}
