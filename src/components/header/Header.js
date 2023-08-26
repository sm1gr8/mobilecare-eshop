import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <header>
      {/* Start topbar here  */}
      <div className="topbar dark-bg pt-1 pb-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12">
              <div className="topbar-content">Pomoc & kontakt</div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="topbar-content d-flex justify-content-end">
                <div className="address pe-3">Rastislavova 68, Košice</div>
                <div className="tb-phone">
                  <NavLink href="tel:+421 919 215 491">+421 919 215 491</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ends topbar here  */}
      {/* Start topbar2 with links here  */}
      <div className="topbar light-bg pt-1 pb-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="topbar-content d-flex justify-content-end">
                <ul>
                  <li><NavLink href="#">Sledovanie zásielky</NavLink></li>
                  <li><NavLink href="#">Vrátenie tovaru</NavLink></li>
                  <li><NavLink href="#">O nás</NavLink></li>
                  <li><NavLink href="#">FAQ</NavLink></li>
                  <li><NavLink href="#">Blog</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ends topbar here  */}
      {/* Start topbar Announcement here  */}
      <div className="topbar-announcement red-bg pt-1 pb-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="topbar-content">
                <div className="announcement-content d-flex justify-content-center">
                  Nové iPhone 14 PRO s 20% zľavou :sparkles:
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ends topbar Announcement here  */}
      <div className="navbar-hold dark-bg pt-3 pb-3 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="collapse navbar-collapse justify-content-left">
                  <ul className="navbar-nav left-side">
                    <li className="nav-item active">
                      <NavLink className="nav-link" to='/výpredaj'>
                        <span class="icon-sale"></span>  Výpredaj
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/novinky'>
                        <span class="icon-element-02"></span> Novinky
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to='/mcservis'>
                        <span class="icon-repair"></span> MC Servis
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-sm-4">
              <NavLink className="navbar-brand" to='/'>
                <img src="images/logo.png" alt="Logo" className="img-fluid" />
              </NavLink>
            </div>
            <div className="col-sm-4">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="collapse navbar-collapse justify-content-end">
                  <ul className="navbar-nav right-side">
                    <li className="nav-item active">
                      <NavLink className="nav-link" href="#">
                        <span class="icon-user"></span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">
                        <span class="icon-favourite-border"></span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">
                        <span class="icon-shopping-bag-outline"></span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="row header-bottom-pd">
            <div className="col-sm-9 d-flex">
            <button className='button button-white button-with-icon menu-toggel'>Všetky kategórie <span class="icon-burgermenu"></span>
              </button>
              <nav className="navbar navbar-expand-lg navbar-dark main-menu">
                <div className="collapse navbar-collapse justify-content-left">
                  <ul className="navbar-nav left-side">
                    <li className="nav-item active">
                      <NavLink className="nav-link" href="#">
                        iPhone
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">
                        iPad
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">
                        MacBook
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">
                        Apple Airpods
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">
                        Smarthome
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" href="#">
                        Príslušenstvo
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-sm-3">
              <div className='header-search-hold'>
                <div class='easy-autocomplete'>
                  <input id='search-on-button-click' placeholder='Zadajte názov produktu'></input>
                  <span class="icon-search-outline"></span>
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