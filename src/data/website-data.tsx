export const headerCompanyName: string = "FrameworkTeam";
export const companyName: string = "FrameworkTeam Softwares";
export const email: string = "support@frameworkteam.com";
export const copyrightYear: string = new Date().getFullYear().toString();

export enum HeaderNavItems {
  Home = "Home",
  Desktop = "Desktop",
  Pricing = "Purchase",
  Contact = "Contact",
}
export const headerNavItems: string[] = [
  HeaderNavItems.Home,
  HeaderNavItems.Desktop,
  HeaderNavItems.Pricing,
  HeaderNavItems.Contact,
];

export const productImages = {
  JPGtoPDFConverterWeb: {
    title: "JPG to PDF Converter Online",
    imgName: `/${headerCompanyName.toLowerCase()}/${"jpg-to-pdf-converter-web.png".toLowerCase()}`,
    width: 1170,
    height: 2532,
  },
  JPGtoPDFConverter: {
    title: "JPG to PDF Converter",
    imgName: `/${headerCompanyName.toLowerCase()}/${"jpg-to-pdf-converter.jpg".toLowerCase()}`,
    width: 756,
    height: 463,
  },
  JPGtoPDFConverterFilesSelected: {
    title: "JPG to PDF Converter Files Selected",
    imgName: `/${headerCompanyName.toLowerCase()}/${"jpg-to-pdf-converter-files-selected.jpg".toLowerCase()}`,
    width: 756,
    height: 463,
  },
  JPGtoPDFConverterSettings: {
    title: "JPG to PDF Converter Settings",
    imgName: `/${headerCompanyName.toLowerCase()}/${"jpg-to-pdf-converter-settings.jpg".toLowerCase()}`,
    width: 756,
    height: 463,
  },
};

export const productData = {
  id: "jpg-to-pdf-converter",
  title: "JPG to PDF Converter",
  productWebsite: "https://www.jpg-to-pdf-converter.com/",
  downloadLink:
    "https://jpg-to-pdf-converter.com/downloads/jpg-to-pdf-converter-setup.exe",
};

export const licenseOptions = [
  {
    licenseType: "One Device License",
    price: "$24.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-one-computer-license",
  },
  {
    licenseType: "Two Devices License",
    price: "$39.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-two-computers-license",
  },
  {
    licenseType: "Three Devices License",
    price: "$44.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-three-computers-license",
  },
  {
    licenseType: "Five Devices License",
    price: "$64.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-five-computers-license",
  },
  {
    licenseType: "Ten Devices License",
    price: "$109.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-ten-computers-license",
  },
  {
    licenseType: "Unlimited Devices License",
    price: "$224.95 USD",
    paymentLink:
      "https://frameworkteam.onfastspring.com/jpg-to-pdf-converter-unlimited-computers-license",
  },
];
