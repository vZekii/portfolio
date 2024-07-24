import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Source_Code_Pro } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "@/components/Footer";
import siteMetadata from "@/data/metadata";

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: './',
    siteName: siteMetadata.title,
    images: [
      {
        url: new URL(siteMetadata.banner, siteMetadata.url).href,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    }
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.banner],
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${sourceCodePro.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-800 antialiased">
      <ThemeProvider attribute="class">
          <Analytics />
          <SpeedInsights />
          <div className="mt-[--header-height] max-w-4xl m-auto p-4">
            {children}
            <Footer />
          </div>
          
          
        </ThemeProvider>
      </body>
    </html>
  );
}
