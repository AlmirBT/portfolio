import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.p
            className="text-sm font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            © {currentYear} Almir Mitrofanov. Все права защищены.
          </motion.p>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-sm font-light" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              Создано с
            </span>
            <motion.span
              className="text-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ color: '#ffffff' }}
            >
              ❤️
            </motion.span>
            <span className="text-sm font-light" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              и
            </span>
            <span className="text-sm font-mono" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              code
            </span>
          </motion.div>

          <motion.p
            className="text-sm font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            v1.0.0
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
