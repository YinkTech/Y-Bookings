import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer mt-5 shadow fixed-bottom'>
       <ul className='nav-list'>
        <li>
          <Link className='nav-text' to={`/Y-bookings`}>
            <i className='bi bi-house mx-2 fs-3'></i>
            <b className='footer-text'>home</b>
          </Link>
        </li>

        <li>
          <Link className='nav-text' to={`/list`}>
            <i className='bi bi-camera-reels mx-2 fs-3'></i>
            <b className='footer-text'>Movies</b>
          </Link>
        </li>

        <li>
          <Link className='nav-text' to={`/Y-bookings`}>
            <i className='bi bi-ticket mx-2 fs-3'></i>
            <b className='footer-text'>Tickets</b>
          </Link>
        </li>

        <li>
          <Link className='nav-text' to={`/Profile`}>
            <i className='bi bi-person-circle mx-2 fs-3'></i>
            <b className='footer-text'>Profile</b>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer