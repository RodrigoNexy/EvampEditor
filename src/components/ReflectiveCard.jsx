import React, { useEffect, useRef, useState } from "react";
import { loadYouTubeApi } from "../utils/loadYouTubeApi";

const ReflectiveCard = ({
  icon,
  title,
  description,
  videoSrc,
  youtubeId,
  blurStrength = 12,
  color = "white",
  metalness = 1,
  roughness = 0.4,
  overlayColor = "rgba(255, 255, 255, 0.1)",
  displacementStrength = 20,
  noiseScale = 1,
  specularConstant = 1.2,
  grayscale = 1,
  glassDistortion = 0,
  className = "",
  style = {}
}) => {
  const baseFrequency = 0.03 / Math.max(0.1, noiseScale);
  const saturation = 1 - Math.max(0, Math.min(1, grayscale));
  const filterId = React.useId().replace(/:/g, "");

  const cardRef = useRef(null);
  const youtubeMountRef = useRef(null);
  const youtubePlayerRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (!youtubeId || shouldLoadVideo) return undefined;
    const node = cardRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [youtubeId, shouldLoadVideo]);

  // Uses the real IFrame Player API (instead of URL params like controls=0)
  // so we get a guaranteed chrome-free, non-interactive background and a true
  // manual loop — YouTube's "playlist" URL trick for looping a single video
  // otherwise leaves a prev/next mini nav bar that `controls=0` can't hide.
  useEffect(() => {
    if (!youtubeId || !shouldLoadVideo) return undefined;
    let disposed = false;

    loadYouTubeApi().then((YT) => {
      if (disposed || !YT || !youtubeMountRef.current) return;
      youtubePlayerRef.current = new YT.Player(youtubeMountRef.current, {
        videoId: youtubeId,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          playsinline: 1,
          origin: window.location.origin
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.ENDED) {
              event.target.seekTo(0);
              event.target.playVideo();
            }
          }
        }
      });
    });

    return () => {
      disposed = true;
      youtubePlayerRef.current?.destroy?.();
      youtubePlayerRef.current = null;
    };
  }, [youtubeId, shouldLoadVideo]);

  const cssVariables = {
    "--blur-strength": `${blurStrength}px`,
    "--metalness": metalness,
    "--roughness": roughness,
    "--overlay-color": overlayColor,
    "--text-color": color,
    "--saturation": saturation
  };

  return (
    <div
      ref={cardRef}
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)_inset] isolate font-sans ${className}`}
      style={{ ...style, ...cssVariables }}
    >
      <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <filter id={`metallic-displacement-${filterId}`} x="-20%" y="-20%" width="140%" height="140%">
            <feColorMatrix in="SourceGraphic" type="saturate" values={saturation} result="desaturated" />
            <feTurbulence type="turbulence" baseFrequency={baseFrequency} numOctaves="2" result="noise" />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="noiseAlpha" />
            <feDisplacementMap
              in="desaturated"
              in2="noise"
              scale={displacementStrength}
              xChannelSelector="R"
              yChannelSelector="G"
              result="rippled"
            />
            <feSpecularLighting
              in="noiseAlpha"
              surfaceScale={displacementStrength}
              specularConstant={specularConstant}
              specularExponent="20"
              lightingColor="#ffffff"
              result="light"
            >
              <fePointLight x="0" y="0" z="300" />
            </feSpecularLighting>
            <feComposite in="light" in2="rippled" operator="in" result="light-effect" />
            <feBlend in="light-effect" in2="rippled" mode="screen" result="metallic-result" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="solidAlpha"
            />
            <feMorphology in="solidAlpha" operator="erode" radius="45" result="erodedAlpha" />
            <feGaussianBlur in="erodedAlpha" stdDeviation="10" result="blurredMap" />
            <feComponentTransfer in="blurredMap" result="glassMap">
              <feFuncA type="linear" slope="0.5" intercept="0" />
            </feComponentTransfer>
            <feDisplacementMap
              in="metallic-result"
              in2="glassMap"
              scale={glassDistortion}
              xChannelSelector="A"
              yChannelSelector="A"
              result="final"
            />
          </filter>
        </defs>
      </svg>

      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover scale-[1.15] z-0 opacity-90 transition-[filter] duration-300"
          style={{
            filter: `contrast(120%) brightness(110%) blur(var(--blur-strength, 12px)) url(#metallic-displacement-${filterId})`
          }}
        />
      ) : youtubeId ? (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
          {shouldLoadVideo && (
            <div
              className="absolute left-1/2 top-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 opacity-90 transition-[filter] duration-300"
              style={{
                filter: `contrast(120%) brightness(110%) blur(var(--blur-strength, 12px)) url(#metallic-displacement-${filterId})`
              }}
            >
              <div ref={youtubeMountRef} className="h-full w-full" />
            </div>
          )}
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-linear-to-br from-neutral-800 via-neutral-900 to-black" />
      )}

      <div className="absolute inset-0 z-10 opacity-[var(--roughness,0.4)] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay" />

      <div className="absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_60%,rgba(255,255,255,0.3)_100%)] pointer-events-none mix-blend-overlay opacity-[var(--metalness,1)]" />

      <div className="absolute inset-0 rounded-[20px] p-[1px] bg-[linear-gradient(135deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.6)_100%)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] z-20 pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 p-6 text-center text-[var(--text-color,white)] bg-[var(--overlay-color,rgba(255,255,255,0.05))]">
        <div className="flex h-16 w-full max-w-[220px] items-center justify-center rounded-xl border border-white/15 bg-white/10 text-3xl backdrop-blur-sm">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold drop-shadow-md">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed opacity-70">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;
