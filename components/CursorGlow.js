"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        left: position.x - 150,
        top: position.y - 150,
        width: "300px",
        height: "300px",
        background:
          "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }}
    />
  )
}