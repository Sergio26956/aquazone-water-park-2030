import { motion } from "framer-motion";

export default function FuturisticGallery({ images }: { images: string[] }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", marginTop: "30px" }}>
      {images.map((img, idx) => (
        <motion.img
          key={idx}
          src={img}
          alt={`imagen-${idx}`}
          style={{ width: "300px", height: "200px", objectFit: "cover", borderRadius: "20px", boxShadow: "0 0 20px #00F0FF" }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
}
