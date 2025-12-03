import type { Metadata } from "next";
import "./globals.css";
import {inter} from "../lib/font";
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
        {children}
      </body>
    </html>
  );
}
