import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Contactpage from './pages/Contactpage'
import Homepage from './pages/Homepage'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage></Homepage>}></Route>
          <Route exact path='/contact' element={<Contactpage></Contactpage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


