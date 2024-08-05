import React, { useContext } from 'react';
import { CartContext } from '../Feature/ContextProvider';

const CartProduct = ({ product }) => {
    const { cart, dispatch } = useContext(CartContext);

    const Increase = (id) => {
        const index = cart.findIndex(p => p.id === id);
        if (cart[index].quantity < 10) {
            dispatch({ type: "Increase", id });
        }
    };

    const Decrease = (id) => {
        const index = cart.findIndex(p => p.id === id);
        if (cart[index].quantity > 1) {
            dispatch({ type: "Decrease", id });
        }
    };

    const Remove = (id) => {
        dispatch({ type: "Remove", id });
    };

    return (
        <div className='flex border mb-3 p-4'>
            <img src={product.thumbnail} className='w-25 h-25' alt={product.title} />
            <div className='ml-4'>
                <h4>{product.title}</h4>
                <h5>${product.price}</h5>
                <div className='flex items-center'>
                    <button className='rounded-full px-2 border' aria-label="Decrease quantity" onClick={() => Decrease(product.id)}>
                        <b>-</b>
                    </button>
                    <button className='rounded border mx-2 px-4'>
                        {product.quantity}
                    </button>
                    <button className='rounded-full px-2 border' aria-label="Increase quantity" onClick={() => Increase(product.id)}>
                        <b>+</b>
                    </button>
                </div>
                <button className='btn btn-sm btn-warning mt-2' aria-label="Remove product" onClick={() => Remove(product.id)}>
                    <b>Remove</b>
                </button>
            </div>
        </div>
    );
}

export default CartProduct;
