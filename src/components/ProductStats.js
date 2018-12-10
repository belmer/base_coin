import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Spinner from './Spinner'

export default function ProductStats(props) {
  if (!props.product || !props.stats) {
    return null
  }

  return (<div className='panel panel-primary'>
    <div className='panel-heading'>
      <h3 className='panel-title'> {`${props.product.display_name} 24hr Stats`}</h3>
    </div>
    <div className='panel-body stats24'>
      { props.loading ? <Spinner/> : (<StatsDisplay {...props}/>)}
    </div>
  </div>)
}
const roundTo2 = (num)=> {
  return Math.round(num * 100) / 100
}
const StatsDisplay = ({ product, stats })=> {
  return (<Fragment>
    <div className='row'>
      <strong> {product.display_name} </strong>
      <small>{product.base_currency}</small>
    </div>
    <div className='row'><small>{`Last: ${roundTo2(stats.last)}`}</small></div>
    <div className='row'><small>{`Open: ${roundTo2(stats.open)}`}</small></div>
    <div className='row'><small>{`High: ${roundTo2(stats.high)}`}</small></div>
    <div className='row'><small>{`Low: ${roundTo2(stats.low)}`}</small></div>
    <div className='row'><small>{`Volume: ${roundTo2(stats.volume)}`}</small></div>
  </Fragment>)
}

StatsDisplay.propTypes = {
  product: PropTypes.object,
  stats: PropTypes.object
}
