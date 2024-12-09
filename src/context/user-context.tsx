"use client";
//External Imports
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
//Internal Imports
import { encryptData, decryptData } from "@/lib/encryption";

interface UserContextType {
  userStatus: "trial" | "paid";
  registerAsPaid: () => void;
  conversionCount: number;
  decrementConversion: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const totalConversionCount: number = 15;
const localStorageName: string = "_sys_data";
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userStatus, setUserStatus] = useState<"trial" | "paid">("trial");
  const [conversionCount, setConversionCount] =
    useState<number>(totalConversionCount);

  useEffect(() => {
    const storedData = localStorage.getItem(localStorageName);
    if (storedData) {
      const decryptedData = JSON.parse(decryptData(storedData));
      setUserStatus(decryptedData.userStatus);
      setConversionCount(decryptedData.conversionCount);
    } else {
      const initialData = { userStatus, conversionCount };
      localStorage.setItem(
        localStorageName,
        encryptData(JSON.stringify(initialData)),
      );
      // Also update the database with this initialData if first-time user
    }
  }, [userStatus, conversionCount]);

  const decrementConversion = () => {
    if (conversionCount > 0) {
      setConversionCount(conversionCount - 1);
      const newData = { userStatus, conversionCount: conversionCount - 1 };
      localStorage.setItem(
        localStorageName,
        encryptData(JSON.stringify(newData)),
      );
      // Optionally, sync this to the database
    }
  };
  const registerAsPaid = () => {
    setUserStatus("paid");
    const encryptedData = encryptData(
      JSON.stringify({ userStatus: "paid", conversionCount }),
    );
    localStorage.setItem(localStorageName, encryptedData);
  };
  return (
    <UserContext.Provider
      value={{
        userStatus,
        registerAsPaid,
        conversionCount,
        decrementConversion,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};
