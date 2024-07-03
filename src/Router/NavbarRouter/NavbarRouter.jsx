import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'

import Home from '../../Pages/Home/Home'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import Budget from '../../Pages/Budget/Budget'
import Expenses from '../../Pages/Expenses/Expenses'
import Income from '../../Pages/Income/Income'
import Settings from '../../Pages/Settings/Settings'

const NavbarRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/budget/*' element={<Budget/>} />
        <Route path='/expenses' element={<Expenses/>} />
        <Route path='/income' element={<Income/>} />
        <Route path='/settings' element={<Settings/>} />
        {/* <Route path='*' element={<Home/>} /> */}
      </Routes>
    </div>
  )
}

export default NavbarRouter
