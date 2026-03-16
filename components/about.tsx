import { MongoDBIcon, ExpressIcon, ReactIcon, NodeIcon } from "@/components/tech-icons"

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer specializing in the{" "}
                  <span className="text-foreground font-medium">MERN stack</span>{" "}
                  (MongoDB, Express.js, React, Node.js). I build responsive
                  frontend interfaces and scalable backend APIs with clean,
                  maintainable code.
                </p>
                <p>
                  My approach to development combines technical expertise with a
                  keen eye for user experience. I believe in writing code that's
                  not just functional, but also readable and easy to maintain.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies, contributing
                  to open-source projects, or building side projects to expand my
                  skill set.
                </p>
              </div>
            </div>
          </div>

          {/* MERN Stack Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent blur-2xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2 p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all">
                  <MongoDBIcon className="h-16 w-16" />
                  <span className="text-sm font-medium">MongoDB</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all">
                  <ExpressIcon className="h-16 w-16" />
                  <span className="text-sm font-medium">Express.js</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all">
                  <ReactIcon className="h-16 w-16" />
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all">
                  <NodeIcon className="h-16 w-16" />
                  <span className="text-sm font-medium">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
