"user client";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
