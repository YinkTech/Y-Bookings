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
    <>
        <form onSubmit={handleSubmit} noValidate validated={validated}>
        <h2 className="text-center page-title mb-4 text-uppercase">Add Items</h2>
          <label>
            Item Name:
            <input type="text" onChange={onNameChange} className='form-control' />
          </label>

          <label>
            images:
            <input type="file" accept="image/*" onChange={onImageChange} className='form-control' />
          </label>

          <label>
            Item fee:
            <input type="text" onChange={onFeeChange} className='form-control' />
          </label>

          <label>
            Item description:
            <input type="text" onChange={ondesChange} className='form-control' />
          </label>

          <button type="submit" className=' d-block my-3 btn btn-success'>Add</button>

        </form>
    </>
  )
}

export default ItemPost;
