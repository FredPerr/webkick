import React, { useEffect } from 'react'
import Gradient from "@/utils/Gradient"

const HeroBackgroundAnimation: React.FC<{}> = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      'hero-background-canvas',
    ) as HTMLCanvasElement
    if (!canvas) throw new Error('Canvas not found')
    const ctx = canvas.getContext('webgl', { antialias: true })
    if (!ctx) throw new Error('Context not initialized properly')
    var gradient = new Gradient(
      ['#ffc857', '#90d7fe', '#ff61ab', '#ff303d', '#a963ed']
    )
    gradient.initGradient('#hero-background-canvas')
  }, [])

  return (
    <canvas
      id="hero-background-canvas"
      width={400}
      height={400}
      css={{ backgroundColor: '#000FFF' }}
    />
  )
}

export default HeroBackgroundAnimation
