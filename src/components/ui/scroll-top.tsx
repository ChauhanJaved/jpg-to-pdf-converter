"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "./button";
//Internal imports
import { useEffect, useRef, useState } from "react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      setIsVisible(!entry.isIntersecting);
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
  });
  return (
    <>
      <div id="page-top" style={{ position: "absolute", top: 0 }}></div>
      {/* Z-index 10 */}
      <Button
        size={"icon"}
        onClick={scrollToTop}
        className={`${isVisible ? "visible opacity-100" : "invisible opacity-0"} fixed bottom-4 right-4 z-[10]`}
      >
        <ArrowUp className="h-4 w-4 lg:h-6 lg:w-6" />
      </Button>
    </>
  );
}
