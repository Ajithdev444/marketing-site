import React from 'react'
import Image from 'next/image'
import dyn from '../public/dyn.jpg'
import mar from '../public/mar.jpg'
import dy from '../public/dy.jpg'
import seo from '../public/seo.jpg'
import { motion } from 'framer-motion'


const Services = () => {
  return (
    <div>
      <motion.div>
        <h1 className='ml-10 text-xl p-2'>Our Core Services</h1>
      </motion.div>
      <div>
        <h2 className='ml-8 text-5xl p-4 font-semibold'>What We Do</h2>
      </div>
      <div className='grid grid-col-1 lg:grid-cols-2 md:grid-cols-2 lg:ml-24 2xl:ml-40'>
        <div className='ml-12 mt-10 md:ml-16'>
           <h1 className='text-3xl font-semibold 2xl:text-5xl'>Web Development</h1>
           <Image className='2xl:' src={dy} alt='dynamate' width={300} height={300}/>
        </div>
        <div className='ml-12 mt-20 md:ml-8'>
          <h1 className='text-3xl font-semibold 2xl:text-5xl'>Digital Marketing</h1>
        <Image className='' src={seo} alt='seo' width={300} height={300}/> 
        </div>
        <div className='ml-12 mt-20 md:ml-16'>
          <h1 className='text-3xl font-semibold 2xl:text-5xl'>Graphical Dynamite</h1>
        <Image className='' src={dyn} alt='img1' width={300} height={300} />
        </div>
        <div className='ml-12 mt-20 md:ml-8'>
          <h1 className='text-3xl font-semibold 2xl:text-5xl'>Data Labelling & Classification</h1>
        <Image className='' src={mar} alt='mar' width={300} height={300}/>
        </div>
      </div>
    </div>
  )
}

export default Services