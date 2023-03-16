import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectedMarket, removeSelecteditem } from '../redux/actions/actions';
import PostReviews from './PostReviews';
import ViewReviews from './ViewReviews';

const Details = () => {
  const item = useSelector((state) => state.selectedItemReducer);
  const { title, image, description, genre, release, Rating, runtime, language, stars, studio } = item;
  const { itemid } = useParams();
  const dispatch = useDispatch();

  const fetchItemDetail = async() => {
    const response = await axios
    .get(`http://127.0.0.1:3000/movies/${itemid}`)
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
      <h3 className='p-2 profile-header'>Movie Details</h3>
      
      <Link to='/list'>
        <button className="btn text-warning d-block fw-bolder fs-3 px-2 py-0 text-capitalize"> <i className="bi bi-backspace"></i> </button>
      </Link>

      <div className='p-2 p-md-4'>

      <img src={image} alt={title} className='img-fluid img-details' />
     <div className='d-flex   my-2 justify-content-between'>
        <div>
        <h1 className='fw-bolder'>{title}</h1>
        <h6>{genre} | {language} </h6><h6> {release} | {runtime}</h6>
        </div>
        <h6> Rating: {Rating} </h6>
     </div>

      <div>
        <h4 className='fw-bold'>Summary</h4>
          <p className='item text-light'>
            {description}
          </p>

          <h6 className='fw-light text-muted mt-5'> {studio} </h6>
          <h6 className='fw-light text-muted mb-5'> {stars} </h6>

          <button className='btn login-button'>Book Now</button>

      </div>

      <div className="container my-4 p-3 rounded shadow" style={{background: '#35455a9f'}}>
        <h4 className='fw-bold'>Comments</h4>
        <div>
          <PostReviews current_movie={title}  itemid={itemid} />

          <hr />

          <ViewReviews itemid={itemid} />
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Details