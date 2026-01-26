import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});



export const metadata: Metadata = {
  title: "Remote Mountain Stays | Work From Nature",
  description:
    "Premium mountain stays designed for remote professionals — reliable WiFi, power backup, and calm work-first environments.",
  keywords: [
    "remote work stays",
    "work from mountains",
    "digital nomad india",
    "remote work india",
    "work from nature",
  ],
  openGraph: {
    title: "Remote Mountain Stays",
    description:
      "Thoughtfully designed mountain stays for focused remote work.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
  lang="en"
  className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-background text-foreground font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
