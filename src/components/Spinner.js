import React from 'react'
import spinner from './spinner.svg'

export default function Spinner() {
  return (<div className='loader loader--style1' title='0'>
    <img src={spinner} alt='spinner'/>
  </div>)
}
