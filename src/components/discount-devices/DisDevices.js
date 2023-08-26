import React from 'react'
import './DisDevices.css';
export default function DisDevices() {
  return (
    <div className='discount-devices-section-hold'>
      <div className='container'>
        <div className='row align-items-center'>
          <di className='col-md-6'>
            <div className='discount-content-left'>
              <div className='upper-text'>
                <h2>Získaj 10% zľavu</h2><span><img src='images/dis-tag.png'></img></span>
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
          </di>
          <di className='col-md-6'>
            <div className='discount-content-right disdevices'>
             <img src='images/disdevices-00.png'></img>
            </div>
          </di>
        </div>
      </div>
    </div>
  )
}
