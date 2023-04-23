import React, { useEffect } from 'react'
import { useContexttoggle } from '../Context/ContextToggle'
import {BsBag} from 'react-icons/bs'
import {GiHanger} from 'react-icons/gi'
import { useContextcartProduct } from '../Context/ContextCart'

import { contextNavbarBg } from '../Context/ContextNavbarColor'
import {Link} from 'react-router-dom'


const Navbar = () => {
  const [nav,setNav,HandleClick] = useContexttoggle()
  const {cart,bagQuantity} =  useContextcartProduct()
 const [color] = contextNavbarBg()

  return (
   
    <header className={color ? 'w-full h-[60px] bg-black text-white shadow fixed top-0 left-0 z-30 transition-all duration-300': 'w-full h-[40px] bg-transparent fixed top-0 left-0 z-50 transition-all duration-300' } >
        <nav className='flex justify-between items-center'>

        <Link to={'/'}>
                <div className='flex justify-center items-center ml-4'>
                <GiHanger size={40}/>
                </div>
        </Link>   

                <div className='mr-4 py-2 relative w-10'>
                <div>
                  <button onClick={HandleClick}><BsBag size={30}/></button> 
                </div>
                    {cart.length === 0 ? null :  <div className='absolute top-[50%] right-[4px] translate-x-[25] translate-y-[25%]  w-5 h-5 bg-red-500 rounded-full'>
                      <div className='w-full h-full text-center text-sm text-white flex justify-center items-center '>
                        <p>{bagQuantity}</p>
                      </div>
                      </div>}       
                    </div>  
        </nav>
    </header>

 
  
  )
}

export default Navbar