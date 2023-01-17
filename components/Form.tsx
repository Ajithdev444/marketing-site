import React from 'react'
import Image from 'next/image'
import form from '../public/form.jpg'


const Form = () => {
  return (
    <div  className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
                <h1 className='text-5xl p-20 text-blue-400 text-'>Fill-in and Reach Out</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 ml-20 leading-10 gap-10 text-gray-500'>
                <input className='border-none' type='text' placeholder='Name'/>
                <input type='text' placeholder='Company'/>
                <input type='email' placeholder='E-mail Address'/>
                <input type='number' placeholder='Phone Number'/>
                <input type='text' placeholder='Requirements'/>
            </div>
            <div className='ml-16 mt-10'>
                    <button className='py-4 px-16 text-white rounded-full bg-blue-500'>Send Me</button>
                </div>
        </div>
        <div className=''>
            <Image className='md:ml-40' src={form} alt='form' width={500} height={500}/>
        </div>
    </div>
  )
}

export default Form