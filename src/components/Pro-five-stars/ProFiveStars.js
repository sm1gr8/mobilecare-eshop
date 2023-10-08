import React from 'react'
import './ProFiveStars.css';
export default function ProFiveStars() {
  return (
    <div className='promotion-section-hold'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 align-self-center pd-middle-hold'>
            <div className='promotion-content-hold five-starts-holds'>
              <img src='images/heureka-logo.svg' />
              <h5>Naši spokojní zákazníci</h5>
              <span><p><b><i class="fa fa-star" aria-hidden="true" /> 5/5</b> na základe <b>671 recenzií <span class="icon-info-outline"></span></b></p></span>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='promotion-img-hold five-starts-holds'>
              <img src='images/five-starts-logo.Svg' />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
