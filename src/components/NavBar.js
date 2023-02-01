import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/navbar.css';

const NavBar = () => {

     return (
    <div className='NavBar sticky-top d-flex justify-content-between p-2 shadow'>
     <div>
      <i className='bi  fs-3 text-warning '></i>
     </div>
     <div>
      <i className='bi bi-search fs-3 text-white mx-2'></i>
      
      <Link to={`/login`}>
        <i className='bi bi-box-arrow-in-left fs-3 text-white mx-3'></i>
      </Link>
      </div>
    </div>
  )
}

export default NavBar