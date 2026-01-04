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
  metadataBase: new URL("https://worknation-five.vercel.app/"),
  title: {
    default: "Worknation Creative",
    template: "%s | Worknation Creative",
  },
  description:
    "Estúdio criativo especializado em motion design, animação, branding visual e criação de artes digitais. Transformamos ideias em experiências visuais impactantes para marcas, eventos e produtos digitais.",
  keywords: [
    "motion design",
    "motion graphics",
    "design gráfico",
    "artes digitais",
    "animação 2D e 3D",
    "branding visual",
    "identidade visual",
    "conteúdo audiovisual",
    "estúdio criativo",
    "design para redes sociais",
    "Worknation Creative",
  ],

  authors: [{ name: "Joel Silva" }],
  creator: "Joel Silva",
  publisher: "Worknation Creative",

  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://worknation-five.vercel.app/",
    title: "Worknation Creative",
    description:
      "Estúdio criativo focado em motion design, animação e artes digitais. Criamos narrativas visuais modernas que elevam a comunicação e a presença digital das marcas.",
    siteName: "Worknation Creative",
    images: [
      {
        url: "/logos/w-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Worknation Creative – Motion Design & Artes Digitais",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Worknation Creative",
    description:
      "Motion design, animação e artes digitais para marcas que querem comunicar com impacto visual e criatividade.",
    creator: "@worknationcreative",
    images: ["/logos/w-bg.jpg"],
  },

  alternates: {
    canonical: "https://worknation-five.vercel.app/",
  },
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
