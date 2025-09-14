"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  size: number
  x: number
  y: number
  delay: number
  twinkleDuration: number
  floatDuration: number
  color: string
}

// These colors will now dynamically resolve based on the theme via CSS variables
const colors = ["bg-custom-pink", "bg-custom-magenta", "bg-custom-peach"]

export function Starfield({ numStars = 70 }: { numStars?: number }) {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const newStars: Star[] = []
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 1, // 1px to 3px
        x: Math.random() * 100, // 0% to 100%
        y: Math.random() * 100, // 0% to 100%
        delay: Math.random() * 5, // 0s to 5s delay for overall animation start
        twinkleDuration: Math.random() * 3 + 2, // 2s to 5s duration for twinkle
        floatDuration: Math.random() * 4 + 3, // 3s to 7s duration for float
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    setStars(newStars)
  }, [numStars])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${star.color}`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: `
              twinkle ${star.twinkleDuration}s ease-in-out infinite ${star.delay}s,
              star-float ${star.floatDuration}s ease-in-out infinite ${star.delay}s
            `,
          }}
        />
      ))}
    </div>
  )
}
