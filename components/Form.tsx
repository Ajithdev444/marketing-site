import React from 'react'
import Image from 'next/image'
import form from '../public/form.jpg'


const Form = () => {
  return (
    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ml-10'>
        <div>
                <h1 className='text-5xl ml-2 mt-8 text-blue-400 font-semibold'>Fill-in and Reach Out</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 ml-3 leading-8 gap-10 text-gray-500'>
                <input className='border-none mt-10' type='text' placeholder='Name'/>
                <input type='text' placeholder='Company'/>
                <input type='email' placeholder='E-mail Address'/>
                <input type='number' placeholder='Phone Number'/>
                <input type='text' placeholder='Requirements'/>
            </div>
            <div className='ml-16 mt-10 lg:ml-0'>
                    <button className='py-4 px-16 text-white rounded-full bg-blue-500 sm:mb-10 '>Send Me</button>
                </div>
        </div>
        <div className=''>
            <Image className='mb-10 mt-8 md:mt-28 lg:mt-4' src={form} alt='form' width={450} height={500}/>
        </div>
    </div>
  )
}

export default Form