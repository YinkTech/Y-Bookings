import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import thor from './../img/thor.jpg'

const Items = () => {
  const items = useSelector((state) => state.itemReducer.items);

  const renderList = items.map((item) => {
    const {id, item_name, image_url} = item;
      return  (
        <div className='p-4 list-cont text-white' key={id}>
          
          <Link to={`/Details/${id}`}>
            <img src={thor} alt={item_name} className="shadow list-img img-fluid" />
            <h4 className='text-white text-start px-3 m-2'>{item_name}</h4> 
          </Link>         
        </div>
      );
  });

  return <> {renderList} </>
};

export default Items