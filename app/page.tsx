import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import GithubProjects from "../components/GithubProjects"
import Certificates from "../components/Certificates"
import Contact from "../components/Contact"

import NeuralBackground from "../components/NeuralBackground"
import CursorGlow from "../components/CursorGlow"
import ScrollProgress from "../components/ScrollProgress"
import SocialLinks from "../components/SocialLinks"

export default function Home() {
  return (
    <main className="relative z-10">

      {/* Cursor glow */}
      <CursorGlow />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Floating social links */}
      <SocialLinks />

      {/* AI neural network background */}
      <NeuralBackground />

      {/* Portfolio sections */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubProjects />
      <Certificates />
      <Contact />

    </main>
  )
}