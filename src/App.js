import React from 'react'
import { Routes, Route } from 'react-router'
import Contactpage from './pages/Contactpage'
import Homepage from './pages/Homepage'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/contact' element={<Contactpage></Contactpage>}></Route>
      </Routes>
    </div>
  )
}

export default App


