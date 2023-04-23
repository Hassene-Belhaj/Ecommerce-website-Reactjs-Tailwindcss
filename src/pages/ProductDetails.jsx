import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContextcartProduct } from '../Context/ContextCart';
import { useContextData } from '../Context/ContextData';
import { useContexttoggle } from '../Context/ContextToggle';

const ProductDetails = () => {
const {id} = useParams()
const [Data] = useContextData()  
const {cart,AddToCart} = useContextcartProduct()


const product = Data.find((item)=>{
  return item.id === parseInt(id)
})




const {title,image,description,price,quantity} = product




  return ( 

    <div className='max-w-[1640px] h-sceen flex justify-center items-center mx-auto'>
       
      <div className='w-full h-screen grid sm:grid-cols-1 md:grid-cols-2'>
       
        <div className='max-w-5xl flex justify-center items-center'>
           <div className='cursor-pointer flex justify-center items-center'>
            <img className='py-16 w-[260px] md:w-[320px] hover:scale-110 transition-all duration-300' src={image}   alt="" />
           </div>
        </div>

       <div className='w-full h-full flex flex-col justify-center items-center'>
           <div className='px-4'>
            <h2 className='text-2xl font-semibold'>{title}</h2>
             <h3 className='py-2 text-xl font-bold text-red-500'>$ {price}</h3>
             <p className='py-2 leading-7 capitalize text-lg'>{description}</p>
        <div className='py-2'>
            <button onClick={()=>AddToCart(product,product.id)} className='py-4 bg-black border-2 border-black text-white uppercase font-semibold px-8 rounded-md hover:bg-white hover:text-black transition-all duration-300'>add to cart</button>
           </div>
        </div>
           </div>


      </div>

    </div>
  )
}

export default ProductDetails