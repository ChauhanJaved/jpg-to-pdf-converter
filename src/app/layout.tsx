//Internal imports
import "./globals.css";

import { companyName, copyrightYear } from "@/data/website-data";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import ScrollTop from "@/components/ui/scroll-top";
import { ThemeProvider } from "@/components/theme-provider";
import { roboto } from "@/lib/font";
import { FileProvider } from "@/context/file-context";
import Header from "@/components/header";
import { UserProvider } from "@/context/user-context";

export const metadata: Metadata = {
  title: "JPG to PDF Converter",
  description: "JPG to PDF Converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className}`} suppressHydrationWarning>
      <body>
        <UserProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FileProvider>
              <Header />
              {children}
              <Footer companyName={companyName} copyrightYear={copyrightYear} />
              <ScrollTop />
              <Toaster />
            </FileProvider>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
