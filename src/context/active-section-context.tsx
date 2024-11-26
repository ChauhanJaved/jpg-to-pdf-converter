"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

// Create the context
const ActiveSectionContext = createContext<
  ActiveSectionContextType | undefined
>(undefined);

// Provider component
export const ActiveSectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<string>("");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

// Custom hook to use the context
export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider",
    );
  }
  return context;
};
