export type MissionStatus = "CLOSED" | "ACTIVE" | "COMPROMISED";

export interface Mission {
  slug: string;
  episode: string;
  codename: string;
  date: string;
  status: MissionStatus;
  location: string;
  agents: string;
  summary: string;
}

export const getMission = (slug: string) =>
  missions.find((m) => m.slug === slug);


export const campaign = {
  title: "Operation: Fallen Archon",
  subtitle: "After-Action Compilation — Cell A",
  fileRef: "MJ-884/OP-FA",
  formRef: "FORM 104-A (REV 1993)",
  dateExtracted: "1998-10-14",
  leadAgent: "Alphonse",
  area: "Pacific Northwest",
  casualtyRate: "66.6%",
  threat: "Extranormal-Biological",
  intro: [
    "This document serves as the final operational log for Cell A during the period spanning Q4 1997 through Q2 1998. The primary directive involved tracking the distribution of anomalous biological contaminants originating from the [REDACTED] facility in [REDACTED], CA.",
    "Due to the catastrophic events logged during OP: SILENT WHISPER, traditional oversight was suspended. The following chronologies have been reconstructed from physical evidence, intercepted civilian police reports, and the partial audio recordings recovered from Agent [REDACTED] personal effects.",
  ],
};

export const missions: Mission[] = [
  {
    codename: "OP: Dusty Chorus",
    date: "1997-11-04",
    status: "CLOSED",
    location: "Nye County, Nevada",
    agents: "ALPHONSE, ARTHUR, BENNETT, CALLOWAY",
    episode: "Session 01",
    summary:
      "Agents investigated anomalous seismic activity and reports of 'singing rocks' in [REDACTED], Nevada. Reconnaissance revealed a subterranean acoustic resonance chamber. Recovered 4 artifacts of non-terrestrial origin. Local law enforcement memory suppressed via standard aerosol deployment. Agent ARTHUR MIA, presumed dead following structural collapse. No bodies recovered.",
  },
  {
    codename: "OP: Hollow Verdict",
    date: "1997-12-19",
    status: "CLOSED",
    location: "Cook County, Illinois",
    agents: "ALPHONSE, BENNETT, CALLOWAY",
    episode: "Session 02",
    summary:
      "Cell A intercepted a federal courier transporting evidence from a closed homicide investigation. Evidence included photographic plates depicting [REDACTED]. Three civilian witnesses sanitized. Bennett SAN-loss critical; placed on mandatory psych evaluation.",
  },
  {
    codename: "OP: Tungsten Rain",
    date: "1998-01-22",
    status: "CLOSED",
    location: "Allegheny Reservoir, PA",
    agents: "ALPHONSE, CALLOWAY, DUNCAN",
    episode: "Session 03",
    summary:
      "Investigated anomalous wildlife deaths surrounding rural reservoir. Source of contamination identified as a [REDACTED] dumped from a passing rail line. Class A amnestics deployed to local population. Zero agent casualties. New asset DUNCAN integrated successfully.",
  },
  {
    codename: "OP: Silent Whisper",
    date: "1998-02-18",
    status: "COMPROMISED",
    location: "Ezekiel Compound, Montana",
    agents: "ALPHONSE, CALLOWAY, DUNCAN, EVERETT",
    episode: "Session 04",
    summary:
      "Surveillance initiated on the EZEKIEL compound in rural Montana. Target POI-88 exhibited severe bioluminescence and spontaneous morphological shifting before self-immolating in the primary dining hall. Containment protocols failed immediately. Vector remains ACTIVE in the civilian population. Cell A requested emergency extraction; request denied pending asset retrieval.",
  },
  {
    codename: "OP: Glass Cathedral",
    date: "1998-04-01",
    status: "ACTIVE",
    location: "Seattle, WA",
    agents: "ALPHONSE, DUNCAN, EVERETT",
    episode: "Session 05",
    summary:
      "Tracing financial irregularities from the Montana incident to a shell corporation operating in Seattle. Cult activity suspected. Subject JACOBSEN observed purchasing bulk quantities of industrial lye and [REDACTED]. Cell A currently observing from safehouse. Awaiting clearance for lethal intervention. Morale is critical.",
  },
  {
    codename: "OP: Pale Horse",
    date: "1998-06-01",
    status: "ACTIVE",
    location: "[COORDINATES REDACTED]",
    agents: "ALPHONSE, EVERETT",
    episode: "Session 06",
    summary:
      "Final transmission from Cell A indicated visual confirmation of NON-EUCLIDEAN geometry beneath the JACOBSEN warehouse. Calloway non-responsive. Sanitize team ON STANDBY pending Majestic authorization. Recommendation pending.",
  },
];
