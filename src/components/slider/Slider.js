import React from 'react';
import './Slider.css';
function Slider() {
  return (
    <div>
      <div className="main-slider-hold">
        <div class="owl-carousel owl-theme">
          <div class="item">
            <div className='middle-slider one-slider-h'>
              <div className='box-content'>
                <small>iPhone 17 X-PRO</small>
                <h2>Nový iPhone
                  naskladnený!</h2>
                <a href=''>Kúpiť</a>
              </div>
              <div className='box-img-holds'>
                <div className='price-tag-head'><span className='price-tag'>188€</span></div>
                <img src='images/head-phone.png'></img></div>
            </div>
          </div>
          <div class="item">
            <div className='middle-slider second-slider-h'>
              <div className='box-content'>
                <small>iPhone 17 X-PRO</small>
                <h2>Nový iPhone
                  naskladnený!</h2>
                <a href=''>Kúpiť</a>
              </div>
              <div className='box-img-holds'>
              <div className='price-tag-head'><span className='price-tag'>899€</span></div>
                <img src='images/mobile-ss.png'></img></div>
            </div>
          </div>
          <div class="item">
            <div className='middle-slider third-slider-h'>
              <div className='box-content'>
                <small>MacBook PRO M2</small>
                <h2>MacBooky
                  na sklade!</h2>
                <a href=''>Kúpiť</a>
              </div>
              <div className='box-img-holds'><img src='images/macbook.png'></img></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

