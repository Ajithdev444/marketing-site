import React from 'react'
import Image from 'next/image'
import marketingImage from '../public/marketing.jpg'
import { motion } from 'framer-motion'
import { M_PLUS_1 } from '@next/font/google'

const Hero = () => {
  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
      <div className='text-sky-300'>
        <div className='ml-20 mt-36'>
        <h2 className='text-4xl font-bold text-black leading-snug'>ROI - FOCUSED DIGITAL MARKETING COMPANY IN KERALA</ h2>
        </div>

        <div>
          <h1 className='text-3xl ml-20 mt-10 text-blue-600'>Take Your Brands Eventful story In To</h1>
          <h2 className='text-4xl font-black ml-20 mt-5 text-blue-600'>Digital Space</h2>
        </div>
        <div>
          <h3 className='text-xl leading-10 mt-6 ml-20 text-gray-500'>The epitome of dedication and perseverance, our team<br/>
             focuses on the exponential growth of the clients through<br/>
             tireless commitment.</h3>
        </div>
        <div className='text-xl mt-4 ml-20 '>
          <button className='text-blue-600 rounded-full px-6 py-2 bg-gray-400 font-bold' >Contact US</button>
        </div>
      </div>
      <div className='justify-center items-center grid'>
        <Image src={marketingImage} alt="marketing" placeholder='blur' width={700} height={700} />
      </div>
    </motion.div>
  )
}

export default Hero