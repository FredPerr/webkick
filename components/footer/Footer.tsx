import Image from 'next/image'
import styles from './Footer.module.scss'
import LogoSvg from '@/public/images/logo.svg?url'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import FooterList from './FooterList'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_container}>
        <NextLink href="/">
          <Image
            className={styles.logo}
            src={LogoSvg}
            width={300}
            height={130}
            alt="WebKick Logo"
          />
        </NextLink>
        <div className={styles.social_container}>
          {/* <NextLink href="#">
            <Image src={FacebookSvg} width={20} height={20} alt="Facebook" />
          </NextLink>
          <NextLink href="#">
            <Image src={LinkedInSvg} width={20} height={20} alt="LinkedIn" />
          </NextLink>
          <NextLink href="#">
            <Image src={TwitterSvg} width={20} height={20} alt="Twitter" />
          </NextLink> */}
        </div>
        <div className={styles.actions_container}>
          <NextLink href="#">Aller en haut</NextLink>
        </div>
      </div>
      <FooterList
        title="Services"
        links={[
          { name: 'Création de sites Web', href: '/#solution' },
          { name: 'Automatisation de processus', href: '/#solution' },
          { name: 'Hébergement Web', href: '/#solution' },
        ]}
      />
      <FooterList
        title="Communication"
        links={[
          { name: 'Obtenir ma soumission', href: '/#soumission' },
          { name: 'Nous contacter', href: '/contact' },
        ]}
      />
      <div className={styles.notice_container}>
        <NextLink href="/legal/politique-confidentialite">
          Politique de confidentialité
        </NextLink>
        <span>
          &copy; {new Date().getFullYear()} - WebKick Inc. Tous droits réservés
        </span>
        <NextLink href="/legal/conditions-utilisation">
          Conditions d’utilisation
        </NextLink>
      </div>
    </footer>
  )
}
