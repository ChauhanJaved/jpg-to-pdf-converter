//Internal Imports
import { HeaderNavItems } from "@/data/website-data";
import HeroWithFileProvider from "@/components/hero-with-file-provider";

const Hero = () => {
  return (
    <section
      id={HeaderNavItems.Home}
      className="container px-5 pt-20 lg:px-10 xl:max-w-screen-xl"
    >
      <HeroWithFileProvider />

      {/* Product description */}
      <div className="mt-5 flex flex-col">
        <h2 className="text-base font-semibold lg:text-lg">
          Local, Secure, and Private File Conversion
        </h2>
        <p className="text-base lg:text-lg">
          Our JPG to PDF converter prioritizes your file privacy and security by
          processing everything locally on your device. Unlike other converters
          that require uploading files to external servers, our tool ensures
          that your images never leave your device. This no-upload approach
          guarantees maximum data privacy, making it the ideal solution for
          users handling sensitive or personal files. All conversions happen
          directly in your browser, ensuring complete security and giving you
          peace of mind knowing your files are processed safely and remain in
          your control.
        </p>
      </div>
      <div className="mt-5 flex flex-col">
        <h2 className="text-base font-semibold lg:text-lg">
          Flexible PDF Creation Options
        </h2>
        <p className="text-base lg:text-lg">
          Our JPG to PDF converter offers versatile options to meet all your
          document needs. Whether you want to combine multiple JPG images into a
          single, cohesive PDF or convert each image into a standalone PDF file,
          our tool gives you complete control. You can easily select the
          conversion mode that best fits your purpose, making it an ideal
          solution for managing and organizing images as PDFs.
        </p>
      </div>
      <div className="mt-5 flex flex-col">
        <h2 className="text-base font-semibold lg:text-lg">
          Easily Customizable Orientation, Page Size, and Margins
        </h2>
        <p className="text-base lg:text-lg">
          With our JPG to PDF converter, personalizing your PDFs is simple. You
          can easily adjust page orientation (portrait or landscape), choose
          from various page sizes (A4, US Letter, or fit to image), and set
          margins to enhance readability or ensure consistency. These flexible
          settings provide tailored results to suit your document format and
          layout preferences, making it perfect for professional, academic, or
          personal projects.
        </p>
        <p className="text-base lg:text-lg">
          Our intuitive interface enables you to produce polished, print-ready
          PDFs in just a few clicks, without compromising on customization or
          quality. Whether for detailed photo compilations, structured
          documents, or single-image PDFs, you have the freedom to create PDFs
          exactly how you envision them.
        </p>
      </div>
      <div className="mt-5 flex flex-col">
        <h2 className="text-base font-semibold lg:text-lg">
          Simple Drag-and-Drop with Easy Image Rearrangement
        </h2>
        <p className="text-base lg:text-lg">
          Our JPG to PDF converter simplifies your workflow with an intuitive
          drag-and-drop interface, allowing you to quickly add files without
          navigating complex menus. Before converting, you can easily rearrange
          the order of images to ensure your PDF appears exactly as you want.
          This feature is particularly useful for creating sequential documents
          or presentations, giving you full control over the flow of your
          content. Just drag, drop, and arrange – your images are ready to
          convert in the perfect order!
        </p>
      </div>
    </section>
  );
};

export default Hero;
