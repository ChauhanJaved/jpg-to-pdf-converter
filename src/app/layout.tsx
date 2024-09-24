import type { Metadata } from "next";

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
    <html lang="en">
      <body        
      >
        {children}
      </body>
    </html>
  );
}
