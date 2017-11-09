/**
 * Created by lantu on 2017/11/9.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal,getCartProducts } from '../reducers'

class CartContainer extends React.Component {
    static propTypes = {
        products: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired
        })).isRequired,
        total: PropTypes.string,
        checkout: PropTypes.func.isRequired
    }

    render(){
        return (
            <div>huangqian</div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    { checkout }
)(CartContainer)
