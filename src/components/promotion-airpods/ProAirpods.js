import React from 'react'
import './ProAirpods.css';
export default function ProAirpods() {
  return (
    <div className='promotion-section-hold'>
      <div className='container'>
      <div className='row resp-flow-hold'>
          <div className='col-md-6 align-self-center'>
            <div className='promotion-content-hold'>
                <h2>Apple Airpods</h2>
              <p>MacBooky za najlepšie ceny aké nájdete</p>
              <a href='#' className='button button-with-border-dark '>Zobraziť viac</a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='promotion-img-hold airpods'>
             <img src='images/promo-03.png'></img>
             <small>Apple Airpods 2nd GEN</small>
             <div className='price-tages-pro-h' style={{ backgroundImage: 'url("./images/price-tag.svg")' }}>
                <span className='price-tag'>149€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
