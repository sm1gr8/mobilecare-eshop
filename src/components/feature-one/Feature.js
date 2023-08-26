import React from 'react'
import './Feature.css';
import Features from '../../apis/Features';

export default function Feature() {
  return (
    <div className='feature-section'>
      <div className='container'>
        <div className='row'>
          <di className='col-md-12'>
            <div className='main-heading-holds'>
              <h2>Populárne tento týždeň</h2>
              <div className='view-more'>
                <a href='#' className='button button-with-border-dark '>Zobraziť viac</a>
              </div>
            </div>
          </di>
          <div className='row'>
            {
              Features.map((curelm) => {
                const { id, image, name, category, price, color_select, wishlist, dis_percentage, item_brand } = curelm;
                return (
                  <div className='col-md-3' key={id}>
                    
                    <div className='new_product_box'>
                      <div className='new_product_box_image'><a href='#'>
                        <img className='desk-h' src={image}></img>
                        </a></div>
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
                        {/* <span className='dis_percentage'>{item_brand}</span> */}
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
    </div>
  )
}
