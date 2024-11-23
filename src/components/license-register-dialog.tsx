"use client";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useUser } from "@/context/user-context";
const validateLicenseKey = async (key: string): Promise<boolean> => {
  // Implement your license validation logic here
  // e.g., call Firebase or FastSpring
  return key === "VALID_KEY"; // Replace with actual validation
};

interface LicenseRegisterDialogProps {
  showLicenseDialog?: boolean;
  setShowLicenseDialog?: (value: boolean) => void;
  showRegisterLicenseDialog: boolean;
  setShowRegisterLicenseDialog: (value: boolean) => void;
}
export default function LicenseRegisterDialog({
  setShowLicenseDialog,
  showRegisterLicenseDialog,
  setShowRegisterLicenseDialog,
}: LicenseRegisterDialogProps) {
  const { registerAsPaid } = useUser(); // Access user context
  const [licenseKey, setLicenseKey] = useState("");
  const [error, setError] = useState("");
  const handleLicenseValidation = async () => {
    try {
      // Replace with your license key validation API call or Firebase function
      const isValid = await validateLicenseKey(licenseKey); // mock function for validation
      if (isValid) {
        registerAsPaid();
        setShowRegisterLicenseDialog(false);
        setShowLicenseDialog?.(false);
        toast({
          title: "Successfully Registered",
          description: "Your license key has been registered.",
        });
      } else {
        setError("License key is not valid. Please try again.");
      }
    } catch (error) {
      setError(`An error occurred. Please try again later. ${error}`);
    }
  };
  const { toast } = useToast();
  return (
    <Dialog
      open={showRegisterLicenseDialog}
      onOpenChange={setShowRegisterLicenseDialog}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register License</DialogTitle>
          <DialogDescription className="sr-only">
            Enter license key
          </DialogDescription>
        </DialogHeader>
        <Input
          placeholder="Enter license key"
          value={licenseKey}
          onChange={(e) => {
            setLicenseKey(e.target.value);
            setError("");
          }}
        />
        {error && <p className="text-destructive">{error}</p>}
        <DialogFooter>
          <Button onClick={handleLicenseValidation}>Register License</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
