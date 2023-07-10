import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AboutPage from '../about/AboutPage'
import HomePage from '../HomePage'

const RoutePage = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
    </Routes>
  )
}

export default RoutePage