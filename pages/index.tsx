import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { TextImage } from '../components/TextImage'
import { Text } from '../components/Text'
import { Grid } from '../components/Grid'
import { Footer } from '../components/Footer'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: '[data-state=light]',
      toggleClass: {
        targets: 'header',
        className: 'light',
      },
      end: 'bottom top',
    })
  })
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/NADIALOGO.svg" />
      </Head>
      <NextSeo 
        title={`Nadia Thai Massage & Wellness`}
        description={`At Nadia Thai Massage & Wellness you will have time to relax your body and mind.`}
        canonical={`https://www.nadiathaimassagewellness.com`}
      />
      <h1 className='sr-only'>Nadia Thai Massage & Wellness</h1>
      <Hero state="light" />
      <TextImage id="about" />
      <Text />
      <Grid id="services" />
      <Footer id="contact" />
    </Layout>
  )
}

export default Home
