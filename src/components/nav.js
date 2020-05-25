import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
  return (
    <div>
      <ul className='nav nav-tabs'>
        <Link to='/component'>
          <li className='nav-item'>
            <a className='nav-link'>Component</a>
          </li>
        </Link>
        <Link to='/props'>
          <li className='nav-item'>
            <a className='nav-link'>Props</a>
          </li>
        </Link>
        <Link to='/state'>
          <li className='nav-item'>
            <a className='nav-link'>State</a>
          </li>
        </Link>
        <Link to='/context'>
          <li className='nav-item'>
            <a className='nav-link'>Context</a>
          </li>
        </Link>
        <Link to='/routing'>
          <li className='nav-item'>
            <a className='nav-link'>Routing</a>
          </li>
        </Link>
      </ul>
    </div>
  )
}
