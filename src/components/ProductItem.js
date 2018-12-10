import React from 'react'
import PropTypes from 'prop-types'

export default function ProductItem({ num, product, productSelected }) {
  return (<button className='list-group-item' onClick={()=>productSelected(product)}>
    <span className='label label-success status'>{num}</span>
    <span className='badge'>{product.base_currency}</span>
    { product.display_name }
  </button>)
}

ProductItem.propTypes = {
  num: PropTypes.number,
  product: PropTypes.object,
  productSelected: PropTypes.func
}
