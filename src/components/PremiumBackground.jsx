import { motion } from 'framer-motion'

const PremiumBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base dark layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#000000',
        }}
      />

      {/* Primary soft gradient - Apple style */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 100% 60% at 30% 20%, rgba(120, 119, 198, 0.08), transparent 60%)',
            'radial-gradient(ellipse 100% 60% at 70% 80%, rgba(120, 119, 198, 0.08), transparent 60%)',
            'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(120, 119, 198, 0.08), transparent 60%)',
            'radial-gradient(ellipse 100% 60% at 30% 20%, rgba(120, 119, 198, 0.08), transparent 60%)',
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary subtle gradient - depth layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255, 255, 255, 0.02), transparent 70%)',
        }}
        animate={{
          x: ['0%', '5%', '0%'],
          y: ['0%', '3%', '0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Light bloom - guns.lol style */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle 800px at 50% 50%, rgba(255, 255, 255, 0.015), transparent 60%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Depth gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)',
        }}
      />

      {/* Ultra-subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }}
      />
    </div>
  )
}

export default PremiumBackground
