import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Items = () => {
  const items = useSelector((state) => state.itemReducer.items);

  const renderList = items.map((item) => {
    const {id, title, image, genre} = item;
      return  (
        <div className='p-4 list-cont text-white' key={id}>
          
          <Link to={`/Details/${id}`} className='shadow p-1' >
            <img src={image} alt={title} className="shadow text-center list-img img-fluid" />
           
              <h4 className='text-start fw-bolder text-white mt-4 text-truncate'>{title}</h4> 
            
              <h6 className='text-start text-muted fw-bolder mt-2 text-truncate'> {genre} </h6>
          
          </Link>         
        </div>
      );
  });

  return <> {renderList} </>
};

export default Items