"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FuturisticGallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20
        }}
      >
        {images.map((img) => (
          <motion.div
            key={img}
            whileHover={{ scale: 1.05, zIndex: 5 }}
            onClick={() => setSelected(img)}
            style={{
              cursor: "pointer",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 0 25px rgba(0,255,255,0.5)"
            }}
          >
            <img src={img} alt="Galería" style={{ width: "100%" }} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999
            }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxHeight: "90%",
                maxWidth: "90%",
                borderRadius: 20,
                boxShadow: "0 0 40px rgba(0,255,255,0.8)"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
