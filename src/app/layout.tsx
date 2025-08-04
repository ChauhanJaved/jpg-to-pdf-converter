//Internal imports
import "./globals.css";
import { companyName, copyrightYear } from "@/data/website-data";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import ScrollTop from "@/components/scroll-top";
import { ThemeProvider } from "@/components/theme-provider";
import { roboto } from "@/lib/font";
import Header from "@/components/header";
import { ActiveSectionProvider } from "@/context/active-section-context";
import { PageOnTopProvider } from "@/context/page-on-top-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionProvider>
            <PageOnTopProvider>
              <ScrollTop />
              <Header />
              {children}
              <Footer companyName={companyName} copyrightYear={copyrightYear} />
              <Toaster />
            </PageOnTopProvider>
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
