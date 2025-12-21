"use client"

import { motion } from "framer-motion"

export default function GalleryModal({
  src,
  onClose
}: {
  src: string
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999
      }}
      onClick={onClose}
    >
      <motion.img
        src={src}
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: 16 }}
      />
    </motion.div>
  )
}
