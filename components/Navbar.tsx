import Link from 'next/link'
import React,{useState, useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

     const [nav, setNav] = useState(false)
     const [color, setColor] = useState('transparent')
     const [textColor, setTextColor] = useState('black')

     const handleNav = () => {
        setNav(!nav)
     }

     useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >=90){
                setColor('#ffffff')
                setTextColor('#000000')
            }else{
                setColor('transparent')
                setTextColor('#000000')
            }
        }
        window.addEventListener('scroll', changeColor)
     },[])
  return (
    <div style={{backgroundColor: 'white'}} className='fixed text-white left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4  '>
            <Link href='/'>
                <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Dev<span className='text-blue-600'>Arc</span></h1>
                <h2 className='text-xl text-black'>The Business Hub</h2>
            </Link>
            <ul style={{color: `${textColor}`}} className='sm:flex gap-10 hidden '>
                <li className='relative p-4 hover:bg-blue-50 rounded-md'  x-data ='{setNav:false}'>
                    <Link href='/digital-marketing'>Digital Marketing</Link>
                {/* <div className='lg:absolute bg-white right-0 rounded-md p-2'>
                    <ul className='space-y-2 lg:w-24' >
                        <li className='relative'>
                            <Link className='flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black' href='/'>SEO</Link>
                        </li>
                    
                    
                        <li>
                            <Link  className='flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black'  href='/'>SMM</Link>
                        </li>
                    
                    
                        <li>
                            <Link  className='flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black' href='/'>SRM</Link>
                        </li>
                    
                    
                        <li>
                            <Link  className='flex p-2 font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-black' href='/'>STM</Link>
                        </li>
                    </ul>
                </div> */}
                </li>
                <li className='p-4 hover:bg-blue-50 rounded-md'>
                    <Link href='/web-development'>Web Development</Link>
                </li>
                <li className='p-4 hover:bg-blue-50 rounded-md'>
                    <Link href='/branding'>Branding</Link>
                </li>
                <li className='p-4 hover:bg-blue-50 rounded-md'>
                    <Link href='/itsolutions'>IT Solutions</Link>
                </li>
                <li className='p-4 hover:bg-blue-50 rounded-md'>
                    <Link href='/company'>Company</Link>
                </li>
                <li className='p-4 hover:bg-blue-50 rounded-md'>
                    <Link href='/blog'>Blog</Link>
                </li>
            </ul>

            {/* mobileButton */}

            <div onClick={handleNav} className='block md:hidden z-[10] cursor-pointer'>
                {nav?(
                    <AiOutlineClose size={30} style={{color:`${textColor}`}}/>
                ) :(
                    <AiOutlineMenu size={30} style={{color: `${textColor}`}}/>
                )}
            </div>

            {/* mobilemenu */}

            <div className={nav ? 'absolute left-0 top-6 right-0 bottom-0 w-full justify-center items-center h-screen text-black bg-white cursor-pointer text-center ease-in duration-300' : 
            'absolute top-6 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'}>
                <ul className=''>
                    <li onClick={handleNav} className='p-4 text-3xl hover:text-gray-500'>
                        <Link href='digital-marketing'>Digital Marketing</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-3xl hover:text-gray-500'>
                        <Link href='/web-development'>Web Development</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-3xl hover:text-gray-500'>
                        <Link href='/branding'>Branding</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-3xl hover:text-gray-500'>
                        <Link href='/itsolutions'>IT Solutions</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-3xl hover:text-gray-500'>
                        <Link href='/company'>Company</Link>
                    </li>
                    <li onClick={handleNav} className='p-4 text-3xl hover:text-gray-500'>
                        <Link href='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar