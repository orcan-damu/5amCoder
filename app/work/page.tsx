"use client";

import { Card } from "@/components/ui/card";
import { Code, GitBranch, Globe, Star } from "lucide-react";

export default function Work() {
  const projects = [
    {
      title: "AI Code Assistant",
      description: "A next-generation coding assistant powered by advanced AI models.",
      tech: ["Python", "PyTorch", "React", "TypeScript"],
      icon: <Code className="w-6 h-6 text-primary" />,
      stars: 1200
    },
    {
      title: "DevOps Pipeline Builder",
      description: "Automated CI/CD pipeline generator for modern development workflows.",
      tech: ["Docker", "Kubernetes", "Go"],
      icon: <GitBranch className="w-6 h-6 text-primary" />,
      stars: 850
    },
    {
      title: "Cloud Cost Optimizer",
      description: "Smart cloud resource management and cost optimization platform.",
      tech: ["AWS", "Node.js", "GraphQL"],
      icon: <Globe className="w-6 h-6 text-primary" />,
      stars: 650
    }
  ];

  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold gradient-text">Our Work</h1>
          <p className="text-xl text-muted-foreground">
            Transforming ideas into reality, one project at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 card-hover">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {project.icon}
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}