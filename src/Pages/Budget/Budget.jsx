import React from 'react'

import BudgetPageSidebar from '../../Components/BudgetPageSidebar/BudgetPageSidebar'
import BudgetPageRouter from '../../Router/BudgetPageRouter/BudgetPageRouter'

const Budget = () => {
  return (
    <div className='flex w-full'>
      <BudgetPageSidebar />
      <BudgetPageRouter />
    </div>
  )
}

export default Budget
