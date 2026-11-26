import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { Footer } from "@/src/components/trailer/Footer";
import { Header } from "@/src/components/trailer/Header";
import "./globals.css";

/** Bold condensed display face for titles and buttons. */
const display = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

/** Body text. */
const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description =
  "Satish Gurung is a software developer in Copenhagen building modern web applications.";

export const metadata: Metadata = {
  metadataBase: new URL("https://satish627.github.io"),
  title: {
    default: "Satish Gurung — Software Developer",
    template: "%s — Satish Gurung",
  },
  description,
  openGraph: {
    title: "Satish Gurung — Software Developer",
    description,
    url: "/",
    type: "website",
    images: ["/satish.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-pink focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
