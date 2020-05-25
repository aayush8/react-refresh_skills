import React, { useState } from 'react'
import Statec from '../code_components/statec'

export default () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <h1 className='text-primary'>Code for State =></h1>
      <Statec />
      <h1 className='text-primary'>Result =></h1>
      <button onClick={() => setIsLoggedIn(!IsLoggedIn)}>
        {IsLoggedIn ? 'Log out' : 'Log in'}
      </button>
      <h1>Aayush is {IsLoggedIn ? 'logged in' : 'not logged in'}</h1>
    </div>
  )
}
