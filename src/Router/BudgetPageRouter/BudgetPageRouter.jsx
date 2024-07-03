import React from 'react'

import BudgetOverview from '../../Components/BudgetPage/BudgetOverview/BudgetOverview'
import Savings from '../../Components/BudgetPage/Savings/Savings'
import UpcomingPayment from '../../Components/BudgetPage/UpcomingPayment/UpcomingPayment'
import BudgetCategory from '../../Components/BudgetPage/BudgetCategory/BudgetCategory'
import Performance from '../../Components/BudgetPage/Performance/Performance'

import { Route, Routes } from 'react-router-dom'

const BudgetPageRouter = () => {
  return (
    <div className='w-[80%] bg-backgroundColor'>
      <Routes>
        <Route path='budget_overview' element={<BudgetOverview/>} />
        <Route path='budget_category' element={<BudgetCategory/>} />
        <Route path='savings' element={<Savings/>} />
        <Route path='upcoming_payment' element={<UpcomingPayment/>} />
        <Route path='performance' element={<Performance/>} />
        <Route path='*' element={<BudgetOverview />} />
      </Routes>
    </div>
  )
}

export default BudgetPageRouter
