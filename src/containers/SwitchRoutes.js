import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Login from '../components/Login'
import Signup from '../components/Signup'
import ItemList from './ItemList'
import ItemPost from './ItemPost'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Details from '../components/Details'
import Profile from '../components/Profile'

const SwitchRoutes = () => {
  return (
  <div className='full-body'>
  <div className='home'>
    <NavBar />
      <Routes>
        <Route path='/sign-in' element={<Login />} exact />
        <Route path='/Sign-up' element={<Signup />} />
        <Route path='/Y-Bookings' element={<App />} />
        <Route path='/list' element={<ItemList />} />
        <Route path='/Add-list' element={<ItemPost />} />
        <Route path='/Details/:itemid' element={<Details />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
      <div className='m-4'></div>
       <Footer />
    </div>
    </div>
  )
}

export default SwitchRoutes;