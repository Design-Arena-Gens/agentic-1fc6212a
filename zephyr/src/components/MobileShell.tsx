import { ReactNode } from "react";

interface MobileShellProps {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

export function MobileShell({ header, footer, children }: MobileShellProps) {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-[2.5rem] border border-white/30 bg-slate-950/80 shadow-[0_25px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur">
      <div className="flex h-10 items-center justify-center bg-white/5">
        <div className="h-1.5 w-28 rounded-full bg-white/30" />
      </div>
      {header ? (
        <div className="border-y border-white/10 bg-white/5 px-6 py-4 text-xs uppercase tracking-[0.25em] text-white/70">
          {header}
        </div>
      ) : null}
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-900 via-slate-950 to-black px-6 py-6">
        {children}
      </div>
      {footer ? (
        <div className="border-t border-white/10 bg-white/5 px-6 py-3 text-xs text-white/50">
          {footer}
        </div>
      ) : (
        <div className="flex h-12 items-center justify-center bg-slate-900/60">
          <div className="h-1.5 w-20 rounded-full bg-white/25" />
        </div>
      )}
    </div>
  );
}
