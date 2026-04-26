import type { Mission } from "@/data/missions";
import { StatusBadge } from "./StatusBadge";
import { ClassificationStamp } from "./ClassificationStamp";
import { cn } from "@/lib/utils";

const renderRedacted = (text: string) =>
  text.split(/(\[REDACTED\])/g).map((part, i) =>
    part === "[REDACTED]" ? (
      <span key={i} className="redact">
        ████████████
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );

export const MissionEntry = ({ mission }: { mission: Mission }) => {
  const isCompromised = mission.status === "COMPROMISED";

  return (
    <article
      className={cn(
        "relative border-l-4 pl-6 py-3 transition-colors",
        isCompromised
          ? "border-stamp bg-stamp/5 -ml-4 pl-10"
          : "border-ink hover:bg-manila-dark/30",
      )}
    >
      {isCompromised && (
        <div className="absolute -right-2 -top-6 rotate-[12deg] z-10">
          <ClassificationStamp size="md" className="opacity-80">
            Compromised
          </ClassificationStamp>
        </div>
      )}

      <div className="flex flex-wrap justify-between items-baseline mb-3 gap-3 relative z-10">
        <div className="flex items-baseline gap-3 flex-wrap">
          {mission.episode && (
            <span className="text-xs text-ink-faded uppercase tracking-widest">
              {mission.episode}
            </span>
          )}
          <h3 className="font-stamp text-xl font-bold uppercase tracking-tight text-ink">
            {mission.codename}
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-ink-faded">{mission.date}</span>
          {!isCompromised && <StatusBadge status={mission.status} />}
        </div>
      </div>

      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 mb-3 text-sm">
        <div className="flex gap-2">
          <dt className="text-ink-faded uppercase text-xs tracking-widest pt-0.5">
            Loc
          </dt>
          <dd className="text-ink">{renderRedacted(mission.location)}</dd>
        </div>
        {mission.agents && (
          <div className="flex gap-2">
            <dt className="text-ink-faded uppercase text-xs tracking-widest pt-0.5">
              Agents
            </dt>
            <dd className="text-ink font-bold">{mission.agents}</dd>
          </div>
        )}
      </dl>

      <p
        className={cn(
          "max-w-[68ch] leading-relaxed",
          isCompromised ? "text-ink" : "text-ink-faded",
        )}
      >
        {renderRedacted(mission.summary)}
      </p>
    </article>
  );
};
