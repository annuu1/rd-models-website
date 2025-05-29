"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export function ClientLogos() {
  // List of client image filenames from /public/images/clients
  const clientImageFiles = [
    "1519952102385.jfif",
    "1599464154477-Developer-Logo.jpg",
    "1603281560725.jfif",
    "5527Akshat Group.png",
    "9998Mahima Group.png",
    "AKFD_with+Ayush+Kasliwal_color.png",
    "Ashadeep-Group-1420007835004-Ashadeep-Logo-with-TM-jpg.jpg",
    "Ashiana Housing Limited 4.jpg",
    "Bardoya-Group-Logo.jpg",
    "EqntE_jVkAAP5b6.png",
    "First-Stone-logo.jpg",
    "Jaipur-smart-city.jpg",
    "LT-1575460417.jpg",
    "Lalit-roongta-group-logo.jpg",
    "Logo-585x1024.png",
    "Logo-Godrej-Properties-1-350x213-1.jpg",
    "Logo-egis.gif",
    "Manglam-Png.png",
    "PWD-logo.png",
    "SARAS-800x565.jpg",
    "ajmer-development-authority.jpg",
    "anukampa-logo.jpeg",
    "asdad (1).jfif",
    "asdad (4).png",
    "cc.jfif",
    "d822865d1ad12d1221f3ccd254e0478b.jpg",
    "download (1).jfif",
    "download (1).png",
    "download (2).jfif",
    "download (2).png",
    "download (3).jfif",
    "download (3).png",
    "download (4).jfif",
    "download (4).png",
    "download (5).jfif",
    "download (5).png",
    "download (6).png",
    "download (7).jfif",
    "download (7).png",
    "download (8).jfif",
    "download (9).jfif",
    "download.jfif",
    "download.png",
    "images (2).png",
    "images.jfif",
    "images.png",
    "ircon_logo_1606192403870_1606192417901.webp",
    "jdajodhpur-logo.jpg",
    "logo (1).png",
    "logo-2048-pixel.jpg",
    "logo.png",
    "logo1.gif",
    "medium (1).webp",
    "medium.webp",
    "mojika-ultima.jpeg",
    "mps_kalwarroad.png",
    "oB9VfDsl_400x400.jpg",
    "radisson-logo-1.png",
    "silver-logo.png",
    "symphonia-and-graphics-malviya-nagar-jaipur-computer-graphic-designers-rfjzlilox2-250.webp",
    "tata.jpg",
    "vbr9pzk7.png",
  ];

  // Split into 3 rows
  function splitIntoRows(arr: string[], numRows: number) {
    const rows: string[][] = Array.from({ length: numRows }, () => []);
    arr.forEach((item, idx) => {
      rows[idx % numRows].push(item);
    });
    return rows;
  }
  const rows = splitIntoRows(clientImageFiles, 3);

  return (
    <div className="w-full overflow-hidden py-8">
      {/* Render each row of client logos */}
      {rows.map((row, rowIdx) => (
        <motion.div
          key={rowIdx}
          className="flex mb-4"
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
          {row.map((filename: string, index: number) => {
            // Clean up filename for alt text
            const alt = filename.replace(/[-_]/g, ' ').replace(/\.[^/.]+$/, '');
            return (
              <div key={`${filename}-${index}`} className="flex-shrink-0 mx-8 group">
                <div className="relative h-16 w-48 transition-all duration-300 client-logo-hover group-hover:scale-110">
                  <Image src={`/images/clients/${filename}`} alt={alt} fill className="object-contain client-logo-img" />
                </div>
              </div>
            );
          })}
        </motion.div>
      ))}
    </div>
  )
}
