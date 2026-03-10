"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      const scrolled =
        (window.scrollY /
          (document.body.scrollHeight - window.innerHeight)) * 100

      setScroll(scrolled)
    }

    window.addEventListener("scroll", updateScroll)

    return () => {
      window.removeEventListener("scroll", updateScroll)
    }
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "4px",
        width: `${scroll}%`,
        background: "#22d3ee",
        zIndex: 100
      }}
    />
  )
}