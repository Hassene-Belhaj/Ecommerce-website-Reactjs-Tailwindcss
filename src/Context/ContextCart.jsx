import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'


export const ContextCartProduct =  createContext()
 


const ContextCart = ({children}) => {

 const [cart,setCart] = useState([])
 const [bagQuantity,setBagQuantity] =useState([0])
 const [Total,setTotal] = useState(0)


 // total
 
 useEffect(()=>{
 const Totalsum =cart.reduce((accumulator,currentIndex)=>{
  return accumulator + currentIndex.price * currentIndex.quantity
 },0)
 
 setTotal(Totalsum)
 },[cart])


// update  bag icon quantity 

 useEffect(()=>{

  if (cart) {
    const newbagquantity = cart.reduce((accumulator,currentItem)=>{
      return  accumulator + currentItem.quantity
    },0)
    setBagQuantity(newbagquantity)
  }
 },[cart])


        const AddToCart = (product,id) => {
          const newitem = {...product,quantity : 1}
          const cartitem = cart.find((item)=>item.id === id)
          if (cartitem) {
          const newcart = cart.map((item)=>{
            if(item.id === id) {
                return {...item,quantity : item.quantity + 1}
            } else {
                return item
            }
          })   
          setCart(newcart)    
          } else {
            setCart([...cart,newitem])
          }
        } 

        const DeleteProduct = (id) => {
          const newitem = cart.filter((item)=>{
            return item.id !== id
          })
          setCart(newitem)
        } 

        const ClearCart = () => {
          return setCart([])
        }
        
        const IncreaseQuantity = (id) => {
        const item = cart.find((item)=>item.id === id)
        AddToCart(item,id)
        }
 
        const DecreaseQuantity = (id) => {
          const cartitem = cart.find((item)=>item.id === id)
          if (cartitem) {
            const newcart = cart.map((item)=>{
             if (item.id === id) {
              return {...item,quantity : item.quantity - 1}
             } else {
              return item
             }
            })
            setCart(newcart)
          }
            if (cartitem.quantity < 2 ) {
              DeleteProduct(id)
          }
         
        } 

  return (
    <ContextCartProduct.Provider value={{AddToCart,cart,setCart,DeleteProduct,ClearCart,IncreaseQuantity,DecreaseQuantity,bagQuantity,Total}}>
        {children}
    </ContextCartProduct.Provider>
  )
}

export const useContextcartProduct = () => {
    return useContext(ContextCartProduct)
}

export default ContextCart;