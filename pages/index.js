import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Head>
        <title>Shaw Malcolm</title>
        <link rel='icon' href='/favicon.ico' />
        <link href='public/fonts/style.css' rel='stylesheet' />
      </Head>
    </div>
    <Footer />
    </>
  )
}
