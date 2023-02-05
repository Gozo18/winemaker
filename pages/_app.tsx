import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import Layout from '../components/Layout'
import { StateContext } from '../config/context'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <StateContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </div>
  )
}
