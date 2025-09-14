import { CalendarIcon, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      id: 0,
      title: "Graduate Research Associate",
      company: "The Ohio State University",
      period: "May 2025 - Present",
      description:
        "A key contributor to a multimodal AI research project for wildlife monitoring. My work focused on developing automated data analysis pipelines and applying machine learning models to bioacoustic and aerial data collected for the project.",
      achievements: [
        "Automated the bioacoustic data analysis workflow by leveraging the Model Context Protocol (MCP) to programmatically control BirdNET for large-scale species identification.",
        "Utilized the Opensoundscape Python library to process and analyze field recordings, applying the BirdNET machine learning model to automatically identify avian species for a comprehensive biodiversity assessment.",
        "Interpreted multimodal data streams, including acoustic recordings and aerial drone imagery, to support research in sensor fusion.",
        "Contributed to the creation of the SmartWilds dataset, a novel, synchronized collection of multimodal data designed to advance environmental monitoring and conservation computer vision research.",
      ],
      titleColor: "text-custom-coral",
    },
    {
      id: 1, // Teaching Assistant (re-added)
      title: "Teaching Assistant | MIS Anly & Design",
      company: "The Ohio State University",
      period: "Feb 2025 - May 2025",
      description:
        "Assisted faculty in teaching and grading for MIS Analysis & Design courses, providing support to students and facilitating learning.",
      achievements: [
        "Assessed a high volume of student submissions against a detailed academic rubric, ensuring fair, consistent, and timely evaluation.",
        "Authored personalized feedback on assignments, translating complex technical standards into clear, understandable guidance.",
      ],
      titleColor: "text-custom-pink",
    },
    {
      id: 2, // Student Assistant
      title: "Student Assistant | German and Literature",
      company: "The Ohio State University",
      period: "Nov 2024 - Apr 2025",
      description:
        "Provided administrative and research support to the Professor, assisting with various academic tasks.",
      achievements: [
        "Conducted in-depth research and synthesized findings for upcoming publications.",
        "Prepared, proofread, and formatted key academic documents and materials.",
      ],
      titleColor: "text-custom-magenta",
    },
    {
      id: 3, // Fire Bird V Robot Developer
      title: "Fire Bird V Robot Developer",
      company: "e-Yantra, IIT Bombay (Internship)",
      period: "Dec 2022 - Dec 2022",
      description:
        "Developed intelligent control algorithms and implemented computer vision techniques for the Fire Bird V Robot.",
      achievements: [
        "Developed intelligent control algorithms for the Fire Bird V Robot using Python and ROS.",
        "Implemented computer vision techniques for obstacle detection and path planning.",
        "Utilized deep reinforcement learning for optimizing robot navigation in complex environments.",
      ],
      titleColor: "text-custom-peach",
    },
    {
      id: 4, // Web Developer
      title: "Web Developer",
      company: "Larsen & Toubro (Internship)",
      period: "Apr 2022 - Jul 2022",
      description:
        "Spearheaded a project from inception, designing and implementing an automated solution for hostel allocation.",
      achievements: [
        "Spearheaded a project from inception, laying the foundation for a fully functional system.",
        "Designed and implemented an automated solution for hostel allocation within the Skill Trainer's Academy, streamlining administrative processes.",
        "Gained hands-on experience in UI/UX design and front-end development, enhancing user engagement and interface functionality.",
      ],
      titleColor: "text-custom-purple",
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-background animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-custom-coral">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <Card
              key={experience.id}
              className="bg-card/70 backdrop-blur-sm border border-border shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className={`text-xl ${experience.titleColor}`}>{experience.title}</CardTitle>
                    <CardDescription className="flex items-center mt-1 text-foreground">
                      <Building2 className="h-4 w-4 mr-1" />
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center text-sm bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full border border-border text-foreground">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {experience.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-foreground">{experience.description}</p>
                {experience.achievements.length > 0 && (
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-custom-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
