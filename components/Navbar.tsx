import Link from 'next/link'
import { motion } from 'framer-motion'
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
    <div style={{backgroundColor: 'white'}} className='fixed w-full m-auto text-white left-0 top-0 z-10 ease-in duration-300'>
        <div className='max-w-screen-6xl m-auto flex justify-between items-center p-4'>
            <Link href='/'>
                <h1 style={{color: `${textColor}`}} className='font-bold text-4xl ml-8 lg:ml-6'>
                    Dev<span className='text-blue-600'>Arc</span></h1>
                <h2 className='text-xl text-black ml-8 lg:ml-6'>The Business Hub</h2>
            </Link>
            <ul style={{color: `${textColor}`}} className='sm:flex gap-10 hidden md:flex 2xl:text-xl '>
                <motion.li whileHover={{ scale:1.2, color: 'blue'}} transition={{type: 'spring', stiffness:300}}
                 className='relative p-4'>
                    <Link href='/digital-marketing'>Digital Marketing</Link>
                </motion.li>
                <motion.li whileHover={{ scale:1.2, color:'blue'}} transition={{type: 'spring', stiffness:300}}
                 className='p-4'>
                    <Link href='/web-development'>Web Development</Link>
                </motion.li>
                <motion.li whileHover={{ scale:1.2, color: 'blue'}} transition={{type: 'spring', stiffness:300}}
                 className='p-4'>
                    <Link href='/branding'>Branding</Link>
                </motion.li>
                <motion.li whileHover={{ scale:1.2, color: 'blue'}} transition={{type: 'spring', stiffness:300}}
                 className='p-4'>
                    <Link href='/itsolutions'>IT Solutions</Link>
                </motion.li>
                <motion.li whileHover={{ scale:1.2, color: 'blue'}} transition={{type: 'spring', stiffness:300}}
                 className='p-4 '>
                    <Link href='/company'>Company</Link>
                </motion.li>
                <motion.li whileHover={{ scale:1.2, color: 'blue'}} transition={{type: 'spring', stiffness:300}}
                 className='p-4 '>
                    <Link href='/blog'>Blog</Link>
                </motion.li>
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

            <div className={nav ? 'absolute left-0 top-0 right-0 bottom-0 w-full flex justify-center items-center h-screen text-black bg-white cursor-pointer text-center ease-in duration-300' : 
            'absolute left-[-100%] top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'}>
                <ul className=''>
                    <motion.li  whileHover={{ scale:1.2, color:'blue'}} transition={{type: 'spring', stiffness:300}}
                     onClick={handleNav} className='p-4 text-3xl'>
                     <Link href='/digital-marketing'>Digital Marketing</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale:1.2, color:'blue'}} transition={{type: 'spring', stiffness:300}}
                     onClick={handleNav} className='p-4 text-3xl'>
                        <Link href='/web-development'>Web Development</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale:1.2, color:'blue'}} transition={{type: 'spring', stiffness:300}}
                     onClick={handleNav} className='p-4 text-3xl '>
                        <Link href='/branding'>Branding</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale:1.2, color:'blue'}} transition={{type: 'spring', stiffness:300}}
                     onClick={handleNav} className='p-4 text-3xl'>
                        <Link href='/itsolutions'>IT Solutions</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale:1.2, color:'blue'}} transition={{type: 'spring', stiffness:300}}
                    onClick={handleNav} className='p-4 text-3xl'>
                        <Link href='/company'>Company</Link>
                    </motion.li>
                    <motion.li whileHover={{ scale:1.2, color:'blue'}} transition={{type: 'spring', stiffness:300}}
                    onClick={handleNav} className='p-4 text-3xl'>
                        <Link href='/blog'>Blog</Link>
                    </motion.li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar