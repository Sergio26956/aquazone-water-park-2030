"use client"
import SectionTransition from "@/components/SectionTransition"
import FuturisticGallery from "@/components/FuturisticGallery"

export default function Urbanos(){
  return (
    <SectionTransition>
      <section className="section">
        <h1>Parques Acuáticos Terrestres</h1>
        <p>Parque urbano móvil (5 actividades) + Kamikaze Jump.</p>
        <FuturisticGallery images={[
          "/images/urbanos/1.jpg",
          "/images/urbanos/2.jpg",
          "/images/urbanos/3.jpg"
        ]}/>
      </section>
    </SectionTransition>
  )
}
