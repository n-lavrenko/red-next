import type { AppProps } from 'next/app'
import {Outfit} from '@next/font/google'
import '../styles/globals.scss'


const outfit = Outfit({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${outfit.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
