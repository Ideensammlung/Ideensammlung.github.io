import '../styles/index.css'
import '../styles/github.css'
import Layout from '../components/layout'
import Meta from '../components/meta'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Meta />
      <Component {...pageProps} />
    </Layout>
  )
}
