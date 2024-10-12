import { HeaderNavItems } from "@/data/website-data";
import { useEffect } from "react";

function useIntersectionObserver(setActiveSection: (section: string) => void) {
  useEffect(() => {
    const home = document.getElementById(HeaderNavItems.Home);
    if (!home) return; // Ensure the "home" element exists
    // Function to create the intersection observer
    const createIntersectionObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0.6,
        },
      );
      // Observe the "home" section
      observer.observe(home);
      return observer;
    };

    // Set up the intersection observer
    const intersectionObserver = createIntersectionObserver();

    // Cleanup both observers
    return () => {
      intersectionObserver.disconnect();
    };
  }, [setActiveSection]);
}
export default useIntersectionObserver;
