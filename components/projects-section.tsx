import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "SQL Article Views Analysis",
    description:
      "Comprehensive SQL-only data analysis project examining article views patterns, author engagement, and user behavior. Demonstrates advanced SQL skills through complex queries analyzing article popularity and identifying key insights from viewing data.",
    technologies: ["SQL", "Database Management", "Data Analysis", "Query Optimization"],
    githubUrl: "https://github.com/Noracs50/SQL-Article-Views-Analysis",
    demoUrl: "https://github.com/Noracs50/SQL-Article-Views-Analysis",
  },
  {
    title: "Bellabeat Capstone Project",
    description:
      "Business Case Study from Google Data Analytics Certificate analyzing smart device usage patterns and user behavior to provide strategic recommendations for Bellabeat's marketing strategy.",
    technologies: ["Google Analytics", "R", "Data Visualization", "Statistical Analysis"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Titanic Dashboard",
    description:
      "Comprehensive analysis of passenger data examining survival and non-survival patterns using KPIs, Pivot Tables, and interactive charts to identify key factors affecting passenger outcomes.",
    technologies: ["Excel", "Pivot Tables", "Data Visualization", "Statistical Analysis"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Vrinda Store Annual Report 2022",
    description:
      "Built a comprehensive sales performance dashboard using Power Query, Pivot Tables, and charts to analyze annual sales data, improving sales forecasting accuracy by 15%.",
    technologies: ["Excel", "Power Query", "Pivot Tables", "Data Visualization"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "DEPI Dashboard Projects",
    description:
      "Designed and implemented interactive dashboards in Tableau and Power BI during Digital Egypt Pioneers Initiative training, improving decision-making efficiency by 100%.",
    technologies: ["Tableau", "Power BI", "SQL", "Data Visualization"],
    githubUrl: "#",
    demoUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my data analysis projects demonstrating problem-solving skills and technical expertise across
            various business domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-foreground text-sm rounded-full font-medium border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} className="flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demoUrl} className="flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </a>
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
