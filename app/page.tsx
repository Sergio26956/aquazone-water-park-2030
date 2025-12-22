'use client'

import React from 'react'
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton'
import FuturisticGallery from '../components/FuturisticGallery'
import SectionTransition from '../components/SectionTransition'
import { motion } from 'framer-motion'

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/background_main.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 p-10 flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold mb-6 text-center"
        >
          AQUAZONE Water Park
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-center mb-10 max-w-3xl"
        >
          Vive la experiencia acuática más futurista y premium del mundo
        </motion.p>

        <SectionTransition title="Explora nuestros parques" />

        <FuturisticGallery />
      </div>

      <WhatsAppFloatingButton />
    </div>
  )
}

export default HomePage
