import Image from 'next/image'
import styles from './HeroImage.module.scss'
import React from 'react'

interface FrameProps {
  name: string
  visisble?: boolean
}

const imgNames = ['decotia', 'carua']

function HeroImage() {

  const [frame, setFrame] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev)=> ((prev + 1) % imgNames.length))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.hero_img}>
      <LaptopFrame name={imgNames[frame]} visisble={frame == 0} />
      <MobileFrame name={imgNames[frame]} visisble={frame == 1}/>
    </div>
  )
}

function LaptopFrame(props: FrameProps) {
  return (
      <div className={styles.laptop_frame}>
        <Image className={`${styles.laptop_frame_img} ${props.visisble && styles.current_frame}`} src={`/images/hero/${props.name}-laptop.jpg`} alt={props.name} width={2880} height={1600}/>
      </div>
  )
}

function MobileFrame(props: FrameProps) {
  return (
      <div className={styles.mobile_frame}>
        <Image className={`${styles.mobile_frame_img} ${props.visisble && styles.current_frame}`} src={`/images/hero/${props.name}-mobile.jpg`} alt={props.name} width={780} height={1688}/>
      </div>
  )
}

export default HeroImage
