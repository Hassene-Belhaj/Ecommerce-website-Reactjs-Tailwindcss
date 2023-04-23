import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const ContextToggleNav = createContext()


const ContextToggle = ({children}) => {
    const [nav,setNav] = useState(false)
 
 

const HandleClick = () => {
    setNav(!nav)
}

  return (
    <ContextToggleNav.Provider value={[nav,setNav,HandleClick]}>
        {children}
    </ContextToggleNav.Provider>
  )
}

export const useContexttoggle = () => {
    return useContext(ContextToggleNav)
}


export default ContextToggle