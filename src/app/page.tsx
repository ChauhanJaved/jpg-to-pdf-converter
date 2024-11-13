"user client";
import Contact from "@/components/contact";
import Desktop from "@/components/desktop";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Desktop />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
