import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { DefaultLayout } from 'layouts'
import React from 'react'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <>
      <p>{t('test')}</p>
    </>
  )
}

Home.PageLayout = (page: React.ReactElement) => {
  return <DefaultLayout pageName="home">{page}</DefaultLayout>
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  }
}
