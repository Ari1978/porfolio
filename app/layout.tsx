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
  title: "Ariel Suarez | Backend Developer",
  description: "Portfolio de Ariel Suarez - Node.js, NestJS, MongoDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="text-xs bg-black text-white">
        <div className="flex justify-center px-2 py-2">
          <div className="w-full max-w-2xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}