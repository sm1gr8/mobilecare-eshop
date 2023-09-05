import React from 'react';
import './ProductListen.css';
import Features from '../../apis/Features';
import Cartbutton from '../Cartbutton1';

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
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='filter-button'>
              <a className='button button-dark' href='#' type='button' data-bs-toggle='offcanvas' data-bs-target='#filter'>Filter <span><i className='fas fa-filter'></i></span> </a>
            </div>
            <div className='offcanvas offcanvas-start main-filter-dropdown' id='filter'>
              <div className='offcanvas-header'>
                <h5>Filter</h5>
                <button type='button' className='btn-close text-reset' data-bs-dismiss='offcanvas'><i className='fas fa-times'></i></button>
              </div>
              <div className='offcanvas-body custom-accordian-hold'>
                <div className='accordion' id='accordionPanelsStayOpenExample'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
                      <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne' aria-expanded='true' aria-controls='panelsStayOpen-collapseOne'>
                        Cena
                      </button>
                    </h2>
                    <div id='panelsStayOpen-collapseOne' className='accordion-collapse collapse show' aria-labelledby='panelsStayOpen-headingOne'>
                      <div className='accordion-body'>
                        <label for='customRange2' class='form-label'>Example range</label>
                        <input type='range' class='form-range' min='100' max='500' id='customRange2' />
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='panelsStayOpen-headingOne1'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne1' aria-expanded='false' aria-controls='panelsStayOpen-collapseOne1'>
                        Značka
                      </button>
                    </h2>
                    <div id='panelsStayOpen-collapseOne1' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingOne1'>
                      <div className='accordion-body'>
                        <div className='filter-count-menu-scroll'>
                          <div className="easy-autocomplete"><input id="search-on-button-click" placeholder="Search" />
                            <span className="icon-search-outline"></span>
                          </div>
                          <ul className='ul-filter'>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>Apple</span>
                            </li>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>Samsung</span>
                            </li>

                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>Xiaomi</span>
                            </li>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>Raketa</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='panelsStayOpen-headingOne2'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne2' aria-expanded='false' aria-controls='panelsStayOpen-collapseOne2'>
                        Zariadenie (1)
                      </button>
                    </h2>
                    <div id='panelsStayOpen-collapseOne2' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingOne2'>
                      <div className='accordion-body'>
                        <div className='filter-count-menu-scroll'>
                          <div className="easy-autocomplete"><input id="search-on-button-click" placeholder="Search" />
                            <span className="icon-search-outline"></span>
                          </div>
                          <ul className='ul-filter'>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>iPhone</span>
                            </li>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>iPad</span>
                            </li>

                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>MacBook</span>
                            </li>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>Apple Airods</span>
                            </li>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>Vision X PRO</span>
                            </li>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>Príslušenstvo</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='panelsStayOpen-headingOne3'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne3' aria-expanded='false' aria-controls='panelsStayOpen-collapseOne3'>
                        Model
                      </button>
                    </h2>
                    <div id='panelsStayOpen-collapseOne3' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingOne3'>
                      <div className='accordion-body'>
                        <div className='filter-count-menu-scroll'>
                          <div className="easy-autocomplete"><input id="search-on-button-click" placeholder="Search" />
                            <span className="icon-search-outline"></span>
                          </div>
                          <ul className='ul-filter'>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>14 PRO</span>
                            </li>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>14 X</span>
                            </li>

                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>13 PRO</span>
                            </li>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>13 Mini</span>
                            </li>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>X</span>
                            </li>
                            <li className='li-filter '>
                              <input className='input-filter' type='checkbox' name='cat_filter[]' value='' />
                              <span className='span1-filter'>12 Mini</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='panelsStayOpen-headingOne4'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne4' aria-expanded='false' aria-controls='panelsStayOpen-collapseOne4'>
                        Kapacita
                      </button>
                    </h2>
                    <div id='panelsStayOpen-collapseOne4' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingOne4'>
                      <div className='accordion-body'>
                        <div className='filter-count-menu-scroll'>
                          <div className='modal-sizes'>
                            <div className='size-mobile'>
                              <span>64GB</span>
                            </div>
                            <div className='size-mobile'>
                              <span>125 GB</span>
                            </div>
                            <div className='size-mobile'>
                              <span>256 GB</span>
                            </div>
                            <div className='size-mobile'>
                              <span>512 GB</span>
                            </div>
                            <div className='size-mobile'>
                              <span>1 TB</span>
                            </div>
                            <div className='size-mobile'>
                              <span>2 TB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='panelsStayOpen-headingOne5'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne5' aria-expanded='false' aria-controls='panelsStayOpen-collapseOne5'>
                        Farba
                      </button>
                    </h2>
                    <div id='panelsStayOpen-collapseOne5' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingOne5'>
                      <div className='accordion-body'>
                        <div className='filter-count-menu-scroll'>
                          <ul className='ul-filter'>
                            <li className='li-colors'>
                              <div className='color-select'><span style={{ backgroundColor: '#403E3D' }}></span> Space black</div>
                            </li>
                            <li className='li-colors'>
                              <div className='color-select'><span style={{ backgroundColor: '#F0F2F2' }}></span> Silver</div>
                            </li>
                            <li className='li-colors'>
                              <div className='color-select'><span style={{ backgroundColor: '#594F63' }}></span> Deep purple</div>
                            </li>
                            <li className='li-colors'>
                              <div className='color-select'><span style={{ backgroundColor: '#F4E8CE' }}></span> Gold</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='panelsStayOpen-headingOne6'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne6' aria-expanded='false' aria-controls='panelsStayOpen-collapseOne5'>
                        Farba
                      </button>
                    </h2>
                    <div id='panelsStayOpen-collapseOne6' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingOne6'>
                      <div className='accordion-body'>
                        <div className='filter-count-menu-scroll'>
                          <ul className='ul-filter'>
                            <li className='li-links'>
                              <a href='#'>Najnovšie</a>
                            </li>
                            <li className='li-links'>
                              <a href='#'>Najstaršie</a>
                            </li>
                            <li className='li-links'>
                              <a href='#'>Od najlacnejšieho</a>
                            </li>
                            <li className='li-links'>
                              <a href='#'>Od najdrahšieho</a>
                            </li>
                            <li className='li-links'>
                              <a href='#'>Zľava: od najlacnejšieho</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='main-filter-footer-section'>
                <a href='' className='bt-one-filter button'>Vymazať filter</a>
                <a href='' className='bt-second-filter button-dark button'>1772 výsledkov</a>
              </div>
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
      <div className='main-border-holds'></div>
      <div className='container'>
      <div className='row'>
        <div className='selected-filtered-items-pd'>
          <div className='d-flex slect-item-filter-box'>
            Apple <i class="fas fa-times"></i>
          </div>
          <div className='d-flex slect-item-filter-box'>
          iPhone <i class="fas fa-times"></i>
          </div>
          <div className='d-flex slect-item-filter-box'>
          14 PRO <i class="fas fa-times"></i>
          </div>
          <div className='d-flex slect-item-filter-box'>
          256 GB <i class="fas fa-times"></i>
          </div>
          <div className='d-flex slect-item-filter-box'>
          233 € - 677 € <i class="fas fa-times"></i>
          </div>
          <div className='d-flex slect-item-filter-box underline-btn'>
          Vyčistiť všetko
          </div>
        </div>
      </div>
      <div className="row">
            {Features.map((curelm) => {
              const {
                id,
                image,
                hoverImg,
                name,
                category,
                price,
                color_select,
                wishlist,
                dis_percentage,
                item_brand,
              } = curelm;
              return (
                <div className="col-md-3" key={id} curelm={id}>
                  <div className="new_product_box">
                    <div className="product-cart-button-container">
                      <div className="new_product_box_image">
                        <a href="#">
                          <img className="main-img" src={image}></img>
                          <img className="hoverImg" src={hoverImg}></img>
                        </a>
                      </div>
                      <Cartbutton />
                    </div>
                    <div className="new_product_box_text">
                      <a href="#">
                        <span className="new_product_box_main_heading">
                          {name}
                        </span>
                      </a>
                      <p className="category"> {category} </p>
                      <span className="price"> {price} </span>
                      <ul className="color_select">
                        <li>
                          <span
                            className="item_color_00"
                            style={{ backgroundColor: "#F4E8CE" }}
                          ></span>
                        </li>
                        <li>
                          <span
                            className="item_color_01"
                            style={{ backgroundColor: "#594F63" }}
                          ></span>
                        </li>
                        <li>
                          <span
                            className="item_color_02"
                            style={{ backgroundColor: "#F0F2F2" }}
                          ></span>
                        </li>
                        <li>
                          <span
                            className="item_color_03"
                            style={{ backgroundColor: "#403E3D" }}
                          ></span>
                        </li>
                      </ul>
                      <div className="wishlist">
                        <span class="icon-favourite-border"></span>
                      </div>
                      {/* <span className='dis_percentage'>{item_brand}</span> */}
                      {/* <span className='item_brand'>{dis_percentage}</span> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
}

export default ProductListen;
