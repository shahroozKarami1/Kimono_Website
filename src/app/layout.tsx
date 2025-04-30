import type { Metadata } from "next";
import "../styles/globals.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';

import LayOut from "@/Components/Layout/LayOut";

export const metadata: Metadata = {
  title: "کیمونو",
  description: "به وب سایت کیمونو خوش آمدید :) ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body>
        <LayOut>
          {children}
        </LayOut>
      </body>
    </html>
  );
}
