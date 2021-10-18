import '../styles/index.css'
import '../styles/github.css'
import { useEffect, useRef } from 'react'
import Layout from '../components/layout'
import Meta from '../components/meta'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const decoded = decodeURI(location.hash)
        document.querySelector(decoded).scrollIntoView()
      });
    }
  }, [])

  return (
    <Layout>
      <Meta />
      <Component {...pageProps} />
    </Layout>
  )
}
