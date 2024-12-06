//External Imports
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";
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
import { productData, productImages } from "@/data/website-data";
import cloudinaryLoader from "@/lib/cloudinary-loader";

interface SocialMediaDialogProps {
  showSocialMediaDialog: boolean;
  setShowSocialMediaDialog: (value: boolean) => void;
}
export default function SocialMediaDialog({
  showSocialMediaDialog,
  setShowSocialMediaDialog,
}: SocialMediaDialogProps) {
  const shareUrl = productData.productWebsite;
  const shareMessage = `Try this amazing ${productData.title}!`;
  const shareMedia = cloudinaryLoader({
    src: productImages.JPGtoPDFConverterWeb.imgName,
    width: productImages.JPGtoPDFConverterWeb.width,
  });
  return (    
      <AlertDialog open={showSocialMediaDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Support Us by Sharing!</AlertDialogTitle>
            <AlertDialogDescription>
              We hope you&#39;re enjoying our tool! Help us reach more users by
              sharing it on social media. Your support means a lot to us and
              helps us continue offering free trial conversions. Simply click
              one of the buttons below to share!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="mt-1 flex flex-wrap items-center justify-center gap-4 text-center sm:items-start sm:justify-start sm:text-left">
            <div className="flex gap-3">
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
              <PinterestShareButton url={shareUrl} media={shareMedia}>
                <PinterestIcon size={32} round />
              </PinterestShareButton>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowSocialMediaDialog(false)}>
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>    
  );
}
