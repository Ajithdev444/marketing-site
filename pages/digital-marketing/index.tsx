import Head from "next/head"
import Form from "../../components/Form"
import Quote from "../../components/Quote"
import Services from "../../components/Services"
import Values from "../../components/Values"

function AboutPage () {
    return(
        <>
             <Head>
        <title>Digital Marketing</title>
        <meta name="description" content="Digital Marketing Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>        
        
        <div>
                <h1 className="p-40 font-bold text-5xl">Digital Marketing Services Pages</h1>
                <Services/>
                <Quote/>
                <Values/>
                <Form/>
        </div>
        </>
    )
}
export default AboutPage