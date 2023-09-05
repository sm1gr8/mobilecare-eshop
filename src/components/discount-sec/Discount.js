import React from 'react'
import './Discount.css';
export default function Discount() {
  return (
    <div className='discount-section-hold'>
      <div className='container'>
        <div className='row align-items-center'>
          <di className='col-md-6'>
            <div className='discount-content-left'>
              <div className='upper-text'>
                <h2>Získaj 10% zľavu</h2><span><img src='images/dis-tag.svg'></img></span>
              </div>
              <p>Pripojte sa ešte dnes k našej komunite neewsletrákov.</p>
            </div>
          </di>
          <di className='col-md-6'>
            <div className='discount-content-right'>
              <form>
                <div className='forms row'>
                  <div class="newsletter_two_form_fields_content">
                    <input id="get-user-subscribe-email" type="text" name="email" placeholder="Vaša e-mailová adresa" />
                    <button class="button button-dark" type="submit" >Odoslať</button>
                  </div>
                </div>
              </form>
            </div>
          </di>
        </div>
      </div>
    </div>
  )
}
