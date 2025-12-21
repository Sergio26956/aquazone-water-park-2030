import FuturisticGallery from "@/components/FuturisticGallery"

export default function GaleriaFlotante() {
  return (
    <main style={{ padding: "140px 8vw" }}>
      <h1>Galería Flotante</h1>
      <FuturisticGallery
        images={[
          "/images/flotantes/1.jpg",
          "/images/flotantes/2.jpg"
        ]}
      />
    </main>
  )
}
