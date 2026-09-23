import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroDivider from "./components/HeroDivider";
import MyWork from "./components/MyWork";
import WhatICanDo from "./components/WhatICanDo";
import TrustedCreators from "./components/TrustedCreators";
import Reviews from "./components/Reviews";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />
      <main>
        <Hero />
        <HeroDivider />
        <TrustedCreators />
        <MyWork />
        <WhatICanDo />
        <Reviews />
      </main>
    </div>
  );
}
