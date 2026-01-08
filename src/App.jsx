import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PremiumBackground from './components/PremiumBackground'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <PremiumBackground />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
