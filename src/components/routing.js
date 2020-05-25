import React from 'react'
import Routingc from '../code_components/routingc'
import Routingr from './routingresult'

export default function routing() {
  return (
    <div>
      <h1 className='text-primary'>Code for Routing =></h1>
      <Routingc />
      <h1 className='text-primary'>Result =></h1>
      <Routingr />
    </div>
  )
}
