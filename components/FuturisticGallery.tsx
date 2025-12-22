import { motion } from "framer-motion";

interface FuturisticGalleryProps {
  images: string[];
}

export default function FuturisticGallery({ images }: FuturisticGalleryProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center" }}>
      {images.map((img, idx) => (
        <motion.img
          key={idx}
          src={img}
          alt={`Gallery ${idx}`}
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.5 }}
          style={{ width: "250px", height: "180px", objectFit: "cover", borderRadius: "15px", cursor: "pointer" }}
        />
      ))}
    </div>
  );
}
