import Layout from '@/layouts/Layout'
import Hero from '@/sections/hero'


export default function Home() {
  return (
    <>
      <Hero/>
    </>
  )
}


Home.layout = (page: React.ReactElement)=> {
  return <Layout>{page}</Layout>
}