"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Starfield } from "@/components/starfield" // Import the new component

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pb-16 pt-24 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40 bg-background overflow-hidden animate-fade-in">
      {/* Starfield background */}
      <Starfield />

      <div className="container relative z-10 flex flex-col items-center justify-center gap-4 text-center">
        {/* Profile Photo */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden rounded-full border-4 border-custom-purple shadow-2xl mb-6">
          <Image
            src="/images/tanishka-profile-city.jpeg"
            alt="Tanishka Wani"
            fill
            className="object-cover"
            priority
            style={{ objectPosition: "75% 75%" }} // Updated objectPosition style
          />
        </div>

        <div className="space-y-4">
          <h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-custom-pink font-semibold">Hello, I'm </span>
            <span className="text-custom-magenta font-semibold">Tanishka</span>
          </h1>
          <p
            className="mx-auto max-w-[700px] text-foreground md:text-xl animate-fade-in font-extrabold"
            style={{ animationDelay: "0.4s" }}
          >
            AI & Data Science
          </p>
        </div>
        <div
          className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button className="bg-custom-purple hover:bg-custom-purple/80 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link href="#projects" onClick={() => scrollToSection("projects")} className="flex items-center">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {/* Removed Contact Me button as per user request */}
          {/*
            <Button
              variant="outline"
              className="border-2 border-custom-coral text-custom-coral hover:bg-custom-coral hover:text-background transition-all duration-300 bg-transparent"
            >
              <Link href="#contact">Contact Me</Link>
            </Button> */}
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Link href="https://github.com/Tanishka-01" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:bg-card hover:text-custom-pink transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/tanishka-wani/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:bg-card hover:text-custom-magenta transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
