import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { analytics } from '../firebase/clientApp'
import SiteHeader from '../src/components/SiteHeader'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics()
    }
  }, [])

  return (
    <ChakraProvider
      theme={{
        ...theme,
        fonts: {
          heading: 'Cereal',
          body: 'Cereal',
          mono: 'Cereal'
        }
      }}
    >
      <SiteHeader />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
