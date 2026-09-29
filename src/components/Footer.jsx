import { useCallback, useState } from "react";
import { Calendar, ArrowUp, Check } from "lucide-react";
import logo from "../assets/logowhitouticon.png";
import ContactModal, { SOCIALS, BrandIcon } from "./ContactModal";
import CRTWarp from "./backgrounds/CRTWarp";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Clients", href: "#clients" },
  { label: "My Work", href: "#my-work" },
  { label: "Reviews", href: "#reviews" }
];

function SocialIcon({ social }) {
  const [copied, setCopied] = useState(false);
  const className =
    "group relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-neutral-900/60 transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:bg-neutral-900";

  const icon = copied ? (
    <Check className="h-5 w-5 text-emerald-400" />
  ) : (
    <BrandIcon
      name={social.key}
      color="currentColor"
      className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-white"
    />
  );

  if (social.copy) {
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(social.copy);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch {
        // Clipboard can be blocked — the handle stays visible in the tooltip.
      }
    };
    return (
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${social.name} username ${social.handle}`}
        title={copied ? "Copied!" : `${social.name}: ${social.handle} (click to copy)`}
        className={className}
      >
        {icon}
      </button>
    );
  }

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      title={`${social.name}: ${social.handle}`}
      className={className}
    >
      {icon}
    </a>
  );
}

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const closeContact = useCallback(() => setContactOpen(false), []);
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate mt-12 overflow-hidden border-t border-white/10">
      {/* Same CRT background as the hero, faded in from the page above */}
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
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950 via-neutral-950/40 to-neutral-950/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20">
        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 px-6 py-12 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
          <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to keep viewers <span className="text-brand">locked in?</span>
          </h2>
          <p className="relative mx-auto mt-3 max-w-lg text-neutral-400">
            Let's talk about your channel and build edits that hold attention till the last second.
          </p>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="relative mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition-transform hover:scale-[1.02]"
          >
            <Calendar className="h-4 w-4" strokeWidth={2.5} />
            Book a Free Call
          </button>
        </div>

        {/* Main row */}
        <div className="flex flex-col items-center gap-10 py-14 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-xs flex-col items-center text-center md:items-start md:text-left">
            <a href="#home" className="block transition-transform hover:scale-[1.02]">
              <img src={logo} alt="EVAMP" className="h-14 w-auto object-contain" />
            </a>
            <p className="mt-4 text-sm text-neutral-400">
              High-level video editing for creators focused on retention.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col items-center gap-3 md:items-start">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Navigate</p>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 md:items-start">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Follow me</p>
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <SocialIcon key={social.key} social={social} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-neutral-500">© {year} EVAMP. All rights reserved.</p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 transition-colors hover:text-white"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition-transform group-hover:-translate-y-0.5">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={closeContact} />
    </footer>
  );
}
