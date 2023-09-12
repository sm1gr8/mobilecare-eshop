import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar'
import './Header.css';
function Header() {

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
            <div className='col-sm-4'>
              <nav className='navbar navbar-expand-lg navbar-dark'>
                <div className='collapse navbar-collapse justify-content-left'>
                  <ul className='navbar-nav left-side'>
                    <li className='nav-item active'>
                      <NavLink className='nav-link' to='/výpredaj'>
                        <span className='icon-sale'></span>  Výpredaj
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='/novinky'>
                        <span className='icon-element-02'></span> Novinky
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='/mcservis'>
                        <span className='icon-repair'></span> MC Servis
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className='col-sm-4'>
              <NavLink className='navbar-brand' to='/'>
                <img src='images/logo.png' alt='Logo' className='img-fluid' />
              </NavLink>
            </div>
            <div className='col-sm-4'>
              <nav className='navbar navbar-expand-lg navbar-dark'>
                <div className='collapse navbar-collapse justify-content-end'>
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
          <div className='row header-bottom-pd'>
            <div className='col-sm-9 d-flex'>
              <div className={btnshow ? 'show btnn' : 'btnn'}>
                <button className='button button-white button-with-icon menu-toggel' onClick={() => setBtnShow(!btnshow)}>Všetky kategórie <span className='icon-burgermenu'></span>
                </button>
                <Sidebar setBtnShow={setBtnShow} />
              </div>
              <nav className='navbar navbar-expand-lg navbar-dark main-menu'>
                <div className='collapse navbar-collapse justify-content-left'>
                  <ul className='navbar-nav left-side'>
                    <li className='nav-item active dropdown'>
                      <NavLink className='nav-link dropdown-toggle' id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false' href='#'>
                        iPhone
                      </NavLink>
                      <div className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                        <div className='row custom-dropdown-hold'>
                          <div className='col-md-2 pd-zero'>
                            <div className='main-dropdown-holds'>
                              <span>Apple iPhone</span>
                              <ul className='item-links'>
                                <li><a href='#'>iPhone 14 PRO</a></li>
                                <li><a href='#'>iPhone 14 PRO Max</a></li>
                                <li><a href='#'>iPhone 14 Plus</a></li>
                                <li><a href='#'>iPhone 14</a></li>
                                <li><a href='#'>iPhone 13</a></li>
                                <li><a href='#'>iPhone 13 Mini</a></li>
                                <li><a href='#'>iPhone SE 2022</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className='col-md-2 pd-zero'>
                            <div className='main-dropdown-holds'>
                              <span></span>
                              <ul className='item-links'>
                                <li><a href='#'>iPhone 12</a></li>
                                <li><a href='#'>iPhone 12 PRO</a></li>
                                <li><a href='#'>iPhone X</a></li>
                                <li><a href='#'>iPhone 8</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className='col-md-2 pd-zero'></div>
                          <div className='col-md-3 pd-zero'>
                            <div className='dropdown-img box-one'>
                              <div className='content-hold'>
                                <h2>Nové</h2>
                                <a className='button-dark' href='#'>Nakupovať <i className='fas fa-angle-right'></i></a>
                              </div>
                              <div className='img-hold'><img src='images/dropdown/nav-drop-00.png'></img></div>
                            </div>
                          </div>
                          <div className='col-md-3 pd-zero'>
                            <div className='dropdown-img box-second'>
                              <div className='content-hold'>
                                <h2>Výpredaj</h2>
                                <a className='button-dark' href='#'>Nakupovať <i className='fas fa-angle-right'></i></a>
                              </div>
                              <div className='img-hold'><img src='images/dropdown/nav-drop-01.png'></img></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' href='#'>
                        iPad
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' href='#'>
                        MacBook
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' href='#'>
                        Apple Airpods
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' href='#'>
                        Smarthome
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' href='#' data-bs-toggle='modal' data-bs-target='#exampleModal'>
                        Príslušenstvo
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className='col-sm-3'>
              <div className='header-search-hold'>
                <div className='easy-autocomplete'>
                  <input id='search-on-button-click' placeholder='Zadajte názov produktu'></input>
                  <span className='icon-search-outline'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='discount-popups'>
        <div className='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-body'>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'><i className='fa-solid fa-xmark'></i></button>
                <div className='discount-content-upper'>
                  <img src='images/popup-00.svg' />
                  <span>Získaj 10% zľavu</span>
                </div>
                <div className='discount-form-hold'>
                  <form method='' action='' id='' >
                    <div className='form_input_fields_data'>
                      <input class="form-input input" type="text" id="" name="" placeholder="Zadajte vašu e-mailovú adresu" ></input>
                      <label for='' generated='true' className='error'></label>
                    </div>
                    <div className='form_btn'>
                     <a href='#' className='button button-dark one'> Odoslať </a>
                     <a href='#' className='button second'> Nechcem zľavu </a>
                    </div>
                    <div className='description-hold'>
                      <p>Zadaním vášho e-mailu súhlasíte s našimi <a href=''> obchodnými podmienkami a </a> podmienkami <a href=''> ochrany osobných údajov </a></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;