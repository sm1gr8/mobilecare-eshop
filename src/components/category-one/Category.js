import React from 'react'
import './Category.css';
import Categories from '../../apis/Categories';

export default function Category() {
  return (
    <div className='category-section'>
      <div className='container'>
        <div className='row'>
          <di className='col-md-12'>
            <div className='main-heading-holds'>
              <h2>Hlavné kategórie</h2>
            </div>
          </di>
          <div className='row'>      
            {
            Categories.map((curelm) => {
              const {id, name, image} = curelm;
              return(
              <div className='col-md-3' key={id}>
                <div className='cate-item-box'>
                  <a href='#'>
                    <div className='cate-img-holder'>
                      <img src={image}></img>
                    </div>
                    <div className='cate-content-hold'>
                      <span>{name}</span>
                    </div>
                  </a>
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
