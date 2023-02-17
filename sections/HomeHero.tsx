import styles from './HomeHero.module.scss'
import HeroImage from './HeroImage'

export default function HomeHero() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_container}>
        <div className={styles.hero_text_container}>Hello, I'm John Doe</div>
        <div className={styles.hero_img_container}><HeroImage/></div>
      </div>
    </section>
  )
}
