import FuturisticGallery from "@/components/FuturisticGallery"

export default function GaleriaTerrestre() {
  return (
    <main style={{ padding: "140px 8vw" }}>
      <h1>Galería Terrestre</h1>
      <FuturisticGallery
        images={[
          "/images/urbanos/6.jpg",
          "/images/urbanos/7.jpg",
          "/images/urbanos/8.jpg"
        ]}
      />
    </main>
  )
}
