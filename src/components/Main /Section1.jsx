import React from 'react'
import python1 from '../../assets/images/python1.png'
import python2 from '../../assets/images/python2.png'
import python3 from '../../assets/images/python3.png'
import Pagination from '../Pagination'
import {useState} from 'react'

import python from '../../assets/images/python1.png'
import vector from '../../assets/images/vector.svg'

function Section1() {
  const [showModal,setModal] = useState(false)
  
  const handleShow = () => {
    setModal(!showModal)
  }
  return (
    <>
        <section className='overflow-auto h-[75vh]'>
            <div className='flex items-center justify-center gap-[50px] pt-[50px]'>
                <div className='p-8 w-[350px] rounded-xl shadow-2xl hover:cursor-pointer'> 
                    <img className='max-w-[350px] h-[300px]' src={python1} alt="python" />
                    <h1 className='text-[32px] mt-4'>Python</h1>
                    <p className='text-[18px] text-[#757881] pt-2'>David M. Beazley</p>
                    <p className='text-[18px] text-[#757881]'>2009</p>
                    <div className='mt-5'>
                        <button className='hover:bg-yellow-300 text-[16px] w-[120px] bg-[#FFD80D] pt-2 pb-2 rounded-lg'>Bookmark</button>
                        <button onClick={handleShow} className='shadow-lg text-[16px] w-[120px] text-[#0D75FF] pt-2 pb-2 rounded-lg ms-5'>More Info</button>
                    </div>
                    <div className='mt-5'>
                        <button className='hover:bg-gray-600 hover:text-white text-[16px] w-[120px] bg-[#75828A] text-white pt-2 pb-2 rounded-lg'>Read</button>
                        <button className='hover:bg-blue-500 hover:text-[#fff] shadow-lg text-[16px] w-[120px]  pt-2 pb-2 rounded-lg ms-5 bg-blue-700 text-white'>Download</button>
                    </div>
                </div>
                <div className='p-8 w-[350px] rounded-xl shadow-2xl hover:cursor-pointer'> 
                    <img className='max-w-[350px] h-[300px]' src={python2} alt="python" />
                    <h1 className='text-[32px] mt-4'>Python</h1>
                    <p className='text-[18px] text-[#757881] pt-2'>David M. Beazley</p>
                    <p className='text-[18px] text-[#757881]'>2009</p>
                    <div className='mt-5'>
                        <button className='hover:bg-yellow-300 text-[16px] w-[120px] bg-[#FFD80D] pt-2 pb-2 rounded-lg'>Bookmark</button>
                        <button onClick={handleShow} className='shadow-lg text-[16px] w-[120px] text-[#0D75FF] pt-2 pb-2 rounded-lg ms-5'>More Info</button>
                    </div>
                    <div className='mt-5'>
                        <button className='hover:bg-gray-600 hover:text-white text-[16px] w-[120px] bg-[#75828A] text-white pt-2 pb-2 rounded-lg'>Read</button>
                        <button className='hover:bg-blue-500 hover:text-[#fff] shadow-lg text-[16px] w-[120px]  pt-2 pb-2 rounded-lg ms-5 bg-blue-700 text-white'>Download</button>
                    </div>
                </div>
                <div className='p-8 w-[350px] rounded-xl shadow-2xl hover:cursor-pointer'> 
                    <img className='max-w-[350px] h-[300px]' src={python3} alt="python" />
                    <h1 className='text-[32px] mt-4'>Python</h1>
                    <p className='text-[18px] text-[#757881] pt-2'>David M. Beazley</p>
                    <p className='text-[18px] text-[#757881]'>2009</p>
                    <div className='mt-5'>
                        <button className='hover:bg-yellow-300 text-[16px] w-[120px] bg-[#FFD80D] pt-2 pb-2 rounded-lg'>Bookmark</button>
                        <button onClick={handleShow} className='shadow-lg text-[16px] w-[120px] text-[#0D75FF] pt-2 pb-2 rounded-lg ms-5'>More Info</button>
                    </div>
                    <div className='mt-5'>
                        <button className='hover:bg-gray-600 hover:text-white text-[16px] w-[120px] bg-[#75828A] text-white pt-2 pb-2 rounded-lg'>Read</button>
                        <button className='hover:bg-blue-500 hover:text-[#fff] shadow-lg text-[16px] w-[120px]  pt-2 pb-2 rounded-lg ms-5 bg-blue-700 text-white'>Download</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-[50px] pt-[50px]'>
                <div className='p-8 w-[350px] rounded-xl shadow-2xl hover:cursor-pointer'> 
                    <img className='max-w-[350px] h-[300px]' src={python1} alt="python" />
                    <h1 className='text-[32px] mt-4'>Python</h1>
                    <p className='text-[18px] text-[#757881] pt-2'>David M. Beazley</p>
                    <p className='text-[18px] text-[#757881]'>2009</p>
                    <div className='mt-5'>
                        <button className='hover:bg-yellow-300 text-[16px] w-[120px] bg-[#FFD80D] pt-2 pb-2 rounded-lg'>Bookmark</button>
                        <button onClick={handleShow} className='shadow-lg text-[16px] w-[120px] text-[#0D75FF] pt-2 pb-2 rounded-lg ms-5'>More Info</button>
                    </div>
                    <div className='mt-5'>
                        <button className='hover:bg-gray-600 hover:text-white text-[16px] w-[120px] bg-[#75828A] text-white pt-2 pb-2 rounded-lg'>Read</button>
                        <button className='hover:bg-blue-500 hover:text-[#fff] shadow-lg text-[16px] w-[120px]  pt-2 pb-2 rounded-lg ms-5 bg-blue-700 text-white'>Download</button>
                    </div>
                </div>
                <div className='p-8 w-[350px] rounded-xl shadow-2xl hover:cursor-pointer'> 
                    <img className='max-w-[350px] h-[300px]' src={python2} alt="python" />
                    <h1 className='text-[32px] mt-4'>Python</h1>
                    <p className='text-[18px] text-[#757881] pt-2'>David M. Beazley</p>
                    <p className='text-[18px] text-[#757881]'>2009</p>
                    <div className='mt-5'>
                        <button className='hover:bg-yellow-300 text-[16px] w-[120px] bg-[#FFD80D] pt-2 pb-2 rounded-lg'>Bookmark</button>
                        <button onClick={handleShow} className='shadow-lg text-[16px] w-[120px] text-[#0D75FF] pt-2 pb-2 rounded-lg ms-5'>More Info</button>
                    </div>
                    <div className='mt-5'>
                        <button className='hover:bg-gray-600 hover:text-white text-[16px] w-[120px] bg-[#75828A] text-white pt-2 pb-2 rounded-lg'>Read</button>
                        <button className='hover:bg-blue-500 hover:text-[#fff] shadow-lg text-[16px] w-[120px]  pt-2 pb-2 rounded-lg ms-5 bg-blue-700 text-white'>Download</button>
                    </div>
                </div>
                <div className='p-8 w-[350px] rounded-xl shadow-2xl hover:cursor-pointer'> 
                    <img className='max-w-[350px] h-[300px]' src={python3} alt="python" />
                    <h1 className='text-[32px] mt-4'>Python</h1>
                    <p className='text-[18px] text-[#757881] pt-2'>David M. Beazley</p>
                    <p className='text-[18px] text-[#757881]'>2009</p>
                    <div className='mt-5'>
                        <button className='hover:bg-yellow-300 text-[16px] w-[120px] bg-[#FFD80D] pt-2 pb-2 rounded-lg'>Bookmark</button>
                        <button onClick={handleShow} className='shadow-lg text-[16px] w-[120px] text-[#0D75FF] pt-2 pb-2 rounded-lg ms-5'>More Info</button>
                    </div>
                    <div className='mt-5'>
                        <button className='hover:bg-gray-600 hover:text-white text-[16px] w-[120px] bg-[#75828A] text-white pt-2 pb-2 rounded-lg'>Read</button>
                        <button className='hover:bg-blue-500 hover:text-[#fff] shadow-lg text-[16px] w-[120px]  pt-2 pb-2 rounded-lg ms-5 bg-blue-700 text-white'>Download</button>
                    </div>
                </div>
            </div>
            <Pagination/>
        </section>
        <section className={showModal? 'show' : 'info'}>
            <div className='w-[650px] bg-white h-[100%] pl-10 hover:cursor-pointer'>
                <div className='flex items-center justify-between mt-2 mb-5'>
                    <h1 className='text-[32px]'>Python</h1>
                    <button onClick={handleShow}>
                    <img className='mr-10 w-[25px] h-[25px] text-[24px]' src={vector} alt="vector" />
                    </button>
                </div>
                <div className='flex items-center justify-center'><img className='w-[250px] h-[300px]' src={python} alt="python" /></div>
                <p className='max-w-[600px] text-[16px] mt-[30px]'>Culpa nulla pariatur cupidatat nisi incididunt ea do ipsum. Cillum et incididunt et nostrud exercitation quis aute laboris non ut adipisicing. Laboris ad minim velit anim sunt aliquip ut sit. Exercitation aliquip ullamco officia non aliqua. Sint deserunt aliquip veniam id eiusmod sit consectetur mollit ea aliqua officia consequat. Magna non mollit nisi est commodo voluptate aute id. Deserunt nostrud id do in nisi mollit deserunt non. Pariatur fugiat cillum irure elit sint nisi ad ipsum culpa deserunt cupidatat esse consequat laboris. Id aliquip non consectetur esse proident duis Lorem.</p>
                <h1 className='mt-5'>Author : <span className='text-[#0D75FF] bg-blue-200 rounded-2xl p-2 mt-[80px]'>Jamal Kasper</span>  <span className='text-[#0D75FF] bg-blue-200 rounded-2xl p-2 ml-2'>Author2</span></h1>
                <h1 className='mt-5'>Published : <span className='text-[#0D75FF] bg-blue-200 rounded-2xl p-2 mt-12'>2009</span></h1>
                <h1 className='mt-5'>Publishers : <span className='text-[#0D75FF] bg-blue-200 rounded-2xl p-2'>Hollman</span></h1>
                <h1 className='mt-5'>Categories: : <span className='text-[#0D75FF] bg-blue-200 rounded-2xl p-2'>Computers</span></h1>
                <h1 className='mt-5'>Pages Count: : <span className='text-[#0D75FF] bg-blue-200 rounded-2xl p-2'>346</span></h1>
            </div>
        </section>
    </>
    
  )
}

export default Section1