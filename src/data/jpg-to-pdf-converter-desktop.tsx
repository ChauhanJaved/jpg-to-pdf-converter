import {
  Categories,
  portfolioItem,
  ProductIDs,
  productImages,
  productSubTitles,
  productTitles,
  productWebsites,
  productDownloadLinks,
} from "@/data/website-data";
import cloudinaryLoader from "@/lib/cloudinary-loader";
export const JPGtoPDFConverterDesktop: portfolioItem = {
  id: ProductIDs.JPGtoPDFConverterDesktop,
  title: productTitles.JPGtoPDFConverterDesktop,
  subtitle: productSubTitles.JPGtoPDFConverterDesktop,
  src: productImages.JPGtoPDFConverterDesktop.imgName,
  width: productImages.JPGtoPDFConverterDesktop.width,
  height: productImages.JPGtoPDFConverterDesktop.height,
  categories: [Categories.All, Categories.DesktopApp, Categories.Converter],
  pageLink: `/${ProductIDs.JPGtoPDFConverterDesktop}`,
  productWebsite: productWebsites.JPGtoPDFConverterDesktop,
  downloadLink: productDownloadLinks.JPGtoPDFConverter,
  features: [
    "Local & Secure Offline Conversion",
    "Lightning-Fast Conversion Speed",
    "Batch Conversion Made Easy",
    "Simple Drag and Drop Interface",
    "Flexible Conversion Modes",
    "Easily Change Image Order",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Introducing the Ultimate JPG to PDF Converter for Windows
      </strong>
      <p className="mt-2">
        Transform your JPG files into PDFs securely and efficiently with our
        powerful desktop software. Designed for Windows users, our JPG to PDF
        converter allows you to perform conversions entirely offline, ensuring
        that your data remains private and secure. Without the need for an
        internet connection, you can confidently convert files on your local
        system, eliminating any risk of data breaches or unauthorized access.
      </p>
      <strong className="mt-10">Lightning-Fast and Reliable Conversions</strong>
      <p className="mt-2">
        Experience rapid conversion from JPG to PDF with our dependable
        software. Whether you&#39;re working from home, the office, or on the
        go, our tool is engineered to deliver quick and reliable results without
        relying on an internet connection. Convert your JPEG files to PDF format
        in a matter of seconds, no matter where you are, ensuring your work is
        always uninterrupted.
      </p>
      <strong className="mt-10">Effortless Batch Conversion</strong>
      <p className="mt-2">
        Save time and streamline your workflow by converting multiple JPG images
        to PDFs in a single operation. Our batch processing feature is designed
        to handle large volumes of files quickly and efficiently, eliminating
        the tedious task of converting images one by one. Whether you&#39;re
        dealing with a handful of images or thousands, our software makes bulk
        conversion simple and hassle-free.
      </p>
      <strong className="mt-10">Intuitive Drag-and-Drop Interface</strong>
      <p className="mt-2">
        Our user-friendly interface makes file conversion effortless, even for
        beginners. Simply drag and drop your JPG files into the software, and
        you&#39;re ready to start converting. This intuitive feature simplifies
        the process, allowing you to focus on your work rather than navigating
        complex menus.
      </p>
      <strong className="mt-10">Flexible Conversion Options</strong>
      <p className="mt-2">
        Customize your PDF output with versatile conversion modes. Whether you
        need to create separate PDFs for each JPG or combine multiple images
        into a single multi-page PDF document, our software gives you the
        flexibility to meet your specific needs. Tailor the conversion process
        to suit your preferences and ensure your files are organized just the
        way you want them.
      </p>
      <strong className="mt-10">Organize Images with Ease</strong>
      <p className="mt-2">
        Take control of your file order before conversion with our easy-to-use
        MOVE UP and MOVE DOWN buttons. Rearrange your JPG images to determine
        their sequence in the final PDF, giving you complete freedom to organize
        your documents exactly as you envision.
      </p>
      <strong className="mt-10">Designed for High-Volume Conversions</strong>
      <p className="mt-2">
        Need to convert thousands of JPG files in seconds? Our JPG to PDF
        Converter is one of the fastest and most versatile solutions available.
        Ideal for both professionals and casual users, this robust software
        allows you to batch process large collections of JPEG files with just a
        few clicks. Launch the converter, drag and drop your files or folders
        into the conversion list, customize your settings, and hit
        &#34;Convert&#34;—your images will be instantly transformed into
        high-quality PDF documents.
      </p>
      <strong className="mt-10">User-Friendly with Advanced Features</strong>
      <p className="mt-2">
        Not only is our JPG to PDF Converter fast and easy to use, but it also
        offers advanced options for those who need more control over the
        conversion process. Choose to convert each JPG file into a separate PDF
        or merge all your images into a single, multi-page PDF. Adjust image
        quality settings to ensure the final PDF meets your specific
        requirements, making this tool adaptable to a wide range of needs.
      </p>
      <strong className="mt-10">Why Convert JPG to PDF?</strong>
      <p className="mt-2">
        JPG (Joint Photographic Experts Group) is a widely-used image format
        known for its efficient compression, perfect for online sharing.
        However, when it comes to preserving image quality, especially for text
        or line drawings, converting to PDF (Portable Document Format) is often
        the better choice. PDFs are universally recognized and ideal for
        sharing, printing, and archiving documents, offering a combination of
        text, graphics, and images that maintain their quality across devices.
      </p>
      <strong className="mt-10">Conclusion</strong>
      <p className="mt-2">
        Our JPG to PDF Converter for Windows is the perfect solution for anyone
        looking to convert images to PDF with speed, security, and ease. Whether
        you&#39;re handling a few files or thousands, this software delivers the
        efficiency and flexibility you need to get the job done. Don&#39;t
        settle for less—download the best JPG to PDF Converter for Windows today
        and experience effortless file conversion at its finest.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.JPGtoPDFConverterDesktop} for Windows | Fast & Secure JPG to PDF Tool`,
    keywords:
      "JPG to PDF Converter, JPEG to PDF Converter, Convert JPG to PDF, Batch JPG to PDF, Windows PDF Converter, Image to PDF Tool",
    description:
      "Easily convert JPEG files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality PDF output.",
    alternates: {
      canonical: productWebsites.JPGtoPDFConverterDesktop,
    },
    openGraph: {
      title: `Free ${productTitles.JPGtoPDFConverterDesktop} for Windows |  Fast & Secure JPG to PDF Tool`,
      description:
        "Easily convert JPEG files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality PDF output.",
      url: productWebsites.JPGtoPDFConverterDesktop,
      siteName: `${productTitles.JPGtoPDFConverterDesktop} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: productImages.JPGtoPDFConverterDesktop.imgName,
            width: productImages.JPGtoPDFConverterDesktop.width,
          }),
          width: productImages.JPGtoPDFConverterDesktop.width,
          height: productImages.JPGtoPDFConverterDesktop.height,
          alt: `Free ${productTitles.JPGtoPDFConverterDesktop} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
};
