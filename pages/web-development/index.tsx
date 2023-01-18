import React from 'react'
import Head from 'next/head'
import Form from '../../components/Form'
import Quote from '../../components/Quote'
import Services from '../../components/Services'
import Values from '../../components/Values'

const index = () => {
  return (
    <>
     <Head>
        <title>Web Development</title>
        <meta name="description" content="Digital Marketing Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
        <h1 className='p-40 text-5xl font-bold'>Web Development Page</h1>
        <Services/>
        <Quote/>
        <Values/>
        <Form/>
    </div>
    </>
  )
}

export default index