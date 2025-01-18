//External Imports
import Link from "next/link";
//Internal Imports
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
import LicenseRegisterDialog from "@/components/license-register-dialog";
import { useActiveSection } from "@/context/active-section-context";
import { Separator } from "./ui/separator";

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
  const { setActiveSection } = useActiveSection();
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
            <Link
              href={`/#${HeaderNavItems.Pricing}`}
              onClick={() => setActiveSection(HeaderNavItems.Pricing)}
            >
              <Button
                className="flex items-center justify-center"
                onClick={() => setShowLicenseDialog(false)}
              >
                <span>Buy License</span>
              </Button>
            </Link>
            <Button
              onClick={() => {
                setShowRegisterLicenseDialog(true);
              }}
            >
              Register License
            </Button>
          </div>
          <Separator />
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
