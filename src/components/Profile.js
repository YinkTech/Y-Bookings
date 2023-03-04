import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode';

const Profile = () => {
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

  return (
    <div className='profile p-2 '>
      <h3 className='sticky-top p-2 profile-header'>My Profile</h3>
      
      <div className='d-flex mb-4 profile-list shadow m-3 p-2'>
        <i className='bi bi-person-workspace mx-2 fs-3'> </i>
         <div className='mx-3'>
          <b className='text-capitalize'>{OnName.username} </b>
          <small className='d-block text-muted'> View Profile </small>
         </div> 
      </div>
      
      <div className='d-flex mb-4 profile-list shadow m-3 p-2'>
        <i className='bi bi-ticket-detailed mx-2 fs-3'> </i>
         <div className='mx-3'>
          <b>Check Tickets</b>
          <small className='d-block text-muted'>View your tickets</small>
         </div> 
      </div>

      <Link className='text-white' to={`/add-list`}>
        <div className='d-flex mb-4 profile-list shadow m-3 p-2'>
        
            <i className='bi bi-node-plus-fill mx-2 fs-3'> </i>
            <div className='mx-3'>
              <b>Add Movie</b>
              <small className='d-block text-muted'>Add New Movies</small>
            </div> 
        </div>
      </Link>
      
      <Link className='text-white' to={`/sign-in`}>
        <div className='d-flex mb-4 profile-list shadow m-3 p-2'>
          <i className='bi bi-box-arrow-in-left mx-2 fs-3'> </i>
          <div className='mx-3'>
            <b>Log out</b>
            <small className='d-block text-muted'>Exit from your account</small>
          </div> 
        </div>
      </Link>

    </div>
  )
}

export default Profile