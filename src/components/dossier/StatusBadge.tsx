import { cn } from "@/lib/utils";
import type { MissionStatus } from "@/data/missions";

export const StatusBadge = ({ status }: { status: MissionStatus }) => {
  const styles: Record<MissionStatus, string> = {
    CLOSED: "border-ink text-ink bg-transparent",
    ACTIVE: "border-ink bg-ink text-manila",
    COMPROMISED: "border-stamp text-stamp",
  };
  return (
    <span
      className={cn(
        "font-stamp border-2 px-2 py-0.5 text-xs font-bold tracking-widest uppercase whitespace-nowrap",
        styles[status],
      )}
    >
      {status}
    </span>
  );
};
