import { Link, useParams } from "react-router-dom";
import { getMission, missions } from "@/data/missions";
import { DossierFrame } from "@/components/dossier/DossierFrame";
import { ClassificationStamp } from "@/components/dossier/ClassificationStamp";
import { StatusBadge } from "@/components/dossier/StatusBadge";
import { useEffect } from "react";

const renderRedacted = (text: string) =>
  text.split(/(\[REDACTED\]|\[COORDINATES REDACTED\])/g).map((part, i) =>
    part.startsWith("[") ? (
      <span key={i} className="redact">
        ████████████
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );

const renderHtmlWithRedactions = (text: string) =>
  text.split(/(\[REDACTED\]|\[COORDINATES REDACTED\])/g).map((part, i) =>
    part.startsWith("[") ? (
      <span key={i} className="redact">
        ████████████
      </span>
    ) : (
      <span key={i} dangerouslySetInnerHTML={{ __html: part }} />
    ),
  );

const MissionDetail = () => {
  const { slug } = useParams();
  const mission = slug ? getMission(slug) : undefined;

  useEffect(() => {
    if (mission) {
      document.title = `${mission.episode} — ${mission.codename} // DELTA GREEN`;
    }
  }, [mission]);

  if (!mission) {
    return (
      <DossierFrame>
        <div className="py-20 text-center">
          <ClassificationStamp size="lg" variant="stamp">
            File Not Found
          </ClassificationStamp>
          <p className="mt-8 text-ink-faded">
            This operational file has been purged or never existed.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 font-stamp uppercase tracking-widest underline text-ink"
          >
            ◀ Return to Dossier Index
          </Link>
        </div>
      </DossierFrame>
    );
  }

  const idx = missions.findIndex((m) => m.slug === mission.slug);
  const prev = missions[idx - 1];
  const next = missions[idx + 1];
  const isCompromised = mission.status === "COMPROMISED";

  return (
    <DossierFrame>
      <nav className="mb-6 flex justify-between text-xs uppercase tracking-widest text-ink-faded">
        <Link to="/" className="hover:text-ink underline">
          ◀ Index
        </Link>
        <span>FILE: MJ-884/{mission.slug.toUpperCase()}</span>
      </nav>

      <header className="border-y-4 border-ink py-8 mb-10 relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 rotate-[3deg] z-10">
          <ClassificationStamp size="md">
            After-Action Report
          </ClassificationStamp>
        </div>
        {isCompromised && (
          <div className="absolute -right-2 top-2 rotate-[14deg] z-10">
            <ClassificationStamp size="md" className="opacity-90">
              Compromised
            </ClassificationStamp>
          </div>
        )}
        <p className="text-center text-xs text-ink-faded uppercase tracking-widest mb-2 mt-4">
          {mission.episode}
        </p>
        <h1 className="font-stamp text-3xl sm:text-5xl font-bold text-center uppercase tracking-tight text-ink">
          {mission.codename}
        </h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-2 border-ink mb-10 bg-manila-dark/20">
        {(
          [
            ["Date", mission.date],
            ["Location", mission.location],
            ["Status", mission.status],
            ["Agents", mission.agents],
          ] as const
        ).map(([label, value], i, arr) => (
          <div
            key={label}
            className={`p-3 ${i < arr.length - 1 ? "border-b sm:border-b-0 sm:border-r border-ink last:border-r-0" : ""}`}
          >
            <span className="block text-[10px] sm:text-xs text-ink-faded mb-1 uppercase tracking-widest">
              {label}
            </span>
            {label === "Status" ? (
              <StatusBadge status={mission.status} />
            ) : (
              <span className="font-bold uppercase text-sm">
                {renderRedacted(value)}
              </span>
            )}
          </div>
        ))}
      </section>

      <section className="mb-12 max-w-[68ch]">
        <h2 className="font-stamp text-xs uppercase tracking-widest text-ink-faded mb-3">
          [I] After-Action Summary
        </h2>
        <div className="leading-relaxed [&_p]:indent-8 [&_h1]:font-stamp [&_h1]:text-2xl [&_h1]:mb-4 [&_h2]:font-stamp [&_h2]:text-xl [&_h2]:mt-6 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1">
          {renderHtmlWithRedactions(mission.summary)}
        </div>
      </section>

      <section className="mb-12 max-w-[68ch]">
        <h2 className="font-stamp text-xs uppercase tracking-widest text-ink-faded mb-3">
          [II] Session Recording
        </h2>
        <div className="border-2 border-dashed border-ink-faded/60 p-6 text-center text-ink-faded">
          <p className="text-xs uppercase tracking-widest mb-2">
            Audio Transcript
          </p>
          <p className="text-sm">
            <span className="redact">████████████████</span> — pending review by
            handler
          </p>
        </div>
      </section>

      <nav className="mt-16 pt-6 border-t border-ink-faded/30 flex justify-between text-xs uppercase tracking-widest">
        {prev ? (
          <Link
            to={`/missions/${prev.slug}`}
            className="text-ink-faded hover:text-ink"
          >
            ◀ {prev.episode}: {prev.codename}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/missions/${next.slug}`}
            className="text-ink-faded hover:text-ink text-right"
          >
            {next.episode}: {next.codename} ▶
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </DossierFrame>
  );
};

export default MissionDetail;
