import React from 'react'
import './ProductListen.css';
function ProductListen() {
  return (
    <div className='productlisting-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <ul className='breadcrumbs'>
              <li><a href='#'>Domov</a></li>
              <li><a href='#'>Kategória</a></li>
              <li><a href='#'>Subkategória</a></li>
              <li><a href='#' className='active'>Aktuálne zobrazené</a></li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='filter-button'>
              <a className='button button-dark' href='#'>Filter <span><i className='fas fa-filter'></i></span> </a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='productlisting-main-heading'>
              <h5>Meno kategórie, napríklad produkty Apple</h5>
              <p>1772 nájdených produktov</p>
            </div>
          </div>
          <div className='col-md-4'>
          <div className='selectdropdwon-prolist'>
              <select className='form-select select'>
                <option selected>Zobraziť podľa</option>
                <option>Zobraziť podľa</option>
                <option>Zobraziť podľa1</option>
                <option>Zobraziť podľa2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListen;
