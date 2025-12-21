import FuturisticGallery from "@/components/FuturisticGallery"

export default function GaleriaUrbano() {
  return (
    <main style={{ padding: "140px 8vw" }}>
      <h1>Galería Urbana</h1>
      <FuturisticGallery
        images={[
          "/images/urbanos/1.jpg",
          "/images/urbanos/2.jpg",
          "/images/urbanos/3.jpg"
        ]}
      />
    </main>
  )
}
