import Head from "next/head"
import Image from "next/image"
import Form from "../../components/Form"
import Quote from "../../components/Quote"
import Services from "../../components/Services"
import Values from "../../components/Values"
import dm from '../../public/dm.jpg'


function Dm () {
    return(
        <>
         <Head>
        <title>Digital Marketing</title>
        <meta name="description" content="Digital Marketing Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
        <div>
                <h1 className="ml-12 mt-32 mb-8 font-bold text-4xl lg:ml-44 text-blue-400 ">Digital Marketing</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:ml-10">
                  <Image className="mb-20 md:w-full" src={dm} alt='dm' width={600} height={600}/>
                </div>
                <div>
                  <h1 className="ml-8 mt-4 leading-8 text-gray-500 text-xl">
                  Digital marketing is the component of marketing that uses 
                  the Internet and online based digital technologies such as
                   desktop computers, mobile phones and other digital media and
                    platforms to promote products and services. Its development
                     during the 1990s and 2000s changed the way brands and businesses 
                     use technology for marketing. As digital platforms became increasingly
                      incorporated into marketing plans 
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
export default Dm