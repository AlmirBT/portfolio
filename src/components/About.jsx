import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const About = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60])

  const stats = [
    { number: '50+', label: 'Проектов', description: 'Успешно реализовано' },
    { number: '5+', label: 'Лет опыта', description: 'В разработке' },
    { number: '100%', label: 'Страсть', description: 'К качеству' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-40 overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10"
        style={{ opacity, y }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section title - premium typography */}
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
            Обо мне
          </motion.h2>

          {/* Content grid - elegant layout */}
          <div className="grid lg:grid-cols-2 gap-24 items-start mb-40">
            {/* Left - Content with premium spacing */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <p
                className="text-2xl md:text-3xl lg:text-4xl leading-relaxed"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                Я разработчик, который видит код как холст, а технологии как инструменты для создания цифрового искусства.
              </p>
              <p
                className="text-xl md:text-2xl leading-relaxed"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                Моя страсть — создавать не просто функциональные приложения, а настоящие цифровые впечатления, которые заставляют людей остановиться и задуматься.
              </p>
            </motion.div>

            {/* Right - Stats - premium cards */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>

          {/* Values - elegant cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Креативность',
                description: 'Превращаю идеи в визуальные истории, где каждая деталь имеет значение и создает эмоциональную связь.',
              },
              {
                title: 'Инновации',
                description: 'Исследую границы современных технологий, создавая решения, которые опережают время.',
              },
              {
                title: 'Совершенство',
                description: 'Каждая деталь имеет значение. От кода до дизайна — все должно быть безупречно.',
              },
            ].map((item, index) => (
              <ValueCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

const StatCard = ({ stat, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="glass glass-hover rounded-3xl p-10 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      <div
        className="text-5xl md:text-6xl font-extralight mb-4 relative z-10"
        style={{ color: '#ffffff' }}
      >
        {stat.number}
      </div>
      <div
        className="text-base font-light mb-2 relative z-10"
        style={{ color: 'rgba(255, 255, 255, 0.9)' }}
      >
        {stat.label}
      </div>
      <div
        className="text-sm font-light relative z-10"
        style={{ color: 'rgba(255, 255, 255, 0.5)' }}
      >
        {stat.description}
      </div>
    </motion.div>
  )
}

const ValueCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="glass glass-hover rounded-3xl p-10 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.2 + 0.4, 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.06) 0%, transparent 60%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      <h3
        className="text-3xl font-light mb-6 relative z-10"
        style={{ color: '#ffffff' }}
      >
        {item.title}
      </h3>
      <p
        className="text-lg leading-relaxed relative z-10"
        style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7 }}
      >
        {item.description}
      </p>
    </motion.div>
  )
}

export default About
