import type React from "react"
import "./globals.css"

import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tanishka Wani",
  description: "A personal portfolio website for Tanishka, showcasing projects, skills, and experience.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%23f1bfd7;stop-opacity:1' /><stop offset='25%25' style='stop-color:%23f0b8f4;stop-opacity:1' /><stop offset='50%25' style='stop-color:%23fed9a6;stop-opacity:1' /><stop offset='75%25' style='stop-color:%23feccbb;stop-opacity:1' /><stop offset='100%25' style='stop-color:%23602e9e;stop-opacity:1' /></linearGradient></defs><circle cx='50' cy='50' r='50' fill='url(%23grad)'/></svg>"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
