import type { Metadata } from "next";
import { Rubik, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Worknation",
  description: "Empresa audiovisual",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${syne.variable} ${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
