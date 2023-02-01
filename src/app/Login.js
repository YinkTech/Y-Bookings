import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/login.css';
import logo from './../img/logo_prev.png';

const Login = () => {
  return (
    <div className='login-body p-3 pb-5 d-flex flex-column justify-content-between align-item-center'>
      <div className='logo-prev'>
        <img src={logo} className='img-fluid' alt="logo" />
      </div>
      <div>
        <form action="" className='w-100'>
          <div className='mb-5'>
            <input type="text" placeholder='Login with Username' autoFocus required  className='username-input shadow' />
            <Link className='sign-up' to={`/Sign-up`}>Sign Up</Link>
          </div>

          <div>
            <Link rel="stylesheet" to={`/Y-Bookings`}>
              <button className='login-button shadow fs-3' > login <i className='bi bi-box-arrow-in-right'></i></button>
            </Link>
          </div>
          </form>
      </div>
    </div>
  )
}

export default Login