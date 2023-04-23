import React from 'react'
import {FaInstagram,FaTwitter,FaFacebook} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'
import {BiCopyright} from 'react-icons/bi'
import {GiHanger} from 'react-icons/gi'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
   
  <footer className='w-full sm:h-[12rem] md:h-20 mt-32 -mb-[30px] bg-black text-white' >
 
   <div className='w-full grid sm:grid-cols-1 md:grid-cols-3 text-sm mx-auto text-center sm:gap-y-4 md:py-4 items-center'>

            <div className='w-full flex justify-center items-center py-2 cursor-pointer'>
                <GiHanger className='sm:mt-4 md:mt-0' size={30}/>
            </div>

      <div className='flex justify-center items-center py-1'>     
        <p className='flex justify-center items-center text-[12px] font-semibold'>Copyright <span className='flex justify-center items-center mx-1'><BiCopyright/></span>2023 All rights reserved.</p>
      </div>
      
            <div className='w-80 flex justify-between items-center mx-auto p-2 cursor-pointer'>
             <FaFacebook size={20}/>
             <FaInstagram size={20}/>
             <FaTwitter size={20}/>
             <TiSocialPinterest size={20}/>
            </div>
    
      </div>
    </footer>
  
  )
}

export default Footer