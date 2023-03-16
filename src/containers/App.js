import React from 'react';
import blackpanther from './../img/p2-1173714-1671605998.png';
import kgf from './../img/K.G.F_Chapter_2.jpg';
import leadVideo from './../img/leadVideo.mp4';
import ItemList from './ItemList';
import Banner from '../components/Banner';

function App() {
  return (
    <div>
      <div class="tech-slideshow">
  <div class="mover-1"></div>
  <div class="mover-2"></div>
</div>
      <h3 className=' profile-header'> Home Page </h3>
        <Banner />


        <img src={blackpanther} alt="" className="img-fluid" />
        
      <div className='p-5'>
      <video className='d-block leadVideo' muted loop autoPlay src={leadVideo}></video>
        <h1 className='border rounded'>content</h1>
        <img src={kgf} alt="" className="img-fluid" />
        <div>
          
        </div>
      </div>
  </div>
  );
}

export default App;
