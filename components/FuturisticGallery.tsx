"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GalleryModal from "./GalleryModal"

export default function FuturisticGallery({
  images
}: {
  images: string[]
}) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20
        }}
      >
        {images.map((img) => (
          <motion.img
            key={img}
            src={img}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{ width: "100%", borderRadius: 14, cursor: "pointer" }}
            onClick={() => setActive(img)}
          />
        ))}
      </div>

      {active && (
        <GalleryModal src={active} onClose={() => setActive(null)} />
      )}
    </>
  )
}
