import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer'

export const CartContext = createContext()

const ContextProvider = ({childern}) => {
  const [cart, dispatch] = useReducer(CartReducer,[])
  return (
    <CartContext.Provider value={{cart, dispatch}}>
{childern}
    </CartContext.Provider>
  )
}

export default ContextProvider