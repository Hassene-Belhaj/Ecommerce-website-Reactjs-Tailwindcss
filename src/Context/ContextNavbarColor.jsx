import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {createContext,useContext} from 'react'


export const ContextNavbg = createContext()

const ContextNavbarColor = ({children}) => {
    const [color,setColor] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
        window.scrollY >= 40 ? setColor(true) : setColor(false)   
        })
    },[color])

  return (
  <ContextNavbg.Provider value={[color]}>
    {children}
  </ContextNavbg.Provider>
  )
}

export const contextNavbarBg = () => {
    return (
        useContext(ContextNavbg)
    )
}

export default ContextNavbarColor