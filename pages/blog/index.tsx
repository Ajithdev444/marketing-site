import React from 'react'
import Head from 'next/head'
import Form from '../../components/Form'
import Quote from '../../components/Quote'
import Services from '../../components/Services'
import Values from '../../components/Values'
import Image from 'next/image'
import blog from '../../public/blog.png'

const index = () => {
  return (
    <>
       <Head>
        <title>Blog</title>
        <meta name="description" content="Digital Marketing Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div>
                <h1 className="ml-12 mt-32 mb-8 font-bold text-5xl lg:ml-72 text-blue-400 ">Blog</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:ml-10">
                  <Image className="mb-20 md:w-full" src={blog} alt='dm' width={600} height={600}/>
                </div>
                <div>
                  <h1 className="ml-8 mt-2 leading-8 text-gray-500 text-xl">
                  DevArc Technologies is one of the leading IT solutions
                   companies in Kerala. SpiderWorks Technologies provides fully
                    managed IT solutions to companies enabling better growth and 
                    return on investment. We shall host your website using cloud-computing 
                    technology and give real-time and e-commerce solutions and provide
                     a dedicated hosting solution that can transform your business and make it profitable.
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