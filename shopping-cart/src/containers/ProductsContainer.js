/**
 * Created by lantu on 2017/11/9.
 */

import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'

class ProductsContainer extends Component {
    static propTypes = {
        products: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isReqired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired
        })).isRequired,
        addToCart: PropTypes.func.isRequired
    }

    render(){
        return (
            <div>huangxi</div>
        )
    }
}

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer)

