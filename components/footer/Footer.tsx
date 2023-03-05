import Image from 'next/image'
import styles from './Footer.module.scss'
import LogoSvg from '@/public/images/logo.svg?url'
import FacebookSvg from '@/public/images/social/facebook.svg?url'
import LinkedInSvg from '@/public/images/social/linkedin.svg?url'
import TwitterSvg from '@/public/images/social/twitter.svg?url'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function Footer() {
  const { locale, locales } = useRouter()
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_container}>
        <Image src={LogoSvg} width={300} height={130} alt="WebKick Logo" />
        <div className={styles.social_container}>
          <Image src={FacebookSvg} width={20} height={20} alt="Facebook" />
          <Image src={LinkedInSvg} width={20} height={20} alt="LinkedIn" />
          <Image src={TwitterSvg} width={20} height={20} alt="Twitter" />
        </div>
        <div className={styles.actions_container}>
          <NextLink href="/" locale={locale == 'fr' ? 'en' : 'fr'}>
            Aller vers la page en {locale == 'fr' ? 'English' : 'Français'}
          </NextLink>
        </div>
      </div>
      <div className={styles.links_container}></div>
      <div className={styles.links_container}></div>
    </footer>
  )
}
