import React from 'react'
import './ConInfo.css';
export default function ConInfo() {
  return (
    <div className='coninfo-section-hold'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-1 col-md-12'>
            <div className='content-info-one-custom'>
              <div className='coninfo-icons-hold'>
                <a href='#'><span class="icon-contact"></span></a>
              </div>
              <div className='coninfo-box-second desktop-hide'>
                <span>
                  <a href='#'>+421 919 215 491</a>
                </span>
                <small>k dispozícii</small>
              </div>
            </div>
          </div>
          <di className='col-lg-11 col-md-12'>
            <div className='coninfo-content-hold'>
              <div className='coninfo-box-one'>
                <h5>Chcete sa pred nákupom rýchlo poradiť? </h5>
                <p>Pondelok - Piatok: 8.00 - 17.30</p>
              </div>
              <div className='coninfo-box-second'>
                <span>
                  <a href='#'>+421 919 215 491</a>
                </span>
                <small>k dispozícii</small>
              </div>
            </div>
          </di>
        </div>
      </div>
    </div>
  )
}
