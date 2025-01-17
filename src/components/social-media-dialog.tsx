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
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { productData, productImages } from "@/data/website-data";
import cloudinaryLoader from "@/lib/cloudinary-loader";
import { downloadPdf } from "@/lib/pdf-lib";
const handleDownload = (filePath: string) => {
  if (filePath) {
    const fileName = `converted_${new Date().toISOString().replace(/[:.]/g, "-")}.pdf`;
    downloadPdf(filePath, fileName);
  }
};

interface SocialMediaDialogProps {
  filePath: string | null;
  showSocialMediaDialog: boolean;
  setShowSocialMediaDialog: (value: boolean) => void;
}
export default function SocialMediaDialog({
  filePath,
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
            Your JPG files have been successfully converted into a PDF. Would
            you like to open the file now?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setShowSocialMediaDialog(false)}>
            Close
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => filePath && handleDownload(filePath)}
          >
            Open PDF
          </AlertDialogAction>
        </AlertDialogFooter>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-4 text-center sm:items-start sm:justify-start sm:text-left">
          <p className="text-base font-semibold">
            Support us by sharing this handy tool!
          </p>
          <div className="flex gap-6">
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
      </AlertDialogContent>
    </AlertDialog>
  );
}
