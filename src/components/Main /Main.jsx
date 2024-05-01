import React from 'react'
import Section1 from './Section1'
import LeftSection from './LeftSection'

function Main() {
  return (
    <main className='container flex justify-between mt-5'>
        <LeftSection/>
        <Section1/>
    </main>
  )
}

export default Main