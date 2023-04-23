import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {BsArrowDownCircle} from 'react-icons/bs'
import {AiOutlineArrowDown} from 'react-icons/ai'
import imagehero from '../assets/hand-holding-shopping-bag-plain-background.jpg'
import hero2 from '../assets/hero2.jpg'
import video1 from '../assets/shoppingvideo.mp4'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <section id='hero' className='w-full h-screen'>        

        <div className='w-full mx-auto relative z-0'>
        <div className='absolute top-0 left-0 w-full h-full bg-white/70 z-20'>
        </div>  
            

        <div className='w-full h-screen relative'>
        <video src={video1} autoPlay loop muted className='w-full h-full object-cover' />

     
        <div className='top-0 left-0 absolute w-full h-full flex flex-col justify-center sm:items-center md:items-start px-20 z-50'>
        <h2 className='text-6xl md:text-8xl font-extrabold text-red-400 p-3'>
            25% OFF  
            </h2>
            <p className='text-6xl md:text-8xl text-black font-extrabold p-3'>SUMMER SALE</p>
        <h3 className='text-4xl md:text-6xl text-black font-bold p-3' >
        <TypeAnimation
            sequence={[
                'For Limited Time Only', 
                1000,             
                '',   
                1000,
                'For Limited Time Only',
                2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            />
          
        </h3>
            <div className='absolute left-[50%] bottom-12 md:bottom-10 -translate-x-[50%]'>
               
            <Link activeClass="active" to="main" spy={true} smooth={true} offset={50} duration={700}>
             <AiOutlineArrowDown className='text-red-500 hover:text-black transition-all duration-300 cursor-pointer' size={70} />
            </Link>


            
            </div>
        </div>
        </div>

        </div>

     

    </section>
  )
}

export default Hero