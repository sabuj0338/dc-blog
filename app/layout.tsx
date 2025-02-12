import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DC Blog",
  description: "DC Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  dark:bg-gray-950 dark:text-gray-100`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16 px-4 md:px-0">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
