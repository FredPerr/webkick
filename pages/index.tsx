import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'
import Logo from 'components/logo'
import Input from 'components/input'

export default function Home() {
  return (
    <>
      <Logo />
      <Input
        color="primary"
        type="password"
        variant="contained"
        name="test input"
        state="empty"
      />
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
