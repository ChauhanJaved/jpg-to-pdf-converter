"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface PageOnTopContextType {
  pageOnTop: boolean;
  setPageOnTop: (value: boolean) => void;
}

// Create the context
const PageOnTopContext = createContext<PageOnTopContextType | undefined>(
  undefined,
);

// Provider component
export const PageOnTopProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pageOnTop, setPageOnTop] = useState<boolean>(false);

  return (
    <PageOnTopContext.Provider value={{ pageOnTop, setPageOnTop }}>
      {children}
    </PageOnTopContext.Provider>
  );
};

// Custom hook for consuming the context
export const usePageOnTop = (): PageOnTopContextType => {
  const context = useContext(PageOnTopContext);
  if (!context) {
    throw new Error("usePageOnTop must be used within a PageOnTopProvider");
  }
  return context;
};
