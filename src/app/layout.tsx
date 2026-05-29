import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Dancing_Script, Great_Vibes, Pinyon_Script, Alex_Brush, Monsieur_La_Doulaise } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: "400",
});

const monsieur = Monsieur_La_Doulaise({
  variable: "--font-monsieur",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Apple Hello Handwriting Effect Customizer",
  description: "Dynamic customizer playground for cursive text styling and entrance reveals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${dancing.variable} ${greatVibes.variable} ${pinyon.variable} ${alexBrush.variable} ${monsieur.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-black text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
