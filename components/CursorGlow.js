"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)

  }, [])

  return (
    <div
      style={{
        left: position.x - 80,
        top: position.y - 80
      }}
      className="fixed w-40 h-40 bg-cyan-500 opacity-20 blur-3xl rounded-full pointer-events-none z-0"
    />
  )
}