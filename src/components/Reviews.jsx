import { BadgeCheck, Star } from "lucide-react";
import WarpText from "./text-animations/WarpText";
import alexEubankAvatar from "../assets/creator-alex-eubank.jpg";
import chizmoAvatar from "../assets/creator-chizmo.jpg";
import jakeywakeyAvatar from "../assets/creator-jakeywakey.jpg";
import jakeywakey2Avatar from "../assets/creator-jakeywakey2.jpg";
import slaterSpinsAvatar from "../assets/creator-slaterspins.jpg";

const REVIEWS = [
  {
    name: "Alex Eubank",
    role: "1.34M subs",
    avatar: alexEubankAvatar,
    verified: true,
    quote:
      "Turnaround is insanely fast and the pacing on every hook keeps my retention way higher than my old editor."
  },
  {
    name: "jakeywakey",
    role: "3.32K subs",
    avatar: jakeywakeyAvatar,
    quote:
      "i rly appreciate the extra hands — having someone ready to help out whenever I need it is nice."
  },
  {
    name: "Jakeywakey 2",
    role: "4.33K subs",
    avatar: jakeywakey2Avatar,
    quote:
      "Communication is clear from brief to delivery. No back-and-forth headaches, just clean edits on time."
  },
  {
    name: "SlaterSpins",
    role: "993 subs",
    avatar: slaterSpinsAvatar,
    quote:
      "Every upload comes back tighter and more consistent than the last — exactly what a growing channel needs."
  },
  {
    name: "chizmo",
    role: "128 subs",
    avatar: chizmoAvatar,
    quote:
      "Every edit comes back polished and on-brand — makes the whole process so much easier."
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-300">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Reviews
        </span>
        <WarpText
          text="Loved by the creators I edit for"
          color="#f8f5ff"
          warpStrength={0.18}
          warpScale={1.7}
          speed={1.5}
          pointerInfluence={0.42}
          pointerStrength={0.45}
          refraction={0.018}
          ripple
          fontSize="clamp(2rem, 5.5vw, 3.5rem)"
          fontWeight={800}
          fontFamily="inherit"
          letterSpacing="-0.02em"
          lineHeight={1.1}
          style={{ height: "150px" }}
          className="mt-4"
        />
        <p className="mt-4 text-neutral-400">
          A few words from creators I've worked with — placeholder quotes until the real ones come in.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {REVIEWS.map((review) => (
          <div
            key={review.name}
            className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 transition-colors hover:border-white/20"
          >
            <div className="flex gap-0.5 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">"{review.quote}"</p>
            <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-10 w-10 rounded-full border border-white/10 object-cover"
              />
              <div>
                <p className="flex items-center gap-1 text-sm font-bold text-white">
                  {review.name}
                  {review.verified && <BadgeCheck className="h-4 w-4 shrink-0 text-brand" />}
                </p>
                <p className="text-xs text-neutral-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
