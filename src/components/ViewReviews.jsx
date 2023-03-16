import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types';
import moment from 'moment';

const ViewReviews = ({itemid}) => {
  
  const [items, setItems] = useState([]);
  const jwt = window.localStorage.getItem("jwt");
  const rest = jwtDecode(jwt);
  const current = rest.username;

  useEffect(() => {
    fetch("http://127.0.0.1:3000/reviews/")
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleDelete = id => {
    fetch(`http://127.0.0.1:3000/reviews/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        setItems(items.filter(item => item.id !== id));
      });
  };
  
  function dateFormatter(s) {
    return moment.parseZone(s).format('D MMM YYYY');
  }
  return (
    <>
    <div id='error-message' className='my-2 text-center'></div>
      <div>
        {items.map(item => {
          if( itemid === item.date ) {
            if (item.current_user === current ) {
              return (
                
                <div>
                  <div className="border-bottom" key={item.id}>
                    <div className="card-body">
                      <h5 className=" d-flex justify-content-between card-title text-capitalize fw-bolder">{item.current_user} <small className=" fs-6 fw-lighter">{dateFormatter(item.updated_at)}</small></h5>
                      
                      <p className="card-text">{item.comments}</p>
                      <button className='btn btn-outline-danger' onClick={() => handleDelete(item.id)}> delete </button>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="border-bottom" key={item.id}>
                  <div className="card-body"> 
                  <h5 className=" d-flex justify-content-between card-title text-capitalize fw-bolder">{item.current_user} <small className=" fs-6 fw-lighter">{dateFormatter(item.updated_at)}</small></h5>
                  <p className="card-text">{item.comments}</p>
                  </div>
                </div>
              );
            };
          };
        })}
      </div>
    </>
  )
}

ViewReviews.propTypes = {
  itemid: PropTypes.string,
}

export default ViewReviews;

