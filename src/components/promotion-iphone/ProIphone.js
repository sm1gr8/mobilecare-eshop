import React from 'react'
import './ProIphone.css';
export default function ProIphone() {
  return (
    <div className='promotion-section-hold'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 align-self-center'>
            <div className='promotion-content-hold'>
                <h2>Apple iPhone</h2>
              <p>Apple iPhone za najlepšie ceny široko ďaleko</p>
              <a href='#' className='button button-with-border-dark '>Zobraziť viac</a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='promotion-img-hold proiphone'>
             <img src='images/promo-01.png'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
