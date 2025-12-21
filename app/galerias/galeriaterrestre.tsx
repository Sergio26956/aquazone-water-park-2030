import FuturisticGallery from "@/components/FuturisticGallery"

export default function GaleriaTerrestre() {
  return (
    <main style={{ padding: "140px 8vw" }}>
      <h1>Galería Terrestre</h1>
      <FuturisticGallery
        images={[
          "/images/urbanos/4.jpg",
          "/images/urbanos/5.jpg"
        ]}
      />
    </main>
  )
}
