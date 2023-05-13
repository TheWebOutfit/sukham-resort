import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer';
import Places from './pages/Places';
import Contact from './pages/Contact';
import Career from './pages/Career';
import JobForm from './components/JobForm';


const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/place/:id' element={<Places />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Career' element={<Career/>} />
        <Route path='/JobForm' element={<JobForm/>} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App