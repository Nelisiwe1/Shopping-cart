import React from 'react'

const Product = ({Product}) => {
  return (
    <div class="card" >
  <img src={Product.thumbnail} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-title">{Product.title}</h4>
    <h5 class="card-title">${Product.price}</h5>
  
    <button href="#" class="btn btn-primary">Add To Cart</button>
  </div>
</div>
  )
}

export default Product
