"use client";

//External Imports
import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useActiveSection } from "@/context/active-section-context";

//Internal imports
import { Button } from "@/components/ui/button";
import { HeaderNavItems } from "@/data/website-data";
import { usePageOnTop } from "@/context/page-on-top-context";

export default function ScrollTop() {
  const { setActiveSection } = useActiveSection();
  const { setPageOnTop } = usePageOnTop();
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToTop = () => {
    const home = document.getElementById(HeaderNavItems.Home);
    if (home) {
      setActiveSection(HeaderNavItems.Home);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      setIsVisible(!entry.isIntersecting);
      setPageOnTop(entry.isIntersecting);
      if (entry.isIntersecting) {
        const home = document.getElementById(HeaderNavItems.Home);
        if (home) {
          setActiveSection(HeaderNavItems.Home);
        } else {
          setActiveSection("");
        }
      }
    };
    observerRef.current = new IntersectionObserver(handleIntersection);
    const target = document.getElementById("page-top");
    if (target) {
      observerRef.current.observe(target);
    }
    return () => {
      if (observerRef.current && target) {
        observerRef.current.unobserve(target);
      }
    };
  }, [setActiveSection, setPageOnTop]);
  return (
    <>
      <div id="page-top" style={{ position: "absolute", top: 0 }}></div>
      {/* Z-index 50 */}
      <Button
        size={"icon"}
        onClick={scrollToTop}
        className={`${isVisible ? "visible opacity-100" : "invisible opacity-0"} fixed right-4 bottom-4 z-50`}
      >
        <ArrowUp />
      </Button>
    </>
  );
}
