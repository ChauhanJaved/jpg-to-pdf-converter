import Contact from "@/components/contact";
import Desktop from "@/components/desktop";
import Hero from "@/components/hero";
import Purchase from "@/components/purchase";
import ScrollTop from "@/components/ui/scroll-top";

export default function Home() {
  return (
    <main id="main" className="text-lg">
      <Hero />
      <Desktop />
      <Purchase />
      <Contact />
      <ScrollTop />
    </main>
  );
}
