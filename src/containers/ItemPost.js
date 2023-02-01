import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions/actions';

const ItemPost = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [images, setimages] = useState('');
  const [fee, setfee] = useState('');
  const [description, setdescription] = useState('');
  const [validated, setValidated] = useState(false);

  const onNameChange = (e) => setName(e.target.value);
  const onImageChange = (e) => setimages(e.target.files[0]);
  const onFeeChange = (e) => setfee(e.target.value);
  const ondesChange = (e) => setdescription(e.target.value);



  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('item_name', name);
    formData.append('image_url', images);
    formData.append('item_fee', fee);
    formData.append('item_description', description);

   
    dispatch(addItem(formData));
    
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      e.preventDefault();
    }

    setValidated(true);
    setName('');
    setimages('');
    setfee('');
    setdescription('');
  };
  
  return (
    <div className='add-list'>
        <form className='p-4' onSubmit={handleSubmit} noValidate validated={validated}>
        <h3 className='sticky-top p-2 profile-header'> Add Movie </h3>
      
          <label className='d-block m-3'>
            Movie Title:
            <input type="text" onChange={onNameChange} className='form-control my-2' />
          </label>

          <label className='d-block m-3'>
            Movie Images:
            <input type="file" accept="image/*" onChange={onImageChange} className='form-control my-2' />
          </label>

          <label className='d-block m-3'>
            Movie Price:
            <input type="text" onChange={onFeeChange} className='form-control my-2' />
          </label>

          <label className='d-block m-3'>
            Movie Description:
            <input type="text" onChange={ondesChange} className='form-control my-2' />
          </label>

          <button type="submit" className=' d-block btn login-button m-5'>Add</button>

        </form>
    </div>
  )
}

export default ItemPost;
