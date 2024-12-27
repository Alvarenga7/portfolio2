import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from 'next/font/local';
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "./componentes/ThemeProvide";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})



export const metadata: Metadata = {
  title: "Alvarenga.dev",
  description: "Developer Front End",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
        fontHeading.variable
       )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  )
}



