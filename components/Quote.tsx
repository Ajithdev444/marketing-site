import React from 'react'
import Image from 'next/image'
import transform from '../public/transform.png'

const Quote = () => {
  return (
    <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-2'>
        <div>
         <div className='p-4 ml-8'>
            <h1 className='text-5xl font-semibold 2xl:text-5xl'>Transform Your Business In To Digital Space</h1>
         </div>
         <div className='text-xl p-4 ml-8'>
            <h2 className='text-xl font-sans text-gray-500 leading-8 2xl:text-3xl 2xl:leading-10'>
            Transform your business through thoughtfully created,adequately
             embellished, social media marketing campaigns with SpiderWorks,
              the trusted digital marketing company in Kerala. We offer 
              distinctively created campaigns, a beautiful amalgamation of
               creativity and marketing skills, to mark your presence felt. Let’s
               make your brand number one in the field.
            </h2>
         </div>
    </div>
        <div className='grid mt-8 mb-12 md:ml-36 md:mt-16 md:mb-16 lg:mt-32 lg:ml-0 2xl:ml-28' >
            <Image src={transform} alt='transform' width={500} height={300}/>
        </div>
    </div>
  )
}

export default Quote