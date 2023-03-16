import React, {  useState } from 'react';
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import { PropTypes } from 'prop-types';

const PostReviews = ({current_movie, itemid}) => {

  const navigate = useNavigate();
  const jwt = window.localStorage.getItem("jwt");
  const rest = jwtDecode(jwt);
  const [current_user] = useState(rest.username);

  const [comments, setcomments] = useState('');

  const oncomments = (e) => setcomments(e.target.value);

  const errorMessage = (input) => {
    document.getElementById("error-message").textContent = input;
  };

  const handleSubmit = event => {
    event.preventDefault();
    var formData = new FormData();
      formData.append("current_user", current_user);
      formData.append("current_movie", current_movie);
      formData.append("date", itemid);
      formData.append("comments", comments);
      if (!comments || comments.trim().length === 0) {
        return errorMessage('enter a comments');
      }
      fetch("http://127.0.0.1:3000/reviews",
      {method: 'POST', body: formData})
      .then(res => (res.json(), console.log('add successfully'), navigate("/list")))
      .catch(function(error){console.log('there is an error: ', error.message)});
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='p-2' >
        
        <div id='error-message' className='my-2 text-center'></div>
        <textarea type="text" className='form-control' onChange={oncomments} ></textarea>
        <button type='submit' className='my-3 btn btn-info text-center'>Submit</button>
      </form>
    </div>
  )
}

PostReviews.propTypes = {
  current_movie: PropTypes.string,
  itemid: PropTypes.string,
}
export default PostReviews