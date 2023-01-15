import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'
import { useTheme } from 'styled-components'
import Box from '@/components/box'
import useMediaQuery from '@/hooks/useMediaQuery'
import useViewport from '@/hooks/useViewport'

export default function Home() {
  const theme = useTheme()
  const mediaQuery = useMediaQuery()
  const size = useViewport()
  return (
    <>
      <Box css={{ background: theme.colors.success }}>
        <p css={{ fontSize: '1rem' }}>current breakpoint: {mediaQuery}</p>
        <p css={{ fontSize: '1rem' }}>
          current breakpoint: {size.width} {size.height}
        </p>
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
