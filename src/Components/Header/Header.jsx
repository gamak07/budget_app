import React from 'react'
import Navbar from '../Navbar/Navbar'
import Logo from '../../Images/download.png'

import { CgProfile } from "react-icons/cg";


const Header = () => {
  return (
    <div className='flex items-center justify-between h-[10vh] bg-primaryColor px-[4rem]'>
      <div className='h-full w-[4rem]'>
        <img src={Logo} alt="" className='h-full w-full'/>
      </div>
      <Navbar />
      <div>
        <CgProfile className='text-[25px] text-darkGray pointer profileIcon hover:text-secondaryColor'/>
      </div>
    </div>
  )
}

export default Header