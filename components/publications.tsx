import Link from "next/link"
import { CalendarIcon, ExternalLink, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Publications() {
  const publications = [
    {
      id: 1,
      title: "AI-based Digital Psychotherapist for Anti-Depression and Mental Health",
      publisher: "INDIACom",
      date: "March 2023",
      abstract:
        "This paper proposes an AI-powered digital psychotherapist capable of analyzing body language and trauma patterns to detect depression and potential suicide risk, aiming to provide timely intervention and support mental health care.",
      link: "https://bvicam.in/INDIACom/news/INDIACom%202023%20Proceedings/Main/papers/711.pdf",
      type: "Conference Paper",
    },
    {
      id: 2,
      title: "ChatGuard: A Profanity Classification Approach for Safer Online Conversations",
      publisher: "IEEE Xplore",
      date: "January 2024",
      abstract:
        "This project presents a machine learning-based tool designed to detect profanity and offensive language in children's online communication, enabling parents to monitor and guide their digital behavior for healthier language use",
      link: "https://ieeexplore.ieee.org/document/10406633",
      type: "Conference Paper",
    },
  ]

  return (
    <section id="publications" className="py-16 md:py-24 bg-background animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-custom-coral">
          Publications
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((publication) => (
            <Card
              key={publication.id}
              className="flex flex-col bg-card/70 backdrop-blur-sm border border-border shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <span className="bg-custom-purple/20 text-custom-pink border border-custom-purple/30 text-xs px-2 py-1 rounded-md">
                    {publication.type}
                  </span>
                  <div className="flex items-center text-sm text-foreground">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {publication.date}
                  </div>
                </div>
                <CardTitle className="mt-2 text-custom-magenta">{publication.title}</CardTitle>
                <CardDescription className="flex items-center text-foreground">
                  <FileText className="h-4 w-4 mr-1" />
                  {publication.publisher}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground">{publication.abstract}</p>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-2 border-custom-pink text-custom-pink hover:bg-custom-pink hover:text-background hover:scale-105 transition-all bg-transparent"
                >
                  <Link href={publication.link} target="_blank" rel="noopener noreferrer">
                    Read Publication
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
