import React from 'react'
import ProductList from '../ProductList'; // call the product boxs where we define products with category
import Products from '../Products'; // also call the data API of products

export default function Mobile() {
  return (
    <div className='feature-section'>
      <div className='container'>
          <div className='row item-box-pd-row'>
            <ProductList products={Products} categories={['iphone-4']} />
          </div>
        </div>
      </div>
  )
};
