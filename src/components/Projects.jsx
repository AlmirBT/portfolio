import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const projects = [
    {
      id: 1,
      title: 'Neural Interface',
      description: 'Интерактивная визуализация нейронных сетей с использованием WebGL и Three.js. Реальное время, частицы, и динамические графы.',
      tags: ['React', 'Three.js', 'WebGL'],
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'Quantum Dashboard',
      description: 'Футуристическая панель управления с реальным временем и анимациями. Глубокие визуализации данных и интерактивные графики.',
      tags: ['React', 'TypeScript', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      github: '#',
      live: '#',
    },
    {
      id: 3,
      title: 'Cyber Marketplace',
      description: 'E-commerce платформа с виртуальной реальностью и AR функциями. Инновационный подход к онлайн-шопингу.',
      tags: ['Next.js', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      github: '#',
      live: '#',
    },
    {
      id: 4,
      title: 'Data Stream Visualizer',
      description: 'Визуализация потоков данных в реальном времени с интерактивными графиками. WebSocket интеграция и Canvas API.',
      tags: ['React', 'WebSocket', 'Canvas'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      github: '#',
      live: '#',
    },
  ]

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-40"
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-24"
        style={{ opacity }}
      >
        <motion.h2
          className="text-7xl md:text-9xl lg:text-[10rem] font-extralight text-center mb-8 tracking-tighter"
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
          Проекты
        </motion.h2>
        <motion.p
          className="text-center mb-32 text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ color: 'rgba(255, 255, 255, 0.6)' }}
        >
          Коллекция экспериментов и инноваций
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

const ProjectCard = ({ project, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="glass glass-hover rounded-3xl overflow-hidden group cursor-pointer relative"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      onClick={onSelect}
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
          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      {/* Image */}
      <div className="relative h-80 overflow-hidden z-10">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-10 relative z-10">
        <h3
          className="text-3xl font-light mb-4"
          style={{ color: '#ffffff' }}
        >
          {project.title}
        </h3>
        <p
          className="text-lg mb-8 leading-relaxed"
          style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7 }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm font-light"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            href={project.github}
            className="flex items-center gap-3 px-6 py-3 glass glass-hover rounded-lg text-base font-light relative"
            style={{ color: '#ffffff' }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub />
            <span>Code</span>
          </motion.a>
          <motion.a
            href={project.live}
            className="flex items-center gap-3 px-6 py-3 glass glass-hover rounded-lg text-base font-light relative"
            style={{ color: '#ffffff' }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt />
            <span>Live</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="glass-strong glass-hover rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative z-10"
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-20 p-3 glass glass-hover rounded-full relative"
          style={{ color: '#ffffff' }}
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="relative h-96 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        <div className="p-12 md:p-16">
          <h3
            className="text-5xl md:text-6xl font-extralight mb-6"
            style={{ color: '#ffffff', fontWeight: 200 }}
          >
            {project.title}
          </h3>
          <p
            className="text-xl md:text-2xl mb-10 leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.7 }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full text-base font-light"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.a
              href={project.github}
              className="flex items-center gap-3 px-8 py-4 glass glass-hover rounded-lg text-lg font-light relative"
              style={{ color: '#ffffff' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              <span>View Code</span>
            </motion.a>
            <motion.a
              href={project.live}
              className="flex items-center gap-3 px-8 py-4 glass glass-hover rounded-lg text-lg font-light relative"
              style={{ color: '#ffffff' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Projects
