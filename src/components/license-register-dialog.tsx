"use client";
//External Imports
import React, { useState } from "react";
//Internal Imports
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { useUser } from "@/context/user-context";
import { validateKey } from "@/lib/license-key-validation";
import { useToast } from "@/hooks/use-toast";

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
  const { registerAsPaid } = useUser();
  const [licenseKey, setLicenseKey] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();
  const handleLicenseValidation = async () => {
    try {
      const isValid = validateKey(licenseKey);
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

  return (
    <AlertDialog open={showRegisterLicenseDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Register Your License</AlertDialogTitle>
          <AlertDialogDescription className="sr-only">
            Enter license key
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Input
          placeholder="Enter license key"
          value={licenseKey}
          onChange={(e) => {
            setLicenseKey(e.target.value);
            setError("");
          }}
        />
        {error && <p className="text-destructive">{error}</p>}
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => setShowRegisterLicenseDialog(false)}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleLicenseValidation}>
            Register License
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
