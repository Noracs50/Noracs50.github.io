import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Database, BarChart3, Code, Lightbulb, Users, FileSpreadsheet } from "lucide-react"

const technicalSkills = [
  { name: "SQL & Database Management", level: 90, icon: Database },
  { name: "Python (Pandas, NumPy, Matplotlib)", level: 85, icon: Code },
  { name: "Excel (Pivot Tables, Power Query)", level: 95, icon: FileSpreadsheet },
  { name: "Tableau", level: 88, icon: BarChart3 },
  { name: "Power BI", level: 88, icon: BarChart3 },
  { name: "Statistical Analysis", level: 82, icon: BarChart3 },
]

const softSkills = [
  { name: "Data Cleaning & Transformation", icon: Database },
  { name: "Business Intelligence Reporting", icon: BarChart3 },
  { name: "Cross-functional Collaboration", icon: Users },
  { name: "Analytical Thinking", icon: Lightbulb },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(99,102,241,0.02)_50%,transparent_75%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit of technical and analytical skills developed through hands-on projects, professional
            training, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <Card className="professional-card border-2 border-border shadow-lg hover:shadow-xl hover:border-accent/70">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Code className="mr-3 h-5 w-5 text-accent" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IconComponent className="mr-2 h-4 w-4 text-accent" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Core Competencies */}
          <Card className="professional-card border-2 border-border shadow-lg hover:shadow-xl hover:border-accent/70">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Users className="mr-3 h-5 w-5 text-accent" />
                Core Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-background rounded-lg border-2 border-border hover:border-accent/50 transition-colors"
                    >
                      <IconComponent className="mr-3 h-5 w-5 text-accent" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
