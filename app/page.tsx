import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import GithubProjects from "../components/GithubProjects"
import Certificates from "../components/Certificates"
import Contact from "../components/Contact"

import SpaceBackground from "../components/SpaceBackground"
import ScrollProgress from "../components/ScrollProgress"
import SocialLinks from "../components/SocialLinks"
import CursorGlow from "../components/CursorGlow"

export default function Home() {
  return (
    <main className="relative z-10">

      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Floating social icons */}
      <SocialLinks />

      {/* Animated space background */}
      <SpaceBackground />

      {/* Website sections */}
      <Navbar />
      <Hero />
      <About />
      <Skills />

      {/* Projects section */}
      <Projects />

      {/* GitHub auto projects */}
      <GithubProjects />

      {/* Certificates */}
      <Certificates />

      {/* Contact */}
      <Contact />

    </main>
  )
}