import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { TextImage } from '../components/TextImage'
import { Text } from '../components/Text'
import { Grid } from '../components/Grid'
import { Footer } from '../components/Footer'

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
      <Hero state="light" />
      <TextImage id="about" />
      <Text />
      <Grid id="services" />
      <Footer id="contact" />
    </Layout>
  )
}

export default Home
