import { Clapperboard, BookOpen, Sparkles, Palette, Tag, Music } from "lucide-react";
import ReflectiveCard from "./ReflectiveCard";
import WarpText from "./text-animations/WarpText";

const SERVICES = [
  {
    icon: <Clapperboard className="h-7 w-7" />,
    title: "YouTube Editing",
    description: "Engaging edits optimized for retention with perfect pacing.",
    colors: ["#ff5c7a", "#8a5cff", "#00ffd1"]
  },
  {
    icon: <BookOpen className="h-7 w-7" />,
    title: "Course Content",
    description: "Clear, educational content with professional polish.",
    colors: ["#4d9fff", "#5227ff", "#00e0ff"]
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "Motion Graphics",
    description: "Eye-catching animations that enhance your storytelling.",
    colors: ["#00e5ff", "#5227ff", "#00ffd1"]
  },
  {
    icon: <Palette className="h-7 w-7" />,
    title: "Color Grading",
    description: "Cinematic looks that give your videos a premium feel.",
    colors: ["#ff8a65", "#ff5c7a", "#ffd166"]
  },
  {
    icon: <Tag className="h-7 w-7" />,
    title: "Logo Animation",
    description: "Professional branding elements that stand out.",
    colors: ["#00ffd1", "#00b8d9", "#5227ff"]
  },
  {
    icon: <Music className="h-7 w-7" />,
    title: "Audio Engineering",
    description: "Crystal clear audio mix with noise reduction.",
    colors: ["#ff5c33", "#ff9f4d", "#8a5cff"]
  }
];

export default function WhatICanDo() {
  return (
    <section id="services" className="scroll-mt-28 mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <WarpText
          text="What I Can Do for You"
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
        />
        <p className="mt-4 text-neutral-400">
          If you're looking for someone who blends creativity with technical skill, communicates
          clearly, and truly cares about results.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ReflectiveCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            colors={service.colors}
            overlayColor="rgba(0, 0, 0, 0.35)"
            blurStrength={12}
            glassDistortion={30}
            metalness={1}
            roughness={0.75}
            displacementStrength={20}
            noiseScale={1}
            specularConstant={5}
            grayscale={1}
            color="#ffffff"
          />
        ))}
      </div>
    </section>
  );
}
