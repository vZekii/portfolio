import type { Metadata } from "next";
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
  title: "Zach's personal site",
  description: "A place for all my stuff",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} bg-slate-50 dark:bg-slate-800 scroll-smooth`}>
          {children}
      </body>
    </html>
  );
}
