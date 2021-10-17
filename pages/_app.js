import '../styles/index.css'
import '../styles/github.css'
import { useEffect, useRef } from 'react'
import Layout from '../components/layout'
import Meta from '../components/meta'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (location.hash) {
      setTimeout(
        () => document.querySelector(location.hash).scrollIntoView(),
        1
      );
    }
  }, [])

  return (
    <Layout>
      <Meta />
      <Component {...pageProps} />
    </Layout>
  )
}
