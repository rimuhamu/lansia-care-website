import { Coffee, Sunrise, Sun } from "lucide-react"
import { ProgramCard } from "@/components/program-card"
import { programsContent } from "@/lib/content/programs"

export function ProgramsSection() {
  const programs = programsContent.items.map((program, index) => ({
    ...program,
    icon: [
      <Coffee className="w-6 h-6 text-primary" key="coffee" />,
      <Sunrise className="w-6 h-6 text-primary" key="sunrise" />,
      <Sun className="w-6 h-6 text-primary" key="sun" />,
    ][index],
  }))

  return (
    <section id="programs" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-block bg-white px-4 py-2 rounded-full border border-primary/20 mb-3">
            <span className="text-primary font-semibold text-xs sm:text-sm">{programsContent.badge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 text-balance">
            {programsContent.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
            {programsContent.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  )
}
