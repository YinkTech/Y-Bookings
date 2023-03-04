import React from 'react';
import blackpanther from './../img/p2-1173714-1671605998.png'
import kgf from './../img/K.G.F_Chapter_2.jpg'
import ItemList from './ItemList';

function App() {
  return (
    <div>
      <h3 className=' p-2 profile-header'> Home Page </h3>
      
      <div className='p-5'>
        <img src={blackpanther} alt="" className="img-fluid" />
        <h1 className='border rounded'>content</h1>
        <img src={kgf} alt="" className="img-fluid" />
        <div>
          
        </div>
      </div>
  </div>
  );
}

export default App;
