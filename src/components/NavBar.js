import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const NavBar = () => {
  const logged = window.localStorage.getItem('isLoggedIn');
  const [OnName, setName] = useState({
      username: ''
    })
    useEffect(() => {
      if (logged === "true") {
        let jwt = window.localStorage.getItem('jwt');
        let result = jwtDecode(jwt);
        setName({username: result.username});
        }
    }, [setName]);
    const navigate = useNavigate();

  const setNav = () => {
   
    const logout = () => {
      localStorage.removeItem('jwt');
      localStorage.removeItem('isLoggedIn', false);
      navigate("/sign-in  ");
      window.location.reload();
    };
  
    if (logged === 'true' ) {
      return (
        <div className='NavBar d-flex justify-content-between align-items-center p-2 shadow'>
          <div className='text-capitalize fs-5 text-center'>
            <i className='bi bi-person-square mx-3 text-warning '></i>
            {OnName.username} 
          </div>
          <div>
            <i className='bi bi-search fs-3 text-white mx-2'></i>
            <Link onClick={logout}>
              <i className='bi bi-box-arrow-in-left fs-3 text-white mx-3'></i>
            </Link>
          </div>
        </div>
      );
    } else {
        return <div className='d-flex align-items-center fs-4'><i className='bi bi-segmented-nav'></i></div>
      }};
    return (
      <div className=' sticky-top'>
        {setNav()}
      </div>
    );

}

export default NavBar