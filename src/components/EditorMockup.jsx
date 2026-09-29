import { Calendar, Zap } from "lucide-react";

const TRACKS = [
  {
    label: "V1",
    z: 34,
    clips: [
      { left: "8%", width: "28%", color: "bg-indigo-400/80" },
      { left: "42%", width: "35%", color: "bg-indigo-400/80" }
    ]
  },
  { label: "A1", z: 24, clips: [{ left: "0%", width: "55%", color: "bg-emerald-500/70" }] },
  { label: "A2", z: 14, clips: [{ left: "10%", width: "85%", color: "bg-emerald-500/70" }] }
];

const CLIPS = [
  { name: "hook_v3...", color: "bg-indigo-400" },
  { name: "gameplay_...", color: "bg-indigo-400" },
  { name: "facecam...", color: "bg-brand" },
  { name: "music_be...", color: "bg-emerald-400" },
  { name: "sfx_whoo...", color: "bg-emerald-400" },
];

export default function EditorMockup() {
  return (
    <div className="mockup-scene mx-auto w-full max-w-lg">
    <div className="mockup-3d relative">
      {/* Main editor panel — no overflow-hidden here, it would flatten the 3D children */}
      <div className="preserve-3d rounded-2xl border border-white/10 bg-neutral-900/90 shadow-2xl shadow-brand/20">
        {/* Title bar */}
        <div className="flex items-center gap-2 rounded-t-2xl border-b border-white/10 bg-neutral-900 px-4 py-3">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-violet-600 text-[10px] font-bold text-white">
            Pr
          </span>
          <span className="font-mono text-xs text-neutral-400">
            EvAmP_edit_final.prproj
          </span>
        </div>

        {/* Body */}
        <div className="flex">
          {/* Project panel */}
          <div className="w-28 shrink-0 border-r border-white/10 bg-neutral-950/40 p-3">
            <p className="mb-2 text-[10px] font-semibold tracking-wider text-neutral-500">
              PROJECT
            </p>
            <ul className="space-y-2">
              {CLIPS.map((clip) => (
                <li key={clip.name} className="flex items-center gap-1.5">
                  <span className={`h-2 w-2 shrink-0 rounded-sm ${clip.color}`} />
                  <span className="truncate font-mono text-[10px] text-neutral-400">
                    {clip.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preview */}
          <div className="relative flex flex-1 items-center justify-center bg-black/60 px-4 py-10">
            <span className="absolute right-3 top-3 rounded bg-black/60 px-2 py-0.5 font-mono text-[10px] text-neutral-400">
              00:00:10:18
            </span>
            <p className="text-center text-xl font-extrabold uppercase tracking-tight text-brand">
              Your Next
              <br />
              <span className="underline decoration-2 underline-offset-4">
                Video
              </span>
            </p>
          </div>
        </div>

        {/* Timeline — each track floats at its own depth */}
        <div
          className="preserve-3d relative space-y-1.5 rounded-b-2xl border-t border-white/10 bg-neutral-950/60 px-4 py-3"
          style={{ transform: "translateZ(18px)" }}
        >
          {TRACKS.map((track, i) => (
            <div
              key={track.label}
              className="timeline-track flex items-center gap-2"
              style={{ "--z": `${track.z}px`, animationDelay: `${i * -0.45}s` }}
            >
              <span className="w-5 font-mono text-[9px] text-neutral-600">{track.label}</span>
              <div className="relative h-2 flex-1 rounded-full bg-neutral-800 shadow-lg shadow-black/40">
                {track.clips.map((clip) => (
                  <div
                    key={clip.left}
                    className={`absolute h-full rounded-full ${clip.color}`}
                    style={{ left: clip.left, width: clip.width }}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Playhead spans all tracks (offset past the track labels) */}
          <div
            className="pointer-events-none absolute bottom-2 left-[44px] right-4 top-2"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="timeline-playhead absolute inset-y-0 w-px bg-brand shadow-[0_0_8px_#5227ff]">
              <span className="absolute -left-1 -top-1 h-2 w-2 rotate-45 bg-brand" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge: experience */}
      <div
        className="absolute -top-5 right-2 flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 shadow-xl sm:-right-6"
        style={{ transform: "translateZ(60px)" }}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/40 text-brand">
          <Calendar className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-bold text-white">2+ years</p>
          <p className="text-[10px] text-neutral-500">editing experience</p>
        </div>
      </div>

      {/* Floating badge: turnaround */}
      <div
        className="absolute -bottom-5 left-2 flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 shadow-xl sm:-left-6"
        style={{ transform: "translateZ(70px)" }}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/40 text-brand">
          <Zap className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-bold text-white">1-3 days</p>
          <p className="text-[10px] text-neutral-500">Fast turnaround</p>
        </div>
      </div>
    </div>
    </div>
  );
}
