/**
 * Created by lantu on 2017/11/9.
 */

import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'

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
        const { products,addToCart } = this.props;
        return (
            <ProductsList title="Products">
                {products.map(product =>
                    <ProductItem key={product.id}
                    product={product}
                    onAddToCartClicked={() => addToCart(product.id)}
                    ></ProductItem>
                )}
            </ProductsList>
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

