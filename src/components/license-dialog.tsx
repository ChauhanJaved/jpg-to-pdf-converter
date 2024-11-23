import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   TwitterShareButton,
//   XIcon,
//   LinkedinShareButton,
//   LinkedinIcon,
//   WhatsappShareButton,
//   WhatsappIcon,
// } from "react-share";
import { HeaderNavItems } from "@/data/website-data";
import Link from "next/link";
import { ShoppingCart, Wrench } from "lucide-react";

interface LicenseDialogProps {
  showDialog: boolean;
  setShowDialog: (value: boolean) => void;
  onClose: () => void;
}

const LicenseDialog: React.FC<LicenseDialogProps> = ({
  showDialog,
  setShowDialog,
  onClose,
}) => {
  // const shareUrl = productData.productWebsite;
  // const shareMessage = `Try this amazing ${productData.title}!`;

  return (
    <>
      <Dialog open={showDialog} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Free Trial Conversions Finished</DialogTitle>
            <DialogDescription>
              Your free trial conversions have finished.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-4 text-center sm:items-start sm:justify-start sm:text-left">
            <Link href={`/#${HeaderNavItems.Pricing}`}>
              <Button
                className="flex items-center justify-center"
                onClick={() => setShowDialog(false)}
              >
                <ShoppingCart className="mr-2" />
                <span>Buy License</span>
              </Button>
            </Link>
            <Button
              className="flex items-center justify-center"
              onClick={() => setShowDialog(false)}
            >
              <Wrench className="mr-2" />
              <span>Register License</span>
            </Button>
            {/* <p>
              Or please share our tool on social media to continue using it for
              free:
            </p> */}
            {/* <div className="flex gap-3">
              <FacebookShareButton url={shareUrl} hashtag={shareMessage}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={shareMessage}>
                <XIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} summary={shareMessage}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={shareUrl}
                title={shareMessage}
                separator=":: "
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div> */}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LicenseDialog;
