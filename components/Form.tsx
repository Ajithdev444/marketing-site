import React from 'react'
import Image from 'next/image'
import form from '../public/form.jpg'
import { motion } from 'framer-motion'


const Form = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 max-w-6xl m-auto '>
        <div className='ml-10'>
          <div>
                <h1 className='text-4xl ml-2 mt-8 text-blue-400 font-semibold'>Fill-in and Reach Out</h1>
           </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 ml-3 leading-8 gap-10 mt-8 text-gray-500 2xl:text-xl 2xl:leading-10'>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Company'/>
                <input type='email' placeholder='E-mail Address'/>
                <input type='number' placeholder='Phone Number'/>
                <input type='text' placeholder='Requirements'/>
            </div>
            <div className='ml-16 mt-10 lg:ml-0'>
                    <motion.button whileHover={{scale:1.1, textShadow: '0px 0px 8px rgb(255, 255, 255)', boxShadow:'0px 0px 8px rgb(255, 255, 255)',}}
                     className='py-4 px-16 text-white rounded-full bg-blue-500 sm:mb-10 2xl:text-3xl 2xl:leading-10'>Send Me</motion.button>
             </div>
        </div>
        <div className=''>
            <Image className='mb-10 mt-8 md:mt-28 lg:mt-4' src={form} alt='form' width={450} height={500}/>
        </div>
    </div>
  )
}

export default Form