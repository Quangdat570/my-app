import '../styles/globals.css'
import '../pages/blog/Blog.module.css'
import '../pages/contact/Contact.module.css'
import '../pages/home/Home.module.css'
import Layout from './components/Layout'
import '../pages/components/Header.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
