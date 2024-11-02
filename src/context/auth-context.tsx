"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebaseConfig";

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  isTrial: boolean;
  remainingTrialDays: number;
  incrementConversionCount: () => void;
  conversionCount: number;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isTrial, setIsTrial] = useState(false);
  const [remainingTrialDays, setRemainingTrialDays] = useState(14);
  const [conversionCount, setConversionCount] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
      if (firebaseUser) {
        const daysRemaining = 14; // Assume calculation based on account creation
        setIsTrial(true);
        setRemainingTrialDays(daysRemaining);
      }
    });

    return () => unsubscribe();
  }, []);

  // For non-logged-in users, use local storage to track conversions
  useEffect(() => {
    if (!user) {
      const storedCount = Number(localStorage.getItem("conversionCount") || 0);
      const storedDate = localStorage.getItem("conversionDate") || "";
      const today = new Date().toDateString();

      if (storedDate === today) {
        // Same day, use stored count
        setConversionCount(storedCount);
      } else {
        // New day, reset count and update date
        setConversionCount(0);
        localStorage.setItem("conversionCount", "0");
        localStorage.setItem("conversionDate", today);
      }
    }
  }, [user]);

  const incrementConversionCount = () => {
    if (!user) {
      const updatedCount = conversionCount + 1;
      setConversionCount(updatedCount);
      localStorage.setItem("conversionCount", updatedCount.toString());
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isTrial,
        remainingTrialDays,
        conversionCount,
        incrementConversionCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access Auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const TOTAL_CONVERSIONS_PER_DAY = 5;
