import React from 'react'
import Navbar from './sections/Navbar'
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './sections/Home'
import Game from './sections/Game'
import About from './sections/About'
import Fame from './sections/Fame'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto '>
     <Router>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/about' element={<About />} />
        <Route path='/fame' element={<Fame />} />
      </Routes>
     </Router>
      
    </main>
  )
}

export default App