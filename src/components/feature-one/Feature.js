import React from "react";
import "./Feature.css";

// add products
import ProductList from '../ProductList'; // call the product boxs where we define products with category
import Products from '../Products'; // also call the data API of products

export default function Feature() {

  

  return (
    <div className="feature-section">
      <div className="container">
        <div className="row">
          <di className="col-md-12">
            <div className="main-heading-holds">
              <h2>Populárne tento týždeň</h2>
              <div className="view-more">
                <a href="#" className="button button-with-border-dark ">
                  Zobraziť viac
                </a>
              </div>
            </div>
          </di>
          <div className="row">
            <ProductList products={Products} categories={['Smartfóny',]} />
          </div>
        </div>
      </div>
    </div>
  );
}
