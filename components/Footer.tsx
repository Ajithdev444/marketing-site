import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 bg-gray-100 md:grid-cols-3 2xl:text-xl 2xl:leading-10 max-w-6xl m-auto'>
      <div className='ml-12 mt-16 leading-8'>
      <div>
        <h1 className='text-3xl font-semibold'>Digital Marketing <span className='text-blue-500'>Services</span></h1>
      </div>
      <div className='text-gray-500 mt-4'>
        <h2>Digital Marketing</h2>
        <h2>Search Engine Optimization</h2>
        <h2>Social Media Marketing</h2>
        <h2>Pay Per Click</h2>
        <h2>Video Ads</h2>
        <h2>Online Marketing</h2>
        <h2>Content Marketing</h2>
        <h2>Email Marketing</h2>
      </div>
      </div>
       
       <div className='ml-12 mt-16 leading-8'>
        <div>
        <h1 className='text-3xl font-semibold'>Design & <span className='text-blue-500'>Development</span></h1>
       </div>
       <div className='text-gray-500 mt-4'>
        <h2>Web Development</h2>
        <h2>Mobile App Development</h2>
        <h2>Custom Website Development</h2>
        <h2>Web Hosting</h2>
        <h2>ECommerce Solutions</h2>
       </div>
      </div> 

      <div className='ml-12 mt-16 leading-8'>
        <div>
          <h1 className='text-3xl font-semibold'>Online <span className='text-blue-500'>Branding</span></h1>
        </div>
        <div className='text-gray-500 mt-4'>
          <h2>Branding</h2>
          <h2>Influencer Marketing</h2>
          <h2>Corporate Video Production</h2>
          <h2>Video Production</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer