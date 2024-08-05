import React, {useContext} from 'react'
import {CartContext} from '../Feature/ContextProvider'
import CartProduct from '../Components/CartProduct'
import { totalItems } from '../Feature/CartReducer'
import { totalPrice } from '../Feature/CartReducer'

const cart = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className='container mt-3'>
      <div className='row'>
      <div className='col-8'>
        {cart.map(p => (
          <CartProduct product={p}></CartProduct>
        ))}
      </div>
      <div className='col-4 '>
        <div className="bg-secondary p-3 text-white">
          <h5>Total items:{totalItems(cart)}</h5>
          <h5>Total price:${totalPrice(cart)}</h5>
          <button className='btn btn-warning'>Checkout</button>
        </div>
      </div>
      </div>
      </div>

  
  )
}

export default cart