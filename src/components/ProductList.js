import React from 'react';
import ProductBox from './ProductBox';

const ProductList = ({ products, categories }) => {
    // Filter products based on the selected categories
    const filteredProducts = products.filter((product) =>
        categories.includes(product.category)
    );

    return (
        <>
            {filteredProducts.map((product) => (
                <ProductBox
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    hoverImg={product.hoverImg}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                />
            ))}
        </>
    );
};

export default ProductList;