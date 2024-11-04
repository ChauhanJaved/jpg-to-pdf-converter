"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { encryptData, decryptData } from "@/lib/encryption";

interface UserContextType {
  userStatus: "trial" | "paid";
  conversionCount: number;
  decrementConversion: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const totalConversionCount: number = 14;
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userStatus, setUserStatus] = useState<"trial" | "paid">("trial");
  const [conversionCount, setConversionCount] =
    useState<number>(totalConversionCount);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const decryptedData = JSON.parse(decryptData(storedData));
      setUserStatus(decryptedData.userStatus);
      setConversionCount(decryptedData.conversionCount);
    } else {
      const initialData = { userStatus, conversionCount };
      localStorage.setItem(
        "_sys_data",
        encryptData(JSON.stringify(initialData)),
      );
      // Also update the database with this initialData if first-time user
    }
  }, []);

  const decrementConversion = () => {
    if (conversionCount > 0) {
      setConversionCount(conversionCount - 1);
      const newData = { userStatus, conversionCount: conversionCount - 1 };
      localStorage.setItem("userData", encryptData(JSON.stringify(newData)));
      // Optionally, sync this to the database
    }
  };

  return (
    <UserContext.Provider
      value={{ userStatus, conversionCount, decrementConversion }}
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
