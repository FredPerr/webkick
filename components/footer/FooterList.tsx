import NextLink from 'next/link'
import styles from './FooterList.module.scss'

interface FooterListProps {
  title: string
  links: { name: string; href: string }[]
}

export default function FooterList(props: FooterListProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{props.title}</span>
      <ul className={styles.list}>
        {props.links.map((link) => (
          <NextLink key={link.href} passHref legacyBehavior href={link.href}>
            <li className={styles.link}>{link.name}</li>
          </NextLink>
        ))}
      </ul>
    </div>
  )
}
