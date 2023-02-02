import React from 'react'
import Image from 'next/image'
import dyn from '../public/dyn.jpg'
import mar from '../public/mar.jpg'
import dy from '../public/dy.jpg'
import seo from '../public/seo.jpg'
import { motion } from 'framer-motion'


const Services = () => {
  return (
    <div className='max-w-6xl m-auto'>
      <motion.div>
        <h1 className='ml-10 text-4xl font-bold p-2 2xl:text-center'>Our Core Services</h1>
      </motion.div>
      <div>
        <h2 className='ml-8 text-4xl p-4 font-bold 2xl:text-center 2xl:ml-16'>What We Do</h2>
      </div>
      <div className='grid grid-col-1 lg:grid-cols-2 md:grid-cols-2 lg:ml-24 2xl:ml-0 2xl:grid-cols-4'>
        <div className='ml-12 mt-10 md:ml-16'>
           <h1 className='text-3xl font-semibold 2xl:text-3xl'>Web Development</h1>
           <Image className='' src={dy} alt='dynamate' width={300} height={300}/>
        </div>
        <div className='ml-12 mt-10 md:ml-16'>
          <h1 className='text-3xl font-semibold 2xl:text-3xl'>Digital Marketing</h1>
        <Image className='' src={seo} alt='seo' width={300} height={300}/> 
        </div>
        <div className='ml-12 mt-10 md:ml-16'>
          <h1 className='text-3xl font-semibold 2xl:text-3xl'>Graphical Dynamite</h1>
        <Image className='' src={dyn} alt='img1' width={300} height={300} />
        </div>
        <div className='ml-12 mt-10 md:ml-16'>
          <h1 className='text-3xl font-semibold 2xl:text-3xl'>Data Labelling & Classification</h1>
        <Image className='' src={mar} alt='mar' width={300} height={300}/>
        </div>
      </div>
    </div>
  )
}

export default Services