import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -150])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Subtle gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 50% at 50% 50%, rgba(120, 119, 198, 0.06), transparent 70%)',
        }}
      />

      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10"
        style={{ opacity, y, scale }}
      >
        <div className="text-center max-w-5xl mx-auto" style={{ paddingTop: '8rem' }}>
          {/* Large confident typography - Apple style */}
          <motion.h1
            className="text-8xl md:text-[12rem] lg:text-[16rem] font-extralight mb-12 tracking-tighter leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.2
            }}
            style={{
              color: '#ffffff',
              fontWeight: 200,
              letterSpacing: '-0.04em',
            }}
          >
            ALMIR 
          </motion.h1>

          {/* Elegant tagline */}
          <motion.div
            className="text-3xl md:text-5xl lg:text-6xl font-light mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.5, 
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            Creative Developer
            <br />
            <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              & Digital Artist
            </span>
          </motion.div>

          {/* Description - premium spacing */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-20 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.8, 
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Создаю цифровые впечатления, которые стирают границы между технологиями и искусством
          </motion.p>

          {/* Premium buttons - minimal and elegant */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.1, 
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99]
            }}
          >
            <motion.button
              onClick={() => {
                const element = document.getElementById('projects')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-12 py-5 glass rounded-full font-light text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                color: '#ffffff',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <span className="relative z-10">Мои проекты</span>
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </motion.button>

            <motion.button
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-12 py-5 rounded-full font-light text-lg border border-white/20 hover:border-white/40 transition-all duration-500"
              whileHover={{ scale: 1.02, y: -2, borderColor: 'rgba(255, 255, 255, 0.6)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                color: '#ffffff',
                background: 'transparent',
              }}
            >
              Связаться
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Minimal scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-3 text-white/30 hover:text-white/50 transition-colors duration-500"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs font-light tracking-widest uppercase">Scroll</span>
          <FaArrowDown className="text-sm" />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
