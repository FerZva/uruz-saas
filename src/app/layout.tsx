import type { Metadata } from "next";
import "./globals.css";
import HeaderLayout from "./components/HeaderLayout";
import FooterLayout from "./components/FooterLayout";

export const metadata: Metadata = {
  title: "URUZ Software Solutions",
  description: "Software Developer Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="bg-slate-900 min-h-screen">
          <HeaderLayout />
          {children}
          <FooterLayout />
        </div>
      </body>
    </html>
  );
}
