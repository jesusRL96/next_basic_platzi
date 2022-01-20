import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@components/Layout/Layout'


export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
