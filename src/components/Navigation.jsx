import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const lastScrollY = useRef(0)
  const y = useMotionValue(0)
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDifference = currentScrollY - lastScrollY.current
      
      setIsScrolled(currentScrollY > 50)
      
      // Естественное скрытие/показ навбара
      // Скрываем при скролле вниз (если прокрутили больше 100px вниз)
      // Показываем при скролле вверх или в начале страницы
      if (currentScrollY < 100) {
        // В начале страницы всегда показываем
        y.set(0)
      } else if (scrollDifference > 5 && currentScrollY > lastScrollY.current) {
        // Скролл вниз - скрываем
        y.set(-100)
      } else if (scrollDifference < -5 && currentScrollY < lastScrollY.current) {
        // Скролл вверх - показываем
        y.set(0)
      }
      
      lastScrollY.current = currentScrollY
      
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = currentScrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [y])

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'glass py-5' : 'py-10'
      }`}
      style={{ 
        y: springY,
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <motion.div
          className="text-xl font-light cursor-pointer"
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ color: '#ffffff' }}
        >
          ALMIR MITROFANOV
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-sm font-light transition-colors duration-300"
              style={{
                color: activeSection === item.id
                  ? '#ffffff'
                  : 'rgba(255, 255, 255, 0.6)',
              }}
              whileHover={{ color: '#ffffff' }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  layoutId="activeSection"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.8), transparent)',
                  }}
                  initial={false}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
