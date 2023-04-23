import React from 'react'
import {AiOutlineClose,AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

import { useContextcartProduct } from '../Context/ContextCart'
import Product from './Product'
import { Link } from 'react-router-dom'

const CartItem = ({item}) => {
   const {id,title,image,description,price,quantity} = item
   const {DeleteProduct,ClearCart,IncreaseQuantity,DecreaseQuantity} =  useContextcartProduct()
    

   const TotalPriceItem = (price * quantity).toFixed(2)
   

  return (
 <div className='w-full h-[190px]'>
 <div className='w-full flex justify-center items-center py-4 border-b'>
    <div className='w-[30%] h-40 flex mx-4 justify-center'>
      <div className='max-w-[80px] flex justify-center items-center'>
        <Link to={`/product/${id}`}>
        <img src={image} alt="" />
        </Link>
      </div>

    </div>
    <div className='w-[70%] h-40'>
        <div className='flex justify-between mt-10'>
          <h3 className='text-sm w-[70%] font-semibold flex'>{title}</h3>
          <div className='flex justify-between items-center mx-4'>
            <AiOutlineClose onClick={()=>DeleteProduct(id)}/>
          </div>
      </div>


      <div className='w-full py-4 flex justify-center items-center'>
        <div className='min-w-[80px] grid grid-cols-3 border text-md'>
          <div className='text-center '>
            <button><AiOutlineMinus onClick={()=>DecreaseQuantity(id)} size={15}/></button>
            </div>
          <div className='text-center text-md font-semibold rounded-md border'>{quantity}</div>
          <div className='text-center'>
            <button><AiOutlinePlus onClick={()=>IncreaseQuantity(id)} size={15}/></button> 
            </div>
        </div>
        <div className='w-80 flex justify-between items-center font-semibold mx-4'>
          <h3>${price}</h3>
          <div className='flex'>
            <h4>${TotalPriceItem}</h4>
          </div>
        </div>
 
       
      </div>
      
    </div>
  
 </div>

 </div>   
  )
}

export default CartItem