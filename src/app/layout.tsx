import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { EngineeringHUDOverlay } from "@/components/ui/EngineeringHUDOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | IMechE KUET Student Chapter",
    default: "IMechE KUET Student Chapter | Khulna University of Engineering & Technology",
  },
  description: "Official portal of the Institution of Mechanical Engineers (IMechE) KUET Student Chapter, empowering student engineers at Khulna University of Engineering & Technology, Bangladesh.",
  keywords: ["IMechE", "KUET", "Khulna University of Engineering & Technology", "Mechanical Engineering", "Student Chapter", "Engineering Bangladesh", "CEng", "Robotics"],
  authors: [{ name: "IMechE KUET Student Chapter" }],
  openGraph: {
    title: "IMechE KUET Student Chapter | Engineering the Future",
    description: "Improving the world through engineering. Fostering excellence, technical innovation, and industrial networking for engineering scholars at KUET.",
    url: "https://imeche-kuet.org",
    siteName: "IMechE KUET Student Chapter",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMechE KUET Student Chapter",
    description: "Improving the world through engineering. Khulna University of Engineering & Technology.",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans relative" suppressHydrationWarning>
        <EngineeringHUDOverlay />
        <Navbar />
        <PageTransition>
          <main className="flex-1 flex flex-col">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
