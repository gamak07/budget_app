import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import NavbarRouter from './Router/NavbarRouter/NavbarRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <NavbarRouter />
    </BrowserRouter>
      
    </>
  )
}

export default App
