import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { Link, Route, Routes } from 'react-router-dom'
import Contact from './Contact'

function App() {

  return (
    <div className='section'>
      <Link to="/"> Home</Link>
      <Link to="/ser"> service</Link>
      <Link to="/about"> about</Link>
      <Link to="/con"> contact</Link>
       <h2>sample git routing</h2>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/con' element={<Contact />} />
          <Route path='/about' element={<Contact />} />
          <Route path='*' element={<Contact />} />
       </Routes>
    </div>
  )
}

export default App
