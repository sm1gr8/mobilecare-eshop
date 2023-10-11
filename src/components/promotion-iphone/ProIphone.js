import React from 'react'
import './ProIphone.css';
export default function ProIphone() {
  return (
    <div className='promotion-section-hold'>
      <div className='container'>
        <div className='row resp-flow-hold'>
          <div className='col-md-6 align-self-center'>
            <div className='promotion-content-hold proiphone-content-holds'>
                <h2>Apple iPhone</h2>
              <p>Apple iPhone za najlepšie ceny široko ďaleko</p>
              <a href='#' className='button button-with-border-dark '>Zobraziť viac</a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='promotion-img-hold proiphone'>
             <img className='desktop' src='images/promo-01.png'/>
             <img className='resp-hold' src='images/promo-resp-01.png'/>
             <small>iPhone 17 PRO</small>
             <div className='price-tages-pro-h' style={{ backgroundImage: 'url("./images/price-tag.svg")' }}>
                <span className='price-tag'>899€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
