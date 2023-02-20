import React from 'react'
import Image from 'next/image'
import form from '../public/form.jpg'
import { motion } from 'framer-motion'
import type { FormEvent } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

// const submitUser = async (event: FormEvent<HTMLFormElement>) => {
//   event.preventDefault();

//   const { name, company, email, phonenumber, requirements } = event.target as typeof event.target & {
//     name: { value: string}
//     company: { value: string}
//     email: { value: string}
//     phonenumber: { value: string}
//     requirements: { value: string}
//   }

  // console.log(name.value,company.value,email.value,phonenumber.value,requirements.value)

  
const Form = () => {

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  // const [email, setEmail] = useState('')
  // const [number, setNumber] = useState('')
  // const [requirements, setRequirements] = useState('')

  const submitUser = async () => {
    const response = await fetch('/api/userdata', {
      method: 'POST',
      body: JSON.stringify({ name, company }) ,
    headers: {
      'Content-Type': 'application/json'
    }   
  })
  const data = await response.json()
  console.log(data)
}


   
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 max-w-6xl m-auto '>
        <div className='ml-10'>
          <div>
                <h1 className='text-4xl ml-2 mt-8 text-blue-400 font-semibold'>Fill-in and Reach Out</h1>
           </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 ml-3 leading-8 gap-10 mt-8 text-gray-500 2xl:text-xl 2xl:leading-10'>
               <div className='leading-10 grid grid-cols-1 gap-6'  >
                <input type='text' value={name} placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                <input type='text' value={company} placeholder='Company' onChange={(e) => setCompany(e.target.value)}/>
                {/* <input type='email' value={email} placeholder='E-mail Address' onChange={(e) => setEmail(e.target.value)}/>
                <input type='number' value={number} placeholder='Phone Number' onChange={(e) => setNumber(e.target.value)}/>
                <input type='text' value={requirements} placeholder='Requirements' onChange={(e) => setRequirements(e.target.value)}/> */}
                <button onSubmit={submitUser}>submit</button>
                
             </div>
             <div className='ml-16 mt-10 lg:ml-0'>
                    <motion.button  type='submit' whileHover={{scale:1.1, textShadow: '0px 0px 8px rgb(255, 255, 255)', boxShadow:'0px 0px 8px rgb(255, 255, 255)',}}
                     className='py-4 px-16 text-white rounded-full bg-blue-500 sm:mb-10 2xl:text-3xl 2xl:leading-10'>Send Me</motion.button>
             </div>
            </div>
           
             
        </div>
        <div className=''>
            <Image className='mb-10 mt-8 md:mt-28 lg:mt-4 w-auto h-auto' src={form} alt='form' width={450} height={500}/>
        </div>
    </div>
  )
}

export default Form


// onSubmit={evt => {sentForm(evt)}}

// name: name.value,
//       company: company.value,
//       email: email.value,
//       phonenumber: phonenumber.value,
//       requirements: requirements.value,