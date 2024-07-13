import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logouth from './components/logouth/Logouth'
import './App.css'

function App() {

  return (
    <Router>
      <div className="app-container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logouth' element={<Logouth />} />
      </Routes>
    </div>
    </Router >
  )
}

export default App
