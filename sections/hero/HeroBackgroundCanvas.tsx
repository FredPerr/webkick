import React, { useRef, useEffect } from 'react'
import './HeroBackgroundAnimation.module.css'
import Gradient from '@/utils/Gradient'

const drawRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
) => {
  ctx.beginPath()
  ctx.strokeStyle = 'red'
  ctx.lineWidth = 10
  ctx.rect(x, y, w, h)
  ctx.stroke()
}

const draw = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = '#aaa000'
  ctx.beginPath()
  ctx.arc(50, 100, 20, 0, 2 * Math.PI)
  ctx.fill()
}

const HeroBackgroundAnimation: React.FC<{}> = () => {
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#aaa000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2 * Math.PI)
    ctx.fill()
  }

  useEffect(() => {
    const canvas = document.getElementById(
      'hero-background-canvas',
    ) as HTMLCanvasElement
    if (!canvas) throw new Error('Canvas not found')
    const ctx = canvas.getContext('webgl', { antialias: true })
    if (!ctx) throw new Error('Context not initialized properly')
    // var gradient = new Gradient(
    //   ['#ffc857', '#90d7fe', '#ff61ab', '#ff303d', '#a963ed'],
    //   ctx,
    // )
    // gradient.initGradient('#hero-background-canvas')
    // draw(ctx)
  }, [draw])

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
