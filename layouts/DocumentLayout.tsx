import Layout, { LayoutProps } from './Default'
import styles from './DocumentLayout.module.scss'

interface DocumentLayoutProps extends LayoutProps {
  title: string
  small: React.ReactNode
}

export default function DocumentLayout(props: DocumentLayoutProps) {
  return (
    <Layout pageName={props.pageName}>
      <main className={styles.container}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>{props.title}</h1>
          {props.small}
        </div>
        {props.children}
      </main>
    </Layout>
  )
}
