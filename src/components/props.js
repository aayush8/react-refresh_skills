import React from 'react'
import Propsc from '../code_components/propsc'

const PassingValue = ({ name }) => {
  return (
    //using array function and destructuring
    <h1>The name of the passed data is {name}</h1>
  )
}

export default function props() {
  return (
    <div>
      <h1 className='text-primary'>Code for Props =></h1>
      <Propsc />
      <h1 className='text-primary'>Result =></h1>
      <PassingValue name='Aayush' />
      <PassingValue name='Sunil' />
    </div>
  )
}
