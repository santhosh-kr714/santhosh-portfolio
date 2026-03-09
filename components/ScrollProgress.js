"use client"
import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const progress =
        (window.scrollY / total) * 100

      setScroll(progress)
    }

    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      style={{ width: scroll + "%" }}
      className="fixed top-0 left-0 h-1 bg-cyan-400 z-50"
    />
  )
}