import React from 'react'
import ProductList from '../ProductList'; // call the product boxs where we define products with category
import Products from '../Products'; // also call the data API of products

export default function FeatureMulti() {
  return (
    <div className='feature-section multi-feature-holds'>
      <div className='container'>
      <div className="row">
            <ProductList products={Products} categories={['Smartfóny',]} />
            <ProductList products={Products} categories={['Smartfóny',]} />
          </div>
      </div>
    </div>
  )
};
