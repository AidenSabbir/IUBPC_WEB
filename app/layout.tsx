import type { Metadata } from "next";
import "./globals.css";
import { inter } from "../lib/font";
import Nav_Bar from "@/components/ui/Nav_Bar";
import SplashScreenWrapper from "@/components/ui/Suspanse";
export const metadata: Metadata = {
  title: "IUBPC",
  description: "IUBPC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-fit flex justify-center items-center z-99999">
        <Nav_Bar />
        </div>
         <SplashScreenWrapper>
        {children}
        </SplashScreenWrapper>
      </body>
    </html>
  );
}
