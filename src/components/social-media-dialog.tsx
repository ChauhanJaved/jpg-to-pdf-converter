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
import { Separator } from "./ui/separator";

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
          <AlertDialogTitle>Your PDF is Ready!</AlertDialogTitle>
          <AlertDialogDescription>
            Your JPG files have been successfully converted into a PDF. The file
            has been saved in your browser&#39;s default download folder. You
            can access it from there or open it directly now.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-1 flex flex-wrap items-center justify-start gap-3">
          <p className="text-base font-semibold">
            Enjoying this tool? Share it with your friends and colleagues to
            support us!
          </p>
          <p className="text-sm">
            Click below to share it on your favorite platform:
          </p>
          <div className="my-3 flex gap-4">
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
        <Separator />
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setShowSocialMediaDialog(false)}>
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
