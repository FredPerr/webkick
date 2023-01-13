import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <nav>
      <Link href="/about">{t('test')}</Link>
    </nav>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
