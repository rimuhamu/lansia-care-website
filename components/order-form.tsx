"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { whatsappNumber } from "@/lib/content/contact"

interface Program {
  id: string
  title: string
  duration: string
  price: string
  features: string[]
  icon: React.ReactNode
  description: string
}

interface OrderFormProps {
  program: Program
  isOpen: boolean
  onClose: () => void
}

export function OrderForm({ program, isOpen, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleWhatsAppOrder = () => {
    const message = `Halo! Saya ingin memesan program "${program.title}".

Detail Program:
- Nama Program: ${program.title}
- Durasi: ${program.duration}
- Harga: ${program.price}

Data Pemesan:
- Nama: ${formData.name}
- No. Telepon: ${formData.phone}
- Email: ${formData.email}
- Alamat: ${formData.address}
${formData.notes ? `- Catatan: ${formData.notes}` : ""}

Mohon informasi lebih lanjut mengenai program ini. Terima kasih!`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-base md:text-lg font-bold text-balance">
            Pesan {program.title}
          </DialogTitle>
          <DialogDescription className="text-pretty text-xs md:text-sm">
            Isi formulir di bawah ini untuk melanjutkan pemesanan melalui WhatsApp
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          <div className="bg-cream p-3 rounded-lg">
            <h4 className="font-semibold text-xs md:text-sm mb-1">Detail Program:</h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              {program.title} - {program.duration} - {program.price}
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <Label htmlFor="name" className="text-xs md:text-sm">
                Nama Lengkap *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Masukkan nama lengkap"
                required
                className="mt-1 text-xs md:text-sm"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-xs md:text-sm">
                No. Telepon *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Contoh: 081234567890"
                required
                className="mt-1 text-xs md:text-sm"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-xs md:text-sm">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                className="mt-1 text-xs md:text-sm"
              />
            </div>

            <div>
              <Label htmlFor="address" className="text-xs md:text-sm">
                Alamat
              </Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Alamat lengkap"
                className="mt-1 text-xs md:text-sm"
              />
            </div>

            <div>
              <Label htmlFor="notes" className="text-xs md:text-sm">
                Catatan Tambahan
              </Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Catatan atau pertanyaan khusus..."
                rows={3}
                className="mt-1 text-xs md:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 pt-4 border-t">
          <Button
            onClick={handleWhatsAppOrder}
            className="w-full text-xs md:text-sm"
            disabled={!formData.name || !formData.phone}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Lanjutkan ke WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
