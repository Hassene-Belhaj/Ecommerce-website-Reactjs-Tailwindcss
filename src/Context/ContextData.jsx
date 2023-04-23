import React, { createContext, useContext, useEffect, useState } from 'react'

export const ContextGlobal  = createContext()

const ContextData = ({children}) => {
    const [Data,setData] = useState([])

useEffect(()=>{
    const fetchproducts = async () =>{
    const res = await fetch('https://fakestoreapi.com/products')    
    const data = await res.json()
    setData(data)   
}
fetchproducts()
},[])    
   

   
  return (
        <ContextGlobal.Provider value={[Data]}>
              {children}
        </ContextGlobal.Provider>   
   
  )
}

export const useContextData = () =>{
    return useContext(ContextGlobal)
}

export default ContextData