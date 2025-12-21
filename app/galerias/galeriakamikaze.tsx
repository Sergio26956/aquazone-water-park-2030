import FuturisticGallery from "@/components/FuturisticGallery"

export default function GaleriaKamikaze() {
  return (
    <main style={{ padding: "140px 8vw" }}>
      <h1>Kamikaze Jump</h1>
      <FuturisticGallery
        images={[
          "/images/kamikaze/1.jpg",
          "/images/kamikaze/2.jpg",
          "/images/kamikaze/3.jpg"
        ]}
      />
    </main>
  )
}
