import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer';
import RoomDetail from './pages/RoomDetail';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room/:id' element={<RoomDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App