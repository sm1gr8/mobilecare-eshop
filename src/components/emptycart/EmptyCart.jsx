import React from 'react';
import './EmptyCart.css';
import ProductList from '../ProductList'; // call the product boxs where we define products with category
import Products from '../Products'; // also call the data API of products
function EmptyCart() {
  return (
    <div className='empty-cart-secton-hold'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='main-empty-cart'>
              <div className='cart-content-hold'>
                <img src='images/empty-logo.svg' />
                <span>Váš nákupný košík je prázdny</span>
                <p>Pokračujte v nákupu alebo sa prihláste do svojho účtu.</p>
                <ul className='car-btn'>
                  <li><a className='button button-with-border-dark ' href='#'>Prihlásiť sa</a></li>
                  <li><a className='button button-dark' href='#'>Pokračovať k nákupu</a></li>
                </ul>
                <p>Nevadí,<a href='#'>zaregistrujte sa</a></p>
                <br/>
                <br/>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='productd-main-heading'>
              <h5><span class="icon-bestseller"></span> Mohlo by vás zaujímať </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <ProductList products={Products} categories={['Smartfóny']} />
        </div>
      </div>


    </div>

  );
}

export default EmptyCart;
