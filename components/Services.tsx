import React from 'react'
import Image from 'next/image'
import dyn from '../public/dyn.jpg'
import mar from '../public/mar.jpg'
import dy from '../public/dy.jpg'
import seo from '../public/seo.jpg'


const Services = () => {
  return (
    <div>
      <div>
        <h1 className='text-center text-xl p-2'>Our Core Services</h1>
      </div>
      <div>
        <h2 className='text-center text-5xl p-4 font-bold'>What We Do</h2>
      </div>
      <div className='grid grid-col-1 sm:grid-cols-1 md:ml-32 lg:grid-cols-2'>
        <div className='ml-20 mt-20'>
           <h1 className='ml-8 text-3xl lg:ml-16'>Web Development</h1>
           <Image className='p-4' src={dy} alt='dynamate' width={500} height={500}/>
        </div>
        <div className='ml-20 mt-20'>
          <h1 className='ml-0 text-3xl lg:ml-16'>Digital Marrketing</h1>
        <Image className='p-4' src={seo} alt='seo' width={500} height={500}/> 
        </div>
        <div className='ml-20 mt-20'>
          <h1 className='text-3xl lg:ml-16'>Graphical Dynamite</h1>
        <Image className='p-4' src={dyn} alt='img1' width={500} height={500} />
        </div>
        <div className='ml-20 mt-20'>
          <h1 className='text-3xl lg:ml-16'>Data Labelling & Classification</h1>
        <Image className='p-4' src={mar} alt='mar' width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default Services