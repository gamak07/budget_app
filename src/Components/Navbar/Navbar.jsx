import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const className = 'flex items-center justify-center h-full w-[8rem] bg-secondaryColor font-bold text-backgroundColor active'
  return (
    <nav className='flex items-center font-montserrat w-[fit-content] h-full'>
        <NavLink 
          to={'/'} 
          className={({isActive}) => (isActive ? `${className}` :'flex items-center justify-center h-full w-[8rem] bg-primaryColor font-bold text-backgroundColor')}
        >
          Home 
        </NavLink>
        <NavLink 
          to={'/dashboard'} 
          className={({isActive}) => (isActive ? `${className}` :'flex items-center justify-center h-full w-[8rem] bg-primaryColor font-bold text-backgroundColor')}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to={'/budget'} 
          className={({isActive}) => (isActive ? `${className}` :'flex items-center justify-center h-full w-[8rem] bg-primaryColor font-bold text-backgroundColor')}
        >
          Budget
        </NavLink>
        <NavLink
         to={'/expenses'} 
         className={({isActive}) => (isActive ? `${className}` :'flex items-center justify-center h-full w-[8rem] bg-primaryColor font-bold text-backgroundColor')}
        >
          Expenses
        </NavLink>
        <NavLink
         to={'/income'} 
         className={({isActive}) => (isActive ? `${className}` :'flex items-center justify-center h-full w-[8rem] bg-primaryColor font-bold text-backgroundColor')}
        >
          Income
        </NavLink>
        <NavLink
         to={'/settings'} 
         className={({isActive}) => (isActive ? `${className}` :'flex items-center justify-center h-full w-[8rem] bg-primaryColor font-bold text-backgroundColor')}
        >
          Settings
        </NavLink>
    </nav>
  )
}

export default Navbar
