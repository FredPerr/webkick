import Layout, { LayoutProps } from './Default'
import styles from './DocumentLayout.module.css'

interface DocumentLayoutProps extends LayoutProps {
  title: string
}

export default function DocumentLayout(props: DocumentLayoutProps) {
  return (
    <Layout pageName={props.pageName}>
      <h1 className={styles.title}>{props.title}</h1>
      {props.children}
    </Layout>
  )
}
