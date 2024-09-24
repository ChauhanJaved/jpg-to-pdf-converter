//External imports
import cloudinaryLoader from "@/lib/cloudinary-loader";
import { Metadata } from "next";
import { ReactNode } from "react";

export const headerCompanyName: string = "FrameworkTeam";
export const companyName: string = "FrameworkTeam Softwares";
export const email: string = "support@frameworkteam.com";
export const copyrightYear: string = new Date().getFullYear().toString();
export enum HeaderNavItems {
  Home = "home",
  Services = "services",
  Portfolio = "portfolio",
  Contact = "contact",
}
export const heroTitle: string =
  "We offer cutting-edge solutions to grow your business";
export const heroDesc: string =
  "We are team of talented professionals creating feature-rich Progressive Web Apps and Windows Desktop Applications.";
export const headerNavItems: string[] = [
  HeaderNavItems.Home,
  HeaderNavItems.Services,
  HeaderNavItems.Portfolio,
  HeaderNavItems.Contact,
];
export const indexMetadata: Metadata = {
  title: `${companyName} - India | Progressive Web Apps | Windows Desktop Applications`,
  description: `${heroTitle}. ${heroDesc}`,
  openGraph: {
    title: `${companyName} - India | Progressive Web Apps | Windows Desktop Applications`,
    description: `${heroTitle}. ${heroDesc}`,
    url: "https://frameworkteam.com",
    siteName: `${companyName} - India`,
    images: [
      {
        url: "https://res.cloudinary.com/dgq2mp4fs/image/upload/v1721890438/frameworkteam/hero-img.png", // Must be an absolute URL
        width: 539,
        height: 438,
        alt: `${companyName} - India`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};
export enum Categories {
  All = "all",
  PDF = "pdf",
  TIFF = "tiff",
  JPG = "jpg",
  PNG = "png",
  BMP = "bmp",
  PCX = "pcx",
  HTML = "html",
  Converter = "converter",
  Merger = "merger",
  Combiner = "combiner",
  Splitter = "splitter",
}
export const categoryList: string[] = [
  Categories.All,
  Categories.Converter,
  Categories.PDF,
  Categories.TIFF,
  Categories.Merger,
  Categories.Splitter,
  Categories.Combiner,
  Categories.JPG,
  Categories.PNG,
  Categories.BMP,
  Categories.PCX,
  Categories.HTML,
];

export enum ProductIDs {
  JPGtoPDFConverter = "jpg-to-pdf-converter",
  TIFFtoPDFConverter = "tiff-to-pdf-converter",
  PNGtoPDFConverter = "png-to-pdf-converter",

  PDFtoJPGConverter = "pdf-to-jpg-converter",
  PDFtoTIFFConverter = "pdf-to-tiff-converter",
  PDFtoPNGConverter = "pdf-to-png-converter",
  PDFtoImageConverter = "pdf-to-image-converter",

  TIFFSplitter = "tiff-splitter",
  TIFFCombiner = "tiff-combiner",
  TIFFSplitMerge = "tiff-split-merge",

  PDFSplitter = "pdf-splitter",
  PDFCombiner = "pdf-combiner",
  PDFSplitMerge = "pdf-split-merge",

  WebpageThumbnailer = "webpage-thumbnailer",
  ConvertHTMLtoImage = "convert-html-to-image",
  WebsitesScreenshot = "websites-screenshot",
}

enum ProductTitles {
  JPGtoPDFConverter = "JPG to PDF Converter",
  TIFFtoPDFConverter = "TIFF to PDF Converter",
  PNGtoPDFConverter = "PNG to PDF Converter",

  PDFtoJPGConverter = "PDF to JPG Converter",
  PDFtoTIFFConverter = "PDF to TIFF Converter",
  PDFtoPNGConverter = "PDF to PNG Converter",
  PDFtoImageConverter = "PDF to Image Converter",

  TIFFSplitter = "TIFF Splitter",
  TIFFCombiner = "TIFF Combiner",
  TIFFSplitMerge = "TIFF Split Merge",

  PDFSplitter = "PDF Splitter",
  PDFCombiner = "PDF Combiner",
  PDFSplitMerge = "PDF Split Merge",

  WebpageThumbnailer = "Webpage Thumbnailer",
  ConvertHTMLtoImage = "Convert HTML to Image",
  WebsitesScreenshot = "Websites Screenshot",
}

enum ProductWebsites {
  JPGtoPDFConverter = "https://www.jpg-to-pdf-converter.com/",
  TIFFtoPDFConverter = "https://www.tiff-to-pdf-converter.com/",
  PNGtoPDFConverter = "https://www.png-to-pdf-converter.com/",

  PDFtoJPGConverter = "https://www.pdf-to-jpg-converter.com/",
  PDFtoTIFFConverter = "https://www.pdf-to-tiff-converter.com/",
  PDFtoPNGConverter = "https://www.pdf-to-png-converter.com/",
  PDFtoImageConverter = "https://www.pdf-to-image-converter.com/",

  TIFFSplitter = "https://www.tiff-split-combine.com/tiff-splitter.html",
  TIFFCombiner = "https://www.tiff-split-combine.com/tiff-combiner.html",
  TIFFSplitMerge = "https://www.tiff-split-combine.com/tiff-split-merge.html",

  PDFSplitter = "https://pdf-split-merge.com/pdf-splitter.html",
  PDFCombiner = "https://pdf-split-merge.com/pdf-combiner.html",
  PDFSplitMerge = "https://pdf-split-merge.com/pdf-split-merge.html",

  WebpageThumbnailer = "https://www.webpagethumbnailer.com/",
  ConvertHTMLtoImage = "https://www.converthtmltoimage.com/",
  WebsitesScreenshot = "https://www.websitesscreenshot.com/",
}

enum ProductDownloadLinks {
  JPGtoPDFConverter = "https://jpg-to-pdf-converter.com/downloads/jpg-to-pdf-converter-setup.exe",
  TIFFtoPDFConverter = "https://tiff-to-pdf-converter.com/downloads/tiff-to-pdf-converter-setup.exe",
  PNGtoPDFConverter = "https://png-to-pdf-converter.com/downloads/png-to-pdf-converter-setup.exe",

  PDFtoJPGConverter = "https://pdf-to-jpg-converter.com/downloads/pdf-to-jpg-converter-setup.exe",
  PDFtoTIFFConverter = "https://pdf-to-tiff-converter.com/downloads/pdf-to-tiff-converter-setup.exe",
  PDFtoPNGConverter = "https://pdf-to-png-converter.com/downloads/pdf-to-png-converter-setup.exe",
  PDFtoImageConverter = "https://pdf-to-image-converter.com/downloads/pdf-to-image-converter-setup.exe",

  TIFFSplitter = "https://tiff-split-combine.com/downloads/tiff-splitter-setup.exe",
  TIFFCombiner = "https://tiff-split-combine.com/downloads/tiff-combiner-setup.exe",
  TIFFSplitMerge = "https://tiff-split-combine.com/downloads/tiff-split-merge-setup.exe",

  PDFSplitter = "https://pdf-split-merge.com/downloads/pdf-splitter-setup.exe",
  PDFCombiner = "https://pdf-split-merge.com/downloads/pdf-combiner-setup.exe",
  PDFSplitMerge = "https://pdf-split-merge.com/downloads/pdf-split-merge-setup.exe",

  WebpageThumbnailer = "https://www.webpagethumbnailer.com/media/download/webpagethumbnailer_setup.exe",
  ConvertHTMLtoImage = "https://www.converthtmltoimage.com/media/download/converthtmltoimage_trial.exe",
  WebsitesScreenshot = "https://www.websitesscreenshot.com/media/download/websitesscreenshot_trial.exe",
}

const productImages = {
  JPGtoPDFConverter: {
    imgName: "jpg-to-pdf-converter",
    width: 756,
    height: 463,
  },
  TIFFtoPDFConverter: {
    imgName: "tiff-to-pdf-converter",
    width: 756,
    height: 463,
  },
  PNGtoPDFConverter: {
    imgName: "png-to-pdf-converter",
    width: 756,
    height: 463,
  },

  PDFtoJPGConverter: {
    imgName: "pdf-to-jpg-converter",
    width: 756,
    height: 463,
  },
  PDFtoTIFFConverter: {
    imgName: "pdf-to-tiff-converter",
    width: 739,
    height: 469,
  },
  PDFtoPNGConverter: {
    imgName: "pdf-to-png-converter",
    width: 739,
    height: 469,
  },
  PDFtoImageConverter: {
    imgName: "pdf-to-image-converter",
    width: 739,
    height: 469,
  },

  TIFFSplitter: {
    imgName: "tiff-splitter",
    width: 739,
    height: 469,
  },
  TIFFCombiner: {
    imgName: "tiff-combiner",
    width: 739,
    height: 469,
  },
  TIFFSplitMerge: {
    imgName: "tiff-split-merge",
    width: 739,
    height: 469,
  },

  PDFSplitter: {
    imgName: "pdf-splitter",
    width: 739,
    height: 469,
  },
  PDFCombiner: {
    imgName: "pdf-combiner",
    width: 739,
    height: 469,
  },
  PDFSplitMerge: {
    imgName: "pdf-split-merge",
    width: 739,
    height: 469,
  },

  WebpageThumbnailer: {
    imgName: "webpage-thumbnailer",
    width: 520,
    height: 349,
  },
  ConvertHTMLtoImage: {
    imgName: "convert-html-to-image",
    width: 429,
    height: 271,
  },
  WebsitesScreenshot: {
    imgName: "websites-screenshot",
    width: 543,
    height: 295,
  },
};

interface portfolioItem {
  id: string;
  title: string;
  desc?: string;
  src: string;
  width: number;
  height: number;
  categories: string[];
  pageLink: string;
  productWebsite: ProductWebsites;
  downloadLink: ProductDownloadLinks;
  features: string[];
  description?: ReactNode;
  metaData: Metadata;
}

export const portfolioItems: portfolioItem[] = [
  // ***** JPG to PDF Converter *****
  {
    id: ProductIDs.JPGtoPDFConverter,
    title: ProductTitles.JPGtoPDFConverter,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.JPGtoPDFConverter.imgName.toLowerCase()}`,
    width: productImages.JPGtoPDFConverter.width,
    height: productImages.JPGtoPDFConverter.height,
    categories: [
      Categories.All,
      Categories.JPG,
      Categories.PDF,
      Categories.Converter,
    ],
    pageLink: `/${ProductIDs.JPGtoPDFConverter}`,
    productWebsite: ProductWebsites.JPGtoPDFConverter,
    downloadLink: ProductDownloadLinks.JPGtoPDFConverter,
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
        <strong className="mt-10">
          Lightning-Fast and Reliable Conversions
        </strong>
        <p className="mt-2">
          Experience rapid conversion from JPG to PDF with our dependable
          software. Whether you&#39;re working from home, the office, or on the
          go, our tool is engineered to deliver quick and reliable results
          without relying on an internet connection. Convert your JPEG files to
          PDF format in a matter of seconds, no matter where you are, ensuring
          your work is always uninterrupted.
        </p>
        <strong className="mt-10">Effortless Batch Conversion</strong>
        <p className="mt-2">
          Save time and streamline your workflow by converting multiple JPG
          images to PDFs in a single operation. Our batch processing feature is
          designed to handle large volumes of files quickly and efficiently,
          eliminating the tedious task of converting images one by one. Whether
          you&#39;re dealing with a handful of images or thousands, our software
          makes bulk conversion simple and hassle-free.
        </p>
        <strong className="mt-10">Intuitive Drag-and-Drop Interface</strong>
        <p className="mt-2">
          Our user-friendly interface makes file conversion effortless, even for
          beginners. Simply drag and drop your JPG files into the software, and
          you&#39;re ready to start converting. This intuitive feature
          simplifies the process, allowing you to focus on your work rather than
          navigating complex menus.
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
          their sequence in the final PDF, giving you complete freedom to
          organize your documents exactly as you envision.
        </p>
        <strong className="mt-10">Designed for High-Volume Conversions</strong>
        <p className="mt-2">
          Need to convert thousands of JPG files in seconds? Our JPG to PDF
          Converter is one of the fastest and most versatile solutions
          available. Ideal for both professionals and casual users, this robust
          software allows you to batch process large collections of JPEG files
          with just a few clicks. Launch the converter, drag and drop your files
          or folders into the conversion list, customize your settings, and hit
          &#34;Convert&#34;—your images will be instantly transformed into
          high-quality PDF documents.
        </p>
        <strong className="mt-10">User-Friendly with Advanced Features</strong>
        <p className="mt-2">
          Not only is our JPG to PDF Converter fast and easy to use, but it also
          offers advanced options for those who need more control over the
          conversion process. Choose to convert each JPG file into a separate
          PDF or merge all your images into a single, multi-page PDF. Adjust
          image quality settings to ensure the final PDF meets your specific
          requirements, making this tool adaptable to a wide range of needs.
        </p>
        <strong className="mt-10">Why Convert JPG to PDF?</strong>
        <p className="mt-2">
          JPG (Joint Photographic Experts Group) is a widely-used image format
          known for its efficient compression, perfect for online sharing.
          However, when it comes to preserving image quality, especially for
          text or line drawings, converting to PDF (Portable Document Format) is
          often the better choice. PDFs are universally recognized and ideal for
          sharing, printing, and archiving documents, offering a combination of
          text, graphics, and images that maintain their quality across devices.
        </p>
        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our JPG to PDF Converter for Windows is the perfect solution for
          anyone looking to convert images to PDF with speed, security, and
          ease. Whether you&#39;re handling a few files or thousands, this
          software delivers the efficiency and flexibility you need to get the
          job done. Don&#39;t settle for less—download the best JPG to PDF
          Converter for Windows today and experience effortless file conversion
          at its finest.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.JPGtoPDFConverter} for Windows | Fast & Secure JPG to PDF Tool`,
      keywords:
        "JPG to PDF Converter, JPEG to PDF Converter, Convert JPG to PDF, Batch JPG to PDF, Windows PDF Converter, Image to PDF Tool",
      description:
        "Easily convert JPEG files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality PDF output.",
      alternates: {
        canonical: ProductWebsites.JPGtoPDFConverter,
      },
      openGraph: {
        title: `Free ${ProductTitles.JPGtoPDFConverter} for Windows |  Fast & Secure JPG to PDF Tool`,
        description:
          "Easily convert JPEG files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality PDF output.",
        url: `https://www.frameworkteam.com/${ProductIDs.JPGtoPDFConverter}.html`,
        siteName: `${ProductTitles.JPGtoPDFConverter} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLocaleLowerCase}/${productImages.JPGtoPDFConverter.imgName.toLocaleLowerCase}`,
              width: productImages.JPGtoPDFConverter.width,
            }),
            width: productImages.JPGtoPDFConverter.width,
            height: productImages.JPGtoPDFConverter.height,
            alt: `Free ${ProductTitles.JPGtoPDFConverter} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** TIFF to PDF Converter ****
  {
    id: ProductIDs.TIFFtoPDFConverter,
    title: ProductTitles.TIFFtoPDFConverter,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFtoPDFConverter.imgName.toLowerCase()}`,
    width: productImages.TIFFtoPDFConverter.width,
    height: productImages.TIFFtoPDFConverter.height,
    categories: [
      Categories.All,
      Categories.TIFF,
      Categories.PDF,
      Categories.Converter,
    ],
    pageLink: `/${ProductIDs.TIFFtoPDFConverter}`,
    productWebsite: ProductWebsites.TIFFtoPDFConverter,
    downloadLink: ProductDownloadLinks.TIFFtoPDFConverter,
    features: [
      "Convert Locally with Complete Offline Security",
      "Experience Ultra-Fast Conversion",
      "Effortless Batch Processing",
      "Intuitive Drag-and-Drop Functionality",
      "Versatile Conversion Options",
      "Easily Reorder Images as Needed",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Introducing the Ultimate TIFF to PDF Converter for Windows
        </strong>
        <p className="mt-2">
          Convert your TIFF files to PDFs securely and efficiently with our
          powerful desktop software. Designed for Windows users, our TIFF to PDF
          converter operates entirely offline, ensuring that your data remains
          private and secure. Perform conversions on your local system,
          eliminating the need for an internet connection and reducing the risk
          of data breaches or unauthorized access.
        </p>
        <strong className="mt-10">High-Speed and Reliable Conversions</strong>
        <p className="mt-2">
          Experience fast and dependable TIFF to PDF conversions with our
          software. Whether you&#39;re at home, in the office, or on the move,
          this tool is engineered to deliver quick results without the need for
          an internet connection. Convert your TIFF files to PDF format in
          seconds, ensuring your work remains uninterrupted.
        </p>
        <strong className="mt-10">Effortless Batch Conversion</strong>
        <p className="mt-2">
          Save time by converting multiple TIFF images to PDFs in a single
          operation. Our batch processing feature handles large volumes of files
          quickly and efficiently, eliminating the hassle of converting images
          one by one. Whether you&#39;re working with a few files or thousands,
          our software simplifies bulk conversion.
        </p>
        <strong className="mt-10">Intuitive Drag-and-Drop Interface</strong>
        <p className="mt-2">
          Enjoy an easy-to-use interface that makes file conversion simple, even
          for beginners. Drag and drop your TIFF files into the software, and
          you&#39;re ready to start converting. This intuitive feature
          streamlines the process, letting you focus on your work.
        </p>
        <strong className="mt-10">Flexible Conversion Modes</strong>
        <p className="mt-2">
          Customize your PDF output with versatile conversion options. Choose to
          convert each TIFF file into a separate PDF, combine all TIFF images
          into a single multi-page PDF document, or split each TIFF image into
          individual single-page PDFs. Tailor the process to meet your specific
          needs.
        </p>
        <strong className="mt-10">Advanced Compression Settings</strong>
        <p className="mt-2">
          Optimize your PDFs with advanced compression options. Select from ZIP,
          LZW, FAX Group4, RLE, or choose no compression to maintain the highest
          image quality. These settings allow you to balance file size and image
          quality according to your preferences.
        </p>
        <strong className="mt-10">Designed for High-Volume Conversions</strong>
        <p className="mt-2">
          Need to convert thousands of TIFF files quickly? Our TIFF to PDF
          Converter is one of the fastest and most versatile solutions
          available. Ideal for professionals and casual users alike, this
          software allows you to batch process large collections of TIFF files
          with just a few clicks. Launch the converter, drag and drop your files
          or folders, customize your settings, and hit &#34;Convert&#34;—your
          images will be instantly transformed into high-quality PDF documents.
        </p>
        <strong className="mt-10">User-Friendly with Advanced Features</strong>
        <p className="mt-2">
          Our TIFF to PDF Converter is not only fast and easy to use but also
          offers advanced options for those needing more control over the
          conversion process. Adjust compression settings, choose between
          various conversion modes, and ensure the final PDF meets your exact
          requirements.
        </p>
        <strong className="mt-10">Why Convert TIFF to PDF?</strong>
        <p className="mt-2">
          TIFF (Tagged Image File Format) is a popular format for high-quality
          images, but it can be cumbersome for sharing and printing. Converting
          TIFF files to PDF (Portable Document Format) ensures compatibility
          across devices and preserves the quality of your images. PDFs are
          ideal for document sharing, printing, and archiving, providing a
          versatile solution for your TIFF files.
        </p>
        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our TIFF to PDF Converter for Windows offers the perfect solution for
          converting images to PDF quickly, securely, and with ease. Whether
          handling a few files or thousands, this software delivers the speed,
          flexibility, and user-friendly features you need. Don&#39;t settle for
          less—download the best TIFF to PDF Converter for Windows today and
          experience effortless file conversion at its finest.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.TIFFtoPDFConverter} for Windows | Fast & Secure TIFF to PDF Tool`,
      keywords:
        "TIFF to PDF Converter, Convert TIFF to PDF, Batch TIFF to PDF, Windows PDF Converter, Image to PDF Tool, TIFF Compression",
      description:
        "Convert TIFF files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, advanced compression settings, and customizable options to ensure top-quality PDF output.",
      alternates: {
        canonical: ProductWebsites.TIFFtoPDFConverter,
      },
      openGraph: {
        title: `Free ${ProductTitles.TIFFtoPDFConverter} for Windows |  Fast & Secure TIFF to PDF Tool`,
        description:
          "Convert TIFF files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, advanced compression settings, and customizable options to ensure top-quality PDF output.",
        url: `https://www.frameworkteam.com/${ProductIDs.TIFFtoPDFConverter}.html`,
        siteName: `${ProductTitles.TIFFtoPDFConverter} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFtoPDFConverter.imgName.toLowerCase()}`,
              width: productImages.TIFFtoPDFConverter.width,
            }),
            width: productImages.TIFFtoPDFConverter.width,
            height: productImages.TIFFtoPDFConverter.height,
            alt: `Free ${ProductTitles.TIFFtoPDFConverter} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** PNG to PDF Converter *****
  {
    id: ProductIDs.PNGtoPDFConverter,
    title: ProductTitles.PNGtoPDFConverter,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.PNGtoPDFConverter.imgName.toLowerCase()}`,
    width: productImages.PNGtoPDFConverter.width,
    height: productImages.PNGtoPDFConverter.height,
    categories: [
      Categories.All,
      Categories.PNG,
      Categories.PDF,
      Categories.Converter,
    ],
    pageLink: `/${ProductIDs.PNGtoPDFConverter}`,
    productWebsite: ProductWebsites.PNGtoPDFConverter,
    downloadLink: ProductDownloadLinks.PNGtoPDFConverter,
    features: [
      "Private & Secure Offline Processing",
      "Ultra-Fast Conversion Performance",
      "Convenient Batch Processing",
      "User-Friendly Drag-and-Drop Interface",
      "Adaptable Conversion Options",
      "Effortless Image Order Adjustment",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Presenting the Ultimate PNG to PDF Converter for Windows
        </strong>
        <p className="mt-2">
          Effortlessly transform your PNG files into PDFs with our robust
          desktop software, crafted specifically for Windows users. Operating
          entirely offline, our converter ensures that your data stays private
          and secure. With all conversions performed on your local machine,
          there&rsquo;s no need for an internet connection, greatly reducing the
          risk of data breaches or unauthorized access.
        </p>
        <strong className="mt-10">Swift and Reliable Conversions</strong>
        <p className="mt-2">
          Enjoy rapid and trustworthy PNG to PDF conversions using our software.
          Whether you&#39;re at home, in the office, or on the go, this tool is
          designed to deliver fast results without relying on an internet
          connection. Convert your PNG files into PDF format in mere seconds,
          ensuring a seamless workflow.
        </p>
        <strong className="mt-10">Streamlined Batch Conversion</strong>
        <p className="mt-2">
          Save valuable time by converting multiple PNG images to PDFs in one
          simple operation. Our batch processing feature efficiently handles
          large volumes of files, so you don&#39;t have to convert images
          individually. Whether you&#39;re managing a handful of files or
          processing thousands, our software simplifies bulk conversion with
          ease.
        </p>
        <strong className="mt-10">Easy Drag-and-Drop Interface</strong>
        <p className="mt-2">
          Benefit from a straightforward interface that makes file conversion
          easy, even for those new to the process. Simply drag and drop your PNG
          files into the software, and you&#39;re ready to start converting.
          This intuitive feature streamlines your work, allowing you to focus on
          what matters most.
        </p>
        <strong className="mt-10">Customizable Conversion Modes</strong>
        <p className="mt-2">
          Tailor your PDF output with easy-to-use options. Choose between
          converting each PNG file into an individual PDF or merging all your
          PNG images into a single, multi-page PDF document. These flexible
          modes cater to your basic conversion needs without unnecessary
          complications.
        </p>
        <strong className="mt-10">Optimized for High-Volume Conversions</strong>
        <p className="mt-2">
          Need to convert a large number of PNG files quickly? Our PNG to PDF
          Converter is among the fastest and most versatile tools available.
          Perfect for both professionals and casual users, this software lets
          you batch process extensive collections of PNG files with just a few
          clicks. Launch the converter, drag and drop your files or folders,
          adjust your settings, and click &#34;Convert&#34;—your images will be
          swiftly transformed into high-quality PDF documents.
        </p>
        <strong className="mt-10">User-Friendly with Essential Features</strong>
        <p className="mt-2">
          Our PNG to PDF Converter combines speed and ease of use with essential
          features for those who require greater control over the conversion
          process. Select from various conversion modes to ensure the final PDF
          meets your exact specifications.
        </p>
        <strong className="mt-10">Why Convert PNG to PDF?</strong>
        <p className="mt-2">
          While PNG (Portable Network Graphics) is a popular format for
          high-quality images, it can be inconvenient for sharing and printing.
          Converting PNG files to PDF (Portable Document Format) guarantees
          compatibility across devices while preserving image quality. PDFs are
          ideal for sharing, printing, and archiving, offering a versatile
          solution for your PNG files.
        </p>
        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our PNG to PDF Converter for Windows is the perfect tool for
          converting images to PDF quickly, securely, and with ease. Whether
          you&#39;re handling a few files or processing thousands, this software
          offers the speed, flexibility, and user-friendly features you need.
          Don&#39;t compromise—download the best PNG to PDF Converter for
          Windows today and experience effortless file conversion at its finest.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.PNGtoPDFConverter} for Windows | Fast & Secure PNG to PDF Tool`,
      keywords:
        "PNG to PDF Converter, Convert PNG to PDF, Batch PNG to PDF, Windows PDF Converter, Image to PDF Tool, PNG Compression",
      description:
        "Convert PNG files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, advanced compression settings, and customizable options to ensure top-quality PDF output.",
      alternates: {
        canonical: ProductWebsites.PNGtoPDFConverter,
      },
      openGraph: {
        title: `Free ${ProductTitles.PNGtoPDFConverter} for Windows |  Fast & Secure PNG to PDF Tool`,
        description:
          "Convert PNG files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, advanced compression settings, and customizable options to ensure top-quality PDF output.",
        url: `https://www.frameworkteam.com/${ProductIDs.PNGtoPDFConverter}.html`,
        siteName: `${ProductTitles.PNGtoPDFConverter} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.PNGtoPDFConverter.imgName.toLowerCase()}`,
              width: productImages.PNGtoPDFConverter.width,
            }),
            width: productImages.PNGtoPDFConverter.width,
            height: productImages.PNGtoPDFConverter.height,
            alt: `Free ${ProductTitles.PNGtoPDFConverter} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** PDF to JPG Converter *****
  {
    id: ProductIDs.PDFtoJPGConverter,
    title: ProductTitles.PDFtoJPGConverter,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFtoJPGConverter.imgName.toLowerCase()}`,
    width: productImages.PDFtoJPGConverter.width,
    height: productImages.PDFtoJPGConverter.height,
    categories: [
      Categories.All,
      Categories.PDF,
      Categories.JPG,
      Categories.Converter,
    ],
    pageLink: `/${ProductIDs.PDFtoJPGConverter}`,
    productWebsite: ProductWebsites.PDFtoJPGConverter,
    downloadLink: ProductDownloadLinks.PDFtoJPGConverter,
    features: [
      "Local and Secure Offline Processing",
      "Ultra-Fast Conversion Speed",
      "Easy Batch Conversion",
      "Intuitive Drag-and-Drop Interface",
      "Customizable Output Settings",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Introducing the Ultimate PDF to JPG Converter for Windows
        </strong>
        <p className="mt-2">
          Easily convert your PDF files into high-quality JPG images with our
          robust desktop software, designed specifically for Windows users. With
          our PDF to JPG converter, you can perform all conversions offline,
          keeping your data private and secure. There&#39;s no need for an
          internet connection, so you can confidently convert files locally,
          protecting them from any potential security risks or unauthorized
          access.
        </p>
        <strong className="mt-10">
          Fast and Reliable PDF to JPG Conversion
        </strong>
        <p className="mt-2">
          Our software is engineered for lightning-fast and dependable
          conversions. Whether you&#39;re at home, in the office, or on the go,
          our tool ensures rapid transformation of PDFs into JPGs, all without
          the need for an internet connection. Convert your documents to image
          format in seconds, ensuring that your work remains uninterrupted no
          matter where you are.
        </p>
        <strong className="mt-10">Streamlined Batch Conversion</strong>
        <p className="mt-2">
          Boost your productivity by converting multiple PDF files to JPG images
          in one go. Our batch conversion feature allows you to handle large
          volumes of files quickly and efficiently, saving you from the
          repetitive task of converting documents one by one. Whether you have a
          handful of PDFs or thousands, our software simplifies bulk conversion,
          making it hassle-free.
        </p>
        <strong className="mt-10">Intuitive Drag-and-Drop Interface</strong>
        <p className="mt-2">
          Designed with ease of use in mind, our PDF to JPG converter features a
          user-friendly drag-and-drop interface. Simply drag your PDF files into
          the software, and you&#39;re ready to begin the conversion process.
          This intuitive design streamlines the workflow, so you can focus on
          your tasks without getting bogged down by complicated software.
        </p>
        <strong className="mt-10">Optimized for High-Volume Conversions</strong>
        <p className="mt-2">
          Designed to handle even the most demanding tasks, our PDF to JPG
          Converter is perfect for high-volume conversions. Whether you need to
          convert a few PDFs or thousands, this powerful software handles bulk
          processing with ease. Simply drag your files or folders into the
          converter, customize your settings, and hit &#34;Convert&#34;—your
          PDFs will be quickly and efficiently turned into high-quality JPG
          images.
        </p>
        <strong className="mt-10">Versatile Conversion Options</strong>
        <p className="mt-2">
          Tailor your conversion process with flexible settings to suit your
          needs. Convert each PDF page into a separate high-quality JPG file
          with ease. Additionally, adjust key settings such as color mode (high
          color 24-bit or grayscale 8-bit), resolution for X and Y axes in DPI,
          and JPEG quality. These options give you full control over the output,
          ensuring it meets your specific requirements.
        </p>
        <strong className="mt-10">Why Convert PDF to JPG?</strong>
        <p className="mt-2">
          PDF (Portable Document Format) is a universal file format ideal for
          sharing and archiving documents, combining text, images, and graphics
          in a single file. However, converting PDFs to JPG (Joint Photographic
          Experts Group) images can be useful when you need to embed or share
          individual pages, particularly when dealing with visual content. JPGs
          are widely supported across various platforms and devices, making them
          ideal for online sharing and presentations.
        </p>
        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our PDF to JPG Converter for Windows offers the perfect blend of
          speed, security, and ease of use. Whether you’re converting a few
          files or managing large batches, this software provides the efficiency
          and flexibility you need to get the job done. Don’t settle for
          less—download the best PDF to JPG Converter for Windows today and
          experience seamless file conversion like never before.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.PDFtoJPGConverter} for Windows | Fast & Secure PDF to JPG Tool`,
      keywords:
        "PDF to JPG Converter, Convert PDF to JPG, Batch PDF to JPG, Windows PDF Converter, Document to Image Tool",
      description:
        "Easily convert PDF files to JPG with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality image output.",
      alternates: {
        canonical: ProductWebsites.PDFtoJPGConverter,
      },
      openGraph: {
        title: `Free ${ProductTitles.PDFtoJPGConverter} for Windows | Fast & Secure PDF to JPG Tool`,
        description:
          "Easily convert PDF files to JPG with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality image output.",
        url: `https://www.frameworkteam.com/${ProductIDs.PDFtoJPGConverter}.html`,
        siteName: `${ProductTitles.PDFtoJPGConverter} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLocaleLowerCase()}/${productImages.PDFtoJPGConverter.imgName.toLocaleLowerCase()}`,
              width: productImages.PDFtoJPGConverter.width,
            }),
            width: productImages.PDFtoJPGConverter.width,
            height: productImages.PDFtoJPGConverter.height,
            alt: `Free ${ProductTitles.PDFtoJPGConverter} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** PDF to TIFF Converter *****
  {
    id: ProductIDs.PDFtoTIFFConverter,
    title: ProductTitles.PDFtoTIFFConverter,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFtoTIFFConverter.imgName.toLowerCase()}`,
    width: productImages.PDFtoTIFFConverter.width,
    height: productImages.PDFtoTIFFConverter.height,
    categories: [
      Categories.All,
      Categories.PDF,
      Categories.TIFF,
      Categories.Converter,
    ],
    pageLink: `/${ProductIDs.PDFtoTIFFConverter}`,
    productWebsite: ProductWebsites.PDFtoTIFFConverter,
    downloadLink: ProductDownloadLinks.PDFtoTIFFConverter,
    features: [
      "Local and Secure Offline Conversion",
      "Blazing-Fast Processing Speed",
      "Effortless Batch Conversion",
      "Tailorable Output Settings",
      "Enhanced TIFF Configuration",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Discover the Ultimate PDF to TIFF Converter for Windows
        </strong>
        <p className="mt-2">
          Effortlessly transform your PDF files into high-quality TIFF images
          with our advanced desktop software, specially crafted for Windows
          users. Our PDF to TIFF converter enables you to perform conversions
          entirely offline, ensuring that your data remains private and secure.
          With no need for an internet connection, you can convert files
          locally, safeguarding them from any security threats or unauthorized
          access.
        </p>
        <strong className="mt-10">
          Ultra-Fast and Dependable PDF to TIFF Conversion
        </strong>
        <p className="mt-2">
          Our software is designed for speed and reliability, offering rapid
          conversions from PDF to TIFF. Whether you&#39;re at home, in the
          office, or traveling, our tool ensures swift and efficient
          transformation of PDFs into TIFFs, all while maintaining your privacy.
          Convert your documents in seconds, ensuring that your workflow remains
          smooth and uninterrupted, regardless of your location.
        </p>
        <strong className="mt-10">
          Efficient Batch Conversion Made Simple
        </strong>
        <p className="mt-2">
          Increase your efficiency by converting multiple PDF files to TIFF
          images in one go. The batch conversion feature is built to handle
          large volumes of files quickly, eliminating the need to convert
          documents individually. Whether you&#39;re dealing with a few PDFs or
          handling thousands, our software streamlines the bulk conversion
          process, making it straightforward and stress-free.
        </p>
        <strong className="mt-10">
          Optimized for High-Volume Conversion Tasks
        </strong>
        <p className="mt-2">
          Our PDF to TIFF Converter is built to manage even the most demanding
          conversion tasks with ease. Whether you need to convert a small batch
          of PDFs or a large collection, this powerful software can handle
          high-volume processing efficiently. Simply add your files or folders
          into the converter, adjust your settings, and hit
          &#34;Convert&#34;—your PDFs will be quickly and seamlessly converted
          into high-quality TIFF images.
        </p>
        <strong className="mt-10">
          Advanced Features for Precise and Flexible Conversion
        </strong>
        <p className="mt-2">
          Transform your PDF files into high-quality TIFF images with our
          powerful PDF to TIFF converter for Windows. Tailor your output with
          customizable settings, including adjustable resolution in DPI for both
          X and Y dimensions. Choose from a variety of uncompressed color modes,
          such as 23-bit CMYK, 24-bit RGB, 12-bit RGB, or 8-bit Gray, to match
          your specific needs. Take advantage of advanced compression options
          like LZW, PackBits, and various G3 and G4 fax encodings, with options
          for encoding with or without EOLs. Whether you&#39;re converting a
          multipage PDF into a multipage TIFF or splitting it into single-page
          TIFFs, our converter provides the flexibility and precision required
          for professional results.
        </p>
        <strong className="mt-10">Why Convert PDF to TIFF?</strong>
        <p className="mt-2">
          PDF (Portable Document Format) is a widely used format for sharing and
          archiving documents, combining text, images, and graphics in a single
          file. However, converting PDFs to TIFF (Tagged Image File Format)
          images can be advantageous, especially for purposes such as printing,
          professional graphics, and archival storage. TIFFs are known for their
          high quality and are widely supported across various professional
          applications, making them ideal for use in environments where image
          fidelity is paramount.
        </p>
        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our PDF to TIFF Converter for Windows offers an unmatched combination
          of speed, security, and ease of use. Whether you&#39;re converting a
          few files or managing extensive batches, this software delivers the
          performance and flexibility you need to complete your tasks with ease.
          Don&#39;t compromise—download the best PDF to TIFF Converter for
          Windows today and experience flawless file conversion at its finest.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.PDFtoTIFFConverter} for Windows | Fast & Secure PDF to TIFF Tool`,
      keywords:
        "PDF to TIFF Converter, Convert PDF to TIFF, Batch PDF to TIFF, Windows PDF Converter, Document to Image Tool",
      description:
        "Easily convert PDF files to TIFF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality image output.",
      alternates: {
        canonical: ProductWebsites.PDFtoTIFFConverter,
      },
      openGraph: {
        title: `Free ${ProductTitles.PDFtoTIFFConverter} for Windows | Fast & Secure PDF to TIFF Tool`,
        description:
          "Easily convert PDF files to TIFF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality image output.",
        url: `https://www.frameworkteam.com/${ProductIDs.PDFtoTIFFConverter}.html`,
        siteName: `${ProductTitles.PDFtoTIFFConverter} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLocaleLowerCase()}/${productImages.PDFtoTIFFConverter.imgName.toLocaleLowerCase()}`,
              width: productImages.PDFtoTIFFConverter.width,
            }),
            width: productImages.PDFtoTIFFConverter.width,
            height: productImages.PDFtoTIFFConverter.height,
            alt: `Free ${ProductTitles.PDFtoTIFFConverter} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** PDF to PNG Converter *****
  {
    id: ProductIDs.PDFtoPNGConverter,
    title: ProductTitles.PDFtoPNGConverter,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFtoPNGConverter.imgName.toLowerCase()}`,
    width: productImages.PDFtoPNGConverter.width,
    height: productImages.PDFtoPNGConverter.height,
    categories: [
      Categories.All,
      Categories.PDF,
      Categories.PNG,
      Categories.Converter,
    ],
    pageLink: `/${ProductIDs.PDFtoPNGConverter}`,
    productWebsite: ProductWebsites.PDFtoPNGConverter,
    downloadLink: ProductDownloadLinks.PDFtoPNGConverter,
    features: [
      "Secure and private offline processing",
      "Lightning-fast conversion speeds",
      "Effortless batch processing",
      "User-friendly drag-and-drop interface",
      "Flexible output customization options",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Discover the Best PDF to PNG Converter for Windows
        </strong>
        <p className="mt-2">
          Effortlessly transform your PDF files into high-quality PNG images
          with our powerful desktop software, crafted specifically for Windows
          users. Our PDF to PNG converter operates entirely offline, ensuring
          that your data remains private and secure. There&#39;s no need for an
          internet connection, so you can convert your files locally, protecting
          them from any security risks or unauthorized access.
        </p>

        <strong className="mt-10">
          Lightning-Fast and Reliable PDF to PNG Conversion
        </strong>
        <p className="mt-2">
          Engineered for speed and dependability, our software delivers rapid
          PDF to PNG conversions. Whether at home, in the office, or on the go,
          convert your documents to image format in seconds without needing an
          internet connection. Enjoy uninterrupted productivity with fast and
          efficient conversion, no matter where you are.
        </p>

        <strong className="mt-10">Efficient Batch PDF to PNG Conversion</strong>
        <p className="mt-2">
          Maximize your efficiency by converting multiple PDF files to PNG
          images in one easy step. With our batch conversion feature, you can
          quickly and easily handle large volumes of files, eliminating the need
          to convert documents one at a time. Whether you&#39;re working with a
          few PDFs or thousands, our software makes bulk conversion simple and
          stress-free.
        </p>

        <strong className="mt-10">User-Friendly Drag-and-Drop Interface</strong>
        <p className="mt-2">
          Our PDF to PNG converter is designed for ease of use, featuring an
          intuitive drag-and-drop interface. Just drag your PDF files into the
          software, and you&#39;re ready to start converting. This streamlined
          design enhances your workflow, allowing you to focus on your work
          without the hassle of navigating complex software.
        </p>

        <strong className="mt-10">Optimized for High-Volume Conversions</strong>
        <p className="mt-2">
          Perfect for high-volume tasks, our PDF to PNG converter handles bulk
          processing effortlessly. Whether converting a few PDFs or managing
          thousands, this robust software ensures quick and efficient
          conversions. Drag your files or folders into the converter, adjust
          your settings, and hit &#34;Convert&#34;—your PDFs will be transformed
          into high-quality PNG images in no time.
        </p>
        <strong className="mt-10">Flexible Conversion Options</strong>
        <p className="mt-2">
          Our PDF to PNG converter offers customizable output settings tailored
          to your needs. You can adjust the resolution for both X and Y axes in
          DPI to ensure precise image quality. Additionally, choose from a
          variety of color settings including high color (24-bit), 256 color
          (8-bit), 16 color (4-bit), and grayscale (8-bit) to match your
          specific requirements.
        </p>

        <strong className="mt-10">Why Convert PDF to PNG?</strong>
        <p className="mt-2">
          While PDF (Portable Document Format) is ideal for sharing and
          archiving documents, converting PDFs to PNG (Portable Network
          Graphics) images is beneficial when you need high-quality, lossless
          images for web use, design work, or presentations. PNG files offer
          superior image quality with transparency support, making them perfect
          for a wide range of applications.
        </p>

        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our PDF to PNG Converter for Windows offers unmatched speed, security,
          and user-friendliness. Whether you&#39;re converting a few files or
          managing large-scale projects, this software provides the flexibility
          and efficiency you need. Don&#39;t compromise—download the top PDF to
          PNG Converter for Windows today and experience seamless, high-quality
          file conversion.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.PDFtoPNGConverter} for Windows | Fast & Secure PDF to PNG Tool`,
      keywords:
        "PDF to PNG Converter, Convert PDF to PNG, Batch PDF to PNG, Windows PDF Converter, Document to Image Tool",
      description:
        "Effortlessly convert PDF files to PNG with our fast and free Windows software. Experience a user-friendly interface, batch processing, and customizable settings for superior image quality.",
      alternates: {
        canonical: ProductWebsites.PDFtoPNGConverter,
      },
      openGraph: {
        title: `Free ${ProductTitles.PDFtoPNGConverter} for Windows | Fast & Secure PDF to PNG Tool`,
        description:
          "Effortlessly convert PDF files to PNG with our fast and free Windows software. Experience a user-friendly interface, batch processing, and customizable settings for superior image quality.",
        url: `https://www.frameworkteam.com/${ProductIDs.PDFtoPNGConverter}.html`,
        siteName: `${ProductTitles.PDFtoPNGConverter} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLocaleLowerCase()}/${productImages.PDFtoPNGConverter.imgName.toLocaleLowerCase()}`,
              width: productImages.PDFtoPNGConverter.width,
            }),
            width: productImages.PDFtoPNGConverter.width,
            height: productImages.PDFtoPNGConverter.height,
            alt: `Free ${ProductTitles.PDFtoPNGConverter} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** PDF to Image Converter *****
  {
    id: ProductIDs.PDFtoImageConverter,
    title: ProductTitles.PDFtoImageConverter,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFtoImageConverter.imgName.toLowerCase()}`,
    width: productImages.PDFtoImageConverter.width,
    height: productImages.PDFtoImageConverter.height,
    categories: [
      Categories.All,
      Categories.PDF,
      Categories.JPG,
      Categories.PNG,
      Categories.TIFF,
      Categories.BMP,
      Categories.PCX,
      Categories.Converter,
    ],
    pageLink: `/${ProductIDs.PDFtoImageConverter}`,
    productWebsite: ProductWebsites.PDFtoImageConverter,
    downloadLink: ProductDownloadLinks.PDFtoImageConverter,
    features: [
      "Secure, Offline Conversion",
      "Lightning-Fast Processing",
      "Simple Batch Conversion",
      "Customizable Output Options",
      "Convert PDFs to images in various formats",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Discover the Ultimate PDF to Image Converter for Windows
        </strong>
        <p className="mt-2">
          Easily convert your PDF files into various high-quality image formats
          with our powerful desktop software, specifically designed for Windows
          users. This PDF to image converter works entirely offline, ensuring
          complete data privacy and security. With no need for an internet
          connection, you can safely convert your files locally, protecting them
          from security risks or unauthorized access.
        </p>
        <strong className="mt-10">
          Fast and Reliable PDF to Image Conversion
        </strong>
        <p className="mt-2">
          Experience lightning-fast and dependable PDF to image conversion with
          our advanced software. Whether you&#39;re at home, in the office, or
          on the go, convert your documents to image formats like JPG, TIFF,
          PNG, BMP, and PCX in seconds without the need for an internet
          connection. Maintain productivity with swift and efficient
          conversions, no matter where you are.
        </p>
        <strong className="mt-10">
          Effortless Batch PDF to Image Conversion
        </strong>
        <p className="mt-2">
          Enhance your workflow by converting multiple PDF files into images in
          just one step. Our batch conversion feature allows you to handle large
          volumes of files quickly and efficiently, eliminating the need to
          convert documents individually. Whether you&#39;re dealing with a few
          PDFs or thousands, our software simplifies bulk conversion, making it
          stress-free and time-saving.
        </p>
        <strong className="mt-10">Optimized for High-Volume Conversions</strong>
        <p className="mt-2">
          Ideal for high-volume tasks, our PDF to image converter effortlessly
          handles bulk processing. Whether you&#39;re converting a few PDFs or
          managing large-scale projects, this robust software ensures quick and
          efficient conversions. Drag and drop your files or folders into the
          converter, adjust your settings, and hit &#34;Convert&#34;—your PDFs
          will be transformed into high-quality images in no time.
        </p>
        <strong className="mt-10">Customizable Conversion Settings</strong>
        <p className="mt-2">
          Our PDF to image converter supports a wide range of image formats,
          including JPG, TIFF, PNG, BMP, and PCX. You can choose to output
          multi-page TIFFs for comprehensive document handling. Advanced
          settings allow you to fine-tune color options, compression settings,
          and resolution for both precision and quality in every conversion.
        </p>
        <strong className="mt-10">Why Convert PDFs to Images?</strong>
        <p className="mt-2">
          While PDFs are excellent for sharing and archiving, converting them to
          images like JPG, PNG, TIFF, BMP, or PCX can be highly beneficial.
          Image formats offer superior quality for web use, design work, or
          presentations. With the ability to maintain image integrity and
          support transparency (in formats like PNG), converting PDFs to images
          is ideal for various applications.
        </p>
        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our PDF to Image Converter for Windows combines speed, security, and
          user-friendliness in one powerful tool. Whether converting a handful
          of files or managing large-scale projects, this software delivers the
          flexibility and efficiency you need. Don&#39;t settle for
          less—download the best PDF to Image Converter for Windows today and
          enjoy seamless, high-quality file conversion.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.PDFtoImageConverter} for Windows | Fast & Versatile PDF to Image Tool`,
      keywords:
        "PDF to Image Converter, Convert PDF to Image, Batch PDF to Image, Windows PDF Converter, Document to Image Tool",
      description:
        "Effortlessly convert PDF files to various image formats with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and advanced settings for optimal image quality.",
      alternates: {
        canonical: ProductWebsites.PDFtoImageConverter,
      },
      openGraph: {
        title: `Free ${ProductTitles.PDFtoImageConverter} for Windows | Fast & Versatile PDF to Image Tool`,
        description:
          "Effortlessly convert PDF files to various image formats with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and advanced settings for optimal image quality.",
        url: `https://www.frameworkteam.com/${ProductIDs.PDFtoImageConverter}.html`,
        siteName: `${ProductTitles.PDFtoImageConverter} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFtoImageConverter.imgName.toLowerCase()}`,
              width: productImages.PDFtoImageConverter.width,
            }),
            width: productImages.PDFtoImageConverter.width,
            height: productImages.PDFtoImageConverter.height,
            alt: `Free ${ProductTitles.PDFtoImageConverter} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** TIFF Splitter *****
  {
    id: ProductIDs.TIFFSplitter,
    title: ProductTitles.TIFFSplitter,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFSplitter.imgName.toLowerCase()}`,
    width: productImages.TIFFSplitter.width,
    height: productImages.TIFFSplitter.height,
    categories: [Categories.All, Categories.TIFF, Categories.Splitter],
    pageLink: `/${ProductIDs.TIFFSplitter}`,
    productWebsite: ProductWebsites.TIFFSplitter,
    downloadLink: ProductDownloadLinks.TIFFSplitter,
    features: [
      "Split Locally with Full Offline Security",
      "Blazing-Fast Performance",
      "Streamlined Batch Splitting",
      "Flexible Splitting Options",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Discover the Ultimate TIFF Splitter for Windows
        </strong>
        <p className="mt-2">
          Effortlessly manage and split your multi-page TIFF files with our
          powerful desktop software, specifically designed for Windows users.
          This TIFF splitter operates entirely offline, ensuring complete data
          privacy and security. With no need for an internet connection, you can
          safely split your files locally, protecting them from security risks
          or unauthorized access.
        </p>
        <strong className="mt-10">Fast and Reliable TIFF Splitting</strong>
        <p className="mt-2">
          Experience lightning-fast and dependable TIFF splitting with our
          advanced software. Whether you&#39;re at home, in the office, or on
          the go, split your multi-page TIFF files into separate images in
          seconds without the need for an internet connection. Maintain
          productivity with swift and efficient splitting, no matter where you
          are.
        </p>
        <strong className="mt-10">Effortless Batch TIFF Splitting</strong>
        <p className="mt-2">
          Enhance your workflow by splitting multiple TIFF files in just one
          step. Our batch splitting feature allows you to handle large volumes
          of files quickly and efficiently, eliminating the need to split
          documents individually. Whether you&#39;re dealing with a few TIFFs or
          thousands, our software simplifies bulk splitting, making it
          stress-free and time-saving.
        </p>
        <strong className="mt-10">Optimized for High-Volume Splitting</strong>
        <p className="mt-2">
          Ideal for high-volume tasks, our TIFF splitter effortlessly handles
          bulk processing. Whether you&#39;re splitting a few multi-page TIFFs
          or managing large-scale projects, this robust software ensures quick
          and efficient splitting. Add your files or folders into the splitter,
          adjust your settings, and hit &#34;Split&#34;—your TIFF files will be
          separated into high-quality images in no time.
        </p>
        <strong className="mt-10">
          Flexible Splitting Options for Complete Control
        </strong>
        <p className="mt-2">
          Easily manage your TIFF files with our customizable splitting options.
          You can split a multi-page TIFF into individual single-page files,
          divide the file by every X number of pages, or specify custom page
          ranges to extract exactly what you need. Whether you need precise page
          extractions or comprehensive splitting, our software gives you the
          flexibility to handle your TIFF files with ease.
        </p>
        <strong className="mt-10">Why Split Multi-Page TIFFs?</strong>
        <p className="mt-2">
          While multi-page TIFFs are excellent for archiving and managing large
          documents, splitting them into individual images can be highly
          beneficial. Separated images offer more flexibility for editing,
          sharing, and organizing. Whether for web use, design work, or
          presentations, splitting your TIFFs into individual images allows for
          greater versatility and ease of use.
        </p>
        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our TIFF Splitter for Windows combines speed, security, and
          user-friendliness in one powerful tool. Whether splitting a handful of
          files or managing large-scale projects, this software delivers the
          flexibility and efficiency you need. Don&#39;t settle for
          less—download the best TIFF Splitter for Windows today and enjoy
          seamless, high-quality file splitting.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.TIFFSplitter} for Windows | Fast & Reliable TIFF Splitting Tool`,
      keywords:
        "TIFF Splitter, Split TIFF Files, Batch TIFF Splitting, Windows TIFF Splitter, TIFF File Management",
      description:
        "Effortlessly split multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable splitting options for precise control.",
      alternates: {
        canonical: ProductWebsites.TIFFSplitter,
      },
      openGraph: {
        title: `Free ${ProductTitles.TIFFSplitter} for Windows | Fast & Reliable TIFF Splitting Tool`,
        description:
          "Effortlessly split multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable splitting options for precise control.",
        url: `https://www.frameworkteam.com/${ProductIDs.TIFFSplitter}.html`,
        siteName: `${ProductTitles.TIFFSplitter} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFSplitter.imgName.toLowerCase()}`,
              width: productImages.TIFFSplitter.width,
            }),
            width: productImages.TIFFSplitter.width,
            height: productImages.TIFFSplitter.height,
            alt: `Free ${ProductTitles.TIFFSplitter} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** TIFF Combiner *****
  {
    id: ProductIDs.TIFFCombiner,
    title: ProductTitles.TIFFCombiner,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFCombiner.imgName.toLowerCase()}`,
    width: productImages.TIFFCombiner.width,
    height: productImages.TIFFCombiner.height,
    categories: [
      Categories.All,
      Categories.TIFF,
      Categories.Combiner,
      Categories.Merger,
    ],
    pageLink: `/${ProductIDs.TIFFCombiner}`,
    productWebsite: ProductWebsites.TIFFCombiner,
    downloadLink: ProductDownloadLinks.TIFFCombiner,

    features: [
      "Combine Locally with Full Offline Security",
      "Ultra-Fast Performance",
      "Efficient Batch Combining",
      "Versatile Combining Options",
      "Rearrange TIFF Pages Before Combining",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Experience the Best TIFF Combiner for Windows
        </strong>
        <p className="mt-2">
          Easily manage and combine your multi-page TIFF files with our powerful
          desktop software, exclusively designed for Windows users. This TIFF
          combiner functions entirely offline, ensuring maximum data privacy and
          security. Without requiring an internet connection, you can securely
          combine your files locally, safeguarding them from potential security
          risks and unauthorized access.
        </p>
        <strong className="mt-10">
          Lightning-Fast and Dependable TIFF Combining
        </strong>
        <p className="mt-2">
          Achieve rapid and reliable TIFF combining with our cutting-edge
          software. Whether you&#39;re working from home, in the office, or on
          the go, merge your multi-page TIFF files into a single document in
          mere seconds—all without needing an internet connection. Stay
          productive with swift and efficient combining wherever you are.
        </p>
        <strong className="mt-10">Streamlined Batch TIFF Combining</strong>
        <p className="mt-2">
          Simplify your workflow by combining multiple TIFF files in one easy
          step. Our batch combining feature enables you to process large volumes
          of files quickly and efficiently, eliminating the hassle of merging
          documents one by one. Whether handling a few TIFFs or thousands, our
          software makes bulk combining stress-free and time-saving.
        </p>
        <strong className="mt-10">
          Optimized for High-Volume TIFF Combining
        </strong>
        <p className="mt-2">
          Perfect for handling high-volume tasks, our TIFF combiner is built to
          manage bulk processing with ease. Whether you&#39;re combining a
          handful of multi-page TIFFs or overseeing large-scale projects, this
          robust software ensures fast and efficient merging. Simply add your
          files or folders into the combiner, adjust your settings, and hit
          &#34;Combine&#34;—your TIFF files will be seamlessly merged into a
          single high-quality document in no time.
        </p>
        <strong className="mt-10">
          Customizable Combining Options for Total Control
        </strong>
        <p className="mt-2">
          Gain complete control over how your TIFF files are merged with our
          flexible combining options. Before combining, you can easily rearrange
          the order of your TIFF files to ensure they appear exactly as you need
          in the final document. Whether you&#39;re organizing pages for a
          presentation, adjusting the sequence for a project, or simply
          customizing the layout, our software provides the tools to fine-tune
          your TIFF files with precision before merging them into a single,
          cohesive file.
        </p>
        <strong className="mt-10">Why Combine Multi-Page TIFFs?</strong>
        <p className="mt-2">
          While individual TIFF files are useful in certain contexts, combining
          them into a single multi-page document offers greater convenience for
          archiving, sharing, and managing large documents. Whether for online
          use, design work, or presentations, merging your TIFFs into a single
          document provides enhanced versatility and ease of use.
        </p>
        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our TIFF Combiner for Windows combines speed, security, and
          user-friendliness into one powerful tool. Whether you&#39;re merging a
          few files or managing large-scale projects, this software delivers the
          flexibility and efficiency you require. Don&#39;t settle for
          less—download the top TIFF Combiner for Windows today and enjoy
          seamless, high-quality file merging.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.TIFFCombiner} for Windows | Fast & Reliable TIFF Combining Tool`,
      keywords:
        "TIFF Combiner, Combine TIFF Files, Batch TIFF Combining, Windows TIFF Combiner, TIFF File Management",
      description:
        "Effortlessly combine multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable combining options for precise control.",
      alternates: {
        canonical: ProductWebsites.TIFFCombiner,
      },
      openGraph: {
        title: `Free ${ProductTitles.TIFFCombiner} for Windows | Fast & Reliable TIFF Combining Tool`,
        description:
          "Effortlessly combine multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable combining options for precise control.",
        url: `https://www.frameworkteam.com/${ProductIDs.TIFFCombiner}.html`,
        siteName: `${ProductTitles.TIFFCombiner} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFCombiner.imgName.toLowerCase()}`,
              width: productImages.TIFFCombiner.width,
            }),
            width: productImages.TIFFCombiner.width,
            height: productImages.TIFFCombiner.height,
            alt: `Free ${ProductTitles.TIFFCombiner} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** TIFF Split Merge *****
  {
    id: ProductIDs.TIFFSplitMerge,
    title: ProductTitles.TIFFSplitMerge,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFSplitMerge.imgName.toLowerCase()}`,
    width: productImages.TIFFSplitMerge.width,
    height: productImages.TIFFSplitMerge.height,
    categories: [
      Categories.All,
      Categories.TIFF,
      Categories.Combiner,
      Categories.Merger,
      Categories.Splitter,
    ],
    pageLink: `/${ProductIDs.TIFFSplitMerge}`,
    productWebsite: ProductWebsites.TIFFSplitMerge,
    downloadLink: ProductDownloadLinks.TIFFSplitMerge,

    features: [
      "Secure Local Processing with Full Offline Privacy",
      "Blazing-Fast Splitting and Combining Performance",
      "Streamlined Batch Processing for Efficiency",
      "Flexible Splitting and Versatile Combining Options",
      "Easily Rearrange Pages Before Combining",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          The Ultimate TIFF Split and Merge Tool for Windows
        </strong>

        <p className="mt-2">
          Effortlessly manage your multi-page TIFF files with our all-in-one
          TIFF Split Merge software, designed exclusively for Windows users.
          This powerful desktop application operates entirely offline, ensuring
          top-notch data privacy and security. Enjoy complete peace of mind as
          you split and merge TIFF files locally, safeguarding them from any
          potential security risks or unauthorized access.
        </p>
        <strong className="mt-10">
          Blazing-Fast and Reliable TIFF Splitting & Merging
        </strong>

        <p className="mt-2">
          Whether you need to split large TIFF files into individual pages or
          merge multiple TIFFs into a single document, our software delivers
          lightning-fast performance. Perfect for use at home, in the office, or
          on the go, you can split or combine your TIFF files in seconds—no
          internet connection required. Boost your productivity with swift,
          dependable processing wherever you are.
        </p>
        <strong className="mt-10">
          Efficient Batch Processing for Splitting & Merging TIFFs
        </strong>

        <p className="mt-2">
          Streamline your workflow with our batch processing feature, enabling
          you to split or combine multiple TIFF files in a single step. Whether
          you&#39;re managing a few TIFFs or handling thousands, our software
          makes bulk processing simple and time-saving, eliminating the need to
          handle each file individually.
        </p>
        <strong className="mt-10">
          Optimized for High-Volume TIFF Operations
        </strong>

        <p className="mt-2">
          Built for high-volume tasks, our TIFF Split Merge software
          effortlessly manages large-scale projects with ease. Whether
          you&#39;re splitting a lengthy document into individual pages or
          combining a vast collection of multi-page TIFFs, this robust tool
          ensures fast, efficient results. Just add your files or folders,
          configure your settings, and let the software handle the rest—your
          TIFFs will be split or merged into high-quality files in no time.
        </p>
        <strong className="mt-10">
          Customizable Options for Splitting & Merging TIFFs
        </strong>

        <p className="mt-2">
          Take full control over your TIFF file management with our customizable
          splitting and merging options. Easily rearrange pages before merging
          or specify page ranges for splitting to tailor the final output to
          your needs. Whether organizing documents, adjusting sequences, or
          customizing layouts, our software gives you the precision tools to
          create the perfect TIFF file every time.
        </p>
        <strong className="mt-10">Why Split and Merge Multi-Page TIFFs?</strong>

        <p className="mt-2">
          Splitting and merging multi-page TIFFs provides greater flexibility
          and convenience for managing large documents. Whether for archiving,
          sharing, or organizing, our software simplifies the process, making it
          easy to customize and control your TIFF files for any purpose.
        </p>
        <strong className="mt-10">Conclusion</strong>

        <p className="mt-2">
          Our TIFF Split Merge software for Windows combines speed, security,
          and user-friendliness into one versatile tool. Whether you&#39;re
          splitting files, merging documents, or managing large-scale projects,
          this software delivers the efficiency and flexibility you need.
          Download the best TIFF Split Merge tool for Windows today and
          experience seamless file management like never before.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.TIFFSplitMerge} for Windows | Fast & Reliable TIFF Splitting & Merging Tool`,
      keywords:
        "TIFF Splitter, TIFF Merger, Split TIFF Files, Merge TIFF Files, Batch TIFF Processing, Windows TIFF Tool, TIFF File Management",
      description:
        "Effortlessly split and merge multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable options for precise file management.",
      alternates: {
        canonical: ProductWebsites.TIFFSplitMerge,
      },
      openGraph: {
        title: `Free ${ProductTitles.TIFFSplitMerge} for Windows | Fast & Reliable TIFF Splitting & Merging Tool`,
        description:
          "Effortlessly split and merge multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable options for precise file management.",
        url: `https://www.frameworkteam.com/${ProductIDs.TIFFSplitMerge}.html`,
        siteName: `${ProductTitles.TIFFSplitMerge} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.TIFFSplitMerge.imgName.toLowerCase()}`,
              width: productImages.TIFFSplitMerge.width,
            }),
            width: productImages.TIFFSplitMerge.width,
            height: productImages.TIFFSplitMerge.height,
            alt: `Free ${ProductTitles.TIFFSplitMerge} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** PDF Splitter *****
  {
    id: ProductIDs.PDFSplitter,
    title: ProductTitles.PDFSplitter,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFSplitter.imgName.toLowerCase()}`,
    width: productImages.PDFSplitter.width,
    height: productImages.PDFSplitter.height,
    categories: [Categories.All, Categories.PDF, Categories.Splitter],
    pageLink: `/${ProductIDs.PDFSplitter}`,
    productWebsite: ProductWebsites.PDFSplitter,
    downloadLink: ProductDownloadLinks.PDFSplitter,
    features: [
      "Local Splitting with Complete Offline Security",
      "Lightning-Fast Splitting Performance",
      "Efficient Batch Processing for Multiple PDFs",
      "Versatile Splitting Options for Customized Output",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Discover the Best PDF Splitter for Windows
        </strong>
        <p className="mt-2">
          Easily manage and split large PDF files with our cutting-edge PDF
          Splitter software, designed specifically for Windows users. Operate
          fully offline for maximum privacy and security, ensuring your data
          remains safe without any risk of unauthorized access. No internet
          connection is needed—split your PDF documents locally with confidence.
        </p>
        <strong className="mt-10">Fast and Reliable PDF Splitting</strong>
        <p className="mt-2">
          Split PDF files at blazing speeds with our high-performance PDF
          splitter. Whether you&#39;re working from home, in the office, or on
          the move, our software quickly separates your PDF documents into
          individual pages or sections in just seconds. Stay productive with
          fast and efficient PDF splitting, no matter where you are.
        </p>
        <strong className="mt-10">Streamlined Batch PDF Splitting</strong>
        <p className="mt-2">
          Simplify your workflow with our powerful batch PDF splitting feature.
          Process multiple PDFs in one go, saving you time and effort. Whether
          you need to split a handful of files or handle hundreds, our batch
          processing ensures you can manage large volumes of PDFs without having
          to split each document one by one.
        </p>
        <strong className="mt-10">Designed for High-Volume Splitting</strong>
        <p className="mt-2">
          Perfect for large-scale projects, our PDF Splitter handles high
          volumes with ease. Whether you&#39;re splitting a few large PDFs or
          managing extensive document collections, this robust tool delivers
          fast, reliable results. Simply load your files or folders, customize
          your settings, and let the software do the rest—your PDFs will be
          separated into individual files in no time.
        </p>
        <strong className="mt-10">
          Flexible Splitting Options for Maximum Control
        </strong>
        <p className="mt-2">
          Take full control over how you split your PDFs. Our flexible options
          allow you to split each PDF into individual pages, split by every X
          pages, or select custom page ranges for precise extractions. No matter
          your requirements, our PDF Splitter adapts to your needs, giving you
          the flexibility to split your documents exactly how you want.
        </p>
        <strong className="mt-10">Why Split Large PDFs?</strong>
        <p className="mt-2">
          While large PDF files are useful for storing comprehensive documents,
          splitting them into smaller files can improve usability. Separate
          pages or sections can be easily shared, edited, or organized. Whether
          you need to extract key sections for presentations, web use, or
          collaboration, splitting PDFs into smaller parts offers greater
          flexibility and control.
        </p>
        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our PDF Splitter for Windows is the ultimate solution for fast,
          secure, and user-friendly PDF management. Whether you&#39;re handling
          small projects or splitting large volumes of PDFs, this software
          delivers unmatched flexibility and performance. Download the best PDF
          Splitter for Windows today and enjoy hassle-free document splitting at
          its finest.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.PDFSplitter} for Windows | Fast & Reliable PDF Splitting Tool`,
      keywords:
        "PDF Splitter, Split PDF Files, Batch PDF Splitting, Windows PDF Splitter, PDF File Management",
      description:
        "Easily split large PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable splitting options for precise document control.",
      alternates: {
        canonical: ProductWebsites.PDFSplitter,
      },
      openGraph: {
        title: `Free ${ProductTitles.PDFSplitter} for Windows | Fast & Reliable PDF Splitting Tool`,
        description:
          "Easily split large PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable splitting options for precise document control.",
        url: `https://www.frameworkteam.com/${ProductIDs.PDFSplitter}.html`,
        siteName: `${ProductTitles.PDFSplitter} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFSplitter.imgName.toLowerCase()}`,
              width: productImages.PDFSplitter.width,
            }),
            width: productImages.PDFSplitter.width,
            height: productImages.PDFSplitter.height,
            alt: `Free ${ProductTitles.PDFSplitter} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** PDF Combiner *****
  {
    id: ProductIDs.PDFCombiner,
    title: ProductTitles.PDFCombiner,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFCombiner.imgName.toLowerCase()}`,
    width: productImages.PDFCombiner.width,
    height: productImages.PDFCombiner.height,
    categories: [
      Categories.All,
      Categories.PDF,
      Categories.Combiner,
      Categories.Merger,
    ],
    pageLink: `/${ProductIDs.PDFCombiner}`,
    productWebsite: ProductWebsites.PDFCombiner,
    downloadLink: ProductDownloadLinks.PDFCombiner,

    features: [
      "Local Combining with Complete Offline Security",
      "Lightning-Fast Combining Performance",
      "Efficient Batch Processing for Multiple PDFs",
      "Versatile Combining Options for Customized Output",
      "Rearrange PDF Pages Before Combining",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Discover the Best PDF Combiner for Windows
        </strong>
        <p className="mt-2">
          Effortlessly manage and combine multiple PDF files with our top-tier
          PDF Combiner software, designed specifically for Windows users.
          Operate entirely offline to ensure maximum privacy and security,
          keeping your data safe from unauthorized access. No internet
          connection is required—merge your PDF documents locally with
          confidence and ease.
        </p>

        <strong className="mt-10">Fast and Reliable PDF Combining</strong>
        <p className="mt-2">
          Experience lightning-fast performance with our high-efficiency PDF
          combiner. Whether you&#39;re at home, in the office, or on the go, our
          software quickly merges your PDF files into a single document in just
          seconds. Boost your productivity with seamless and rapid PDF
          combining, no matter where you are.
        </p>

        <strong className="mt-10">Streamlined Batch PDF Combining</strong>
        <p className="mt-2">
          Simplify your workload with our powerful batch PDF combining feature.
          Combine multiple PDFs at once, saving you both time and effort.
          Whether you need to merge a few files or hundreds, our batch
          processing ensures you can manage large volumes of PDFs without the
          need for manual, one-by-one merging.
        </p>

        <strong className="mt-10">Built for High-Volume Combining</strong>
        <p className="mt-2">
          Ideal for large-scale projects, our PDF Combiner handles high volumes
          of PDFs with ease. Whether you&#39;re combining a few large PDFs or
          managing an extensive document collection, this reliable tool delivers
          fast, dependable results. Simply load your files, customize your
          settings, and let the software handle the rest—your PDFs will be
          combined into a single file in no time.
        </p>

        <strong className="mt-10">
          Flexible Combining Options for Full Control
        </strong>
        <p className="mt-2">
          Take full control over how you combine your PDFs. Our flexible options
          allow you to merge entire documents or rearrange pages for customized
          output. No matter your requirements, our PDF Combiner adapts to your
          needs, providing the flexibility to combine your PDFs exactly how you
          want.
        </p>

        <strong className="mt-10">Why Combine Multiple PDFs?</strong>
        <p className="mt-2">
          While individual PDFs are useful, combining them into a single
          document can significantly improve organization and accessibility.
          Merging PDFs makes it easier to share, collaborate, and store your
          documents in one cohesive file. Whether for presentations, project
          documentation, or archiving, combining PDFs gives you greater control
          over your files.
        </p>

        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our PDF Combiner for Windows is the ultimate tool for fast, secure,
          and user-friendly PDF management. Whether you&#39;re handling small
          tasks or managing large-scale PDF combinations, this software provides
          unmatched flexibility and performance. Download the best PDF Combiner
          for Windows today and enjoy effortless document merging like never
          before.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.PDFCombiner} for Windows | Fast & Reliable PDF Combining Tool`,
      keywords:
        "PDF Combiner, Combine PDF Files, Batch PDF Combining, Windows PDF Combiner, PDF File Management",
      description:
        "Easily combine multiple PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable combining options for complete document control.",
      alternates: {
        canonical: ProductWebsites.PDFCombiner,
      },
      openGraph: {
        title: `Free ${ProductTitles.PDFCombiner} for Windows | Fast & Reliable PDF Combining Tool`,
        description:
          "Easily combine multiple PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable combining options for complete document control.",
        url: `https://www.frameworkteam.com/${ProductIDs.PDFCombiner}.html`,
        siteName: `${ProductTitles.PDFCombiner} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFCombiner.imgName.toLowerCase()}`,
              width: productImages.PDFCombiner.width,
            }),
            width: productImages.PDFCombiner.width,
            height: productImages.PDFCombiner.height,
            alt: `Free ${ProductTitles.PDFCombiner} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** PDF Split Merge *****
  {
    id: ProductIDs.PDFSplitMerge,
    title: ProductTitles.PDFSplitMerge,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFSplitMerge.imgName.toLowerCase()}`,
    width: productImages.PDFSplitMerge.width,
    height: productImages.PDFSplitMerge.height,
    categories: [
      Categories.All,
      Categories.PDF,
      Categories.Splitter,
      Categories.Combiner,
      Categories.Merger,
    ],
    pageLink: `/${ProductIDs.PDFSplitMerge}`,
    productWebsite: ProductWebsites.PDFSplitMerge,
    downloadLink: ProductDownloadLinks.PDFSplitMerge,

    features: [
      "Secure Local Splitting and Merging with Complete Offline Privacy",
      "Ultra-Fast Splitting and Merging Performance",
      "Efficient Batch Processing for Multiple PDFs",
      "Flexible Split and Merge Options for Custom Output",
      "Rearrange PDF Pages Before Merging",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Discover the Best PDF Split and Merge Software for Windows
        </strong>
        <p className="mt-2">
          Easily manage and organize your PDF files with our advanced PDF Split
          Merge software, designed for Windows. Operate fully offline to ensure
          your data remains private and secure, without the need for an internet
          connection. Split and merge PDFs locally with confidence and ease,
          safeguarding your files from unauthorized access.
        </p>
        <strong className="mt-10">
          Fast and Reliable PDF Splitting and Merging
        </strong>
        <p className="mt-2">
          Enjoy high-speed performance with our efficient PDF Split Merge tool.
          Whether you&#39;re at home, in the office, or on the move, split and
          merge your PDFs in seconds. Boost your productivity with quick,
          reliable PDF splitting and merging, wherever you are.
        </p>
        <strong className="mt-10">
          Streamlined Batch PDF Splitting and Merging
        </strong>
        <p className="mt-2">
          Simplify your workload with powerful batch processing. Split or merge
          multiple PDFs simultaneously, saving you time and effort. Whether
          you&#39;re dealing with a few files or hundreds, our batch processing
          feature ensures seamless handling of large PDF volumes.
        </p>
        <strong className="mt-10">Built for High-Volume PDF Management</strong>
        <p className="mt-2">
          Perfect for large projects, our PDF Split Merge software manages high
          volumes of PDFs effortlessly. Split or merge extensive collections of
          documents quickly and reliably. Just load your files, customize the
          settings, and let the software do the rest—your PDFs will be processed
          in no time.
        </p>
        <strong className="mt-10">
          Advanced Splitting and Merging Options
        </strong>
        <p className="mt-2">
          Our PDF Split Merge software offers a range of powerful splitting
          options to suit your needs. Split a document into individual pages,
          divide by every X pages, or specify a custom page range for precise
          control. Whether you need to extract single pages or break a large PDF
          into smaller sections, our software provides the flexibility to handle
          any task with ease. Rearranging pages before merging is also quick and
          simple, giving you full control over your PDF output.
        </p>
        <strong className="mt-10">Why Split and Merge PDFs?</strong>
        <p className="mt-2">
          Splitting and merging PDFs makes managing your documents easier and
          more efficient. Whether you need to separate large documents into
          smaller sections or combine multiple PDFs for streamlined sharing and
          collaboration, this tool gives you greater control over your files.
        </p>
        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our PDF Split Merge software for Windows is the ultimate solution for
          fast, secure, and flexible PDF management. Handle small tasks or large
          projects with ease, thanks to its robust features and high-performance
          capabilities. Download the best PDF Split Merge tool for Windows today
          and experience seamless PDF management.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.PDFSplitMerge} for Windows | Fast & Reliable PDF Splitting and Merging Tool`,
      keywords:
        "PDF Split Merge, Split PDF Files, Merge PDF Files, Batch PDF Splitting, Batch PDF Merging, Windows PDF Split Merge, PDF File Management",
      description:
        "Effortlessly split and merge PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable splitting and merging options for complete document control.",
      alternates: {
        canonical: ProductWebsites.PDFSplitMerge,
      },
      openGraph: {
        title: `Free ${ProductTitles.PDFSplitMerge} for Windows | Fast & Reliable PDF Splitting and Merging Tool`,
        description:
          "Effortlessly split and merge PDF files with our fast and free Windows software. Enjoy an intuitive interface, batch processing, and customizable splitting and merging options for complete document control.",
        url: `https://www.frameworkteam.com/${ProductIDs.PDFSplitMerge}.html`,
        siteName: `${ProductTitles.PDFSplitMerge} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.PDFSplitMerge.imgName.toLowerCase()}`,
              width: productImages.PDFSplitMerge.width,
            }),
            width: productImages.PDFSplitMerge.width,
            height: productImages.PDFSplitMerge.height,
            alt: `Free ${ProductTitles.PDFSplitMerge} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** Webpage Thumbnailer *****
  {
    id: ProductIDs.WebpageThumbnailer,
    title: ProductTitles.WebpageThumbnailer,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.WebpageThumbnailer.imgName.toLowerCase()}`,
    width: productImages.WebpageThumbnailer.width,
    height: productImages.WebpageThumbnailer.height,
    categories: [Categories.All, Categories.HTML],
    pageLink: `/${ProductIDs.WebpageThumbnailer}`,
    productWebsite: ProductWebsites.WebpageThumbnailer,
    downloadLink: ProductDownloadLinks.WebpageThumbnailer,
    features: [
      "Batch convert HTML files into images",
      "Capture full-page screenshots of websites",
      "Schedule automatic website screenshot captures",
      "Runs in the background",
      "Supports image formats: JPG, GIF, PNG, BMP, and TIF",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Webpage Thumbnailer: Convert MHTML and HTML Files to Images & Capture
          Full-Length Website Screenshots
        </strong>

        <p className="mt-2">
          Webpage Thumbnailer is a powerful and versatile Windows desktop
          application designed to convert MHTML and HTML files into high-quality
          images, capture full-length screenshots of websites, and generate
          thumbnail previews of web pages. With support for popular image
          formats such as JPG, GIF, PNG, BMP, and TIF, this tool provides a
          comprehensive solution for all your web page capture needs.
        </p>

        <p className="mt-2">
          Whether you&#39;re a web designer, a digital marketer, or a content
          creator, Webpage Thumbnailer simplifies the process of converting web
          pages into images quickly and efficiently. It allows you to capture an
          entire web page&#39;s content, from top to bottom, without the need
          for manual screen capturing or piecing together multiple screenshots.
        </p>

        <strong className="mt-10">Key Features of Webpage Thumbnailer:</strong>

        <p className="mt-2">
          <strong>Batch Conversion:</strong> Convert multiple MHTML and HTML
          files to images in a single batch. Save time by automating the
          conversion process without compromising quality.
        </p>

        <p className="mt-2">
          <strong>Full-Length Website Screenshots:</strong> Capture full-size
          screenshots of entire web pages, ensuring that all visible content is
          preserved. No need to scroll and stitch—Webpage Thumbnailer handles it
          all for you.
        </p>

        <p className="mt-2">
          <strong>Generate Thumbnail Previews:</strong> Create thumbnail-sized
          images of web pages, ideal for enhancing user experience by offering
          visual previews in search results, directories, or listings.
        </p>

        <p className="mt-2">
          <strong>Multi-Threaded Batch Mode:</strong> Efficiently handle large
          volumes of URLs or HTML files. The multi-threaded batch mode allows
          you to capture thousands of web pages at once, working in the
          background without user intervention.
        </p>

        <p className="mt-2">
          <strong>Automatic Scheduling:</strong> Schedule automatic website
          screenshot captures at specific times, enabling you to keep up-to-date
          snapshots of dynamic or frequently changing websites.
        </p>

        <p className="mt-2">
          <strong>Multiple Image Format Support:</strong> Export web pages to a
          variety of image formats, including JPG, PNG, GIF, BMP, and TIF, with
          options to customize JPEG compression for optimal file sizes.
        </p>

        <p className="mt-2">
          <strong>Flash Content Capture:</strong> Seamlessly capture websites
          with Flash elements, ensuring that all content is included in the
          image.
        </p>

        <p className="mt-2">
          <strong>Delayed Snapshots:</strong> Set delays before capturing a web
          page to allow content to fully load, ensuring an accurate and complete
          image.
        </p>

        <p className="mt-2">
          <strong>Customizable Web Page Settings:</strong> Disable Java,
          ActiveX, or scripts to fine-tune the appearance of web pages before
          capturing screenshots, providing maximum control over the final image.
        </p>

        <strong className="mt-10">
          Enhance User Experience with Webpage Thumbnails
        </strong>

        <p className="mt-2">
          Webpage Thumbnailer is particularly useful for displaying thumbnail
          previews alongside search results or directory listings. Providing
          visual previews enhances usability, allowing users to preview websites
          before clicking links. This feature reduces frustration from broken
          links, inappropriate content, or unwanted pop-ups, leading to higher
          user satisfaction and engagement.
        </p>

        <p className="mt-2">
          With Webpage Thumbnailer, you can effortlessly embed these thumbnails
          into your listings, giving users a quick, clear idea of the content
          before visiting each site. This improves decision-making speed and
          enhances the overall browsing experience.
        </p>

        <strong className="mt-10">
          Ideal for Web Designers and Developers
        </strong>

        <p className="mt-2">
          Webpage Thumbnailer is the perfect tool for web designers who need to
          showcase web page designs to clients. Instead of relying on manual
          screen capture methods, Webpage Thumbnailer automates the process,
          capturing the entire page with just a few clicks. Whether you need to
          convert MHTML or HTML files into JPG, PNG, GIF, BMP, or TIF images,
          this application streamlines the process for efficient client
          previews.
        </p>

        <strong className="mt-10">
          Perfect for Bloggers, Forum Posters, and Content Creators
        </strong>

        <p className="mt-2">
          When writing blog posts, forum comments, or articles, including a
          thumbnail image of the website you&#39;re referencing adds a
          professional touch. Webpage Thumbnailer makes it easy to generate
          thumbnails of varying sizes, helping you quickly and efficiently
          enhance your content with visual elements.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.WebpageThumbnailer} for Windows | Fast & Efficient Web Page Screenshot and Thumbnail Tool`,
      keywords:
        "Webpage Thumbnailer, Webpage Screenshots, HTML to Image, MHTML to Image, Batch Webpage Capture, Full-Length Website Screenshots, Web Page Thumbnails, Website Thumbnail Generator, Windows Webpage Screenshot Tool",
      description:
        "Capture full-length web page screenshots and generate thumbnail previews with our fast and free Webpage Thumbnailer for Windows. Convert MHTML and HTML files to images, schedule automatic captures, and enjoy batch processing for large volumes of websites.",
      alternates: {
        canonical: ProductWebsites.WebpageThumbnailer,
      },
      openGraph: {
        title: `Free ${ProductTitles.WebpageThumbnailer} for Windows | Fast & Efficient Web Page Screenshot and Thumbnail Tool`,
        description:
          "Capture full-length web page screenshots and generate thumbnail previews with our fast and free Webpage Thumbnailer for Windows. Convert MHTML and HTML files to images, schedule automatic captures, and enjoy batch processing for large volumes of websites.",
        url: `https://www.frameworkteam.com/${ProductIDs.WebpageThumbnailer}.html`,
        siteName: `${ProductTitles.WebpageThumbnailer} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.WebpageThumbnailer.imgName.toLowerCase()}`,
              width: productImages.WebpageThumbnailer.width,
            }),
            width: productImages.WebpageThumbnailer.width,
            height: productImages.WebpageThumbnailer.height,
            alt: `Free ${ProductTitles.WebpageThumbnailer} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** Convert HTML to Image *****
  {
    id: ProductIDs.ConvertHTMLtoImage,
    title: ProductTitles.ConvertHTMLtoImage,
    desc: "Windows 11/10/8/7 | Command Line Tool",
    src: `/${headerCompanyName.toLowerCase()}/${productImages.ConvertHTMLtoImage.imgName.toLowerCase()}`,
    width: productImages.ConvertHTMLtoImage.width,
    height: productImages.ConvertHTMLtoImage.height,
    categories: [Categories.All, Categories.HTML, Categories.Converter],
    pageLink: `/${ProductIDs.ConvertHTMLtoImage}`,
    productWebsite: ProductWebsites.ConvertHTMLtoImage,
    downloadLink: ProductDownloadLinks.ConvertHTMLtoImage,

    features: [
      "Effortlessly batch convert multiple HTML files to image formats",
      "Generate full-page website snapshots with ease",
      "Automate scheduled captures of website screenshots",
      "Operates seamlessly in the background",
      "Supports various image formats including JPG, GIF, PNG, BMP, and TIF",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          ConvertHTMLtoImage - Windows Command Line Tool
        </strong>

        <p className="mt-2">
          {" "}
          ConvertHTMLtoImage is a powerful Windows Command Line Tool designed
          for seamless HTML and MHTML file conversion to image formats like JPG,
          GIF, PNG, BMP, and TIF. This versatile tool allows you to take
          full-length website screenshots, generate thumbnail previews from any
          URL, and convert multiple web pages to images in batch mode.{" "}
        </p>
        <strong className="mt-10">Key Features</strong>

        <p className="mt-2">
          {" "}
          - Batch Convert HTML & MHTML Files: Quickly convert multiple HTML and
          MHTML files to image formats in a single command.
          <br /> - Full-Page Website Screenshots: Capture complete, full-length
          screenshots of websites with just one command.
          <br /> - Thumbnail Previews: Generate thumbnail images of website
          pages, ideal for search results or directory listings.
          <br /> - Scheduled Captures: Automate website screenshots by
          scheduling capture tasks.
          <br /> - Background Operation: Runs silently in the background without
          displaying or keeping web pages active during capture.
          <br /> - Multi-Threaded Batch Processing: Capture multiple websites
          simultaneously, enhancing efficiency and speed.
          <br /> - Supports Flash Content: Capture websites with Flash content
          without any extra configuration.
          <br /> - Customizable Settings: Adjust JPEG compression, define output
          image dimensions, and set timeouts or delays for web page loading.
          <br /> - Advanced Control: Disable Java, ActiveX, and scripts on web
          pages for optimized capturing.{" "}
        </p>
        <strong className="mt-10">Command Line Usage Examples</strong>

        <p className="mt-2">
          {" "}
          Capture Full-Size Website Screenshot:
          <br />{" "}
          <code>
            ConvertHTMLtoImage.exe /url &#34;www.ConvertHTMLtoImage.com&#34;
          </code>
          <br />
          Generate Thumbnail of a Web Page:
          <br />{" "}
          <code>
            ConvertHTMLtoImage.exe /url &#34;www.ConvertHTMLtoImage.com&#34;
            /width 100 /height 200
          </code>
          <br />
          Convert Offline HTML File to Image:
          <br />{" "}
          <code>ConvertHTMLtoImage.exe /file &#34;c:/htmlfile.html&#34;</code>
          <br />
          Batch Convert Multiple Web Pages:
          <br /> <code>ConvertHTMLtoImage.exe /list &#34;c:/list.txt&#34;</code>
        </p>
        <strong className="mt-10">
          Boost Website Usability with Thumbnail Previews
        </strong>

        <p className="mt-2">
          {" "}
          Use ConvertHTMLtoImage to add thumbnail previews of website pages
          alongside search results or directory listings. This enhances user
          experience by allowing quick previews of web pages before visiting,
          reducing frustration from broken links or inappropriate content.{" "}
        </p>
        <strong className="mt-10">
          Easy Integration into Web Applications
        </strong>

        <p className="mt-2">
          {" "}
          This command line tool can easily be integrated into applications
          developed in PHP, ASP.NET (C# or VB), or other languages, enabling
          automated image generation workflows. Although we don&#39;t provide
          sample scripts, you can explore detailed command line usage to get
          started.{" "}
        </p>
        <strong className="mt-10">
          Automate Screenshot Captures with Windows Scheduler
        </strong>

        <p className="mt-2">
          {" "}
          ConvertHTMLtoImage integrates seamlessly with Windows Scheduler to
          automate website snapshots at scheduled intervals. Simply configure
          the tool with your preferred settings and schedule your capture tasks
          effortlessly.{" "}
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.ConvertHTMLtoImage} for Windows | Convert HTML & MHTML to Images, Screenshots, and Thumbnails`,
      keywords:
        "HTML to Image, MHTML to Image, Batch HTML Conversion, Full-Length Website Screenshots, Web Page Thumbnails, Website Thumbnail Generator, Windows Command Line HTML to Image Tool, HTML Screenshot Tool, Website Batch Capture",
      description:
        "Easily convert HTML and MHTML files to images, capture full-length website screenshots, and generate thumbnail previews with our fast and free ConvertHTMLtoImage command line tool for Windows. Schedule automatic captures and process multiple websites in batch mode.",
      alternates: {
        canonical: ProductWebsites.ConvertHTMLtoImage,
      },
      openGraph: {
        title: `Free ${ProductTitles.ConvertHTMLtoImage} for Windows | Convert HTML & MHTML to Images, Screenshots, and Thumbnails`,
        description:
          "Easily convert HTML and MHTML files to images, capture full-length website screenshots, and generate thumbnail previews with our fast and free ConvertHTMLtoImage command line tool for Windows. Schedule automatic captures and process multiple websites in batch mode.",
        url: `https://www.frameworkteam.com/${ProductIDs.ConvertHTMLtoImage}.html`,
        siteName: `${ProductTitles.ConvertHTMLtoImage} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.ConvertHTMLtoImage.imgName.toLowerCase()}`,
              width: productImages.ConvertHTMLtoImage.width,
            }),
            width: productImages.ConvertHTMLtoImage.width,
            height: productImages.ConvertHTMLtoImage.height,
            alt: `Free ${ProductTitles.ConvertHTMLtoImage} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
  // ***** Websites Screenshot DLL*****
  {
    id: ProductIDs.WebsitesScreenshot,
    title: ProductTitles.WebsitesScreenshot,
    desc: "Windows 11/10/8/7 | .NET Component",
    src: `/${headerCompanyName.toLowerCase()}/${productImages.WebsitesScreenshot.imgName.toLowerCase()}`,
    width: productImages.WebsitesScreenshot.width,
    height: productImages.WebsitesScreenshot.height,
    categories: [Categories.All, Categories.HTML],
    pageLink: `/${ProductIDs.WebsitesScreenshot}`,
    productWebsite: ProductWebsites.WebsitesScreenshot,
    downloadLink: ProductDownloadLinks.WebsitesScreenshot,

    features: [
      "Generate website thumbnail images",
      "Capture full-size screenshots of any web page",
      "Convert HTML to image",
      "Save resulting images to local files or in memory",
      "Capture entire web pages in one image without scrollbars",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Powerful and Flexible WebsiteScreenshot .NET Component DLL
        </strong>
        <p className="mt-2">
          The WebsiteScreenshot .NET Component DLL is a robust and flexible .NET
          Class Library designed for rendering full-page website screenshots and
          thumbnail previews. Supporting multiple formats like JPG, GIF, PNG,
          BMP, and TIF, this powerful DLL makes capturing website images fast
          and customizable. Whether you&#39;re developing web or Windows
          applications, it provides the tools you need to create full-size
          screenshots, convert HTML to images, or generate thumbnail previews of
          web pages effortlessly.
        </p>
        <strong className="mt-10">Key Features</strong>
        <p className="mt-2">
          - Capture full-size screenshots of any website.
          <br />
          - Generate thumbnail images of website pages.
          <br />
          - Convert HTML code directly into image formats.
          <br />
          - Save images to local files or directly in memory.
          <br />
          - Take snapshots of entire web pages into a single image without
          scrollbars.
          <br />
          - Retrieve web pages via HTTP, HTTPS, or from a local file.
          <br />
          - Supports multiple image formats: JPG, GIF, PNG, BMP, and TIF.
          <br />
          - Adjustable JPEG quality for optimal compression.
          <br />
          - Compatible with 32-bit and 64-bit environments, including .NET 2.0
          and .NET 4.0 assemblies.
          <br />
          - No need for third-party tools or printer drivers.
          <br />
          - Capture sites with flash content, and retrieve page metadata like
          links, title, or HTML source.
          <br />
          - Enable or disable scripts, ActiveX, and Java during the capture
          process.
          <br />
          - Set webpage load timeout and delay snapshots as needed.
          <br />
          - Flexible capture area width and height settings.
          <br />
          - Multithreaded architecture supports simultaneous processing of
          multiple requests, boosting efficiency.
          <br />
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.WebsitesScreenshot} for Windows | Capture Full-Page Screenshots and Thumbnails with .NET DLL`,
      keywords:
        "Website Screenshot .NET DLL, Full Page Website Screenshot, Web Page Thumbnails, HTML to Image Conversion, Website Image Generator, .NET Component for Screenshots, Batch Website Capture, Capture Full Web Pages, Website Screenshot API",
      description:
        "Capture full-page website screenshots, generate thumbnail previews, and convert HTML to image formats with the fast and free WebsitesScreenshot .NET DLL component. Use in your .NET applications to automate web page image captures with batch processing support.",
      alternates: {
        canonical: ProductWebsites.WebsitesScreenshot,
      },
      openGraph: {
        title: `Free ${ProductTitles.WebsitesScreenshot} for Windows | Capture Full-Page Screenshots and Thumbnails with .NET DLL`,
        description:
          "Capture full-page website screenshots, generate thumbnail previews, and convert HTML to image formats with the fast and free WebsitesScreenshot .NET DLL component. Use in your .NET applications to automate web page image captures with batch processing support.",
        url: `https://www.frameworkteam.com/${ProductIDs.WebsitesScreenshot}.html`,
        siteName: `${ProductTitles.WebsitesScreenshot} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLowerCase()}/${productImages.WebsitesScreenshot.imgName.toLowerCase()}`,
              width: productImages.WebsitesScreenshot.width,
            }),
            width: productImages.WebsitesScreenshot.width,
            height: productImages.WebsitesScreenshot.height,
            alt: `Free ${ProductTitles.WebsitesScreenshot} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  },
];
