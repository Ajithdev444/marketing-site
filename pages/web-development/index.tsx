import React from 'react'
import Head from 'next/head'
import Form from '../../components/Form'
import Quote from '../../components/Quote'
import Services from '../../components/Services'
import Values from '../../components/Values'
import Image from 'next/image'
import webnew from '../../public/webnew.jpg'

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
                <h1 className="ml-12 mt-32 mb-8 font-bold text-4xl lg:ml-40  lg:text-4xl text-blue-400 ">Web Development</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:ml-10">
                  <Image className="mb-20 md:w-full" src={webnew} alt='dm' width={600} height={600}/>
                </div>
                <div>
                  <h1 className="ml-8 mt-4 leading-8 text-gray-500 text-xl">
                  Web development is the work involved in developing a website 
                  for the Internet (World Wide Web) or an intranet (a private network).
                  [1] Web development can range from developing a simple single static
                   page of plain text to complex web applications, electronic businesses, 
                   and social network services. A more comprehensive list of tasks to which
                    Web development commonly refers, may include Web engineering, Web design,
                     Web content development, client liaison, client-side/server-side scripting,
                      Web server and network security configuration, and e-commerce development.
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