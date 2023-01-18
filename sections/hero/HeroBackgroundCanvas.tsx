import React, { useEffect } from 'react'
import Gradient from '@/utils/Gradient'
import useViewport from '@/hooks/useViewport'

const HeroBackgroundAnimation: React.FC<{}> = () => {
  useEffect(() => {
    const canvas = document.getElementById(
      'hero-background-canvas',
    ) as HTMLCanvasElement
    if (!canvas) throw new Error('Canvas not found')
    const ctx = canvas.getContext('webgl', { antialias: true })
    if (!ctx) throw new Error('Context not initialized properly')
    var gradient = new Gradient([
      '#ffc857',
      '#90d7fe',
      '#ff61ab',
      '#ff303d',
      '#a963ed',
    ])
    gradient.initGradient('#hero-background-canvas')
  }, [])

  return (
    <canvas
      id="hero-background-canvas"
      css={{
        clipPath: 'polygon(0 0, 100% 0, 100% 30vh, 0 70vh)',
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    />
  )
}

export default HeroBackgroundAnimation
