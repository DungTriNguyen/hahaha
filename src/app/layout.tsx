import IconChat from "@/components/chat-bot/icon-chat";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Coda, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Hubcom | Digital Transformation Solutions for Businesses",
    template: "%s | Digital Transformation Solutions for Businesses",
  },
  description:
    "Hoạt động trong lĩnh vực phát triển, sản xuất và cung cấp các sản phẩm, dịch vụ hoặc giải pháp công nghệ thông tin",
  keywords: ["Hubcom", "Digital Transformation Solutions for Businesses"],
  alternates: {
    canonical: "https://hubcom.tech/",
  },
  openGraph: {
    title: "Hubcom - Digital Transformation Solutions for Businesses",
    description:
      "Hoạt động trong lĩnh vực phát triển, sản xuất và cung cấp các sản phẩm, dịch vụ hoặc giải pháp công nghệ thông tin",
    url: "https://hubcom.tech/",
    type: "website",
    images: [
      {
        url: "https://cdn.storims.com/api/v2/image/resize?path=https://storage.googleapis.com/storims_cdn/storims/uploads/6599719d7a4459721d416799cf193c7a.jpg",
        width: 1200,
        height: 630,
        alt: "Hubcom - Digital Transformation Solutions for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubcom - Digital Transformation Solutions for Businesses",
    description:
      "Hoạt động trong lĩnh vực phát triển, sản xuất và cung cấp các sản phẩm, dịch vụ hoặc giải pháp công nghệ thông tin",
    images: [
      "https://cdn.storims.com/api/v2/image/resize?path=https://storage.googleapis.com/storims_cdn/storims/uploads/6599719d7a4459721d416799cf193c7a.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico" ,
    
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const coda = Coda({
  variable: "--font-coda",
  subsets: ["latin"],
  weight: ["400", "800"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${coda.variable} antialiased`}
      >
        <Header />
        {children}
        <IconChat />
      </body>
    </html>
  );
}
