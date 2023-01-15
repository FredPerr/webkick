import React from 'react'

export default function useViewport() {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  React.useEffect(() => {
    if (window === undefined) throw new Error('window is undefined')
    window.addEventListener('resize', () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    })
  }, [])
  return size
}
