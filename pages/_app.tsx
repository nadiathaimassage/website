import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import localFont from "next/font/local"
import { Poppins } from "next/font/google"

export const NewYork = localFont({
  src: '../NewYork.woff2',
  variable: '--newyork',
})

export const inter = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--inter',
})

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
