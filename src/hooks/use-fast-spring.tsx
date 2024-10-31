// hooks/useFastSpring.ts
import { useEffect } from "react";

const useFastSpring = () => {
  useEffect(() => {
    const scriptId = "fsc-api";
    const checkFastSpring = () => {
      if (window.fastspring?.builder) {
        try {
          window.fastspring.builder.init({
            storeFront: "frameworkteam.onfastspring.com", // Ensure this is correct
            popup: true,
          });
        } catch (error) {
          console.error("Error during FastSpring initialization:", error);
        }
      } else {
        setTimeout(checkFastSpring, 100); // Retry after 100ms
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src =
        "https://sbl.onfastspring.com/sbl/0.9.2/fastspring-builder.min.js";
      script.id = scriptId;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        checkFastSpring(); // Start checking after the script loads
      };

      script.onerror = () => {
        console.error("Failed to load FastSpring script.");
      };
    } else {
      checkFastSpring(); // If already exists, check immediately
    }
  }, []);
};

export default useFastSpring;
