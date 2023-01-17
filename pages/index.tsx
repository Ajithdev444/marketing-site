import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Quote from '../components/Quote'
import Values from '../components/Values'
import Form from '../components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Arc</title>
        <meta name="description" content="Digital Marketing Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Hero/>
          <Services/>
          <Quote/>
          <Values/>
          <Form/>
        </div>
      </main>
    </>
  )
}
