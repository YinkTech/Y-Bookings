import React, { useEffect, useState } from 'react'

const Banner = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/movies/")
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);
  return (
    <>
        <div className="scroll-blur">
      <div className='scroll-container'>
          <div className='gridscroll'>
            {items.map(item => {
              return (
                <img src={item.image} className='banner-image mx-2'   alt={item.title} />
              )
            })}
          </div>
      </div>
        </div>
    </>
  );
};

export default Banner;