import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../app/App'

const SwitchRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/Y-Bookings' element={<App />} exact />

      </Routes>
    </>
  )
}

export default SwitchRoutes