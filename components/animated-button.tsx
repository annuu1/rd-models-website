"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  href?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

export function AnimatedButton({
  children,
  variant = "default",
  size = "default",
  className = "",
  href,
  onClick,
  type = "button",
}: AnimatedButtonProps) {
  const buttonContent = (
    <motion.div
      className="relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0"
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div className="relative z-10" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
        {children}
      </motion.div>
    </motion.div>
  )

  if (href) {
    return (
      <Button variant={variant} size={size} className={className} asChild>
        <motion.a href={href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
          {buttonContent}
        </motion.a>
      </Button>
    )
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={onClick} type={type} asChild>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
        {buttonContent}
      </motion.button>
    </Button>
  )
}
