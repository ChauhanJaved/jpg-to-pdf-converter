import {
  Categories,
  portfolioItem,
  ProductIDs,
  productImages,
  productSubTitles,
  productTitles,
  productWebsites,
} from "@/data/website-data";
import cloudinaryLoader from "@/lib/cloudinary-loader";

export const JPGtoPDFConverterWeb: portfolioItem = {
  id: ProductIDs.JPGtoPDFConverterWeb,
  title: productTitles.JPGtoPDFConverterWeb,
  subtitle: productSubTitles.JPGtoPDFConverterWeb,
  src: productImages.JPGtoPDFConverterWeb.imgName,
  width: productImages.JPGtoPDFConverterWeb.width,
  height: productImages.JPGtoPDFConverterWeb.height,
  categories: [Categories.All, Categories.WebApp, Categories.Converter],
  pageLink: `/${ProductIDs.JPGtoPDFConverterWeb}`,
  productWebsite: productWebsites.JPGtoPDFConverterWeb,
  features: [
    "Convenient Online Web App for Instant Use",
    "Local, Secure, and Private File Conversion",
    "Flexible PDF Creation Options",
    "Easily Customizable Orientation, Page Size, and Margins",
    "Simple Drag-and-Drop with Easy Image Rearrangement",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Local, Secure, and Private File Conversion
      </strong>
      <p className="mt-2">
        Our JPG to PDF converter prioritizes your file security by processing
        everything locally on your device. Unlike cloud-based tools that upload
        your images to external servers, our solution ensures your files never
        leave your browser. This approach guarantees complete privacy, making it
        the perfect choice for users working with sensitive or personal data.
        All conversions occur directly in your browser, giving you peace of mind
        that your files remain secure and under your control.
      </p>
      <strong className="mt-10">
        No Uploads Required – 100% Offline Conversion
      </strong>
      <p className="mt-2">
        Unlike other web-based tools, our JPG to PDF converter operates entirely
        offline. By eliminating the need for uploads, you can enjoy faster
        processing times and complete assurance that your data stays private.
        Whether you&#39;re working on confidential projects or personal
        documents, this feature ensures maximum privacy and convenience.
      </p>
      <strong className="mt-10">
        Flexible PDF Creation Options for Every Need
      </strong>
      <p className="mt-2">
        Our JPG to PDF converter adapts to your requirements with versatile
        conversion modes. Choose to: Combine multiple JPGs into one PDF for
        cohesive presentations or document compilations. Convert each JPG into
        an individual PDF for single-image needs or streamlined organization.
        This flexibility allows you to customize your PDF creation process to
        suit any project or purpose.
      </p>
      <strong className="mt-10">Combine JPGs with Ease</strong>
      <p className="mt-2">
        Whether you’re looking to create a single PDF from multiple images or
        generate separate PDFs for each image, our tool gives you full control.
        This flexibility is ideal for creating professional reports, organizing
        photo collections, or preparing personal projects.
      </p>
      <strong className="mt-10">
        Customize Orientation, Page Size, and Margins
      </strong>
      <p className="mt-2">
        Tailor your PDFs with a wide range of customization options:
        Orientation: Switch between portrait and landscape modes to suit your
        layout. Page Size: Select from standard sizes like A4, US Letter, or
        fit-to-image for a perfect match. Margins: Adjust margins to enhance
        readability or meet specific formatting needs. With these features, you
        can create polished and professional PDFs that are ready for printing,
        sharing, or archiving.
      </p>
      <strong className="mt-10">
        Professional Layout Options for Print-Ready PDFs
      </strong>
      <p className="mt-2">
        Our PDF converter ensures that your final output meets professional
        standards. Whether you’re preparing documents for work, school, or
        personal use, our layout customization options help you create visually
        appealing and well-structured PDFs every time.
      </p>
      <strong className="mt-10">Intuitive Drag-and-Drop Functionality</strong>
      <p className="mt-2">
        Simplify your workflow with an easy-to-use drag-and-drop interface.
        Quickly upload images by dragging them directly into the converter. This
        eliminates the hassle of navigating through complex menus and saves you
        valuable time.
      </p>
      <strong className="mt-10">Rearrange Images to Perfect Your PDF</strong>
      <p className="mt-2">
        Before converting your images, easily rearrange their order to ensure
        your PDF is exactly how you want it. This feature is ideal for creating
        sequential documents, such as step-by-step guides, storyboards, or
        presentations. Arrange, edit, and convert – all in one seamless process.
      </p>
      <strong className="mt-10">Fast and Reliable JPG to PDF Conversion</strong>
      <p className="mt-2">
        Our JPG to PDF converter is designed for speed and efficiency. Enjoy
        quick processing without compromising on quality, making it the perfect
        tool for users with tight deadlines or high-volume tasks.
      </p>
      <strong className="mt-10">
        Accessible Across Devices – Online Web App
      </strong>
      <p className="mt-2">
        As an online web app, our JPG to PDF converter is accessible from any
        device with a browser. Whether you’re using a desktop, laptop, tablet,
        or smartphone, you can convert your JPGs to PDFs without the need for
        downloads or installations. This flexibility ensures you can work on the
        go, anytime and anywhere.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.JPGtoPDFConverterWeb} Online | Fast & Secure JPG to PDF Tool`,
    keywords:
      "Online JPG to PDF Converter, JPEG to PDF Tool, Convert JPG to PDF Free, Batch JPG to PDF Online, Image to PDF Converter, Secure PDF Tool",
    description:
      "Easily convert JPEG files to PDF with our free online tool. Enjoy secure, local processing in your browser, drag-and-drop functionality, and fully customizable PDF creation settings.",
    alternates: {
      canonical: productWebsites.JPGtoPDFConverterWeb,
    },
    openGraph: {
      title: `Free ${productTitles.JPGtoPDFConverterWeb} Online | Fast & Secure JPG to PDF Tool`,
      description:
        "Easily convert JPEG files to PDF with our free online tool. Enjoy secure, local processing in your browser, drag-and-drop functionality, and fully customizable PDF creation settings.",
      url: productWebsites.JPGtoPDFConverterWeb,
      siteName: `${productTitles.JPGtoPDFConverterWeb} Online`,
      images: [
        {
          url: cloudinaryLoader({
            src: productImages.JPGtoPDFConverterWeb.imgName,
            width: productImages.JPGtoPDFConverterWeb.width,
          }),
          width: productImages.JPGtoPDFConverterWeb.width,
          height: productImages.JPGtoPDFConverterWeb.height,
          alt: `Free ${productTitles.JPGtoPDFConverterWeb} Online`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  },
};
