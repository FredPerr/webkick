import styles from './SectionTitle.module.scss'

interface SectionTitleProps {
  title: string
  subtitle: string
  contrast?: boolean
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <div className={styles.container}>
      <h2
        className={`${styles.title} ${props.contrast ? styles.contrast : ''}`}
      >
        {props.title}
      </h2>
      <hr
        className={`${styles.divider} ${props.contrast ? styles.contrast : ''}`}
      />
      <h3
        className={`${styles.subtitle} ${
          props.contrast ? styles.contrast : ''
        }`}
      >
        {props.subtitle}
      </h3>
    </div>
  )
}
