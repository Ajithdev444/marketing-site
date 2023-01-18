import React from 'react'
import Image from 'next/image'
import transform from '../public/transform.png'

const Quote = () => {
  return (
    <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-2'>
        <div>
         <div className='p-4 ml-20'>
            <h1 className='text-5xl font-semibold'>Transform Your Business In To Digital Space</h1>
         </div>
         <div className='text-xl p-4 ml-20'>
            <h2 className='text-xl font-sans text-gray-500 leading-8'>
            Transform your business through thoughtfully created,adequately
             embellished, social media marketing campaigns with SpiderWorks,
              the trusted digital marketing company in Kerala. We offer 
              distinctively created campaigns, a beautiful amalgamation of
               creativity and marketing skills, to mark your presence felt. Let’s
               make your brand number one in the field.
            </h2>
         </div>
    </div>
        <div className='grid mt-28 md:ml-24' >
            <Image src={transform} alt='transform' width={600} height={300}/>
        </div>
    </div>
  )
}

export default Quote