import { CalendarIcon, GraduationCap, Award } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "The Ohio State University",
      period: "2024 - present",
      description:
        "Focusing on leveraging AI and data-driven approaches to solve complex challenges, with hands-on experience in machine learning and data science.",
      gpa: "3.7/4.0",
    },
    {
      id: 2,
      degree: "Bachelor of Engineering",
      institution: "University of Mumbai",
      period: "2020 - 2024",
      description:
        "Foundational education in computer science principles with focus on data science, machine learning and software engineering.",
      gpa: "3.5/4.0",
    },
  ]

  return (
    <section id="education" className="py-16 md:py-24 bg-card animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-custom-purple">
          Education
        </h2>

        <div className="space-y-12">
          {/* Formal Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center text-custom-pink">
              <GraduationCap className="mr-2 h-6 w-6" />
              Academic Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card
                  key={edu.id}
                  className="bg-background/70 backdrop-blur-sm border border-border shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl text-custom-magenta">{edu.degree}</CardTitle>
                        <CardDescription className="mt-1 text-foreground">{edu.institution}</CardDescription>
                      </div>
                      <div className="flex items-center text-sm bg-card/70 backdrop-blur-sm px-3 py-1 rounded-full border border-border text-foreground">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {edu.description && <p className="mb-4 text-foreground">{edu.description}</p>}

                    {/* GPA */}
                    {edu.gpa && (
                      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                        <h4 className="font-medium mb-2 flex items-center text-foreground">
                          <Award className="h-4 w-4 mr-1" /> GPA
                        </h4>
                        <span className="text-foreground text-lg font-semibold">{edu.gpa}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
