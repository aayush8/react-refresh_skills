import React from 'react'
import Headerc from '../code_components/headerc'

function Header() {
  return <h1>This is a heading coming from a header file</h1>
}

export default () => {
  return (
    //note to keep everything inside one main tag like div tag here
    <div>
      <h1 className='text-primary'>Code for Component =></h1>
      <Headerc />
      <h1 className='text-primary'>Result =></h1>
      <Header />
      <Header />
      <Header />
    </div>
  ) //it will render you header component thrice
}
