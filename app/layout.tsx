import type { Metadata } from "next";
import { Geist, Geist_Mono, Bonheur_Royale } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bonheurRoyale = Bonheur_Royale({
  variable: "--font-bonheur-royale",
  subsets: ["latin"], // Added subsets
  weight: "400", // Ensured weight is correct
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raj Kamal Amalakanti",
  description: "Welcome to the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bonheurRoyale.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
