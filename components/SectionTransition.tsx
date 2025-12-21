"use client"

import { motion } from "framer-motion"

export default function SectionTransition({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{ marginBottom: 80 }}
    >
      {children}
    </motion.section>
  )
}
