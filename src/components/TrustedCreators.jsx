import { BadgeCheck } from "lucide-react";
import alexEubankAvatar from "../assets/creator-alex-eubank.jpg";
import chizmoAvatar from "../assets/creator-chizmo.jpg";
import jakeywakeyAvatar from "../assets/creator-jakeywakey.jpg";
import jakeywakey2Avatar from "../assets/creator-jakeywakey2.jpg";
import slaterSpinsAvatar from "../assets/creator-slaterspins.jpg";
import zanderAvatar from "../assets/zander.jpg";

export const CREATORS = [
  {
    name: "Alex Eubank",
    subs: "1.34M subs",
    avatar: alexEubankAvatar,
    youtubeUrl: "https://www.youtube.com/@officialalexeubank",
    verified: true
  },
  {
    name: "Zander Small",
    subs: "99.7K subs",
    avatar: zanderAvatar,
    youtubeUrl: "https://www.youtube.com/channel/UCjRnPXmt8RZQcmaaAhpCrEA"
  },
  {
    name: "jakeywakey",
    subs: "3.32K subs",
    avatar: jakeywakeyAvatar,
    youtubeUrl: "https://www.youtube.com/@itsjakex"
  },
  {
    name: "Jakeywakey 2",
    subs: "4.33K subs",
    avatar: jakeywakey2Avatar,
    youtubeUrl: "https://www.youtube.com/@jakeplaysbj"
  },
  {
    name: "SlaterSpins",
    subs: "993 subs",
    avatar: slaterSpinsAvatar,
    youtubeUrl: "https://www.youtube.com/@SlaterSpins"
  },
  {
    name: "chizmo",
    subs: "128 subs",
    avatar: chizmoAvatar,
    youtubeUrl: "https://www.youtube.com/@chizmogizmo"
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
        <p className="flex items-center justify-center gap-1 text-sm font-bold text-white">
          {creator.name}
          {creator.verified && <BadgeCheck className="h-4 w-4 shrink-0 text-brand" />}
        </p>
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
