import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
      </Routes>
    </div>
  )
}

export default App


