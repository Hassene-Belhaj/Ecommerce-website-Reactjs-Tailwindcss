import React from 'react'
import {AiOutlineClose,AiOutlineArrowRight} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'

import { useContexttoggle } from '../Context/ContextToggle'
import { useContextcartProduct } from '../Context/ContextCart'
import CartItem from './CartItem'
import { useContextData } from '../Context/ContextData'

const SideCart = () => {
    const [nav,setNav,HandleClick,] = useContexttoggle()
    const {cart,ClearCart,Total,bagQuantity} =  useContextcartProduct()
 
    

  //  const TotalItems = Total.toFixed(2)
   

  return (

    <aside className= {nav ? 'fixed z-50 top-0 right-0 w-full h-screen sm:w-[60%] md:w-[40%] lg:w-[25%] shadow-l shadow-xl bg-white ease-in-out duration-500': 'fixed top-0 -right-full max-w-full sm:w-[60%] md:w-[40%] lg:w-[30%] h-screen bg-white ease-in-out duration-500 '}>
        <div className='w-100 py-4 flex justify-between items-center border-b border-black mx-4'>
         <h3 className='uppercase text-md font-semibold px-4'>shopping cart ({bagQuantity}) </h3>
        
          <div className='flex '>
          <AiOutlineArrowRight onClick={HandleClick}/>
          </div>
         
        </div>

         <div className='flex flex-col gap-y-2 w-full h-[600px] lg:h-[600px] overflow-y-auto'>

        {cart.map((item,index)=>{
          return (
            
            <CartItem  key={index} item={item} />
            
            
            )
          })}
          </div>
         
           <div className='max-w-full h-full bg-gray-50' >
           <div className='max-w-full h-10 bg-gray-50 border flex justify-between items-center font-semibold text-lg py-2'>
            <p className='mx-2'> Total : ${parseFloat(Total).toFixed(2)}</p> 
                <div className='flex mx-2'>
                  <button className='bg-red-500 rounded-md p-2'><BsTrash onClick={ClearCart}  size={20} color='white' /></button> 
                </div>
           </div>
                  <div className='w-full h-full flex flex-col'>
                    <span className='px-2 py-1'><button className='py-2 px-2 w-full rounded-md text-lg font-semibold border-2 border-black bg-gray-100  '>View Cart</button></span>

                    <span className='py-2 px-2'><button className='py-2 px-2 w-full rounded-md text-lg font-semibold border-2 border-black text-white bg-black hover:bg-gray-100 hover:text-black transition-all duration-150'>Checkout</button></span>

                  

                  </div>
            </div> 
         
      
    </aside>
  )
}

export default SideCart