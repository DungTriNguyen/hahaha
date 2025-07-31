import { Metadata } from "next";

import HomePageClient from "@/components/home-page/HomePage";
export const metadata: Metadata = {
  title: "Home | Digital Transformation Solutions for Businesses",
  description:
    "Hoạt động trong lĩnh vực phát triển, sản xuất và cung cấp các sản phẩm, dịch vụ hoặc giải pháp công nghệ thông tin",
  alternates: {
    canonical: "https://hubcom.tech/",
  },
  openGraph: {
    title: "Home",
    url: "https://hubcom.tech/",
    images: [
      {
        url: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://hubcom.tech/&size=16",
      },
    ],
  },
};
export default function HomePage() {
  return <HomePageClient />;
}
