import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "@/styles/main.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.itsrahulsharma.com"),
  title: "Rahul Sharma — Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 9+ years of experience building scalable, responsive healthcare interfaces with React.js, TypeScript and Redux.",
  openGraph: {
    title: "Rahul Sharma — Senior Frontend Developer",
    description: "Scalable, responsive healthcare interfaces with React.js and TypeScript.",
    url: "https://www.itsrahulsharma.com",
    siteName: "itsrahulsharma.com",
    type: "website",
  },
  twitter: { card: "summary", title: "Rahul Sharma — Senior Frontend Developer" },
};

export const viewport: Viewport = { themeColor: "#0F0F0F" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
