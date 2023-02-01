import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setItem } from './../redux/actions/actions';
import Items from '../components/Items';

const ItemList = () => {
  const dispatch = useDispatch();
  
  const fetchItem = async () => {
    const response = await axios
    .get(`http://127.0.0.1:3000/booking_menu_items`)
    .catch((err) => {
      console.log("err", err)
    });
    dispatch (setItem (response.data));
  };
  useEffect(() => {
    fetchItem();
  // eslint-disable-next-line
  }, []);

  return (
    <div className='total-list'>
      <h3 className='sticky-top text-start p-2 profile-header'>Movie List</h3>
      
    <Items />
    </div>
  )
}

export default ItemList;