import { Calendar, Zap } from "lucide-react";

const CLIPS = [
  { name: "hook_v3...", color: "bg-indigo-400" },
  { name: "gameplay_...", color: "bg-indigo-400" },
  { name: "facecam...", color: "bg-brand" },
  { name: "music_be...", color: "bg-emerald-400" },
  { name: "sfx_whoo...", color: "bg-emerald-400" },
];

export default function EditorMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Main editor panel */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/90 shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-neutral-900 px-4 py-3">
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

        {/* Timeline */}
        <div className="space-y-1.5 border-t border-white/10 bg-neutral-950/40 px-4 py-3">
          <div className="relative h-2 rounded-full bg-neutral-800">
            <div className="absolute left-[8%] h-full w-[28%] rounded-full bg-indigo-400/80" />
            <div className="absolute left-[42%] h-full w-[35%] rounded-full bg-indigo-400/80" />
            <div className="absolute left-[52%] top-1/2 h-4 w-px -translate-y-1/2 bg-brand" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 font-mono text-[9px] text-neutral-600">A1</span>
            <div className="relative h-2 flex-1 rounded-full bg-neutral-800">
              <div className="absolute left-0 h-full w-[55%] rounded-full bg-emerald-500/70" />
              <div className="absolute left-[52%] top-1/2 h-4 w-px -translate-y-1/2 bg-brand" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 font-mono text-[9px] text-neutral-600">A2</span>
            <div className="relative h-2 flex-1 rounded-full bg-neutral-800">
              <div className="absolute left-[10%] h-full w-[85%] rounded-full bg-emerald-500/70" />
              <div className="absolute left-[52%] top-1/2 h-4 w-px -translate-y-1/2 bg-brand" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge: experience */}
      <div className="absolute -top-5 right-2 flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 shadow-xl sm:-right-6">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/40 text-brand">
          <Calendar className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-bold text-white">2+ years</p>
          <p className="text-[10px] text-neutral-500">editing experience</p>
        </div>
      </div>

      {/* Floating badge: turnaround */}
      <div className="absolute -bottom-5 left-2 flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 shadow-xl sm:-left-6">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/40 text-brand">
          <Zap className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-bold text-white">1-3 days</p>
          <p className="text-[10px] text-neutral-500">Fast turnaround</p>
        </div>
      </div>
    </div>
  );
}
