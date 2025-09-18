"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03),transparent_50%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Hi, I'm <span className="text-accent">Nora Raafat</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium tracking-wide">Junior Data Analyst</h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-card border border-border/30 rounded-lg p-6 shadow-sm hover:border-accent/30 transition-all duration-300">
              <p className="text-lg sm:text-xl text-card-foreground font-semibold text-balance italic">
                "Analytical and detail-oriented Data Analyst with 2 years of experience in collecting, cleaning, and
                interpreting data to drive business insights."
              </p>
            </div>

            <div className="professional-card p-6 bg-gradient-to-r from-accent/5 to-accent/10 border-l-4 border-accent border border-border/30 rounded-lg">
              <p className="text-lg sm:text-xl font-semibold text-foreground text-balance">
                I specialize in transforming raw data into strategic insights that improve decision-making efficiency by
                up to 100%.
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              Skilled in statistical analysis, data visualization, and database management. Adept at using tools like
              SQL, Python, Excel, and BI platforms to translate complex datasets into actionable strategies that support
              smarter business decisions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="text-base px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 border border-accent/20"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-3 border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent hover:border-accent/50"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/16Ey6p6Lr969pRkAs2v6vbQtEzWoARFKc/view?usp=drive_link",
                  "_blank",
                )
              }
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
