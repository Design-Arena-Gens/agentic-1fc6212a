"use client";

import { useState } from "react";
import { EmergencyModeScreen } from "@/components/EmergencyModeScreen";
import { HomeScreen } from "@/components/HomeScreen";
import { OnboardingScreen } from "@/components/OnboardingScreen";
import { OrderFlowScreen } from "@/components/OrderFlowScreen";
import { ProfileScreen } from "@/components/ProfileScreen";

const screens = [
  { id: "onboarding", label: "Onboarding Flow", component: <OnboardingScreen /> },
  { id: "home", label: "Home Screen", component: <HomeScreen /> },
  { id: "order", label: "Order Flow", component: <OrderFlowScreen /> },
  { id: "emergency", label: "Emergency Mode", component: <EmergencyModeScreen /> },
  { id: "profile", label: "Profile Screen", component: <ProfileScreen /> },
];

export default function Home() {
  const [activeScreen, setActiveScreen] = useState(screens[0].id);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#05070e] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,145,0,0.25),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(13,148,136,0.25),_transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-[-5%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-orange-500 to-amber-400 blur-3xl" />
        <div className="absolute right-[-15%] top-[-5%] h-[35rem] w-[35rem] rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 blur-3xl" />
      </div>
      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 pb-16 pt-12 lg:flex-row lg:gap-16 lg:px-12">
        <section className="flex flex-col gap-8 lg:w-[32rem]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/40">
            <span className="rounded-full border border-white/20 px-3 py-1 text-white/60">
              Zephyr
            </span>
            <span>India&apos;s First AI Drone Delivery Grid</span>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Command the fastest air-cargo fleet built for India&apos;s emergencies.
            </h1>
            <p className="text-sm leading-6 text-white/70">
              Zephyr orchestrates autonomous drones that pierce through traffic, deliver
              medicine at dawn, and keep the nation&apos;s urgent logistics on standby.
              Prototype screens showcase the velocity-first experience crafted for
              real-world crisis operations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => setActiveScreen(screen.id)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
                  activeScreen === screen.id
                    ? "border-white bg-white text-slate-950"
                    : "border-white/20 bg-white/5 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {screen.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs text-white/60">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="uppercase tracking-[0.3em] text-white/40">Flight Corridor</p>
              <p className="mt-2 text-lg font-semibold text-white">DGCA-19 South</p>
              <p className="text-white/60">Bengaluru · Chennai · Hyderabad</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="uppercase tracking-[0.3em] text-white/40">Dispatch Speed</p>
              <p className="mt-2 text-lg font-semibold text-emerald-300">8 mins avg</p>
              <p className="text-white/60">Ground baseline: 45 mins</p>
            </div>
          </div>
        </section>

        <section className="flex flex-1 items-start justify-center pb-10">
          {screens.find((screen) => screen.id === activeScreen)?.component}
        </section>
      </main>
    </div>
  );
}
