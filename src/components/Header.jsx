import {useState} from 'react'
import Logo from '../assets/images/group.svg'
import search from '../assets/images/search.svg'
import LanguageDrop from './LanguageDrop';


function Header() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className='container mt-7'>
        <ul className='flex justify-between'>
            <li className='flex items-center'>
                <img className='w-[226px] h-[44px]' src={Logo} alt="logo" />
                <div className='relative ml-[50px] mr-2'>
                  <input className='max-w-[670px] pt-2 pb-2 border-[1px] rounded-[24px] pl-[30px] text-[14px] text-[black] bg-[#F8FAFD]' type="text" placeholder='Search books' style={{ maxWidth: '670px', width: '100%' }} />
                  <img className='absolute top-[11px] left-2 text-[blue] w-[16px] h-[16px]' src={search} alt="search" />
                </div>
            </li>
            <li className='flex items-center gap-4'>
                <button onClick={toggleDarkMode}>
                    {darkMode ? (
                      <svg class="text-yellow-500 dark:text-white w-[30px] h-[30px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"/>
                      </svg>
                    ) : (
                      <svg class="w-[23px] h-[23px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd"/>
                      </svg>
                    )}
                </button>
                <LanguageDrop/>
                <div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">Login</button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
                </div>
            </li>
        </ul>
    </header>
  )
}

export default Header