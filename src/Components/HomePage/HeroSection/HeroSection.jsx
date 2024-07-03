import React from 'react'
import GetStartedButton from '../../Buttons/GetStartedButton/GetStartedButton'

const HeroSection = () => {
  return (
    <div className='w-full h-[90vh] px-[4rem] bg-[url(/src/Images/Home_background.webp)] bg-no-repeat bg-cover border-b-[1rem] border-darkGray'>
      <div className='bg-[url(/src/Images/Hero2.jpg)] h-full w-full bg-cover bg-no-repeat flex items-center flex-col justify-center gap-[1rem] px-[13rem] leading-[3rem]'>
        <p className='text-[45px] font-openSans text-center font-bold text-black'>Reach your financial goals with ease. Our budget planner makes it simple.</p>
        <p className='text-[20px] font-openSans text-center font-bold text-backgroundColor'>Track income & expenses, set goals & manage your finances</p>
        <GetStartedButton />
      </div>
    </div>
  )
}   

export default HeroSection
