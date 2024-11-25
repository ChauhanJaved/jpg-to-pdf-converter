import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { HeaderNavItems } from "@/data/website-data";
import Link from "next/link";
import { ShoppingCart, Wrench } from "lucide-react";
import LicenseRegisterDialog from "./license-register-dialog";

interface LicenseDialogProps {
  showLicenseDialog: boolean;
  setShowLicenseDialog: (value: boolean) => void;
  showRegisterLicenseDialog: boolean;
  setShowRegisterLicenseDialog: (value: boolean) => void;
}

const LicenseDialog: React.FC<LicenseDialogProps> = ({
  showLicenseDialog,
  setShowLicenseDialog,
  showRegisterLicenseDialog,
  setShowRegisterLicenseDialog,
}) => {
  return (
    <>
      <AlertDialog open={showLicenseDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Free Trial Conversions Finished</AlertDialogTitle>
            <AlertDialogDescription>
              Your free trial conversions have been completed. Please purchase a
              license and register it to continue using the tool.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-4 text-center sm:items-start sm:justify-start sm:text-left">
            <Link href={`/#${HeaderNavItems.Pricing}`}>
              <Button
                className="flex items-center justify-center"
                onClick={() => setShowLicenseDialog(false)}
              >
                <ShoppingCart className="mr-2" />
                <span>Buy License</span>
              </Button>
            </Link>
            <Button
              onClick={() => {
                setShowRegisterLicenseDialog(true);
              }}
            >
              <Wrench className="mr-2" />
              Register License
            </Button>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowLicenseDialog(false)}>
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <LicenseRegisterDialog
        showLicenseDialog={showLicenseDialog}
        setShowLicenseDialog={setShowLicenseDialog}
        showRegisterLicenseDialog={showRegisterLicenseDialog}
        setShowRegisterLicenseDialog={setShowRegisterLicenseDialog}
      ></LicenseRegisterDialog>
    </>
  );
};

export default LicenseDialog;
