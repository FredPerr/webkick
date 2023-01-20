import React, { useEffect } from 'react'
import Gradient from '@/utils/Gradient'
import { useTheme } from 'styled-components'

const HeroBackgroundAnimation: React.FC<{}> = () => {
  const theme = useTheme()
  useEffect(() => {
    const canvas = document.getElementById(
      'hero-background-canvas',
    ) as HTMLCanvasElement
    if (!canvas) throw new Error('Canvas not found')
    const ctx = canvas.getContext('webgl', { antialias: true })
    if (!ctx) throw new Error('Context not initialized properly')
    var gradient = new Gradient([
      '#fa9f66',
      '#90d7fe',
      '#66b3fa',
      '#ff303d',
      '#a963ed',
    ])
    gradient.initGradient('#hero-background-canvas')
  }, [])

  return (
    <canvas
      id="hero-background-canvas"
      css={{
        clipPath: 'polygon(100% 20%, 100% 0, 0 0, 0 70%)',
        [theme.media.lg]: {
          clipPath: 'polygon(100% 30%, 100% 0, 0 0, 0 70%)',
        },
        [theme.media.md]: {
          clipPath: 'polygon(100% 40%, 100% 0, 0 0, 0 70%)',
        },
        [theme.media.sm]: {
          clipPath: 'polygon(100% 30%, 100% 0, 0 0, 0 50%)',
        },
        [theme.media.xs]: {
          clipPath: 'polygon(100% 30%, 100% 0, 0 0, 0 45%)',
        },
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '650px',
      }}
    />
  )
}

export default HeroBackgroundAnimation
