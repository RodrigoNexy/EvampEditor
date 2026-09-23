import TextLoop from "./text-animations/TextLoop";

export default function HeroDivider() {
  return (
    <div className="flex h-40 items-center overflow-hidden bg-neutral-950 sm:h-48">
      <TextLoop
        text="EVAMP ✦ VIDEO EDITOR"
        shape="wave"
        speed={45}
        direction="forward"
        separator="✦"
        curviness={36}
        fontSize={46}
        fontWeight={800}
        letterSpacing={2}
        uppercase
        color="#ffffff"
        ribbon
        ribbonColor="#5227FF"
        ribbonWidth={20}
        pauseOnHover={false}
      />
    </div>
  );
}
