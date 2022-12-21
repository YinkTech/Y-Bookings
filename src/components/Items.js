import React from 'react'
import { useSelector } from 'react-redux'

const Items = () => {
  const items = useSelector((state) => state.itemReducer.items);

  const renderList = items.map((item) => {
    const {id, item_name, image_url, item_fee, item_description} = item;
      return  (
        <div key={id}>
          <h3>{item_name}</h3>
          <img src={image_url} className="img-fluid" alt="" />
          
          <h4>{item_fee}</h4>
          <h5>{item_description}</h5>
        </div>
      );
  });

  return <> {renderList} </>
};

export default Items