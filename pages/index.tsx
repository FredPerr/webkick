import Layout from '@/layouts/Layout'
import Hero from '@/sections/hero'
import { Text } from '@nextui-org/react'


export default function Home() {
  return (
    <>
      <Hero/>
      <Text>Test</Text>
    </>
  )
}


Home.layout = (page: React.ReactElement)=> {
  return <Layout>{page}</Layout>
}