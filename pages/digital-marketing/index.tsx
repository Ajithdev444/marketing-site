import Head from "next/head"
import Image from "next/image"
import Form from "../../components/Form"
import Quote from "../../components/Quote"
import Services from "../../components/Services"
import Values from "../../components/Values"
import marketingpage from '../../public/marketingpage.png'
import marketingbadges from '../../public/marketingbadges.png'
import marketing1 from '../../public/marketing1.png'
import marketing2 from '../../public/marketing2.png'
import marketing3 from '../../public/marketing3.png'
import marketing4 from '../../public/marketing4.png'


function Dm () {
    return(
        <>
         <Head>
        <title>Digital Marketing</title>
        <meta name="description" content="Digital Marketing Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <div className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="ml-12 mr-4 mt-32 lg:ml-12">
                <div className="mb-8">
                <h1 className="font-bold pt-8 text-4xl text-blue-300">Digital Marketing</h1>
                </div>
                <div className="mb-8">
                  <h1 className="text-6xl font-bold text-black">We bring you new customers</h1>
                </div>
                <div>
                  <h2 className="text-xl font-light">We build effective strategies to help you reach customers and prospects across the entire web.</h2>
                </div>
                <div className="mt-12">
                  <button className="px-8 py-4 bg-orange-300 rounded-full text-white text-xl font-semibold">
                    Get a Quote</button>
                </div>
        </div>
        <div className="md:mt-56 lg:mt-28 2xl:ml-20 lg:mr-4">
          <Image src={marketingpage} alt='marketingpage' width={600} height={500} />
        </div>
        </div>

        <div className="">
          <Image className="ml-12 mt-12" src={marketingbadges} alt='marketing-badges' width={300} height={50}/>
        </div>

        <div className="grid grid-cols-1 ml-9 md:grid-cols-3 lg:grid-cols-3 mt-20 lg:ml-12 md:mr-2">
          <div className="w-80 h-200 md:w-60 lg:w-80 bg-white rounded-3xl mt-8 ">
            <Image src={marketing1} alt='marketing1'  className='w-auto h-auto p-12' />
            <h2 className="text-violet-800 text-2xl font-semibold pl-12">ONLINE<br/> REPUTATION <br/> MANAGEMENT</h2>
            <p className="p-8 leading-8 text-gray-600">Analyzing negative materials about your brand and addressing
               them with sentiment analysis and press release distribution.</p>
          

          </div>
          <div className="w-80 h-200 md:w-60 lg:w-80 bg-white rounded-3xl mt-8">
          <Image src={marketing2} alt='marketing2' className='w-auto h-auto p-12'/>
          <h2 className="text-violet-800 text-2xl font-semibold pl-12">CONVERSION RATE OPTIMIZATION</h2>
          <p className="p-8 leading-8 text-gray-600">Turn your visitors into customers with our team of experts.
             We'll analyze your website and create a conversion-rate strategy.</p>

          </div>
          <div className="w-80 h-200 md:w-60 lg:w-80 bg-white rounded-3xl mt-8">
          <Image src={marketing3} alt='marketing3' className='w-auto h-auto p-12'/>
          <h2 className="text-violet-800 text-2xl font-semibold pl-12">ONLINE REPUTATION MANAGEMENT</h2>
          <p className="p-8 leading-8 text-gray-600">Analyzing negative materials about your brand and addressing
             them with sentiment analysis and press release distribution.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6">
          <div className="ml-6 md:mt-16">
            <Image src={marketing4} alt='marketing4' width={400} height={400}/>
          </div>
          <div className="inline ml-12 mt-4 mr-4 lg:ml-0 lg:mr-10">
            <h2 className="text-blue-400 text-xl">GROW TRAFFIC & INCREASE REVENUE</h2>
            <h1 className="mt-6 text-4xl font-bold">Appear On the Front Page of Google!</h1>
            <p className="mt-6 text-gray-400 leading-8">We offer professional SEO services that help websites increase 
              their organic search score drastically in order to compete for 
              the highest rankings — even when it comes to highly competitive keywords.
            </p>
            <button className="px-8 py-4 bg-orange-400 rounded-full mt-4 text-white mb-4">
              Learn more about us</button>
          </div>
        </div>
        </div>
        </>
    )
}
export default Dm