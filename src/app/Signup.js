import React from 'react'
import { Link } from 'react-router-dom';
import './../styles/login.css';
import logo from './../img/logo_prev.png';

const Signup = () => {
  return (
    <div className='sign-body p-3 pb-5 d-flex flex-column justify-content-between align-item-center'>
      <div className='logo-prev'>
        <img src={logo} className='img-fluid' alt="logo" />
      </div>
      <div>
        <form action="" className='w-100'>
          <div className='mb-5'>
            <input type="text" placeholder='Enter your Full Name' autoFocus required  className='username-input shadow my-2' />
            <input type="text" placeholder='Choose your Username' autoFocus required  className='username-input shadow my-2' />
            <input type="text" placeholder='Enter your Email' autoFocus required  className='username-input shadow my-2' />
            <input type="text" placeholder='Enter your Phone Number' autoFocus required  className='username-input shadow my-2' />
            <input type="text" placeholder='Choose a password' autoFocus required  className='username-input shadow my-2' />
            <Link className='sign-up' to={`/login`}>login</Link>
          </div>

          <div>
            <Link rel="stylesheet" to={`/Y-Bookings`}>
              <button className='login-button shadow fs-3' > sign up </button>
            </Link>
          </div>
          </form>
      </div>
    </div>
  )
}

export default Signup