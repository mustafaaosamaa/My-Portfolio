import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "Sass", "Bootstrap", "JavaScript (ES6+)", "TypeScript", "React", "Angular", "Vue.js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "MongoDB Compass", "3T Studio"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <p className="text-muted-foreground max-w-2xl">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
