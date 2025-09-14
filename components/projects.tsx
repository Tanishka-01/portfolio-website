import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Conversational AI for Mental Health: Developing an Emotion Detection Chatbot",
      description:
        "Developed a chatbot to detect user emotions and provide empathetic, supportive responses for mental health accessibility. Utilized TF-IDF vectorization and BERT for feature extraction, and implemented LinearSVC and transformer-based BERT for emotion classification.",
      image: "/images/emotion-detection-chatbot.png", // Updated to the new image
      tags: ["NLP", "Machine Learning", "AI", "Data Science", "BERT"],
      liveUrl: "#",
      githubUrl: "https://github.com/Tanishka-01/emotion-detection-chatbot", // Updated GitHub link
      titleColor: "text-custom-pink",
      tagColors: [
        "bg-custom-purple/20 text-custom-pink border border-custom-purple/30",
        "bg-custom-magenta/20 text-custom-magenta border border-custom-magenta/30",
        "bg-custom-peach/20 text-custom-peach border border-custom-peach/30",
        "bg-custom-coral/20 text-custom-coral border border-custom-coral/30",
        "bg-custom-pink/20 text-custom-pink border border-custom-pink/30",
      ],
    },
    {
      id: 5, // New project ID
      title: "ML-Driven Symptom Pattern Detection and User Recommendation System for Endometriosis",
      description:
        "This project uses unsupervised learning on synthetic health data to identify symptom patterns in endometriosis patients through K-Means clustering, PCA visualization, and a rule-based recommendation engine.",
      image: "/images/endometriosis-ml-system.png", // Updated to the new image
      tags: ["K-Means", "PCA", "Machine Learning", "Recommendation Systems", "Data Analysis"],
      liveUrl: "#",
      githubUrl: "https://github.com/Tanishka-01/Endometriosis-ML-Project", // Added GitHub link
      titleColor: "text-custom-magenta", // Updated color
      tagColors: [
        "bg-custom-pink/20 text-custom-pink border border-custom-pink/30",
        "bg-custom-magenta/20 text-custom-magenta border border-custom-magenta/30",
        "bg-custom-peach/20 text-custom-peach border border-custom-peach/30",
        "bg-custom-coral/20 text-custom-coral border border-custom-coral/30",
        "bg-custom-purple/20 text-custom-purple border border-custom-purple/30",
      ],
    },
    {
      id: 2,
      title: "Chat Profanity Detector",
      description:
        "An essential machine learning-based profanity detector designed to protect from online dangers by accurately identifying offensive language. It showcases how AI can create valuable applications for a safer digital environment.",
      image: "/images/chat-profanity-detector-new.png", // Updated to the new image
      tags: ["Machine Learning", "EDA", "Data Science", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/Tanishka-01/chat-profanity-detector", // Updated GitHub link
      titleColor: "text-custom-magenta",
      tagColors: [
        "bg-custom-coral/20 text-custom-coral border border-custom-coral/30",
        "bg-custom-pink/20 text-custom-pink border border-custom-pink/30",
        "bg-custom-purple/20 text-custom-purple border border-custom-purple/30",
        "bg-custom-peach/20 text-custom-peach border border-custom-peach/30",
      ],
    },
    {
      id: 3,
      title: "Krishi Mitra: AI-Powered Farming Platform",
      description:
        "Developed an AI-based web application for farmers in India. Integrated machine learning models for crop recommendation, fertilizer recommendation, weather forecast, and disease detection.",
      image: "/images/krishi-mitra-final.png", // Updated to the new image
      tags: ["Data Science", "Machine Learning", "AI"],
      liveUrl: "#",
      githubUrl: null, // Set to null to hide the button
      titleColor: "text-custom-peach",
      tagColors: [
        "bg-custom-magenta/20 text-custom-magenta border border-custom-magenta/30",
        "bg-custom-coral/20 text-custom-coral border border-custom-coral/30",
        "bg-custom-pink/20 text-custom-pink border border-custom-pink/30",
      ],
    },
    {
      id: 4,
      title: "Morse Code Translator",
      description:
        "An IoT-based project developed using Raspberry Pi and Python, which interconverts text to Morse code and vice versa.",
      image: "/images/morse-code-translator.png", // Updated to the new image
      tags: ["IoT", "Raspberry Pi", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/Tanishka-01/morsecode", // Updated GitHub link
      titleColor: "text-custom-coral", // Assigning a new color
      tagColors: [
        "bg-custom-purple/20 text-custom-purple border border-custom-purple/30",
        "bg-custom-peach/20 text-custom-peach border border-custom-peach/30",
        "bg-custom-magenta/20 text-custom-magenta border border-custom-magenta/30",
      ],
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-background animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-custom-coral">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden flex flex-col bg-card/70 backdrop-blur-sm border border-border shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  style={{
                    objectPosition:
                      project.id === 5
                        ? "center 10%"
                        : project.id === 1
                          ? "center 55%"
                          : project.id === 2
                            ? "center 50%"
                            : project.id === 3
                              ? "center 50%"
                              : project.id === 4
                                ? "center 50%"
                                : "center",
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle className={project.titleColor}>{project.title}</CardTitle>
                <CardDescription className="text-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`${project.tagColors[index]} text-xs px-3 py-1 rounded-full font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 mt-auto">
                {/* Removed Live Demo Button */}
                {project.githubUrl && ( // Conditionally render the Code button
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-2 border-custom-magenta text-custom-magenta hover:bg-custom-magenta hover:text-background hover:scale-105 transition-all bg-transparent"
                  >
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
