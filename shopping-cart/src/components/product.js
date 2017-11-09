/**
 * Created by lantu on 2017/11/9.
 */

import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ title,inventory,price }) => (
    <div>
        {title} - &#36;{price}{inventory ? `x${inventory}` : null}
    </div>
)

Product.propTypes = {
    price: PropTypes.number,
    inventory: PropTypes.number,
    title: PropTypes.string
}

export default Product