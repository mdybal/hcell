import { campaign, missions } from "@/data/missions";
import { ClassificationStamp } from "@/components/dossier/ClassificationStamp";
import { MissionRow } from "@/components/dossier/MissionRow";
import { DossierFrame } from "@/components/dossier/DossierFrame";

const Index = () => {
  return (
    <DossierFrame>
      {/* Header meta */}
      <header className="flex justify-between items-start mb-8 text-ink-faded text-xs sm:text-sm tracking-tight">
        <div>
          <p>DEPT. OF DEFENSE // SPECIAL PROJECTS</p>
          <p>{campaign.formRef}</p>
        </div>
        <div className="text-right">
          <p>
            FILE REF:{" "}
            <span className="text-ink font-bold">{campaign.fileRef}</span>
          </p>
          <p>DATE EXTRACTED: {campaign.dateExtracted}</p>
        </div>
      </header>

      {/* Title */}
      <section className="border-y-4 border-ink py-10 mb-12 relative">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 rotate-[3deg] z-10">
          <ClassificationStamp size="lg">
            Top Secret // Eyes Only
          </ClassificationStamp>
        </div>
        <h1 className="font-stamp text-3xl sm:text-5xl font-bold text-center tracking-tight uppercase mb-3 mt-6 text-ink">
          {campaign.title}
        </h1>
        <p className="text-center font-bold tracking-widest text-ink-faded uppercase text-xs sm:text-sm">
          {campaign.subtitle}
        </p>
      </section>

      {/* Intake form */}
      <section
        aria-label="Operation parameters"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-2 border-ink mb-12 bg-manila-dark/20"
      >
        {(
          [
            ["Lead Agent", campaign.leadAgent, false],
            ["Area of Operation", campaign.area, true],
            ["Casualty Rate", campaign.casualtyRate, false],
            ["Threat Designation", campaign.threat, false],
          ] as const
        ).map(([label, value, redacted], i, arr) => (
          <div
            key={label}
            className={`p-3 ${i < arr.length - 1 ? "border-b sm:border-b-0 sm:border-r border-ink last:border-r-0" : ""}`}
          >
            <span className="block text-[10px] sm:text-xs text-ink-faded mb-1 uppercase tracking-widest">
              {label}
            </span>
            {redacted ? (
              <span className="redact font-bold">{value}</span>
            ) : (
              <span className="font-bold uppercase">{value}</span>
            )}
          </div>
        ))}
      </section>

      {/* Executive summary */}
      <section className="mb-12 max-w-[68ch]">
        <h2 className="font-stamp text-xs uppercase tracking-widest text-ink-faded mb-3">
          [I] Executive Summary
        </h2>
        {campaign.intro.map((p, i) => (
          <p key={i} className="mb-3 indent-8">
            {p.split(/(\[REDACTED\])/g).map((part, j) =>
              part === "[REDACTED]" ? (
                <span key={j} className="redact">
                  ████████
                </span>
              ) : (
                <span key={j}>{part}</span>
              ),
            )}
          </p>
        ))}
      </section>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-0.5 w-full bg-ink" />
        <h2 className="font-stamp whitespace-nowrap font-bold tracking-widest text-base sm:text-lg text-ink">
          [II] Mission Logs
        </h2>
        <div className="h-0.5 w-full bg-ink" />
      </div>
      <p className="text-xs text-ink-faded uppercase tracking-widest mb-4">
        Select an operation to access full after-action report.
      </p>

      {/* Mission list */}
      <section
        aria-label="Mission logs"
        className="border-t-2 border-ink mb-12"
      >
        {missions.map((m) => (
          <MissionRow key={m.slug} mission={m} />
        ))}
      </section>

      <footer className="mt-16 pt-6 border-t border-ink-faded/30 flex justify-between text-xs text-ink-faded">
        <span>DOCUMENT REF: 489-B</span>
        <span>END OF EXTRACT // CONTINUED IN VOL. II</span>
      </footer>
    </DossierFrame>
  );
};

export default Index;
