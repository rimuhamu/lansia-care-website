import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { faqContent } from "@/lib/content/faq"

export function FaqSection() {
  return (
    <section id="faq" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 text-balance">
            {faqContent.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-pretty">{faqContent.description}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqContent.items.map((item, index) => (
            <AccordionItem
              key={`item-${index + 1}`}
              value={`item-${index + 1}`}
              className="bg-white rounded-lg px-4 sm:px-6 border border-gray-200"
            >
              <AccordionTrigger className="text-left font-semibold text-xs sm:text-sm lg:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 text-xs sm:text-sm lg:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
