import PillNav from "./PillNav";
import logo from "../assets/logo.svg";

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
        logoAlt="YAKI"
        items={NAV_ITEMS}
        activeHref="#home"
        ease="power2.easeOut"
        baseColor="#5227FF"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        initialLoadAnimation
      />
    </header>
  );
}
