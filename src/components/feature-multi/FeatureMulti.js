import React from 'react'
import './FeatureMulti.css';
import FeaturesMulti from '../../apis/FeaturesMulti';

export default function FeatureMulti() {
  return (
    <div className='feature-section'>
      <div className='container'>

        <div className='row item-box-pd-row'>
          {
            FeaturesMulti.map((curelm) => {
              const { id, image, name, category, price, color_select, wishlist, dis_percentage, item_brand } = curelm;
              return (
                <div className='col-md-3' key={id} curelm={id}>

                  <div className='new_product_box'>
                    <div className='new_product_box_image'><a href='#'><img src={image} alt={name} /></a></div>
                    <div className='new_product_box_text'>
                      <a href='#'>
                        <span className='new_product_box_main_heading'>
                          {name}
                        </span>
                      </a>
                      <p className='category'> {category} </p>
                      <span className='price'> {price} </span>
                      <ul className='color_select'>
                        <li><span className='item_color_00' style={{ backgroundColor: '#F4E8CE' }}></span></li>
                        <li><span className='item_color_01' style={{ backgroundColor: '#594F63' }}></span></li>
                        <li><span className='item_color_02' style={{ backgroundColor: '#F0F2F2' }}></span></li>
                        <li><span className='item_color_03' style={{ backgroundColor: '#403E3D' }}></span></li>
                      </ul>
                      <div className='wishlist'>
                        <span class="icon-favourite-border"></span>
                      </div>
                      <span className='dis_percentage'>{dis_percentage}</span>
                      {/* <span className='item_brand'>{dis_percentage}</span> */}
                    </div>
                  </div>



                </div>
              );
            })
          }

        </div>
      </div>
    </div>
  )
}
