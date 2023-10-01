import React from 'react'
import ProductList from '../ProductList'; // call the product boxs where we define products with category
import Products from '../Products'; // also call the data API of products

export default function AirPods() {
  return (

    <div className='feature-section'>
      <div className='container'>
        <div className='row owl-carousel owl-carousel-2 custom-colum-hide'>
          <ProductList products={Products} categories={['airpods-4']} />
        </div>
      </div>
    </div>

  )
};
