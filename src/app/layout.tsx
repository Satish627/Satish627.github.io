import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

/** Blocky pixel font: big titles and buttons only. */
const pixel = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

/** Readable pixel font: everything else. */
const retro = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

const description =
  "Satish Gurung is a software developer in Copenhagen building modern web applications.";

export const metadata: Metadata = {
  metadataBase: new URL("https://satish627.github.io"),
  title: "Satish Gurung — Software Developer",
  description,
  openGraph: {
    title: "Satish Gurung — Software Developer",
    description,
    url: "/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixel.variable} ${retro.variable}`}>
      <body>{children}</body>
    </html>
  );
}
