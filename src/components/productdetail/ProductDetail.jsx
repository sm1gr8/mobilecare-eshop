import React from 'react';
import './ProductDetail.css';
import ProductList from '../ProductList'; // call the product boxs where we define products with category
import Products from '../Products'; // also call the data API of products
import DisDevices from '../discount-devices/DisDevices';
import Header from '../header/Header';
function ProductDetail() {
    return (
        <>
        <Header />
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
                        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            {/* Thumbnails */}
                            <div className="my-slider carousel-indicators" style={{ marginBottom: '10px' }}>
                                <div className="container op position-relative">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{ width: '100px' }}>
                                        <img className="d-block w-100" src="images/pdslider/small03.jpg" alt="Slide 1" />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={{ width: '100px' }}>
                                        <img className="d-block w-100" src="images/pdslider/small00.jpg" alt="Slide 2" />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={{ width: '100px' }}>
                                        <img className="d-block w-100" src="images/pdslider/small01.jpg" alt="Slide 3" />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3" style={{ width: '100px' }}>
                                        <img className="d-block w-100" src="images/pdslider/small02.jpg" alt="Slide 4" />
                                    </button>
                                </div>
                            </div>
                            {/* Thumbnails */}
                            {/* Slides */}
                            <div className="carousel-inner mb-5">
                                <div className="carousel-item active">
                                    <img src="images/pdslider/small03.jpg" className="d-block w-100" alt="Slide 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/pdslider/small00.jpg" className="d-block w-100" alt="Slide 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/pdslider/small01.jpg" className="d-block w-100" alt="Slide 3" />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/pdslider/small02.jpg" className="d-block w-100" alt="Slide 4" />
                                </div>
                            </div>
                            {/* Slides */}

                            {/* Controls */}
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            {/* Controls */}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='product-detail-content'>
                            <div className='tags-hold'>
                                <a className='attribute-one' href='#'>Nové</a>
                                <a className='attribute-second' href='#'>Originálny produkt</a>
                            </div>
                            <div className='product-item-name'>
                                <h5>iPhone 14 PRO</h5>
                            </div>
                            <div className='product-select-color'>
                                <span style={{ backgroundColor: '#D0FF1680' }}></span><b>Na sklade</b>
                            </div>
                            <div className='delivery-details-add'>
                                <i class='fa-solid fa-truck-fast'></i>
                                <span><b>Odošleme</b> Pon, 19. 8.</span>
                                <span><b>Doručíme</b> Ut, 20. 8.</span>
                            </div>
                            <div className='description-hold'>
                                <p>Špičkový smartfón s úžasným dizajnom, výkonným čipom A16, pokročilým kamerovým systémom pre technologických nadšencov aj kreatívcov.</p>
                            </div>
                            <div className='product-price'>
                                <h2>37,99€</h2>
                                <p>cena je uvedená s DPH</p>
                            </div>
                            <div className='product-color-select'>
                                <span>Farebné prevedenie</span>
                                <ul className='slect-color'>
                                    <li><span style={{ backgroundColor: '#403E3D' }}></span></li>
                                    <li><span className='active' style={{ backgroundColor: '#F0F2F2' }}></span></li>
                                    <li><span style={{ backgroundColor: '#594F63' }}></span></li>
                                    <li><span style={{ backgroundColor: '#F4E8CE' }}></span></li>
                                </ul>
                            </div>
                            <div className='product-size-range'>
                                <span>Kapacita úložiska</span>
                                <ul className='modal-size'>
                                    <li><a href='#' className='active'><span>64 GB</span></a></li>
                                    <li><a href='#'><span>125 GB</span></a></li>
                                    <li><a href='#'><span>256 GB</span></a></li>
                                    <li><a href='#'><span>512 GB</span></a></li>
                                    <li><a href='#'><span>1 TB</span></a></li>
                                    <li><a href='#'><span>2 TB</span></a></li>
                                </ul>
                            </div>
                            <div className='add-to-cart'>
                                <a className='pd-cart-btn button button-dark' href='#'>Pridať do košíka <span class='icon-shopping-bag-outline'></span></a>
                                <span className='wish-list-icon'> <span class='icon-favourite-border'></span> </span>
                            </div>
                            <div className='review-recently-show'>
                                <div className='box-left'><i class='far fa-lightbulb'></i><small> Vypočítať cenu na splátky </small></div>
                                <div className='box-right'>
                                    <div className='starts'>
                                        <fieldset className='rate'>
                                            <input type='radio' id='rating10' name='rating' value='10' /><label for='rating10' title='5 stars'></label>
                                            <input type='radio' id='rating9' name='rating' value='9' /><label class='half' for='rating9' title='4 1/2 stars'></label>
                                            <input type='radio' id='rating8' name='rating' value='8' /><label for='rating8' title='4 stars'></label>
                                            <input type='radio' id='rating7' name='rating' value='7' /><label class='half' for='rating7' title='3 1/2 stars'></label>
                                            <input type='radio' id='rating6' name='rating' value='6' /><label for='rating6' title='3 stars'></label>
                                            <input type='radio' id='rating5' name='rating' value='5' /><label class='half' for='rating5' title='2 1/2 stars'></label>
                                            <input type='radio' id='rating4' name='rating' value='4' /><label for='rating4' title='2 stars'></label>
                                            <input type='radio' id='rating3' name='rating' value='3' /><label class='half' for='rating3' title='1 1/2 stars'></label>
                                            <input type='radio' id='rating2' name='rating' value='2' /><label for='rating2' title='1 star'></label>
                                            <input type='radio' id='rating1' name='rating' value='1' /><label class='half' for='rating1' title='1/2 star'></label>
                                        </fieldset>
                                        <p>4.8</p>
                                    </div>
                                    <div className='recent'><a href='#'>37 recenzií</a></div>
                                </div>
                            </div>
                            <div className='info-content-add'>
                                <h5>Čo sa nachádza v balení?</h5>
                                <p>Tieto produkty nájdete v originálnom balení</p>
                                <div className='main-box-content'>
                                    <span><img src='images/product-details-info-img.jpg'/>Nabíjací kábel</span>
                                </div>
                                <div className='main-box-content'>
                                    <span><img src='images/product-details-info-img-00.jpg'/>Nabíjací adaptér</span>
                                </div>
                            </div>
                            <div className='related-products'>
                                <div className='productd-main-heading'>
                                    <h5>Môže sa vám hodiť</h5>
                                    <p>Tieto produkty nie sú obsahom balenia, no zídu sa vám</p>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='related-pro-card-item'>
                                            <div className='wish-icons'><span class="icon-favourite-border"></span></div>
                                            <div className='img-hold'><img src='images/related/related00.png' /></div>
                                            <div className='pro-price'>39.99 €</div>
                                            <div className='pro-heading'>iPhone 17 PRO Silicon case</div>
                                            <div className='pro-desc'>Príslušenstvo</div>
                                            <div className='pro-add-cart'>
                                                Pridať <i class="fas fa-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='related-pro-card-item'>
                                            <div className='wish-icons'><span class="icon-favourite-border"></span></div>
                                            <div className='img-hold'><img src='images/related/related01.png' /></div>
                                            <div className='pro-price'>39.99 €</div>
                                            <div className='pro-heading'>iPhone 17 PRO Silicon case</div>
                                            <div className='pro-desc'>Príslušenstvo</div>
                                            <div className='pro-add-cart'>
                                                Pridať <i class="fas fa-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='related-pro-card-item'>
                                            <div className='wish-icons'><span class="icon-favourite-border"></span></div>
                                            <div className='img-hold'><img src='images/related/related02.png' /></div>
                                            <div className='pro-price'>39.99 €</div>
                                            <div className='pro-heading'>iPhone 17 PRO Silicon case</div>
                                            <div className='pro-desc'>Príslušenstvo</div>
                                            <div className='pro-add-cart'>
                                                Pridať <i class="fas fa-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='related-products-acorrdin'>
                                <div className='productd-main-heading'>
                                    <h5>Popis produktu</h5>
                                </div>
                                <div className='custom-accordina-h'>

                                    <div className='offcanvas-body custom-accordian-hold'>
                                        <div className='accordion' id='accordionPanelsStayOpenExample'>
                                            <div className='accordion-item'>
                                                <h2 className='accordion-header' id='panelsStayOpen-headingd1'>
                                                    <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapsed1' aria-expanded='false' aria-controls='panelsStayOpen-collapsed1'>
                                                        Technické parametre produktu
                                                    </button>
                                                </h2>
                                                <div id='panelsStayOpen-collapsed1' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingd1'>
                                                    <div className='accordion-body'>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='accordion-item'>
                                                <h2 className='accordion-header' id='panelsStayOpen-headingd2'>
                                                    <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapsed2' aria-expanded='false' aria-controls='panelsStayOpen-collapsed2'>
                                                        Záruka a vrátenie tovaru
                                                    </button>
                                                </h2>
                                                <div id='panelsStayOpen-collapsed2' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingd2'>
                                                    <div className='accordion-body'>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='accordion-item'>
                                                <h2 className='accordion-header' id='panelsStayOpen-headingd3'>
                                                    <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapsed3' aria-expanded='false' aria-controls='panelsStayOpen-collapsed3'>
                                                        Osobnostné požiadavky na kúpu
                                                    </button>
                                                </h2>
                                                <div id='panelsStayOpen-collapsed3' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingd3'>
                                                    <div className='accordion-body'>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='reviews-details-bars'>
                                <div className='productd-main-heading'>
                                    <h5>Reviews (37)</h5>
                                </div>
                                <div className='review-holds'>
                                    <div className='start-heading'><h5><b>4.8</b> / 5</h5></div>
                                    <div className='stars-hold'>  <fieldset className='rate'>
                                        <input type='radio' id='rating10' name='rating' value='10' /><label for='rating10' title='5 stars'></label>
                                        <input type='radio' id='rating9' name='rating' value='9' /><label class='half' for='rating9' title='4 1/2 stars'></label>
                                        <input type='radio' id='rating8' name='rating' value='8' /><label for='rating8' title='4 stars'></label>
                                        <input type='radio' id='rating7' name='rating' value='7' /><label class='half' for='rating7' title='3 1/2 stars'></label>
                                        <input type='radio' id='rating6' name='rating' value='6' /><label for='rating6' title='3 stars'></label>
                                        <input type='radio' id='rating5' name='rating' value='5' /><label class='half' for='rating5' title='2 1/2 stars'></label>
                                        <input type='radio' id='rating4' name='rating' value='4' /><label for='rating4' title='2 stars'></label>
                                        <input type='radio' id='rating3' name='rating' value='3' /><label class='half' for='rating3' title='1 1/2 stars'></label>
                                        <input type='radio' id='rating2' name='rating' value='2' /><label for='rating2' title='1 star'></label>
                                        <input type='radio' id='rating1' name='rating' value='1' /><label class='half' for='rating1' title='1/2 star'></label>
                                    </fieldset></div>
                                </div>
                                <div className='bars-holds-box'>
                                    <div className='progress-bar'>
                                        <span>5</span>
                                        <div className="progress">
                                            <div className="bar" style={{ width: '100%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='progress-bar'>
                                        <span>4</span>
                                        <div className="progress">
                                            <div className="bar" style={{ width: '85%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='progress-bar'>
                                        <span>3</span>
                                        <div className="progress">
                                            <div className="bar" style={{ width: '10%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='progress-bar'>
                                        <span>2</span>
                                        <div className="progress">
                                            <div className="bar" style={{ width: '30%' }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='progress-bar'>
                                        <span>1</span>
                                        <div className="progress">
                                            <div className="bar" style={{ width: '5%' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='review-holds-submit'>
                                    <a className='btn submit-btn-holds' href='#'>Zobraziť recenzie</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='related-products-row'>
                    <div className='row featr-pd-bottom-hold'>
                        <div className='col-md-12'>
                            <div className='productd-main-heading'>
                                <h2><span class="icon-bestseller"></span> Podobné produkty</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row owl-carousel owl-carousel-3 custom-colum-hide featr-pd-bottom-hold">
                        <ProductList products={Products} categories={['Smartfóny']} />
                    </div>
                    <div className='row featr-pd-bottom-hold'>
                        <div className='col-md-12'>
                            <div className='productd-main-heading'>
                                <h2> Ostatní si kúpili </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row owl-carousel owl-carousel-3 custom-colum-hide featr-pd-bottom-hold">
                        <ProductList products={Products} categories={['Smartfóny']} />
                    </div>
                </div>
            </div>
            <div className='product-detail-discount-tags product-detail-descount-pd-hold'>
                <div className='row'>
                    <DisDevices />
                </div>
            </div>
            <div className='container'>
            <div className='row featr-pd-bottom-hold'>
                        <div className='col-md-12'>
                            <div className='productd-main-heading'>
                                <h2> Naposledy prezerané </h2>
                            </div>
                        </div>
                    </div>
                <div className="row featr-pd-bottom-hold">
                    <ProductList products={Products} categories={['Smartfone1', 'Featured', 'Airpods']} />
                </div>
            </div>
        </div>
        </>
    );
}
export default ProductDetail;
