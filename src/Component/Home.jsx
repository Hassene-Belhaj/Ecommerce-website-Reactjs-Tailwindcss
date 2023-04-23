import React from 'react'
import { useContextData } from '../Context/ContextData'

import Product from './Product';
import { useState } from 'react';
import Hero from './Hero';

const Home = () => {
    const [products,setProducts] =useState([])
    const [Data] =  useContextData()


const filtredproducts = Data.filter((item)=>{
    return (
        item.category === "men's clothing" || item.category === "women's clothing"    
    )
})

  return (
   <main className='w-full h-full mx-auto'>

      <Hero />

    
     <div className='max-w-[1640px] w-full h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 mx-auto text-center'>
       {filtredproducts.map((product,index)=>{
        return (
         
            <Product key={index} product={product} />
         
        )
       })}

     </div>
     
   </main>
  )
}

export default Home