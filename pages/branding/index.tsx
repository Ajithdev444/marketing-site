import React from 'react'
import Head from 'next/head'
import Form from '../../components/Form'
import Quote from '../../components/Quote'
import Services from '../../components/Services'
import Values from '../../components/Values'
import Image from 'next/image'
import brand from '../../public/brand.avif'

const index = () => {
  return (
    <>
       <Head>
        <title>Branding</title>
        <meta name="description" content="Digital Marketing Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div>
                <h1 className="ml-12 mt-32 mb-8 font-bold text-5xl lg:ml-56 text-blue-400 ">Branding</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:ml-10">
                  <Image className="mb-20 md:w-full" src={brand} alt='dm' width={600} height={600}/>
                </div>
                <div>
                  <h1 className="ml-8 mt-4 leading-8 text-gray-500 text-xl ">
                  Digital branding aims to create connections between consumers
                   and the products or service being delivered[5][6][7] so that
                    brand recognition is established in the digital world.[8] In
                     short, the goal of digital branding is not necessarily driving 
                     sales, but enhancing the awareness, image, and style of the brand.
                      Digital branding in turn drives long-term customer loyalty.
                  </h1>
                </div>
                </div>
                <Services/>
                <Quote/>
                <Values/>
                <Form/>
        </div>
    </>
  )
}

export default index