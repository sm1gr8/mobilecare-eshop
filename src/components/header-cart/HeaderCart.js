import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderCart.css';
function HeaderCart() {

  const [btnshow, setBtnShow] = useState(false);

  return (
    <header>
      {/* Start topbar here  */}
      <div className='topbar dark-bg pt-1 pb-1'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-sm-12'>
              <div className='topbar-content'>Pomoc & kontakt</div>
            </div>
            <div className='col-lg-6 col-sm-12'>
              <div className='topbar-content d-flex justify-content-end'>
                <div className='address pe-3'>Rastislavova 68, Košice</div>
                <div className='tb-phone'>
                  <NavLink href='tel:+421 919 215 491'>+421 919 215 491</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ends topbar here  */}
      {/* Start topbar2 with links here  */}
      <div className='topbar light-bg pt-1 pb-1'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-sm-12'>
              <div className='topbar-content d-flex justify-content-end'>
                <ul>
                  <li><NavLink href='#'>Sledovanie zásielky</NavLink></li>
                  <li><NavLink href='#'>Vrátenie tovaru</NavLink></li>
                  <li><NavLink href='#'>O nás</NavLink></li>
                  <li><NavLink href='#'>FAQ</NavLink></li>
                  <li><NavLink href='#'>Blog</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ends topbar here  */}
      {/* Start topbar Announcement here  */}
      <div className='topbar-announcement red-bg pt-1 pb-1'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-sm-12'>
              <div className='topbar-content'>
                <div className='announcement-content d-flex justify-content-center'>
                  Nové iPhone 14 PRO s 20% zľavou :sparkles:
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ends topbar Announcement here  */}
      <div className='navbar-hold dark-bg pt-3 pb-3 mb-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 text-left'>
              <NavLink className='navbar-brand second-conten-left' to='/'>
                <img src='images/logo.svg' alt='Logo' className='img-fluid' />
              </NavLink>
            </div>
            <div className='col-sm-6'>
              <nav className='navbar navbar-expand-lg navbar-dark'>
                <div className='collapse navbar-collapse justify-content-end mobile-resp-h'>
                  <ul className='navbar-nav right-side'>
                    <li className='nav-item active'>
                      <NavLink className='nav-link' href='#'>
                        <span className='icon-user'></span>
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' href='#'>
                        <span className='icon-favourite-border'></span>
                      </NavLink>
                    </li>
                    <li className='nav-item custom-cart-dropdown'>
                      <NavLink className='nav-link dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false' href='#'>
                        <span className='icon-shopping-bag-outline'></span>
                      </NavLink>
                      <ul className='dropdown-menu dropdown-menu-dark'>
                        <li className=''><button className='btn-close'><i className='fa-solid fa-xmark'></i></button></li>
                        <li><h5>Nákupný košík</h5></li>
                        <li>
                          <div className='cart-dropdown-box'>
                            <div className='cart-img-side-one'>
                              <img src='images/cart-item-00.png' />
                            </div>
                            <div className='cart-img-side-two'>
                              <span className='pro-item-prices-h'><b className='new-price'>899 €</b><b className='old-price'>1199 €</b></span>
                              <span className='pro-item-name-h'>iPhone 14 PRO, 256 GB, Silver</span>
                              <span className='pro-item-count'>Množstvo: 1</span>
                              <div className='cart-item-icons'><span className='icon-favourite-border'></span> <span className='icon-shopping-bag-outline'></span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className='cart-dropdown-box'>
                            <div className='cart-img-side-one'>
                              <img src='images/cart-item-01.png' />
                            </div>
                            <div className='cart-img-side-two'>
                              <span className='pro-item-prices-h'><b className='new-price'>899 €</b><b className='old-price'>1199 €</b></span>
                              <span className='pro-item-name-h'>iPhone 14 PRO, 256 GB, Silver</span>
                              <span className='pro-item-count'>Množstvo: 1</span>
                              <div className='cart-item-icons'><span className='icon-favourite-border'></span> <span className='icon-shopping-bag-outline'></span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className='cart-dropdown-taotal-payment'>
                            <div className='cart-drop-total-box1'>
                              <span className='price-left-hold'>Doprava</span>
                              <span className='price-right-hold'>Bezplatná doprava </span>
                            </div>
                            <div className='cart-drop-total-box1'>
                              <span className='price-left-hold'>Spolu:<b className='subtotal-hold'>(vrátane DPH)</b></span>
                              <span className='price-right-hold total'> <h6>899.99 €</h6> </span>
                            </div>
                            <div className='cart-drop-sub-box'><a href='#' className='button button-dark'>Do pokladne</a></div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default HeaderCart;


