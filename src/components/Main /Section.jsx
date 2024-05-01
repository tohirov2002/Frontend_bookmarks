import React from 'react'
import calendar from '../../assets/images/calendar.svg'
import teligram from '../../assets/images/teligram.svg'

function Section() {
  return (
    <>
    <section className='container mt-[40px]'>
        <div className='flex items-center justify-around'>
            <div className='bg-[#A6B0C3] flex gap-2 p-3 rounded-2xl'><h1 className='text-[20px] text-white'>Number of books<span className='text-blue-800 ps-3'>15</span></h1></div>
            <button className='bg-[#A6B0C3] flex gap-2 p-3 rounded-2xl'>
                <h1 className='text-[20px] text-white'>My selected books</h1>
                <img className='w-[30px] h-[30px]' src={calendar} alt="calendar" />
            </button>
            <button className='bg-[#A6B0C3] flex items-center gap-2 p-3 rounded-2xl'>
                <h1 className='text-[20px] text-white'>what book do you need?</h1>
                <img className='w-[30px] h-[30px]' src={teligram} alt="teligram" />
            </button>
        </div>
    </section>
    </>
  )
}

export default Section