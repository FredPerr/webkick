import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'
import Button from '@/components/button'


export default function Home() {
  return (
    <>
    <Button variant='contained' color='primary' arrow shadow>Obtenir ma soumission</Button>
    <Button variant='outlined' color='primary' arrow>Contact us</Button>
    <Button variant='text' color='primary' arrow>Contact us</Button>
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
