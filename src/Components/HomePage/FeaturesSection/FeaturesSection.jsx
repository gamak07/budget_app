import React from 'react'

const FeaturesSection = () => {
  return (
    <div className='px-[4rem] bg-[url(/src/Images/Home_background.webp)] bg-no-repeat bg-cover border-b-[1rem] border-darkGray'>
        <div className='flex items-center flex-col gap-[1.5rem] bg-secondaryColor py-[2rem]'>
            <h1 className='text-[40px] text-backgroundColor font-bold font-montserrat'>Features</h1>
            <div className='w-full grid grid-cols-3 py-[1rem] px-[2rem] gap-[1.5rem]'>
                <div className='bg-backgroundColor rounded-[10px] px-[1rem] py-[0.8rem] h-[]'>
                    <p className='text-black text-[20px] font-bold font-montserrat'>Track income and expenses</p>
                    <p className='text-darkGray text-[15px] font-openSans'>Easily record your income from various sources and categorize your spending across different areas.</p>
                </div>
                <div className='bg-backgroundColor rounded-[10px] px-[1rem] py-[0.8rem]'>
                    <p className='text-black text-[20px] font-bold font-montserrat'>Create budgets</p>
                    <p className='text-darkGray text-[15px] font-openSans'>Set realistic spending limits for different categories based on your income and financial goals.</p>
                </div>
                <div className='bg-backgroundColor rounded-[10px] px-[1rem] py-[0.8rem]'>
                    <p className='text-black text-[20px] font-bold font-montserrat'>Monitor progress</p>
                    <p className='text-darkGray text-[15px] font-openSans'> View clear visualizations of your income, expenses, and budget progress over time.</p>
                </div>
                <div className='bg-backgroundColor rounded-[10px] px-[1rem] py-[0.8rem]'>
                    <p className='text-black text-[20px] font-bold font-montserrat'>Categorize transactions</p>
                    <p className='text-darkGray text-[15px] font-openSans'>Organize your spending into categories like rent, groceries, entertainment, etc., for better analysis.</p>
                </div>
                <div className='bg-backgroundColor rounded-[10px] px-[1rem] py-[0.8rem]'>
                    <p className='text-black text-[20px] font-bold font-montserrat'>Automatic transactions</p>
                    <p className='text-darkGray text-[15px] font-openSans'> Import transactions automatically from your bank accounts for effortless tracking</p>
                </div>
                <div className='bg-backgroundColor rounded-[10px] px-[1rem] py-[0.8rem]'>
                    <p className='text-black text-[20px] font-bold font-montserrat'>Recurring expenses</p>
                    <p className='text-darkGray text-[15px] font-openSans'> Easily manage recurring bills and create reminders to avoid late payments.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default FeaturesSection
