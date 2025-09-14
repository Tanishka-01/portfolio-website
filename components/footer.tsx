"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  const [showEmailModal, setShowEmailModal] = useState(false)

  const handleEmailClick = () => {
    setShowEmailModal(true)
  }

  return (
    <>
      <footer className="border-t border-border py-8 bg-background">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-foreground">© {new Date().getFullYear()} Made by Tanishka.</p>
          </div>
          <div className="flex items-center gap-4">
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
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-card hover:text-custom-peach transition-colors"
              onClick={handleEmailClick}
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </footer>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background border border-border rounded-lg p-6 max-w-md w-full shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-custom-pink">Get in Touch</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowEmailModal(false)} className="hover:bg-card">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-4">
              <p className="text-foreground">Feel free to reach out to me via email:</p>
              <div className="bg-card/50 rounded-lg p-3 border border-border">
                <p className="text-custom-magenta font-mono text-center select-all">tanishkaa163@gmail.com</p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText("tanishkaa163@gmail.com")
                    alert("Email copied to clipboard!")
                  }}
                  className="flex-1 bg-custom-purple hover:bg-custom-purple/80"
                >
                  Copy Email
                </Button>
                <Button
                  onClick={() => {
                    window.open("https://gmail.com/", "_blank")
                    setShowEmailModal(false)
                  }}
                  variant="outline"
                  className="flex-1 border-custom-pink text-custom-pink hover:bg-custom-pink hover:text-background"
                >
                  Open Gmail
                </Button>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Or connect with me on{" "}
                  <Link
                    href="https://www.linkedin.com/in/tanishka-wani/"
                    target="_blank"
                    className="text-custom-magenta hover:underline"
                  >
                    LinkedIn
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
