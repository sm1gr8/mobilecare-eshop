import React from 'react'
import Cartbutton from './Cartbutton1';

const ProductBox = ({ id, image, hoverImg, name, category, price }) => {
    return (
        <div className="col-md-3" key={id} curelm={id}>
            <div className="new_product_box">
                <div className="product-cart-button-container">
                    <div className="new_product_box_image">
                        <a href="#">
                            <img className="main-img" src={image} alt={name} />
                            <img className="hoverImg" src={hoverImg} alt={name} />
                        </a>
                    </div>
                    <Cartbutton />
                </div>
                <div className="new_product_box_text">
                    <a href="#">
                        <span className="new_product_box_main_heading">{name}</span>
                    </a>
                    <p className="category">{category}</p>
                    <span className="price">{price}</span>
                    <ul className="color_select">
                        <li>
                            <span className="item_color_00" style={{ backgroundColor: "#F4E8CE" }}></span>
                        </li>
                        <li>
                            <span className="item_color_01" style={{ backgroundColor: "#594F63" }}></span>
                        </li>
                        <li>
                            <span className="item_color_02" style={{ backgroundColor: "#F0F2F2" }}></span>
                        </li>
                        <li>
                            <span className="item_color_03" style={{ backgroundColor: "#403E3D" }}></span>
                        </li>
                    </ul>
                    <div className="wishlist">
                        <span className="icon-favourite-border"></span>
                    </div>
                    {/* Uncomment and use other props as needed */}
                    {/* <span className='dis_percentage'>{dis_percentage}</span> */}
                    {/* <span className='item_brand'>{item_brand}</span> */}
                </div>
            </div>
        </div>
    );
};

export default ProductBox;
