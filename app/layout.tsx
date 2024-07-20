import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
})

export const metadata: Metadata = {
  title: "vzekii.tech",
  description: "A place for all my stuff",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sourceCodePro.variable} bg-slate-50 dark:bg-slate-800`}>
          {children}
          <Analytics />
          <SpeedInsights />
      </body>
    </html>
  );
}
