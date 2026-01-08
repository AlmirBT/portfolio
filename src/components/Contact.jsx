import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Сообщение отправлено! (Это демо версия)')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:contact@example.com', label: 'Email' },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-40 overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10"
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
          Связаться
        </motion.h2>
        <motion.p
          className="text-center mb-32 text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ color: 'rgba(255, 255, 255, 0.6)' }}
        >
          Готовы создать что-то невероятное вместе?
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass glass-hover rounded-3xl p-12 md:p-16 space-y-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <AnimatedInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              label="Имя"
              placeholder="Ваше имя"
              isFocused={focusedField === 'name'}
              required
            />

            <AnimatedInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              label="Email"
              placeholder="your@email.com"
              isFocused={focusedField === 'email'}
              required
            />

            <AnimatedTextarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              label="Сообщение"
              placeholder="Расскажите о вашем проекте..."
              isFocused={focusedField === 'message'}
              rows={6}
              required
            />

            <motion.button
              type="submit"
              className="w-full px-8 py-5 glass glass-hover rounded-lg font-light text-lg relative overflow-hidden group"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{ color: '#ffffff' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      ⏳
                    </motion.span>
                    <span>Отправка...</span>
                  </>
                ) : (
                  <>
                    <span>Отправить сообщение</span>
                    <FaPaperPlane />
                  </>
                )}
              </span>
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.button>
          </motion.form>

          {/* Social Links & Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className="glass glass-hover rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <h3
                className="text-3xl font-light mb-12 relative z-10"
                style={{ color: '#ffffff' }}
              >
                Социальные сети
              </h3>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <SocialCard key={index} social={social} index={index} Icon={Icon} />
                  )
                })}
              </div>
            </div>

            <motion.div
              className="glass glass-hover rounded-3xl p-12 md:p-16 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h3
                className="text-3xl font-light mb-10 relative z-10"
                style={{ color: '#ffffff' }}
              >
                Информация
              </h3>
              <div className="space-y-6 text-xl font-light relative z-10" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                <p>📍 Kazakhstan, Almaty</p>
                <p>💼 Доступен для проектов</p>
                <p>⚡ Быстрый ответ в течение 24 часов</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

const SocialCard = ({ social, index, Icon }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass glass-hover rounded-2xl p-8 flex flex-col items-center justify-center gap-4 group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: '#ffffff',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 70%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      <motion.div
        animate={{
          scale: isHovered ? 1.15 : 1,
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10"
      >
        <Icon className="text-3xl" />
      </motion.div>
      <span className="text-base font-light relative z-10">{social.label}</span>
    </motion.a>
  )
}

const AnimatedInput = ({ label, isFocused, ...props }) => {
  return (
    <div className="relative">
      <motion.label
        className="block text-base font-light mb-3"
        animate={{
          color: isFocused ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {label}
      </motion.label>
      <motion.input
        className="w-full px-5 py-4 glass glass-hover rounded-lg focus:outline-none relative"
        style={{
          color: '#ffffff',
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        animate={{
          borderColor: isFocused ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
          background: isFocused ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)',
        }}
        {...props}
      />
      {isFocused && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent)',
          }}
        />
      )}
    </div>
  )
}

const AnimatedTextarea = ({ label, isFocused, ...props }) => {
  return (
    <div className="relative">
      <motion.label
        className="block text-base font-light mb-3"
        animate={{
          color: isFocused ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {label}
      </motion.label>
      <motion.textarea
        className="w-full px-5 py-4 glass glass-hover rounded-lg focus:outline-none transition-all duration-600 resize-none relative"
        style={{
          color: '#ffffff',
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        animate={{
          borderColor: isFocused ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
          background: isFocused ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)',
        }}
        {...props}
      />
      {isFocused && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent)',
          }}
        />
      )}
    </div>
  )
}

export default Contact
