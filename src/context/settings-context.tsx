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

export interface UserSettings {
  orientation: PageOrientationEnum;
  pageSize: PageSizeEnum;
  margin: MarginEnum;
  mergeAllImages: boolean;
  imagePreview: boolean;
  imageQuality: number;
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
  imagePreview: true,
  imageQuality: 70,
};

// Create context
const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);

  // Single useEffect for initialization and synchronization
  useEffect(() => {
    const storedSettings = localStorage.getItem(localStorageKey);

    if (storedSettings) {
      try {
        // Load settings from localStorage
        const parsedSettings = JSON.parse(storedSettings);
        setSettings(parsedSettings);
      } catch (error) {
        console.error("Error parsing settings from localStorage:", error);
        localStorage.setItem(localStorageKey, JSON.stringify(defaultSettings));
      }
    } else {
      // Save default settings if not present
      localStorage.setItem(localStorageKey, JSON.stringify(defaultSettings));
    }
  }, []);

  const updateSettings = (newSettings: Partial<UserSettings>) => {
    setSettings((prev) => {
      const updatedSettings = { ...prev, ...newSettings };
      localStorage.setItem(localStorageKey, JSON.stringify(updatedSettings)); // Update localStorage here
      return updatedSettings;
    });
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
