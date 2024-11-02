"user client";
import Contact from "@/components/contact";

import Hero from "@/components/hero";
import Purchase from "@/components/purchase";
import SignIn from "@/components/signin";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <SignIn />
        <Purchase />
        <Contact />
      </main>
    </>
  );
}
