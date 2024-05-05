//这个是为了在root里面有header和footer

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "@/components/reusable/Header";
import Footer from "@/components/reusable/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

//seo
export const metadata: Metadata = {
  title: "Evently",
  description: "Evently is the platform for event management like meetup",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
