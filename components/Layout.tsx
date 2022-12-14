import { NextSeo } from 'next-seo'
import { inter, NewYork } from '../pages/_app'
import { Header } from './Header'
import { Smoother } from './Smoother'

export const Layout = ({ children }: any) => {
  return (
    <>
      <NextSeo
        title={`Nadia Thai Massage`}
        description={`Short description about this website and what it's about.`}
        canonical={`https://www.example.com`}
      />
      <Smoother>
        <Header />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className={`${NewYork.variable} ${inter.variable} ${inter.className}`}>
              {children}
            </main>
          </div>
        </div>
      </Smoother>
    </>
  )
}
