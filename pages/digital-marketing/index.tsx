import Head from "next/head"
import Image from "next/image"
import marketingpage from '../../public/marketingpage.png'
import marketingbadges from '../../public/marketingbadges.png'
import marketing1 from '../../public/marketing1.png'
import marketing2 from '../../public/marketing2.png'
import marketing3 from '../../public/marketing3.png'
import marketing4 from '../../public/marketing4.png'
import marketing5 from '../../public/marketing5.png'
import marketing6 from '../../public/marketing6.png'
import marketing7 from '../../public/marketing7.png'
import marketing8 from '../../public/marketing8.png'
import marketing9 from '../../public/marketing9.png'
import marketing10 from '../../public/marketing10.png'



function Dm () {
    return(
        <>
         <Head>
        <title>Digital Marketing</title>
        <meta name="description" content="Digital Marketing Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <div className="bg-gray-100 max-w-6xl m-auto">
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

        <div className="grid grid-cols-1 ml-9 md:grid-cols-3 lg:grid-cols-3 mt-20 md:mr-2">
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
             We will analyze your website and create a conversion-rate strategy.</p>

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
            <Image src={marketing4} alt='marketing4' width={500} height={500}/>
          </div>
          <div className="inline ml-12 mt-6 mr-4 lg:ml-0 lg:mr-10 2xl:mt-28">
            <h2 className="text-violet-600 text-xl tracking-widest">GROW TRAFFIC & INCREASE REVENUE</h2>
            <h1 className="mt-6 text-4xl font-bold">Appear On the Front Page of Google!</h1>
            <p className="mt-6 text-gray-600 leading-8 mr-4">We offer professional SEO services that help websites increase 
              their organic search score drastically in order to compete for 
              the highest rankings — even when it comes to highly competitive keywords.
            </p>
            <button className="px-8 py-4 bg-orange-300 rounded-full mt-4 text-white mb-4 font-semibold">
              Learn more about us</button>
          </div>
        </div>
        
        <div className="lg:text-center ml-12 lg:mr-60 lg:ml-60">
          <h2 className="mt-12 text-violet-600 tracking-widest">GROW TRAFFIC & INCREASE REVENUE</h2>
          <h1 className="text-4xl font-bold mt-6 lg:ml-20 lg:mr-20">Appear On the Front Page of Google!</h1>
          <p className="mt-6 text-gray-600 leading-8 mr-4">We offer professional SEO services that help websites increase their organic search score drastically 
            in order to compete for the highest rankings — even when it comes to highly competitive keywords.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-12 mt-20 lg:mt-32 gap-10 lg:gap-32 lg:mr-8">
          <div>
            <Image src={marketing5} alt='marketing5' width={100} height={100}/>
            <h2 className="text-xl text-violet-600 font-semibold">LOCAL SEARCH STRATEGY</h2>
            <p  className="text-gray-600 leading-8">Maximize your presence on search engine results pages on a local scale.</p>
          </div>
          <div>
          <Image src={marketing6} alt='marketing5' width={100} height={100}/>
          <h2 className="text-xl text-violet-600 font-semibold">MAP SEARCH OPTIMIZATION</h2>
          <p className="text-gray-600 leading-8">Google Maps Optimization is an important part for your local marketing strategy.
</p>
          </div>
          <div>
          <Image src={marketing7} alt='marketing5' width={100} height={100}/>
          <h2 className="text-xl text-violet-600 font-semibold">LINK BUILDING & CONTENT</h2>
          <p  className="text-gray-600 leading-8">Link building is a tremendously important component of Search Engine Optimization.</p>
          </div>
          <div>
          <Image src={marketing8} alt='marketing5' width={100} height={100}/>
          <h2 className="text-xl text-violet-600 font-semibold">PAID SEARCH ADVERTISING</h2>
          <p  className="text-gray-600 leading-8">Paid listings on Google AdWords can help you reach new customers.</p>
          </div>
          <div>
          <Image src={marketing9} alt='marketing5' width={100} height={100}/>
          <h2 className="text-xl text-violet-600 font-semibold">CUSTOM WEBSITE DESIGN</h2>
          <p  className="text-gray-600 leading-8">Our team specializes in affordable web design and e-commerce.</p>
          </div>
          <div>
          <Image src={marketing10} alt='marketing5' width={100} height={100}/>
          <h2 className="text-xl text-violet-600 font-semibold">EMAIL CAMPAIGN DESIGN</h2>
          <p  className="text-gray-600 leading-8">Custom email templates that speak to your customers and resonate with your brand.</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col lg:flex-row items-center justify-center gap-8 p-20">
          <button className="px-8 py-4 bg-violet-600 rounded-full text-white font-semibold">
            Free SEO Counsultation</button>
          <button className="px-8 py-4 bg-orange-300 rounded-full text-white font-semibold">
            Request a Free Quote</button>
        </div>
        </div>
        </>
    )
}
export default Dm