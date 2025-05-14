import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import IframeEventHandler from "@/components/IframeEventHandler";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "A simple todo app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
<body className="min-h-screen bg-background font-sans antialiased">
        <Header />
{children}
        <Footer />
        <IframeEventHandler />
        <IframeEventHandler />
      </body>
    </html>
  );
}
