"use client"
import SectionTransition from "@/components/SectionTransition"
import FuturisticGallery from "@/components/FuturisticGallery"

export default function Flotantes(){
  return (
    <SectionTransition>
      <section className="section">
        <h1>Parques Acuáticos Flotantes</h1>
        <p>Piscinas y playas modulares de alto impacto.</p>
        <FuturisticGallery images={[
          "/images/flotantes/1.jpg",
          "/images/flotantes/2.jpg",
          "/images/flotantes/3.jpg"
        ]}/>
      </section>
    </SectionTransition>
  )
}
