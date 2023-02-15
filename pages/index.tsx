import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultLayout } from 'layouts'
import {
  ParticleColor,
  PopParticle,
  RingParticle,
  StarParticle,
} from '@/components/particles/Particle'

export default function Home() {
  return (
    <>
      <PopParticle color={ParticleColor.Yellow} animated />
      <StarParticle color={ParticleColor.Blue} animated />
      <RingParticle color={ParticleColor.Orange} animated />
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
