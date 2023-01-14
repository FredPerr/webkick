import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { DefaultLayout } from 'layouts'
import Logo from 'components/logo'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <Logo />
    </>
  )
}

Home.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="home">{page}</DefaultLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  }
}
