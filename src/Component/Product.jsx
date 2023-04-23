import React from 'react'
import {FaEye,FaPlus} from 'react-icons/fa'
import { useContextcartProduct } from '../Context/ContextCart'
import { Link } from 'react-router-dom'

const Product = ({product}) => {

    const {id,title,description,image,price,category} = product
    const {AddToCart} =  useContextcartProduct()

  return (
    
    <main id='main' className='w-full h-full py-16'>

      <div className='w-80 h-80 border mx-auto relative overflow-hidden group '>

    <div className='opacity-1 group-hover:opacity-100 absolute top-0 -right-[100%] group-hover:right-0 w-[68px] h-40 border flex justify-center items-center transition-all duration-300 '>
        <div className='w-8 h-20 flex flex-col justify-between items-center bg-transparent'>
            <div className='flex justify-center items-center text-white bg-red-500 w-10 h-10 '>
          <button onClick={()=>AddToCart(product,id)}><FaPlus size={15}/></button>
            </div>

            <div className='flex justify-center items-center border w-10 h-10'>
              <Link to={`/product/${id}`}>
                <button><FaEye size={20}/></button>
              </Link>

            </div>
        </div>
    </div>

        <div className='w-80 h-80 flex justify-center items-center'>
            <img className='w-[120px] group-hover:scale-110 transtion-all duration-300' src={image} alt="" />
        </div>
        
        </div>

         <div className='w-60 mx-auto p-2'>
            <h2 className='text-gray-500 font-thin uppercase text-md'>{category}</h2>         
            <h3 className='text-xl font-semibold'>{title}</h3>         
         </div>

    </main>
  )
}

export default Product