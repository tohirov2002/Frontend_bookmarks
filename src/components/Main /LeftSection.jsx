import books1 from '../../assets/images/books1.jpg'

function LeftSection() {

  return (
    <>
    <section className='h-[75vh] overflow-auto ' >
        <div className=''>
            <h1 className='text-[38px] text-center'>Category</h1>
            <div className='flex items-center mt-8'>
                <button className='text-[28px]'>Python</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div>
            <div className='flex items-center mt-8'>
                <button className='text-[28px]'>Java</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div>
            <div className='flex items-center mt-8'>
                <button className='text-[28px]'>History</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div>
            <div className='flex items-center mt-8'>
                <button className='text-[28px]'>Mathematics</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div>
            <div className='flex items-center mt-8'>
                <button className='text-[28px]'>Physics</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div><div className='flex items-center mt-8'>
                <button className='text-[28px]'>Chemistry</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div>
            <div className='flex items-center mt-8'>
                <button className='text-[28px]'>Biology</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div>
            <div className='flex items-center mt-8'>
                <button className='text-[28px]'>English</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div>
            <div className='flex items-center mt-8'>
                <button className='text-[28px]'>Geography</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div>
            <div className='flex items-center mt-8'>
                <button className='text-[28px]'>Fiction</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div>
            <div className='flex items-center mt-8'>
                <button className='text-[28px]'>Crime</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div>
            <div className='flex items-center mt-8'>
                <button className='text-[28px]'>Fantasy</button>
                <img className='ml-5 w-[40px] h-[40px]' src={books1} alt="books" />
            </div>
        </div>
    </section>
    </>
  )
}

export default LeftSection