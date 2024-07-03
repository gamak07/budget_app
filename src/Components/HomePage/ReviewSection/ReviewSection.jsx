import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CustomNavigationButtons from '../../Buttons/CustomNavigationButtons/CustomNavigationButtons';
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/navigation'

import { FaUser } from "react-icons/fa";

const ReviewSection = () => {
    const Reviews = [
        {
            name: 'James Ariyo',
            title: 'This app is a lifesaver',
            message: 'Before using BudgetWell, I was constantly overspending and living paycheck to paycheck. Now, I can finally see where my money goes and make informed financial decisions.  Highly recommend!',
            profileIcon: <FaUser/>,
        },
        {
            name: 'Christopher Adam',
            title: 'BudgetWell has made budgeting fun and engaging',
            message: 'The user interface is so intuitive and easy to use.  I love setting goals and tracking my progress.  It\'s been a game-changer for my finances.',
            profileIcon: <FaUser/>,
        },
        {
            name: 'Harry Larry',
            title: 'I was skeptical about budgeting apps, but BudgetWell has proven me wrong',
            message: 'It\'s helped me pay off a significant amount of debt and save for my dream vacation.  The automatic expense tracking is a huge plus!',
            profileIcon:<FaUser/>,
        },
        {
            name: 'James Baldwin',
            title: 'Finally, a budget app that works for me',
            message: 'BudgetWell is flexible enough to accommodate my freelance income and allows me to categorize expenses in a way that makes sense for my lifestyle.  It\'s given me peace of mind about my financial future.',
            profileIcon:<FaUser/>,
        },
        {
            name: 'Akindele Omotoyosi',
            title: 'BudgetWell has been a valuable tool for my family',
            message: 'We can now easily track our shared expenses and work towards our financial goals together.  The app has improved communication and transparency around our finances.',
            profileIcon:<FaUser/>,
        },
        {
            name: 'Idris Mustapha',
            title: 'I\'m a student on a tight budget, and BudgetWell has been a game-changer',
            message: 'It\'s helped me stay on track with my spending and avoid unnecessary purchases.  The budgeting tips and insights within the app are also very helpful.',
            profileIcon:<FaUser/>,
        },
        {
            name: 'Lateef Muhammad',
            title: 'BudgetWell is more than just a budgeting app; it\'s a financial education tool',
            message: 'The app provides resources and explanations that have helped me improve my financial literacy.  I feel much more confident managing my money now.',
            profileIcon:<FaUser/>,
        },
]
  return (
    <div className='px-[4rem] bg-[url(/src/images/Home_background.webp)] bg-no-repeat bg-cover w-[100%] border-b-[1rem] border-darkGray'>
        <div className='bg-backgroundColor w-full px-[1rem] py-[2rem]'>
            <div className='flex flex-col items-center gap-[0.5rem] '>
                <h1 className='font-montserrat font-bold text-[40px]'>TESTIMONIALS</h1>
                <p className='font-openSans text-[15px]'>Reviews from our users</p>
            </div>
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                // Navigation = {true}
                // autoplay = {true}
                speed={900}
                loop
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                className='w-[100%] mt-[1rem]'
            >
                {Reviews.map((reviewList, index) =>(
                    <SwiperSlide key={index} className='w-[30%]'>
                        <div className='bg-secondaryColor rounded-[20px] p-[1rem] h-[13rem]'>
                            <h1 className='font-bold text-center font-montserrat text-[15px]'>{reviewList.title}</h1>
                            <p className='text-backgroundColor text-center font-openSans text-[13px] pt-[1rem]'>{reviewList.message}</p>
                            <div className='flex items-center justify-end pt-[1rem] gap-[1rem] font-greatVibes text-[25px]'>
                                <p>{reviewList.name}</p>
                                <p>{reviewList.profileIcon}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <CustomNavigationButtons />
            </Swiper>
        </div>
    </div>
  )
}

export default ReviewSection
