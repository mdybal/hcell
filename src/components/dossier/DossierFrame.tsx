import { ReactNode } from "react";

export const DossierFrame = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-dvh bg-desk p-4 sm:p-12 md:p-20 flex justify-center selection:bg-ink selection:text-manila">
      <article className="w-full max-w-4xl bg-manila relative paper-shadow flex flex-col md:flex-row">
        <aside
          aria-hidden="true"
          className="hidden md:flex w-16 border-r-2 border-manila-dark/60 flex-col items-center justify-around py-32 shrink-0"
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className="size-4 rounded-full bg-desk punch-hole" />
          ))}
        </aside>
        <div className="flex-1 p-8 sm:p-12 text-ink text-sm sm:text-base leading-relaxed relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]"
          >
            <span className="font-stamp text-[10rem] font-bold tracking-tighter -rotate-45 uppercase whitespace-nowrap">
              Majestic
            </span>
          </div>
          <div className="relative">{children}</div>
        </div>
      </article>
    </main>
  );
};
