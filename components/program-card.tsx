"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Check } from "lucide-react"
import { useState } from "react"
import { OrderForm } from "./order-form"

interface Program {
  id: string
  title: string
  duration: string
  price: string
  features: string[]
  icon: React.ReactNode
  description: string
}

interface ProgramCardProps {
  program: Program
}

export function ProgramCard({ program }: ProgramCardProps) {
  const [showOrderForm, setShowOrderForm] = useState(false)

  return (
    <>
      <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 hover:border-primary/20">
        <CardHeader className="text-center pb-4 bg-gradient-to-b from-cream/30 to-white">
          <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit shadow-sm">{program.icon}</div>
          <CardTitle className="text-xl font-bold text-balance text-gray-800">{program.title}</CardTitle>
          <div className="flex items-center justify-center gap-2 text-gray-600 bg-gray-50 rounded-full px-3 py-1 mx-auto w-fit">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Durasi: {program.duration}</span>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-6">
          <CardDescription className="text-center mb-6 text-pretty text-gray-600 leading-relaxed">
            {program.description}
          </CardDescription>

          <div className="space-y-4 mb-6 flex-1 bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Yang Anda Dapatkan:</h4>
            {program.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-1 bg-green-500 rounded-full">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center mb-6 bg-primary/5 rounded-lg p-4 border border-primary/10">
            <div className="text-sm text-gray-600 mb-1">Harga Program</div>
            <div className="text-3xl font-bold text-primary">{program.price}</div>
            <div className="text-xs text-gray-500 mt-1">per peserta</div>
          </div>

          <Button
            className="w-full shadow-md hover:shadow-lg transition-all duration-300"
            size="lg"
            onClick={() => setShowOrderForm(true)}
          >
            Pesan Sekarang
          </Button>
        </CardContent>
      </Card>

      <OrderForm program={program} isOpen={showOrderForm} onClose={() => setShowOrderForm(false)} />
    </>
  )
}
