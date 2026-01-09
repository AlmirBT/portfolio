import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Данные дипломов - можно легко расширить
const diplomasData = [
  {
    id: 1,
    image: 'public/diploms/ZZc2KdcC6IJ1ZzC8wOynTNxPMzGCSvWf.png',
    title: 'Основы Python - Часть 1',
    organization: 'Skillbox',
    year: '2024',
  },
  {
    id: 2,
    image: 'public/diploms/zm1X8S5zWAm6Z7QuQVfLuGFgDwLpLXmV.png',
    title: 'Освновы Python - Часть 2',
    organization: 'Skillbox',
    year: '2024',
  },
  {
    id: 3,
    image: 'public/diploms/xPQFU7esNqwTJ1oU9lxywogM1gYZ08nQ.png',
    title: 'Python Advanced - Изучение фреймворков Python.',
    organization: 'Skillbox',
    year: '2024',
  },
  {
    id: 4,
    image: 'public/diploms/rAqyxRb4GiNIGcXshm5CEDk2N8IJl6wt.png',
    title: 'Python Django - Изучение фреймворка Django, работа с баззами данных, создание веб-приложений.',
    organization: 'Skillbox',
    year: '2023',
  },
  {
    id: 5,
    image: 'public/diploms/3RLlokjaKanxFadLzdH1F5k2c04gbZ2L.png',
    title: 'Полное освоение Python web development - Полное окончание учения.',
    organization: 'Skillbox',
    year: '2025',
  },
  {
    id: 6,
    image: 'public/diploms/git.jpg',
    title: 'Git - Изучение системы контроля версий Git, работа с репозиториями, ветки, мерж, конфликты.',
    organization: 'Учебный центр ИТ-Академии',
    year: '2024',
  },
  {
    id: 7,
    image: 'public/diploms/java.png',
    title: 'Java - Изучение языка программирования Java, работа с классами, объектами, методами, интерфейсами, абстрактными классам',
    organization: 'Udemy - Учебный центр IT-технологий',
  }
]

const Diplomas = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayIntervalRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Автопрокрутка
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % diplomasData.length)
      }, 5000) // Меняем каждые 5 секунд
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current)
      }
    }
  }, [isAutoPlaying])

  // Остановка автопрокрутки при наведении
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Возобновляем автопрокрутку через 8 секунд после ручного переключения
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const goToPrevious = () => {
    goToSlide((currentIndex - 1 + diplomasData.length) % diplomasData.length)
  }

  const goToNext = () => {
    goToSlide((currentIndex + 1) % diplomasData.length)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 50

    if (distance > minSwipeDistance) {
      // Swipe left - next
      goToNext()
    } else if (distance < -minSwipeDistance) {
      // Swipe right - previous
      goToPrevious()
    }

    touchStartX.current = 0
    touchEndX.current = 0
  }

  return (
    <section
      id="diplomas"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-40 overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10"
        style={{ opacity, y }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <motion.h2
            className="text-7xl md:text-9xl lg:text-[10rem] font-extralight mb-32 text-center tracking-tighter"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            style={{
              color: '#ffffff',
              fontWeight: 200,
              letterSpacing: '-0.04em',
            }}
          >
            Дипломы
          </motion.h2>

          <motion.p
            className="text-center mb-32 text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
          >
            Сертификаты об окончании курсов
          </motion.p>

          {/* Carousel Container */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel */}
            <div className="relative overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.6, -0.05, 0.01, 0.99],
                  }}
                  className="w-full"
                >
                  <DiplomaCard
                    diploma={diplomasData[currentIndex]}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 glass glass-hover rounded-full transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
              aria-label="Предыдущий диплом"
              style={{ color: '#ffffff' }}
            >
              <FaChevronLeft className="text-xl md:text-3xl" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 glass glass-hover rounded-full transition-all duration-300 hover:scale-110 active:scale-95 touch-manipulation"
              aria-label="Следующий диплом"
              style={{ color: '#ffffff' }}
            >
              <FaChevronRight className="text-xl md:text-3xl" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-12">
              {diplomasData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative transition-all duration-300 ${
                    index === currentIndex ? 'w-12' : 'w-3'
                  } h-3 rounded-full`}
                  style={{
                    background:
                      index === currentIndex
                        ? 'rgba(255, 255, 255, 0.8)'
                        : 'rgba(255, 255, 255, 0.3)',
                  }}
                  aria-label={`Перейти к диплому ${index + 1}`}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                      }}
                      layoutId="activeDot"
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const DiplomaCard = ({ diploma }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="glass glass-hover rounded-3xl overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      {/* Inner glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden bg-black/20">
          <motion.img
            src={diploma.image}
            alt={diploma.title}
            className="w-full h-full object-contain p-6 md:p-12"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Overlay gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Info Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div
              className="text-sm md:text-base font-light mb-4 tracking-wider uppercase"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              {diploma.organization}
            </div>

            <h3
              className="text-3xl md:text-5xl font-extralight mb-6 leading-tight"
              style={{ color: '#ffffff' }}
            >
              {diploma.title}
            </h3>

            <div
              className="text-lg md:text-xl font-light"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              {diploma.year}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Diplomas
