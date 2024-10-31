// components/SubscribeButton.tsx
import useFastSpring from "@/hooks/use-fast-spring";
import { Button } from "./ui/button";

import React from "react";

export default function StartFreeTrial() {
  useFastSpring();

  const handleSubscribe = () => {
    window.fastspring.builder.checkout({
      products: [{ path: "jpg-to-pdf-converter" }],
    });
  };

  return <Button onClick={handleSubscribe}>Start Free Trial</Button>;
}
