//External Imports
import { ShieldCheck } from "lucide-react";
//Internal Imports
import { HeaderNavItems } from "@/data/website-data";
import HeroWithFileProvider from "@/components/hero-with-file-provider";

const Hero = () => {
  return (
    <section
      id={HeaderNavItems.Home}
      className="container px-5 pt-20 text-gray-700 dark:text-gray-300 lg:px-10 xl:max-w-screen-xl"
    >
      <HeroWithFileProvider />
      {/* Product description */}
      <div className="mt-5 flex flex-row gap-2">
        {/* Box----------1 */}
        <div className="pt-1">
          <ShieldCheck className="h-6 w-6" />
        </div>
        {/* Box----------2 */}
        <div className="flex flex-col text-gray-700 dark:text-gray-300">
          <p className="text-base font-semibold lg:text-lg">
            Local, Secure, and Private File Conversion
          </p>
          <p className="text-base lg:text-lg">
            Our JPG to PDF converter prioritizes your file privacy and security
            by processing everything locally on your device. Unlike other
            converters that require uploading files to external servers, our
            tool ensures that your images never leave your device. This
            no-upload approach guarantees maximum data privacy, making it the
            ideal solution for users handling sensitive or personal files. All
            conversions happen directly in your browser, ensuring complete
            security and giving you peace of mind knowing your files are
            processed safely and remain in your control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
