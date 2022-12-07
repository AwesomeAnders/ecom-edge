import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { appWithI18Next } from 'ni18n'
import { ni18nConfig } from '../ni18n.config'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default appWithI18Next(App, ni18nConfig)
