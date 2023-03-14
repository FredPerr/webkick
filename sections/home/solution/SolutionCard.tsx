import styles from './SolutionCard.module.scss'

interface SolutionCardProps {
  title: string
  subtitle: string
  img: React.ReactNode
}

export default function SolutionCard(props: SolutionCardProps) {
  return (
    <div className={styles.container}>
      {props.img}
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </div>
  )
}
