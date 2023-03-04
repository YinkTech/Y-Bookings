import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../img/logo_prev.png';

const Login = () => {

const navigate = useNavigate();
const [username, setUsername] = useState('');
const onUsername = (e) => setUsername(e.target.value);
 
window.localStorage.setItem('isLoggedIn', false);

const errorMessage = (input) => {
  document.getElementById("error-message").textContent = input;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData();

  if (!username || username.trim().length === 0) {
    return errorMessage("enter username");
  } else {
    formData.append("username", username);
    fetch("http://localhost:3000/tokens ", {
      method: "POST",
      body: formData,
    })

    .then((res) => res.json())
    .then((response) => {
      errorMessage(
        <div className="bg-success">
          <h5>Login success</h5>{" "}
        </div>
      );

      console.log(response.jwt);
      window.localStorage.setItem("jwt", response.jwt);
      window.localStorage.setItem("isLoggedIn", true);
      if (response.jwt === undefined) {
        console.log(" Username is not valid ");
        errorMessage("Username is not valid ");
      } else {
        navigate("/Y-bookings");
        window.location.reload();
      }
    })
    
    .catch((error) => {
      console.log("there is an error: ", error.message);
      errorMessage("there is an error: ", error.message);
    });
  };
};            


  return (
    <div className='login-body px-3 d-flex flex-column align-item-center'>
      <div className='logo-prev'>
        <img src={logo} className='img-fluid' alt="logo" />
      </div>
      <div>
        <form  onSubmit={handleSubmit} className='w-100'>
          

     
          

          <div className='mb-4'>
               <div id='error-message' className='my-2 text-center'></div>
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
              <small className='text-warning fs-6'> Dont have an account? <Link to={`/Sign-up`} className="text-decoration-none text-info">Join free today</Link> </small>
          </div>

          <div>
              <button type='submit' className='login-button shadow fs-3' > login <i className='bi bi-box-arrow-in-right'></i></button>
          </div>
          </form>
      </div>
    </div>
  )
}

export default Login;
