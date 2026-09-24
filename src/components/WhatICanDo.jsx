import { Clapperboard, BookOpen, Sparkles, Palette, Tag, Music } from "lucide-react";
import TearTicket from "./TearTicket";
import WarpText from "./text-animations/WarpText";
import videoEditingImg from "../assets/video-editing.png";
import courseImg from "../assets/course.jfif";
import motionGraphicsImg from "../assets/motiongrapics.jfif";
import colorGradingImg from "../assets/colorgrading.jpg";
import logoAnimationImg from "../assets/logoanimation.jpg";
import audioEngineeringImg from "../assets/audioenginering.webp";

const SERVICES = [
  {
    icon: <Clapperboard className="h-5 w-5" />,
    title: "YouTube Editing",
    description: "Engaging edits optimized for retention with perfect pacing.",
    image: videoEditingImg,
    background: "var(--color-brand)"
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Course Content",
    description: "Clear, educational content with professional polish.",
    image: courseImg
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Motion Graphics",
    description: "Eye-catching animations that enhance your storytelling.",
    image: motionGraphicsImg,
    background: "var(--color-brand)"
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Color Grading",
    description: "Cinematic looks that give your videos a premium feel.",
    image: colorGradingImg
  },
  {
    icon: <Tag className="h-5 w-5" />,
    title: "Logo Animation",
    description: "Professional branding elements that stand out.",
    image: logoAnimationImg,
    background: "var(--color-brand)"
  },
  {
    icon: <Music className="h-5 w-5" />,
    title: "Audio Engineering",
    description: "Crystal clear audio mix with noise reduction.",
    image: audioEngineeringImg
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

      <div className="mt-12 grid grid-cols-1 place-items-center gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <TearTicket
            key={service.title}
            image={service.image}
            imageAlt={service.title}
            orientation="horizontal"
            scrim
            imageRadius={10}
            width={400}
            height={250}
            stubSize={130}
            radius={18}
            holes={10}
            holeSize={5}
            background={service.background || "#18181b"}
            stubBackground={service.background || "#141416"}
            color="#f5f5f5"
            border
            borderColor="rgba(255,255,255,0.14)"
            borderWidth={1}
            ariaLabel={`Tear the ${service.title} ticket`}
            stub={
              <div className="flex h-full flex-col justify-center gap-2 p-4">
                <div className={service.background ? "text-white" : "text-brand"}>{service.icon}</div>
                <p
                  className={`text-xs leading-relaxed ${service.background ? "text-white/80" : "text-neutral-300"}`}
                >
                  {service.description}
                </p>
              </div>
            }
          >
            <div className="flex h-full flex-col justify-end p-4">
              <h3 className="text-lg font-bold drop-shadow-md">{service.title}</h3>
            </div>
          </TearTicket>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-neutral-400">
        Psst — you can tear the stub off each ticket.
      </p>
    </section>
  );
}
