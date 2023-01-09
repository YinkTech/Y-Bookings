import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectedMarket, removeSelecteditem } from '../redux/actions/actions';
import thor from './../img/thor.jpg';

const Details = () => {
  const item = useSelector((state) => state.selectedItemReducer);
  const { item_name, item_fee, item_description } = item;
  const { itemid } = useParams();
  const dispatch = useDispatch();

  const fetchItemDetail = async() => {
    const response = await axios
    .get(`http://127.0.0.1:3000/booking_menu_items/${itemid}`)
    .catch((err) => {
      console.log("Err ", err);
    });
    dispatch (selectedMarket(response.data));
  };

  useEffect(() => {
    if (itemid && itemid !== "" ) fetchItemDetail();
    return () => {
      dispatch(removeSelecteditem());
    };
    // eslint-disable-next-line
  }, [itemid]);

  return (
    <div>
      <h3 className='sticky-top p-2 profile-header'>Movie Details</h3>
      
      <Link to='/list'>
        <button className="btn text-warning d-block fw-bolder fs-3 px-2 py-0 text-capitalize"> <i className="bi bi-backspace"></i> </button>
      </Link>

      <div className='p-2 p-md-4'>

      <img src={thor} alt={thor} className='img-fluid img-details' />
     <div className='d-flex align-items-center my-2 justify-content-between'>
        <h1>{item_name}</h1>
        <h6>{item_fee}</h6>
     </div>

      <div>
        <h4>Summary</h4>
          <p className='item text-secondary'>
            {item_description}
          </p>

          <button className='btn login-button'>Book Now</button>

      </div>
    </div>
    </div>
    
  )
}

export default Details