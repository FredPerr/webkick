import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'

export default function Blog() {
  return <></>
}

Blog.PageLayout = function PageLayout(page: React.ReactElement) {
  return <DefaultLayout pageName="blog">{page}</DefaultLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
    },
  }
}
