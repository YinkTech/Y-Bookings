import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from './../redux/actions/actions';


const ItemPost = () => {
  const dispatch = useDispatch();
  
  const [item_name, setName] = useState('');

  const onNameChange = (e) => setName(e.target.value);


  const handleSubmit = event => {
    const formData = new FormData();
    formData.append('item_name', item_name);

    dispatch(addNewCourses(formData));

    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`http://127.0.0.1:3000/booking_menu_items`, { user })
      .then(res => {
        console.log(res);
          console.log(res.data);
        dispatch (addItem (res.data));
      });
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="item_name" onChange={onNameChange} />
          </label>
          <button type="submit">Add</button>
        </form>
    </>
  )
}

export default ItemPost;
