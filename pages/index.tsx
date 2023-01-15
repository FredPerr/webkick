import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'
import { useTheme } from 'styled-components'
import useBreakpoint from '@/hooks/useBreakpoint'
import Box from '@/components/box'

export default function Home() {
  const theme = useTheme()
  const breakpoint = useBreakpoint()
  return (
    <>
      <Box css={{ background: theme.colors.success, width: 100, height: 100 }}>
        {breakpoint}
      </Box>
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
