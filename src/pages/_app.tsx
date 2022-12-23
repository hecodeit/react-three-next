import '@/styles/globals.css'
import '@/styles/vars.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'

const inter = Inter({
  weight: ['100', '300'],
  subsets: ['latin']
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
