import React from 'react'
import Contextc from '../code_components/contextc'
import ContextResult from './contextresult'

export default () => {
  return (
    <div>
      <h1 className='text-primary'>Code for Context =></h1>
      <Contextc />
      <h1 className='text-primary'>Result =></h1>
      <ContextResult />
    </div>
  )
}
