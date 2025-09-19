"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Heart, Users, Shield } from "lucide-react"
import { heroContent } from "@/lib/content/hero"
import { contactContent } from "@/lib/content/contact"

export function HeroSection() {
  const handleWhatsAppContact = () => {
    const whatsappUrl = `https://wa.me/${contactContent.whatsappNumber}?text=${encodeURIComponent(contactContent.whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="hero" className="relative bg-background pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <Card className="bg-white shadow-lg border border-gray-200 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="order-1 lg:order-2 relative">
                <div className="w-full h-64 sm:h-80 lg:h-full relative overflow-hidden">
                  <img
                    src="/elder.jpg"
                    alt="Happy elderly people in community care"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/20 lg:to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/30 lg:hidden"></div>
                <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-primary/30 hidden lg:block"></div>
              </div>

              <div className="order-2 lg:order-1 p-6 lg:p-8 space-y-4 lg:space-y-6">
                <div className="flex items-center gap-2 text-primary">
                  <div className="w-6 h-6 bg-pink-200 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{heroContent.badge}</span>
                </div>

                <h1 className="text-lg sm:text-xl lg:text-3xl font-bold text-foreground leading-tight text-balance">
                  {heroContent.title}
                </h1>

                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed text-pretty">
                  {heroContent.description}
                </p>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm">{heroContent.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3">
                  {heroContent.features.map((feature, index) => (
                    <div
                      key={feature.label}
                      className={`text-center p-2 bg-${feature.color}-50 rounded-lg border border-gray-200`}
                    >
                      {
                        [
                          <Heart className="w-4 h-4 text-red-500 mx-auto mb-1" key="heart" />,
                          <Users className="w-4 h-4 text-blue-500 mx-auto mb-1" key="users" />,
                          <Shield className="w-4 h-4 text-green-500 mx-auto mb-1" key="shield" />,
                        ][index]
                      }
                      <p className="text-xs font-medium text-gray-800">{feature.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="text-xs sm:text-sm px-4 py-2"
                    onClick={handleWhatsAppContact}
                  >
                    {heroContent.ctaPrimary}
                  </Button>
                  <Button
                    variant="outline"
                    className="text-xs sm:text-sm px-4 py-2 bg-transparent"
                    onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {heroContent.ctaSecondary}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
