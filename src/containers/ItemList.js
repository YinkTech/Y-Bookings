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
  }, []);

  return (
    <>
    <Items />
    </>
  )
}

export default ItemList;