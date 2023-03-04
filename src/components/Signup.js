import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './../styles/login.css';
import logo from './../img/logo_prev.png';


const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const onUsername = (e) => setUsername(e.target.value);
  window.localStorage.setItem('isLoggedIn', false);
  const errorMessage = (input) => {
    document.getElementById("error-message").textContent = input;
  };
  const handleSubmit = event => {
    event.preventDefault();
    var formData = new FormData();
    if (!username || username.trim().length === 0){
      return errorMessage('Enter a valid Username');
    } else {
      formData.append("username", username);
      fetch("http://localhost:3000/users",
      {method: 'post', body: formData})
      .then(res => res.json())
      .then(errorMessage("Signup Success"))
      .then(navigate("/sign-in"))
      .catch(function(error){console.log('there is an error: ', error.message)});
    }
  }


  return (
    <div className='Sign-body px-3 d-flex flex-column align-item-center'>
      <div className='logo-prev'>
        <img src={logo} className='img-fluid' alt="logo" />
      </div>
      <div>
        <form onSubmit={handleSubmit} className='w-100'>
          

        <div id='error-message' className='my-2 text-center '></div>
          

          <div className='mb-4'>
            

          <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text border-primary text-primary auth-btn" style={{height: '50px'}}>@</div>
                </div>
                <input
                  type="text"
                  className="username-input form-control border-primary"
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={onUsername}
                />
              </div>


            {/* <input type="text" placeholder='Choose your Username' autoFocus required  className='' /> */}
          <small className='text-warning fs-6'> Already have an account? <Link to={`/sign-in`} className="text-decoration-none text-info">Login Now</Link> </small>
          </div>

          <div>

              <button type='submit' className='login-button shadow fs-3' > sign up </button>
            
          </div>
          </form>
      </div>
    </div>
  )
}

export default Signup