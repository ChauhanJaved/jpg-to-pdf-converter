"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define enums for settings
export enum PageOrientationEnum {
  portrait = "portrait",
  landscape = "landscape",
}

export enum PageSizeEnum {
  A4 = "a4",
  USLetter = "us-letter",
  Fit = "fit",
}
export enum MarginEnum {
  None = "none",
  Small = "small",
  Large = "large",
}

// Define the shape of settings
interface UserSettings {
  orientation: PageOrientationEnum;
  pageSize: PageSizeEnum;
  margin: MarginEnum;
  mergeAllImages: boolean;
}

// Context interface
interface SettingsContextType {
  settings: UserSettings;
  updateSettings: (newSettings: Partial<UserSettings>) => void;
}

// Props for the provider
interface SettingsProviderProps {
  children: ReactNode;
}

// Local storage key
const localStorageKey = "user_settings";

// Default settings
const defaultSettings: UserSettings = {
  orientation: PageOrientationEnum.portrait,
  pageSize: PageSizeEnum.A4,
  margin: MarginEnum.Small,
  mergeAllImages: true,
};

// Create context
const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  // Initialize state with settings from localStorage (or default)
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);

  // Load settings from localStorage on mount, or save default settings if it's the first time
  useEffect(() => {
    const storedSettings = localStorage.getItem(localStorageKey);
    if (storedSettings) {
      try {
        setSettings(JSON.parse(storedSettings)); // Load stored settings
      } catch (error) {
        console.error("Error parsing settings from local storage", error);
      }
    } else {
      // If no settings in localStorage, save the default settings
      localStorage.setItem(localStorageKey, JSON.stringify(defaultSettings));
    }
  }, []);

  // Save settings to local storage whenever they change
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(settings));
  }, [settings]);

  // Update settings
  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

// Custom hook to use settings
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
