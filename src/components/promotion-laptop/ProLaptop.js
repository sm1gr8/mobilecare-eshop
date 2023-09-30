import React from 'react'
import './ProLaptop.css';
export default function ProLaptop() {
  return (
    <div className='promotion-section-hold'>
      <div className='container'>
        <div className='row resp-flow-hold'>
          <div className='col-md-6 align-self-center'>
            <div className='promotion-content-hold'>
              <h2>Apple MacBook</h2>
              <p>MacBooky za najlepšie ceny aké nájdete</p>
              <a href='#' className='button button-with-border-dark '>Zobraziť viac</a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='promotion-img-hold ProLaptop'>
              <img src='images/promo-02.png'></img>
              <small>Apple MacBook M2 13”</small>
              <div className='price-tages-pro-h' style={{ backgroundImage: 'url("./images/price-tag.svg")' }}>
                <span className='price-tag'>1499€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
