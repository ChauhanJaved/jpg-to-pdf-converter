//Internal imports
import "./globals.css";
import { companyName, copyrightYear } from "@/data/website-data";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import ScrollTop from "@/components/scroll-top";
import { ThemeProvider } from "@/components/theme-provider";
import { roboto } from "@/lib/font";
import Header from "@/components/header";
import { UserProvider } from "@/context/user-context";
import { ActiveSectionProvider } from "@/context/active-section-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider>
            <ActiveSectionProvider>
              <ScrollTop />
              <Header />
              {children}
              <Footer companyName={companyName} copyrightYear={copyrightYear} />
              <Toaster />
            </ActiveSectionProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
