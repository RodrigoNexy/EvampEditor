import { Star } from "lucide-react";
import WarpText from "./text-animations/WarpText";

const REVIEWS = [
  {
    name: "NovaStrike",
    role: "1.2M subs — Gaming",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=NovaStrike&backgroundColor=1f2937",
    quote:
      "Turnaround is insanely fast and the pacing on every hook keeps my retention way higher than my old editor."
  },
  {
    name: "ShadowMeta",
    role: "395K subs — Gaming",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=ShadowMeta&backgroundColor=1f2937",
    quote:
      "i rly appreciate the extra hands — having someone ready to help out whenever I need it is nice."
  },
  {
    name: "ClutchWave",
    role: "212K subs — Gaming",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=ClutchWave&backgroundColor=1f2937",
    quote:
      "Communication is clear from brief to delivery. No back-and-forth headaches, just clean edits on time."
  },
  {
    name: "ByteFalcon",
    role: "430K subs — Gaming",
    avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=ByteFalcon&backgroundColor=1f2937",
    quote:
      "The color grading alone made my channel look like it jumped a full production tier overnight."
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
                <p className="text-sm font-bold text-white">{review.name}</p>
                <p className="text-xs text-neutral-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
