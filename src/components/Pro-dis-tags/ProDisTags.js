import React from 'react'
import './ProDisTags.css';
export default function ProDisTags() {
  return (
    <div className='promotion-section-hold'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 align-self-center pd-middle-hold'>
            <div className='promotion-content-hold pro-dis-tag'>
                <h2>Zľavy až 60%</h2>
              <p>Na vybrané produkty</p>
              <a href='#' className='button button-with-border-dark '> Zobraziť viac </a>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='promotion-img-hold pro-dis-tag'>
             <img src='images/pro-dis-tags-00.Svg'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
