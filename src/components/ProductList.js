import React from 'react'
import ProductItem from './ProductItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'

export default function ProductList({ products, onProductSelect, loading }) {
  return (<div className='panel panel-info'>
    <div className='panel-heading'>
      <h3 className='panel-title'> Products</h3>
    </div>
    <div className='panel-body'>
      { loading ? <Spinner/> : (<div className='list-group'>
        {
          products.map((product, i) => (<ProductItem
            num={i + 1}
            productSelected={onProductSelect}
            key={product.id}
            product={product}/>))
        }
      </div>)
      }
    </div>
  </div>)
}

ProductList.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.boolean,
  onProductSelect: PropTypes.func
}

ProductList.defaultProps = {
  products: [],
  onProductSelect: ()=> {}
}
