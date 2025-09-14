"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation" // Import useRouter
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter() // Initialize useRouter

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleLogoClick = () => {
    router.push("/") // Navigate to the homepage
    window.scrollTo(0, 0) // Scroll to the top of the page
    setIsMenuOpen(false) // Close mobile menu if open
  }

  const handleNavLinkClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking a link
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="text-xl font-bold text-background bg-custom-pink rounded-full p-2"
          >
            tw.
          </Link>
        </div>
        {/* Group navigation and theme toggle/mobile menu buttons */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              onClick={() => handleNavLinkClick("about")}
              className="text-sm font-medium text-foreground hover:text-custom-pink transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              onClick={() => handleNavLinkClick("experience")}
              className="text-sm font-medium text-foreground hover:text-custom-magenta transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#education"
              onClick={() => handleNavLinkClick("education")}
              className="text-sm font-medium text-foreground hover:text-custom-coral transition-colors"
            >
              Education
            </Link>
            <Link
              href="#projects"
              onClick={() => handleNavLinkClick("projects")}
              className="text-sm font-medium text-foreground hover:text-custom-pink transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              onClick={() => handleNavLinkClick("skills")}
              className="text-sm font-medium text-foreground hover:text-custom-magenta transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#publications"
              onClick={() => handleNavLinkClick("publications")}
              className="text-sm font-medium text-foreground hover:text-custom-coral transition-colors"
            >
              Publications
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-card"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:bg-card"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-sm font-medium text-foreground hover:text-custom-pink transition-colors"
              onClick={() => handleNavLinkClick("about")}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium text-foreground hover:text-custom-magenta transition-colors"
              onClick={() => handleNavLinkClick("experience")}
            >
              Experience
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium text-foreground hover:text-custom-coral transition-colors"
              onClick={() => handleNavLinkClick("education")}
            >
              Education
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-foreground hover:text-custom-pink transition-colors"
              onClick={() => handleNavLinkClick("projects")}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-foreground hover:text-custom-magenta transition-colors"
              onClick={() => handleNavLinkClick("skills")}
            >
              Skills
            </Link>
            <Link
              href="#publications"
              className="text-sm font-medium text-foreground hover:text-custom-coral transition-colors"
              onClick={() => handleNavLinkClick("publications")}
            >
              Publications
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
