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
  title: "Nafis's Salami Portal | Eid Mubarak 🌙",
  description: "Digital Salami request from Nafis Ahnaf Jamil. Custom-built for my favorite seniors. Awaiting blessings (and bKash)!",
  openGraph: {
    title: "Nafis's Salami Portal | Eid Mubarak 🌙",
    description: "A message to you from Nafis. Open your card here!",
    url: 'https://salam-from-nafis.vercel.app',
    siteName: 'Eid Card Portal',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false, // Keep it private so random people don't find it via Google
    follow: false,
  },
  icons: {
    // This is the SVG Moon Favicon I suggested earlier
    icon: 'data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="%23022c22"/><path d="M10 16C10 11.5817 13.5817 8 18 8C19.4185 8 20.7456 8.3695 21.8955 9.01828C19.5569 8.3695 17.114 9.1536 15.5 11C13.3333 13.5 13.3333 18.5 15.5 21C17.114 22.8464 19.5569 23.6305 21.8955 22.9817C20.7456 23.6305 19.4185 24 18 24C13.5817 24 10 20.4183 10 16Z" fill="%23fbbf24"/></svg>',
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
