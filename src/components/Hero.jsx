import { Calendar, Play } from "lucide-react";
import EditorMockup from "./EditorMockup";
import CRTWarp from "./backgrounds/CRTWarp";

const AVATARS = [13, 33, 47, 65];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <CRTWarp
          color="#5227FF"
          backgroundColor="#05010a"
          speed={0.5}
          curvature={0.7}
          scanlineStrength={0.82}
          scanlineFrequency={200}
          waveAmplitude={0.23}
          waveFrequency={2.5}
          bloom={1.5}
          bloomRadius={1.65}
          noise={0.1}
          vignette={0}
          brightness={0.9}
          pixelation={1}
          rgbShift={0.027}
          mouseReact
          mouseStrength={1.5}
          dpr={0.75}
          fps={24}
          paused={false}
        />
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950/10 via-neutral-950/40 to-neutral-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pb-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-neutral-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Video Editor for Gaming Creators
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            I deliver high-level video editing for gaming creators focused on{" "}
            <span className="text-brand">retention.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-neutral-400">
            Losing viewers in the first 10 seconds? I build{" "}
            <span className="font-semibold text-white">
              hooks and pacing
            </span>{" "}
            that keep them locked in till the end.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#book-a-call"
              className="flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-[1.02]"
            >
              <Calendar className="h-4 w-4" strokeWidth={2.5} />
              Book a Free Call
            </a>
            <a
              href="#my-work"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              <Play className="h-4 w-4 fill-current" strokeWidth={0} />
              See My Work!
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {AVATARS.map((id) => (
                <img
                  key={id}
                  src={`https://i.pravatar.cc/64?img=${id}`}
                  alt=""
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-neutral-950"
                />
              ))}
            </div>
            <p className="text-sm text-neutral-400">
              Trusted by <span className="font-semibold text-white">big creators</span>{" "}
              reaching a{" "}
              <span className="font-semibold text-white">5.5M+</span> combined
              audience.
            </p>
          </div>
        </div>

        {/* Right column */}
        <EditorMockup />
      </div>
      </div>
    </section>
  );
}
