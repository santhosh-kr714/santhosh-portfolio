import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Certificates from "../components/Certificates"
import Contact from "../components/Contact"
import SpaceBackground from "../components/SpaceBackground"

export default function Home() {
  return (
    <main className="relative z-10">

      <SpaceBackground />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />

    </main>
  )
}