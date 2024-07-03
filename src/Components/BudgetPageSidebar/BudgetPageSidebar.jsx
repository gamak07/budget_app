import React from 'react'
import { NavLink } from 'react-router-dom'

const BudgetPageSidebar = () => {
    const className = 'bg-darkGray h-[3rem] w-full flex items-center font-monserrat font-bold text-[17px] text-backgroundColor'
  return (
    <div className='w-[20%] bg-secondaryColor'>
      <ul>
        <NavLink
         to='budget_overview'
         className={({isActive}) => (isActive ? `${className}` : 'bg-[inherit] h-[3rem] w-full flex items-center font-monserrat font-bold text-[17px] text-backgroundColor')}
        >
            <li >
                Budget
            </li>
        </NavLink>
        <NavLink
         to='budget_category'
         className={({isActive}) => (isActive ? `${className}` : 'bg-[inherit] h-[3rem] w-full flex items-center font-monserrat font-bold text-[17px] text-backgroundColor')}
        >
            <li>
                Budget Category
            </li>
        </NavLink>
        <NavLink
         to='savings'
         className={({isActive}) => (isActive ? `${className}` : 'bg-[inherit] h-[3rem] w-full flex items-center font-monserrat font-bold text-[17px] text-backgroundColor')}
        >
            <li>
                Savings
            </li>
        </NavLink>
        <NavLink
         to='upcoming_payment'
         className={({isActive}) => (isActive ? `${className}` : 'bg-[inherit] h-[3rem] w-full flex items-center font-monserrat font-bold text-[17px] text-backgroundColor')}
        >
            <li>
                Upcoming Payment
            </li>
        </NavLink>
        <NavLink
         to='performance'
         className={({isActive}) => (isActive ? `${className}` : 'bg-[inherit] h-[3rem] w-full flex items-center font-monserrat font-bold text-[17px] text-backgroundColor')}
        >
            <li>
                 Performance
            </li>
        </NavLink>
      </ul>
    </div>
  )
}

export default BudgetPageSidebar
