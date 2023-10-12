import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import Home from './components/Home'

function App(props) {
    return(
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path={`/`} element={<Home/>} />
        </Routes>
      </BrowserRouter>
    )

}

export default App