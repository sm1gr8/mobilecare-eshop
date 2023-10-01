import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <footer className="footer dark-bg">
      <div className='container'>
        <div className='row footer-upper'>
          <div className='col-md-6'>
            <div className='footer-upper-content-holds left-side'>
              <img src='images/footer-logo.svg'></img>
              <h2>Postaráme sa o vás</h2>
              <p>Odomknite nekonečné možnosti s naším prémiovým výberom Apple produktov.</p>
            </div>
          </div>
          <div className='col-md-6 resp-pd-zero-hold'>
            <div className='footer-upper-content-holds right-side'>
              <div className='discount-content-left'>
                <div className='upper-text'>
                  <h2>Získaj 10% zľavu</h2><span><img src='images/dis-tag.svg'></img></span>
                </div>
                <p>Pripojte sa ešte dnes k našej komunite neewsletrákov.</p>
              </div>
              <form className='disdevices'>
                <div className='forms row'>
                  <div class="newsletter_two_form_fields_content">
                    <input id="get-user-subscribe-email" type="text" name="email" placeholder="Vaša e-mailová adresa" />
                    <button class="button button-dark" type="submit" >Odoslať</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='row footer-middle-links'>
          <div className='col-md-6'>
            <div className='footer-content-links left-side'>
              <h3 class="footer-heading">Kontaktné údaje</h3>
              <ul class="footer-detail-box-content-list">
                <li><a href="tel:+421 919 215  491" target='_blank'>+421 919 215  491</a></li>
                <li><a href="#">Rastislavova 68, Košice</a></li>
              </ul>
            </div>
            <div className='footer-content-links left-side footer-desktop-media'>
              <h3 class="footer-heading">Sledujte nás</h3>
              <ul class="footer-detail-box-social-media">
                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-tiktok"></i></a></li>
              </ul>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-3 inner_class_mobile_responsive_grid'>
                <div className='footer-content-links left-side'>
                  <h3 class="footer-heading">Customer service</h3>
                  <ul class="footer-detail-box-content-list">
                    <li><a href="/">Kontaktujte nás</a></li>
                    <li><a href="/shop">FAQs</a></li>
                    <li><a href="/shop">Vrátenie zásielky</a></li>
                    <li><a href="/shop">Doručenie</a></li>
                    <li><a href="/shop">Sledovanie zásielky</a></li>
                    <li><a href="/shop">Platby a cenotvorba</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-md-3 inner_class_mobile_responsive_grid'>
                <div className='footer-content-links left-side'>
                  <h3 class="footer-heading">Iné</h3>
                  <ul class="footer-detail-box-content-list">
                    <li><a href="/">Iné iné a niečo iné</a></li>
                    <li><a href="/">Iné iné a niečo iné</a></li>
                    <li><a href="/">Iné iné iné</a></li>
                    <li><a href="/">Iné iné a iné</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-md-3 inner_class_mobile_responsive_grid'>
                <div className='footer-content-links left-side'>
                  <h3 class="footer-heading">Mobilecare</h3>
                  <ul class="footer-detail-box-content-list">
                    <li><a href="/">O nás</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Kariéra</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-md-3 inner_class_mobile_responsive_grid'>
                <div className='footer-content-links left-side'>
                  <h3 class="footer-heading">Členstvo, zľavy a akcie</h3>
                  <ul class="footer-detail-box-content-list">
                    <li><a href="/">Odporuč nás a dostaň zľavu 10%</a></li>
                    <li><a href="/">Vernostný program</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='footer-content-links left-side footer-responsive-media'>
              <h3 class="footer-heading">Sledujte nás</h3>
              <ul class="footer-detail-box-social-media">
                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-tiktok"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom-links'>
          <div className='custom-col-hold'>
            <div className='footerfooter-bottom'>
              <a href='#'><h3>Slovensko</h3></a>
            </div>
          </div>
          <div className='custom-col-hold'>
            <div className='footerfooter-bottom'>
              <a href='#'><h3>Česká republika</h3></a>
            </div>
          </div>
          <div className='custom-col-hold'>
            <div className='footerfooter-bottom'>
              <a href='#'><h3>România</h3></a>
            </div>
          </div>
          <div className='custom-col-hold'>
            <div className='footerfooter-bottom'>
              <a href='#'><h3>Polska</h3></a>
            </div>
          </div>
        </div>
        <div className='row footer-payment-links'>
          <div className='col-md-6'>
            <div className='footerfooter-bottom-content left-side'>
              <ul>
                <li><a href='#'>Podmienky používania</a></li>
                <li><a href='#'>GDPR</a></li>
                <li><a href='#'>Ochrana osobných údajov</a></li>
              </ul>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='footerfooter-bottom-content right-side'>
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
          </div>
        </div>
      </div>


    </footer >
  )
}

export default Footer;