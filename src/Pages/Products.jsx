import React, { useState } from 'react';
import Data from '../../Data.json';
import Product from '../Components/Product';

const Products = () => {
    const [products, setProducts] = useState(Data.products);

    return (
        <div>
            {products.map(p => (
                <Product key={p.id} product={p} />
            ))}
        </div>
    );
}

export default Products;
