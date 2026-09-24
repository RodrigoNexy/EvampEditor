import PillNav from "./PillNav";
import logo from "../assets/logo-evamp.png";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Clients", href: "#clients" },
  { label: "My Work", href: "#my-work" },
  { label: "Reviews", href: "#reviews" }
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <PillNav
        logo={logo}
        logoAlt="EVAMP"
        items={NAV_ITEMS}
        activeHref="#home"
        ease="power2.easeOut"
        baseColor="transparent"
        pillColor="#ffffff"
        hoveredPillTextColor="#5227FF"
        pillTextColor="#000000"
        initialLoadAnimation
      />
    </header>
  );
}
