"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const FORMCARRY = process.env.NEXT_PUBLIC_FORMCARRY;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "loading", message: "Sending your message..." });

    if (!FORMCARRY && false) {
      setIsSubmitting(false);
      setStatus({ type: "error", message: "Form configuration error. Please try again later." });
      toast({
        title: "Error",
        description: "Form configuration error. Please try again later.",
        variant: "destructive",
      });
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMCARRY|| "https://formcarry.com/s/ZurztHP1rNK", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setStatus({ type: "success", message: "Message sent successfully!" });
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (error) {
      const errorMessage = error.message || "An error occurred. Please try again.";
      setStatus({ type: "error", message: errorMessage });
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <Button
        type="submit"
        className="w-full font-barlow"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      {status.message && (
        <p
          className={`text-sm font-barlow ${
            status.type === "success" ? "text-green-500" : status.type === "error" ? "text-red-500" : "text-gray-500"
          }`}
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}