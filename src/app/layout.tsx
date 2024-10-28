import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const aspekta = localFont({
  src: "./fonts/aspekta/variable/AspektaVF.woff2",
  weight: "100 900",
  variable: '--font-aspekta',
});

export const metadata: Metadata = {
  title: "Nimara: Open-Source Ecommerce Storefront for Developers | Ready-to-Use Solution",
  description: "Launch your online store faster with Nimara—an open-source ecommerce storefront built for developers. Fully customizable and ready to deploy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aspekta.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
