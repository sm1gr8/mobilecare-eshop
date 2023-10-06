import React from 'react';
import './CheckOut.css';
import ProductList from '../ProductList'; // call the product boxs where we define products with category
import Products from '../Products'; // also call the data API of products
import Header from '../header/Header';
function CheckOut() {
  return (
    <>
    <Header/>
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
          <div className='col-md-6'>
            <div className='checkout-payment-method'>
              <span>Expresný check-out </span>
              <div className='paypaloption'>
                <a href='#' className='button one'><img src='images/checkout00.svg' /></a>
                <a href='#' className='button second'><img src='images/checkout01.svg' /></a>
              </div>
              <p>Alebo</p>
            </div>
            <div className='checkout-address-add'>
              <div className='checkout-content-heads'>
                <span>Informácie o zákazníkovi</span>
                <p>Už máte účet? <a href='#'>Prihláste sa</a></p>
              </div>
              <div className='checkout-address-form row'>
                <div className='col-md-6'>
                  <div className='form-fields-holds'>
                    <label>Vaša e-mailová adresa</label>
                    <input className='form-input input' type='text' id='' name='' placeholder='jožko@mrkvička.sk' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-fields-holds'>
                    <label>Vaše tel. číslo</label>
                    <input className='form-input input' type='text' id='' name='' placeholder='0911 911 911' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='checkout-check'>
                    <input class="input-checkout" type="checkbox" name="" id="checkout-00" value="" />
                    <label for="checkout-00">Odoberať newsletter</label>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='checkout-content-heads'>
                    <span>Adresa</span>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-fields-holds'>
                    <label>Typ zákazníka</label>
                    <select class="form-select select">
                      <option>Osobný</option>
                      <option>Osobný 1</option>
                      <option>Osobný 2</option>
                      <option>Osobný 3</option>
                      <option>Osobný 4</option>
                      <option>Osobný 5</option>
                    </select>
                  </div>
                </div>
                <div className='col-md-6'></div>
                <div className='col-md-6'>
                  <div className='form-fields-holds'>
                    <label>Krstné meno</label>
                    <input className='form-input input' type='text' id='' name='' placeholder='Jožko' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-fields-holds'>
                    <label>Priezvisko</label>
                    <input className='form-input input' type='text' id='' name='' placeholder='Mrkvička' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-fields-holds'>
                    <label>Ulica</label>
                    <input className='form-input input' type='text' id='' name='' placeholder='Rokycanská' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-fields-holds'>
                    <label>Číslo domu</label>
                    <input className='form-input input' type='text' id='' name='' placeholder='Číslo domu alebo vchodu' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-fields-holds'>
                    <label>Mesto</label>
                    <input className='form-input input' type='text' id='' name='' placeholder='Rokycany' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-fields-holds'>
                    <label>PSČ</label>
                    <input className='form-input input' type='text' id='' name='' placeholder='000 000' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-fields-holds'>
                    <label>Krajina</label>
                    <select class="form-select select">
                      <option>Krajina one</option>
                      <option>Osobný 1</option>
                      <option>Osobný 2</option>
                      <option>Osobný 3</option>
                      <option>Osobný 4</option>
                      <option>Osobný 5</option>
                    </select>
                  </div>
                </div>
                <div className='col-md-6'></div>
                <div className='col-md-12'>
                  <div className='checkout-check'>
                    <input class="input-checkout" type="checkbox" name="" id="checkout-01" value="" />
                    <label for="checkout-01">Rovnaká adresa doručenia ako fakturačná adresa</label>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='checkout-content-heads'>
                    <span>Spôsob dopravy</span>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='checkout-check'>
                    <input class="input-checkout" type="checkbox" name="" id="checkout-01" value="" />
                    <label for="checkout-01">Štandardný</label>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='checkout-check'>
                    <input class="input-checkout" type="checkbox" name="" id="checkout-02" value="" />
                    <label for="checkout-02">Osobný odber na predajni</label>
                  </div>
                </div>
                <div className='checkout-border-section'></div>
                <div className='col-md-12'>
                  <div className='checkout-content-heads'>
                    <span>Spôsob platby</span>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='checkout-check'>
                    <input class="input-checkout" type="checkbox" name="" id="checkout-03" value="" />
                    <label for="checkout-03">Dobierka</label>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='checkout-check'>
                    <input class="input-checkout" type="checkbox" name="" id="checkout-04" value="" />
                    <label for="checkout-04">Platba kartou</label>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='checkout-check'>
                    <input class="input-checkout" type="checkbox" name="" id="checkout-05" value="" />
                    <label for="checkout-05">PayPal</label>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='checkout-check'>
                    <input class="input-checkout" type="checkbox" name="" id="checkout-06" value="" />
                    <label for="checkout-06">Apple Pay</label>
                  </div>
                </div>
                <div className='checkout-border-section'></div>
                <div className='col-md-12'>
                  <div className='checkout-content-heads'>
                    <span>Posledné kroky pred objednávkou</span>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='form-fields-holds'>
                    <label>Ako ste sa o nás dozvedeli?</label>
                    <select class="form-select select">
                      <option>Cez reklamu 1</option>
                      <option>Cez reklamu 2</option>
                      <option>Cez reklamu 3</option>
                      <option>Cez reklamu 4</option>
                      <option>Cez reklamu 5</option>
                    </select>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='checkout-check'>
                    <input class="input-checkout" type="checkbox" name="" id="checkout-07" value="" />
                    <label for="checkout-07">Poslať faktúru e-mailom (neprikladať k objednávke)</label>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='checkout-check'>
                    <input class="input-checkout" type="checkbox" name="" id="checkout-08" value="" />
                    <label for="checkout-08">Súhlasím s obchodnými podmienkami a podmienky ochrany osobných údajov</label>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='form-fields-holds'>
                    <label>Chcete nám zanechať odkaz k objednávke?</label>
                    <textarea className='form-input input' type='text' id='' name='' placeholder='Odkaz napíšte sem' />
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
                  <li><img src='images/payment/paymt-00.svg'/></li>
                  <li><img src='images/payment/paymt-01.svg'/></li>
                  <li><img src='images/payment/paymt-02.svg'/></li>
                  <li><img src='images/payment/paymt-03.svg'/></li>
                  <li><img src='images/payment/paymt-04.svg'/></li>
                  <li><img src='images/payment/paymt-05.svg'/></li>
                  <li><img src='images/payment/paymt-06.svg'/></li>
                </ul>
              </div>
              <div className='voucher-box'>
                <div className='voucher-content'>
                  <span>Voucher</span>
                </div>
                <div className='voucher-input'>
                  <input className='form-input input' type='text' id='' name='' placeholder='Zľavový kód' />
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
                <input class="input-filter" type="checkbox" name="cat_filter[]" id="payment-check-b1" value="" />
                <label class="span1-filter" for="payment-check-b1">zobraziť cenu bez DPH</label>
              </div>
              <div className='payment-btn-holds'>
                <a href='#' className='button button-dark'>Zaplatiť</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
    </>
  );
}

export default CheckOut;
