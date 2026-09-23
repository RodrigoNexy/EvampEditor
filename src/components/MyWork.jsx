import { useState } from "react";
import { Play, ChevronRight, Star } from "lucide-react";
import RubberSegment from "./RubberSegment";
import WarpText from "./text-animations/WarpText";

const FILTERS = ["All", "Motion Graphics", "Short Form", "Long Form"];

const CATEGORY_DOT = {
  "Long Form": "bg-blue-400",
  "Motion Graphics": "bg-red-400",
  "Short Form": "bg-fuchsia-400"
};

const PROJECTS = [
  {
    id: "go-8lf_GbMs",
    title: "I Risked $25,000 Playing Online Blackjack… For This?!",
    channel: "Jakeywakey 2",
    category: "Long Form"
  },
  {
    id: "-ILNn89JGxQ",
    title: "SlaterSpins — Gambling Vlog",
    channel: "SlaterSpins",
    category: "Long Form"
  },
  {
    id: "-Sfxc-AzT1U",
    title: "Whatever I Win Gambling I Spend At Dinner",
    channel: "SlaterSpins",
    category: "Long Form"
  },
  {
    id: "UeDTWSGyIZk",
    title: "All-Star Vlog",
    channel: "RWZ PLAYER",
    category: "Long Form"
  },
  {
    id: "IjO4vIjEwbE",
    title: "Scoring as Cristiano Ronaldo in EVERY Roblox Soccer Game",
    channel: "chizmo",
    category: "Long Form"
  },
  {
    id: "gT3Pi2Hk5qo",
    title: "Ganley Documentary",
    channel: "RWZ PLAYER",
    category: "Motion Graphics"
  },
  {
    id: "3j4uKFOkuD4",
    title: "Short-Form Edit #1",
    channel: "RWZ PLAYER",
    category: "Short Form"
  },
  {
    id: "uzB6o93GKQI",
    title: "Short-Form Edit #2",
    channel: "RWZ PLAYER",
    category: "Short Form"
  },
  {
    id: "jOoo_D-jLhE",
    title: "Podcast Clip",
    channel: "RWZ PLAYER",
    category: "Short Form"
  },
  {
    id: "0__jGsiR3Ys",
    title: "Alex Eubank — Fitness Short #1",
    channel: "Alex Eubank",
    category: "Short Form",
    featured: true,
    featuredNote: "Edited for Alex Eubank — 2.6M followers on Instagram"
  },
  {
    id: "GBCtoUEdH0Q",
    title: "Alex Eubank — Fitness Short #2",
    channel: "Alex Eubank",
    category: "Short Form",
    featured: true,
    featuredNote: "Edited for Alex Eubank — 2.6M followers on Instagram"
  }
].map((project) => ({
  ...project,
  url: `https://www.youtube.com/watch?v=${project.id}`,
  thumbnail: `https://i.ytimg.com/vi/${project.id}/hqdefault.jpg`
}));

export default function MyWork() {
  const [filter, setFilter] = useState("All");
  const projects = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="my-work" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-300">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          My Work
        </span>
        <WarpText
          text="A showcase of viral-ready edits"
          color="#f8f5ff"
          warpStrength={0.18}
          warpScale={1.7}
          speed={1.5}
          pointerInfluence={0.42}
          pointerStrength={0.45}
          refraction={0.018}
          ripple
          fontSize="clamp(2.25rem, 6vw, 4rem)"
          fontWeight={800}
          fontFamily="inherit"
          letterSpacing="-0.02em"
          lineHeight={1.1}
          style={{ height: "110px" }}
          className="mt-4"
        />
        <p className="mt-4 text-neutral-400">
          Long-form and short-form edits — click any card to watch it on YouTube.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <RubberSegment
          items={FILTERS}
          value={filter}
          onChange={(next) => setFilter(next)}
          trackColor="#18181b"
          thumbColor="#5227FF"
          textColor="#a3a3a3"
          activeTextColor="#ffffff"
          size="md"
          radius={12}
          inset={3}
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 transition-colors hover:border-white/20"
          >
            <div className="relative aspect-video overflow-hidden bg-neutral-950">
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent" />

              <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
                <span className={`h-1.5 w-1.5 rounded-full ${CATEGORY_DOT[project.category]}`} />
                {project.category}
              </div>

              {project.featured && (
                <div className="group/star absolute right-3 top-3 z-10">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-brand backdrop-blur">
                    <Star className="h-4 w-4 fill-current" strokeWidth={0} />
                  </span>
                  <div className="pointer-events-none absolute right-0 top-full z-20 mt-2 w-56 rounded-lg border border-white/10 bg-neutral-900 p-3 text-xs leading-relaxed text-neutral-300 opacity-0 shadow-xl transition-opacity duration-150 group-hover/star:opacity-100">
                    {project.featuredNote}
                  </div>
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/30 group-hover:opacity-100">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-xl transition-transform group-hover:scale-105">
                  <Play className="h-5 w-5 translate-x-0.5 fill-current" strokeWidth={0} />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 p-3.5">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{project.title}</p>
                <p className="mt-0.5 text-xs text-neutral-500">{project.channel}</p>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 text-neutral-600 transition-transform group-hover:translate-x-0.5 group-hover:text-neutral-400" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
