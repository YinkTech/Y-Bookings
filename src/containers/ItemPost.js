import React, {  useState } from 'react';
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';

const ItemPost = () => {
  const navigate = useNavigate();
  const jwt = window.localStorage.getItem("jwt");
  const rest = jwtDecode(jwt);
  const [create_by] = useState(rest.username);
  console.log(create_by);

  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [stars, setstars] = useState('');
  const [studio, setstudio] = useState('');
  const [language, setlanguage] = useState('');
  const [genre, setgenre] = useState('');
  const [Rating, setRating] = useState('');
  const [release, setrelease] = useState('');
  const [runtime, setruntime] = useState('');
  const [image, setimage] = useState('');

  const onTitle = (e) => settitle(e.target.value);
  const onDescription = (e) => setdescription(e.target.value);
  const onstars = (e) => setstars(e.target.value);
  const onstudio = (e) => setstudio(e.target.value);
  const onlanguage = (e) => setlanguage(e.target.value);
  const onGenre = (e) => setgenre(e.target.value);
  const onRating = (e) => setRating(e.target.value);
  const onRelease = (e) => setrelease(e.target.value);
  const onRuntime = (e) => setruntime(e.target.value);
  const onImage = (e) => setimage(e.target.files[0]);


  const errorMessage = (input) => {
    document.getElementById("error-message").textContent = input;
  };

  const handleSubmit = event => {
    event.preventDefault();
    var formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("stars", stars);
      formData.append("studio", studio);
      formData.append("language", language);
      formData.append("genre", genre);
      formData.append("Rating", Rating);
      formData.append("release", release);
      formData.append("runtime", runtime);
      formData.append("image", image);
      formData.append("create_by", create_by);
      if (!title || title.trim().length === 0) {
        return errorMessage('enter a title');
     } else if (!description || description.trim().length === 0) {
        return errorMessage('enter a description');
     } else if (!stars || stars.trim().length === 0) {
        return errorMessage('enter the movie stars');
     } else if (!studio || studio.trim().length === 0) {
        return errorMessage('enter the movie studio');
     } else if (!language || studio.trim().length === 0) {
        return errorMessage('enter the movie language');
     } else if (!genre || genre.trim().length === 0) {
        return errorMessage('enter the movie genre');
     } else if (!Rating || Rating.trim().length === 0) {
        return errorMessage('enter the movie Rating');
     } else if (!release || release.trim().length === 0) {
        return errorMessage('enter the movie release');
     } else if (!runtime || runtime.trim().length === 0) {
        return errorMessage('enter the movie runtime');
     }
      else if (!image) {
        return errorMessage('Choose an image');
     }
      fetch("http://127.0.0.1:3000/movies",
          {method: 'POST', body: formData})
          .then(res => (res.json(), console.log('add successfully'), navigate("/list")))
          .catch(function(error){console.log('there is an error: ', error.message)});
  }



  return (
    <div className='add-list'>
        <form className='p-4' onSubmit={handleSubmit}>
        <h3 className='p-2 profile-header'> Add Movie </h3>

          <div id='error-message' className='my-2 text-center'></div>
      
          <label className='d-block m-3'>
            Movie Title:
            <input type="text" placeholder='Movie Title ' onChange={onTitle} className='form-control my-2' />
          </label>

          <label className='d-block m-3'>
            Movie Description:
            <textarea onChange={onDescription} placeholder='Describe the movie' className='form-control my-2' autoComplete='false' ></textarea>
          </label>
          
          <label className='d-block m-3'>
            Movie Stars:
            <input type="text" onChange={onstars} placeholder='List the movies stars ' className='form-control my-2' />
          </label>


          <label className='d-block m-3'>
            Movie Images:
            <input type="file" accept="image/*" onChange={onImage} className='form-control my-2' />
          </label>

          <label className='d-block m-3'>
            Movie Studio:
            <input type="text" placeholder='Movie studio' onChange={onstudio} className='form-control my-2' />
          </label>

          <label className='d-block m-3'>
            Movie Language:
            <input type="text" placeholder='Select a Language' onChange={onlanguage} className='form-control my-2' />
          </label>

          <label className='d-block m-3'>
            Movie genre:
            <input type="text" placeholder='Select Movie Genre' onChange={onGenre} className='form-control my-2' />
          </label>

          <label className='d-block m-3'>
            Movie Rating:
            <input type="text" onChange={onRating} className='form-control my-2' />
          </label>


          <label className='d-block m-3'>
            Movie release:
            <input type="text" onChange={onRelease} className='form-control my-2' />
          </label>


          <label className='d-block m-3'>
            Movie Runtime:
            <input type="text" onChange={onRuntime} className='form-control my-2' />
          </label>

          <button type="submit"  className=' d-block btn login-button m-5'>Add</button>

        </form>
    </div>
  )
}

export default ItemPost;
