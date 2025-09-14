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
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%23f1bfd7;stop-opacity:1' /><stop offset='100%25' style='stop-color:%23f0b8f4;stop-opacity:1' /></linearGradient></defs><circle cx='50' cy='50' r='45' fill='url(%23grad)' stroke='%23602e9e' strokeWidth='3'/><polygon points='35,25 65,25 60,40 55,40 55,75 45,75 45,40 40,40' fill='%23602e9e'/><circle cx='50' cy='20' r='8' fill='%23602e9e'/></svg>"
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
