"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "350px",
        height: "350px",
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
        filter: "blur(40px)",
      }}
    />
  )
}