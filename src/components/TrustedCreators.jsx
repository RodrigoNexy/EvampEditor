const CREATORS = [
  {
    name: "NovaStrike",
    subs: "1.2M subs",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=NovaStrike&backgroundColor=1f2937",
    youtubeUrl: "https://youtube.com/@novastrike"
  },
  {
    name: "PixelRaid",
    subs: "870K subs",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=PixelRaid&backgroundColor=1f2937",
    youtubeUrl: "https://youtube.com/@pixelraid"
  },
  {
    name: "GlitchKnight",
    subs: "610K subs",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=GlitchKnight&backgroundColor=1f2937",
    youtubeUrl: "https://youtube.com/@glitchknight"
  },
  {
    name: "ByteFalcon",
    subs: "430K subs",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=ByteFalcon&backgroundColor=1f2937",
    youtubeUrl: "https://youtube.com/@bytefalcon"
  },
  {
    name: "ShadowMeta",
    subs: "395K subs",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=ShadowMeta&backgroundColor=1f2937",
    youtubeUrl: "https://youtube.com/@shadowmeta"
  },
  {
    name: "ClutchWave",
    subs: "212K subs",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=ClutchWave&backgroundColor=1f2937",
    youtubeUrl: "https://youtube.com/@clutchwave"
  },
  {
    name: "RogueForge",
    subs: "184K subs",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=RogueForge&backgroundColor=1f2937",
    youtubeUrl: "https://youtube.com/@rogueforge"
  },
  {
    name: "EchoSprint",
    subs: "156K subs",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=EchoSprint&backgroundColor=1f2937",
    youtubeUrl: "https://youtube.com/@echosprint"
  }
];

function CreatorCard({ creator }) {
  return (
    <a
      href={creator.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-40 shrink-0 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/60 px-5 py-6 transition-colors hover:border-brand/50 hover:bg-neutral-900"
    >
      <img
        src={creator.avatar}
        alt={creator.name}
        className="h-16 w-16 rounded-xl border border-white/10 object-cover transition-transform group-hover:scale-105"
      />
      <div className="text-center">
        <p className="text-sm font-bold text-white">{creator.name}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand">{creator.subs}</p>
      </div>
    </a>
  );
}

// However many creators are configured above, repeat them enough times that a
// single lap is comfortably wider than any viewport — otherwise the loop (which
// is always mathematically seamless) reads as "restarting" because so little
// content scrolls past before it repeats.
const MIN_SET_SIZE = 10;
const SECONDS_PER_CARD = 2.6;

export default function TrustedCreators() {
  const repeatCount = Math.max(1, Math.ceil(MIN_SET_SIZE / CREATORS.length));
  const baseSet = Array.from({ length: repeatCount }, () => CREATORS).flat();
  const track = [...baseSet, ...baseSet];
  const duration = baseSet.length * SECONDS_PER_CARD;

  return (
    <section id="clients" className="scroll-mt-28 overflow-hidden py-16">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-neutral-500">
        Trusted by <span className="text-brand">creators worldwide</span> — real channels, real work
      </p>

      <div
        className="pointer-events-none relative mt-8"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <div
          className="animate-marquee pointer-events-auto flex w-max gap-5"
          style={{ animationDuration: `${duration}s` }}
        >
          {track.map((creator, i) => (
            <CreatorCard key={`${creator.name}-${i}`} creator={creator} />
          ))}
        </div>
      </div>
    </section>
  );
}
