import { Code, Coffee } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card animate-fade-in">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-custom-magenta">
          About Me
        </h2>
        <div className="space-y-6">
          <div className="bg-background/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border">
            <div className="flex items-center mb-3">
              <Code className="h-6 w-6 text-custom-pink mr-2" />
              <h3 className="text-lg font-semibold text-custom-pink">AI & Data Science Enthusiast</h3>
            </div>
            <p className="text-foreground">
              Hi! I’m a Master’s student at The Ohio State University with a focus on Artificial Intelligence and Data
              Science. I specialize in building machine learning models, developing AI applications, and working with
              real-world data.
            </p>
          </div>
          <div className="bg-background/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border">
            <div className="flex items-center mb-3">
              <Coffee className="h-6 w-6 text-custom-peach mr-2" />
              <h3 className="text-lg font-semibold text-custom-peach">Beyond Coding</h3>
            </div>
            <p className="text-foreground">
              When I’m not coding, I love getting lost in creative hobbies like reading, painting, and photography. It’s a great way to stay balanced and often sparks new ideas for my work in AI. I&#39;m also a big believer in constantly learning, so I&#39;m always looking for a new tool to master or a personal project to tackle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
