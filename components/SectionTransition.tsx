import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionTransition({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ margin: "50px 0" }}
    >
      {children}
    </motion.section>
  );
}
