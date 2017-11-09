/**
 * Created by lantu on 2017/11/9.
 */

import React from 'react'
import PropTypes from 'prop-types'
import Product from './product'

const ProductItem = ({ product,onAddToCartClicked }) => (
    <div style={{ marginBottom: 20 }}>
        <Product title={product.title} price={product.price} inventory={product.inventory}></Product>
        <button onClick={onAddToCartClicked} disabled={product.inventory > 0 ? '':'disabled'}>
            {product.inventory > 0 ? 'Add to cart' : 'Sold out'}
        </button>
    </div>
)

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
