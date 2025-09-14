import { CheckCircle, Code, Database, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Code,
      skills: [
        "Generative AI",
        "Large Language Models (LLMs)",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing (NLP)",
        "Computer Vision",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "BERT",
        "MCP",
      ],
      titleColor: "text-custom-pink",
      iconColor: "text-custom-pink",
      checkColor: "text-custom-pink",
    },
    {
      title: "Data Science & Analytics",
      icon: Database,
      skills: [
        "Data Analysis",
        "Statistical Modeling",
        "Data Visualization",
        "Feature Engineering",
        "SQL",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Exploratory Data Analysis (EDA)",
      ],
      titleColor: "text-custom-magenta",
      iconColor: "text-custom-magenta",
      checkColor: "text-custom-magenta",
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Python", "AWS", "Docker", "Git & GitHub", "MLOps", "Tableau", "Power BI", "Kubernetes"],
      titleColor: "text-custom-peach",
      iconColor: "text-custom-peach",
      checkColor: "text-custom-peach",
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-card animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-custom-purple">
          Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-background/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-card shadow-lg mr-4 border border-border">
                  <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                </div>
                <h3 className={`text-xl font-bold ${category.titleColor}`}>{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 bg-card/50 backdrop-blur-sm rounded-lg p-2 border border-border/50"
                  >
                    <CheckCircle className={`h-4 w-4 ${category.checkColor}`} />
                    <span className="text-foreground font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
