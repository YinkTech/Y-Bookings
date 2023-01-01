import React from 'react';
import blackpanther from './../img/p2-1173714-1671605998.png'
import kgf from './../img/K.G.F_Chapter_2.jpg'

function App() {
  return (
    <div>
      <h3 className='sticky-top p-2 profile-header'> Home Page </h3>
      
      <div className='p-5'>
        <img src={blackpanther} alt="" className="img-fluid" />
        <h1 className='border rounded'>content</h1>
        <img src={kgf} alt="" className="img-fluid" />
        
      </div>
      {/* <div className='slider_group w-50 align-self-center p-3'>
        <h1 type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample" >
           Y booking
        </h1>
       <hr className='hr' />
       <div>
        <p class="collapse collapse-horizontal " id="collapseWidthExample">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
       </div>
     
      </div>  
       <div className='footer text-info bg-dark'>
        Copy and Registeres
       </div> */}
  </div>
  );
}

export default App;
