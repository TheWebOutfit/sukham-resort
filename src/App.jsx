import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer';
import Places from './pages/Places';
import Contact from './pages/Contact';
import Career from './pages/Career';
import JobForm from './components/JobForm';
import Login from './pages/Login';
import { useState } from 'react';
import AboutUs from './pages/AboutUs';


const App = () => {

  const [login, setLogin] = useState(true);
  console.log(login);
  return (
    <div className=''>

      <Navbar />
{
    !login ? <Login setLogin={setLogin} /> 
    :
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/place/:id' element={<Places />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Career' element={<Career/>} />
        <Route path='/JobForm' element={<JobForm/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />

        
      </Routes>
}
      <Footer />
    </div>
  )
}

export default App