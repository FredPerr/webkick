import Button from '@/components/button'
import Logo from '@/components/logo'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'
import NextLink from 'next/link'

export default function Footer() {
  const theme = useTheme()
  const { t } = useTranslation('footer')
  const { locale, asPath } = useRouter()
  return (
    <footer>
      <div
        css={{
          backgroundColor: theme.colors.backgroundPaper,
          borderTop: `1px solid ${theme.colors.gray400}`,
          padding: '2rem 15%',
          gap: '4rem',
          width: '100%',
          display: 'grid',
          gridTemplate: '1fr / auto repeat(3, 1fr)',
          [theme.media.smMax]: {
            gridTemplate: 'repeat(4, auto) / 100%',
          },
          '& ul': {
            listStyle: 'none',
          },
          '& li': {
            marginBottom: '1rem',
            fontSize: 14,
            cursor: 'pointer',
            color: theme.colors.primaryDark,
            '&:hover': {
              color: theme.colors.primary,
            },
            '& a:visited': {
              color: theme.colors.primaryDark,
            },
          },
        }}
      >
        <div>
          <Logo text size={45} />

          <NextLink href={asPath} locale={locale == 'fr' ? 'en' : 'fr'}>
            <Button
              variant="text"
              color="text"
              css={{ textDecoration: 'underline', fontWeight: 400 }}
            >
              {t('common:translate', {
                lng: locale == 'fr' ? 'en' : 'fr',
              })}
            </Button>
          </NextLink>
        </div>
        <ul>
          <li>
            <NextLink href="/#services">Services</NextLink>
          </li>
          <li>
            <NextLink href="/#about">Garantie</NextLink>
          </li>
          {/* <li><NextLink href="/blog">Blogue</NextLink></li> */}
        </ul>
        <ul>
          <li>
            <NextLink href="/#quote">Ma soumission</NextLink>
          </li>
          <li>
            <NextLink href="/#quote">Nous contacter</NextLink>
          </li>
        </ul>
        <ul>
          <li>
            <NextLink href="/legal/privacy-policy">
              Politique de confidentialité
            </NextLink>
          </li>
          <li>
            <NextLink href="/legal/terms-and-conditions">
              Termes et conditions
            </NextLink>
          </li>
        </ul>
      </div>
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: `1px solid ${theme.colors.gray100}`,
        }}
      >
        <span
          css={{
            fontSize: 11.5,
            color: theme.colors.gray800,
            marginLeft: '2rem',
          }}
        >
          {t('common:footer.copyright', { year: new Date().getFullYear() })}
        </span>
      </div>
    </footer>
  )
}
