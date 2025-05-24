"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      const form = event.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-barlow">
            Name
          </Label>
          <Input id="name" name="name" required className="font-barlow" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="font-barlow">
            Email
          </Label>
          <Input id="email" name="email" type="email" required className="font-barlow" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="font-barlow">
          Phone
        </Label>
        <Input id="phone" name="phone" type="tel" className="font-barlow" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" className="font-barlow">
          Subject
        </Label>
        <Input id="subject" name="subject" required className="font-barlow" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="font-barlow">
          Message
        </Label>
        <Textarea id="message" name="message" rows={5} required className="font-barlow" />
      </div>
      <Button type="submit" className="w-full font-barlow" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
