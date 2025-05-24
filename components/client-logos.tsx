"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export function ClientLogos() {
  const clients = [
    {
      id: 1,
      name: "Architect Studio",
      logo: "https://rdmodels.com/wp-content/uploads/2025/01/client1.png?height=60&width=180",
    },
    {
      id: 2,
      name: "BuildTech",
      logo: "https://rdmodels.com/wp-content/uploads/2025/01/client2.png?height=60&width=180",
    },
    {
      id: 3,
      name: "Urban Developers",
      logo: "https://rdmodels.com/wp-content/uploads/2025/01/client3.png?height=60&width=180",
    },
    {
      id: 4,
      name: "Modern Homes",
      logo: "https://rdmodels.com/wp-content/uploads/2025/01/client4.png?height=60&width=180",
    },
    {
      id: 5,
      name: "City Planners",
      logo: "https://rdmodels.com/wp-content/uploads/2025/01/client5.png?height=60&width=180",
    },
    {
      id: 6,
      name: "Global Construction",
      logo: "https://rdmodels.com/wp-content/uploads/2025/01/client6.png?height=60&width=180",
    },
    {
      id: 7,
      name: "Design Masters",
      logo: "https://rdmodels.com/wp-content/uploads/2025/01/client7.png?height=60&width=180",
    },
    {
      id: 8,
      name: "Future Builders",
      logo: "https://rdmodels.com/wp-content/uploads/2025/01/client8.png?height=60&width=180",
    },
  ]

  // Duplicate clients for infinite scroll effect
  const allClients = [...clients, ...clients]

  return (
    <div className="w-full overflow-hidden py-8">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {allClients.map((client, index) => (
          <div key={`${client.id}-${index}`} className="flex-shrink-0 mx-8 group">
            <div className="relative h-16 w-48 transition-all duration-300 filter grayscale hover:grayscale-0 group-hover:scale-110">
              <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
