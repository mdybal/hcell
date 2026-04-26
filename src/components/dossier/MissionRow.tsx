import { Link } from "react-router-dom";
import type { Mission } from "@/data/missions";
import { StatusBadge } from "./StatusBadge";

const renderRedacted = (text: string) =>
  text.split(/(\[REDACTED\]|\[COORDINATES REDACTED\])/g).map((part, i) =>
    part.startsWith("[") ? (
      <span key={i} className="redact">
        ████████
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  );

export const MissionRow = ({ mission }: { mission: Mission }) => {
  return (
    <Link
      to={`/missions/${mission.slug}`}
      className="group grid grid-cols-12 gap-3 items-baseline border-b border-ink/30 py-3 px-2 -mx-2 hover:bg-ink hover:text-manila transition-colors"
      aria-label={`${mission.episode}: ${mission.codename}`}
    >
      <span className="col-span-12 sm:col-span-2 text-xs text-ink-faded group-hover:text-manila/70 uppercase tracking-widest">
        {mission.episode}
      </span>
      <span className="col-span-8 sm:col-span-4 font-stamp font-bold uppercase tracking-tight">
        {mission.codename}
      </span>
      <span className="col-span-4 sm:col-span-2 text-sm text-ink-faded group-hover:text-manila/70 sm:text-left text-right">
        {mission.date}
      </span>
      <span className="col-span-12 sm:col-span-2 text-sm">
        {renderRedacted(mission.location)}
      </span>
      <span className="col-span-12 sm:col-span-2 sm:text-right">
        <StatusBadge status={mission.status} />
      </span>
      <span className="col-span-12 text-xs text-ink-faded group-hover:text-manila/70 uppercase tracking-widest">
        Agents: <span className="font-bold">{mission.agents}</span>
        <span className="float-right opacity-0 group-hover:opacity-100">▶ OPEN FILE</span>
      </span>
    </Link>
  );
};
