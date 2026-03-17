import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Heritage Explorer Tourism Website",
    description:
      "A comprehensive tourism platform showcasing cultural heritage sites with interactive features and booking capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/mustafaaosamaa/Heritage_Explorer_Frontend",
    demo: "https://heritage-explorer-frontend.vercel.app/",
  },
  {
    title: "Tenzies Game",
    description:
      "An interactive dice game built with React featuring smooth animations, score tracking, and persistent game state.",
    technologies: ["React", "Node.js", "CSS"],
    github: "https://github.com/mustafaaosamaa/Tenzies-Game",
    demo: "https://tenzies-game-nine-pied.vercel.app/",
  },
  {
    title: "Memory Game",
    description:
      "A classic memory matching game built with TypeScript featuring difficulty levels and performance tracking.",
    technologies: ["TypeScript", "HTML", "CSS"],
    github: "https://github.com/mustafaaosamaa/Memory-Game",
    demo: "https://mustafaaosamaa.github.io/Memory-Game/",
  },
  {
    title: "Bank System",
    description:
      "A full-featured banking system with account management, transaction processing, and secure authentication.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/mustafaaosamaa/Bank-System",
    demo: "https://github.com/mustafaaosamaa/Bank-System",
  },
  {
    title: "Embedded-C-Microwave-Controller",
    description:
      "An embedded C project simulating a microwave controller with features like timer, power settings, and safety mechanisms.",
    technologies: ["C", "Embedded Systems"],
    github: "https://github.com/mustafaaosamaa/Embedded-C-Microwave-Controller",
    demo: "https://github.com/mustafaaosamaa/Embedded-C-Microwave-Controller",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects I've built, from full-stack applications to
            interactive games.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group hover:border-accent/50 transition-all duration-300 flex flex-col"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-2 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <Button asChild variant="ghost" size="sm" className="h-8 px-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1.5" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="h-8 px-3">
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
