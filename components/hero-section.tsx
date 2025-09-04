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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Hi, I'm <span className="text-primary">Nora Raafat</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">Data Analyst</h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg sm:text-xl text-primary font-semibold text-balance">
              "Analytical and detail-oriented Data Analyst with 2 years of experience in collecting, cleaning, and
              interpreting data to drive business insights."
            </p>

            <p className="text-lg sm:text-xl font-medium text-foreground text-balance border-l-4 border-primary pl-4 bg-muted/20 py-3 rounded-r-lg">
              I specialize in transforming raw data into strategic insights that improve decision-making efficiency by
              up to 100%.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
              Skilled in statistical analysis, data visualization, and database management. Adept at using tools like
              SQL, Python, Excel, and BI platforms to translate complex datasets into actionable strategies that support
              smarter business decisions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToProjects} size="lg" className="text-base px-8 py-3">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-3 bg-transparent"
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
