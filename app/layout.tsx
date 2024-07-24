import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Source_Code_Pro } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Footer from "@/components/Footer";

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "vzekii.tech",
  description: "A place for all my stuff",
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
