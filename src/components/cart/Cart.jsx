import React from 'react';
import './Cart.css';
import ProductList from '../ProductList'; // call the product boxs where we define products with category
import Products from '../Products'; // also call the data API of products
function Cart() {
  return (
    <div className='empty-cart-secton-hold'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='main-empty-cart'>
              <div className='cart-content-hold'>
                <span>Váš nákupný košík je prázdny</span>
                <p>Pokračujte v nákupu alebo sa prihláste do svojho účtu.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='item-add-cart-box'>
              <div className='item-cart-img-lef'>
                <img src='images/cart-item-00.png' />
              </div>
              <div className='item-content-detail-all'>
                <div className='pro-items-des'>
                  <span className='pro-name'>iPhone 14</span>
                  <p className='descrip'>Kapacita: 256 GB, Farba: Silver</p>
                  <a className='add-to-cart-items button button-with-border-dark '>
                    <span class="icon-favourite-border"></span> Odložiť na neskôr
                  </a>
                </div>
                <div className='pro-items-prices'>
                  <span className='pro-price decurated-hold'>
                    <b className='new-price'>1299 €</b>
                    <b className='old-price'>1799 € </b>
                    <a href='#' className='trash'><span class="icon-delete-outline"></span></a>
                  </span>
                  <p className='percentage-hold-item'>Uštríte 17% oproti pôvodnej sume</p>
                  <div className='select-items'>
                    <label>Zadajte množstvo tu</label>
                    <select class="form-select select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='item-add-cart-box'>
              <div className='item-cart-img-lef'>
                <img src='images/cart-item-01.png' />
              </div>
              <div className='item-content-detail-all'>
                <div className='pro-items-des'>
                  <span className='pro-name'> iPhone 14 PRO </span>
                  <p className='descrip'>Kapacita: 256 GB, Farba: Silver</p>
                  <a className='add-to-cart-items button button-with-border-dark '>
                    <span class="icon-favourite-border"></span> Odložiť na neskôr
                  </a>
                </div>
                <div className='pro-items-prices'>
                  <span className='pro-price'>1299 € <a href='#' className='trash'><span class="icon-delete-outline"></span></a></span>
                  <div className='select-items'>
                    <label>Zadajte množstvo tu</label>
                    <select class="form-select select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='item-add-cart-box'>
              <div className='item-cart-img-lef'>
                <img src='images/cart-item-02.png' />
              </div>
              <div className='item-content-detail-all'>
                <div className='pro-items-des'>
                  <span className='pro-name'>Apple AirPods 2 GEN</span>
                  <p className='descrip'>Kapacita: 256 GB, Farba: Silver</p>
                  <a className='add-to-cart-items button button-with-border-dark '>
                    <span class="icon-favourite-border"></span> Odložiť na neskôr
                  </a>
                </div>
                <div className='pro-items-prices'>
                  <span className='pro-price'>1299 € <a href='#' className='trash'><span class="icon-delete-outline"></span></a></span>
                  <div className='select-items'>
                    <label>Zadajte množstvo tu</label>
                    <select class="form-select select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div class='main-payemnt-content-box'>
              <div className='dlivery-one-box'>
                <div className='delvery-icons'>
                  <img src='images/delivery-icon.png' /><span>Doručíme</span>
                </div>
                <div className='delvery-content'>
                  <p>Pon, 19. 8 - Ut, 20. 8.</p>
                </div>
              </div>
              <div className='payment-methods-holds'>
                <div className='payment-heads'>Akceptujeme platby</div>
                <ul className='payment-cards'>
                  <li><img src='images/payment/paymt-00.svg'></img></li>
                  <li><img src='images/payment/paymt-01.svg'></img></li>
                  <li><img src='images/payment/paymt-02.svg'></img></li>
                  <li><img src='images/payment/paymt-03.svg'></img></li>
                  <li><img src='images/payment/paymt-04.svg'></img></li>
                  <li><img src='images/payment/paymt-05.svg'></img></li>
                  <li><img src='images/payment/paymt-06.svg'></img></li>
                </ul>
              </div>
              <div className='voucher-box'>
                <div className='voucher-content'>
                  <span>Voucher</span>
                </div>
                <div className='voucher-input'>
                <input className='form-input input' type='text' id='' name='' placeholder='Zľavový kód'/>
                </div>
              </div>
              <div className='payment-add-box'>
                <div className='content-left'>
                  <span>Spolu položky</span>
                </div>
                <div className='content-right'>
                <p>3778 €</p>
                </div>
              </div>
              <div className='payment-add-box'>
                <div className='content-left'>
                  <span>Doprava:</span>
                </div>
                <div className='content-right'>
                <p>0 €</p>
                </div>
              </div>
              <div className='payment-add-box'>
                <div className='content-left'>
                  <span>Spolu:<small>(vrátane DPH)</small></span>
                </div>
                <div className='content-right'>
                <h2>3778 €</h2>
                </div>
              </div>
              <div className='payment-check'>
              <input class="input-filter" type="checkbox" name="cat_filter[]" id="payment-check-b1" value=""/>
              <label class="span1-filter" for="payment-check-b1">zobraziť cenu bez DPH</label>
              </div>
              <div className='payment-btn-holds'>
                <a href='#' className='button button-with-border-dark '>Pokračovať v nákupe</a>
                <a href='#' className='button button-dark'>Do pokladne</a>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='productd-main-heading'>
              <h2><span class="icon-bestseller"></span> Mohlo by vás zaujímať </h2>
            </div>
          </div>
        </div>
        <div className="row owl-carousel owl-carousel-3 custom-colum-hide">
          <ProductList products={Products} categories={['Smartfóny']} />
        </div>
      </div>
    </div>

  );
}

export default Cart;

