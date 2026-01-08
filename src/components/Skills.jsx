import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiVite,
} from 'react-icons/si'

const ThreeJsIcon = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L2.4 4.8v4.8L12 14.4l9.6-4.8V4.8L12 0zm0 2.4l7.2 3.6-7.2 3.6L4.8 6 12 2.4zM2.4 10.8L12 15.6l9.6-4.8v4.8L12 20.4l-9.6-4.8v-4.8zm0 4.8L12 20.4l9.6-4.8v4.8L12 24l-9.6-4.8v-4.8z"/>
  </svg>
)

const Skills = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB', level: 90 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 95 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 85 },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 80 },
    { name: 'Python', icon: SiPython, color: '#3776AB', level: 75 },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 85 },
    { name: 'Git', icon: SiGit, color: '#F05032', level: 88 },
    { name: 'Vite', icon: SiVite, color: '#646CFF', level: 90 },
    { name: 'Three.js', icon: ThreeJsIcon, color: '#ffffff', level: 70 },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-40 overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10"
        style={{ opacity }}
      >
        <motion.h2
          className="text-7xl md:text-9xl lg:text-[10rem] font-extralight text-center mb-32 tracking-tighter"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          style={{
            color: '#ffffff',
            fontWeight: 200,
            letterSpacing: '-0.04em',
          }}
        >
          Навыки
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="glass glass-hover rounded-3xl p-8 flex flex-col items-center justify-center group relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.08, 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {/* Inner glow on hover - additional layer */}
      <motion.div
        className="absolute inset-0 rounded-3xl z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${skill.color}08, transparent 70%)`,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      <motion.div
        className="relative z-10 mb-6"
        animate={{
          scale: isHovered ? 1.15 : 1,
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Icon className="text-5xl md:text-6xl" style={{ color: skill.color }} />
      </motion.div>

      <h3
        className="text-lg font-light mb-4 relative z-10 text-center"
        style={{ color: '#ffffff' }}
      >
        {skill.name}
      </h3>

      {/* Elegant level indicator */}
      <div
        className="text-sm font-light relative z-10"
        style={{ color: 'rgba(255, 255, 255, 0.5)' }}
      >
        {skill.level}%
      </div>
    </motion.div>
  )
}

export default Skills
