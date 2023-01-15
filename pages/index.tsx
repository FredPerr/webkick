import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'
import { useTheme } from 'styled-components'
import useBreakpoint from '@/hooks/useBreakpoint'

export default function Home() {
  const theme = useTheme()
  const breakpoint = useBreakpoint()
  return (
    <>
      <h1 css={{ color: theme.colors.error }}>{breakpoint}</h1>
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
