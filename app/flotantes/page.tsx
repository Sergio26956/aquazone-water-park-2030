'use client'

import React from 'react'
import SectionTransition from '../../components/SectionTransition'
import FuturisticGallery from '../../components/FuturisticGallery'

const FlotantesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 p-10">
      <SectionTransition title="Parques Acuáticos Flotantes" />

      <p className="text-lg max-w-4xl mx-auto mb-8 text-center">
        Descubre nuestras piscinas y playas modulares flotantes con la última tecnología 2030.
      </p>

      <FuturisticGallery category="flotantes" />
    </div>
  )
}

export default FlotantesPage
