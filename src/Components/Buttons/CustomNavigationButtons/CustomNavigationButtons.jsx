import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { useSwiper } from 'swiper/react'

const CustomNavigationButtons = () => {
    const swiper = useSwiper()
  return (
    <div className='flex items-center justify-center '>
    <div className='my-[1rem] flex items-center justify-center gap-[8px] border border-black rounded-[20px] p-[3px]'>
        <button onClick={()=> swiper.slidePrev()} className='text-[#fff] h-[30px] w-[30px] flex items-center justify-center rounded-[50%] bg-[#1C1C21]'>
          <IoIosArrowBack/>
        </button>
        <button onClick={()=> swiper.slideNext()} className='text-[#fff] h-[30px] w-[30px] flex items-center justify-center rounded-[50%] bg-[#1C1C21]'>
          <IoIosArrowForward />
        </button>
    </div>
    </div>
  )
}

export default CustomNavigationButtons
