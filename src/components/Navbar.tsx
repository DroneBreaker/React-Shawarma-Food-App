import React, { ReactNode, useState } from 'react'
import SearcBar from './SearcBar'

interface NavProps {
    name: string,
    route: string
}
const navItems: Array<NavProps> = [
    {name: 'Home', route: '/'},
    {name: 'Menu', route: '/menu'},
    {name: 'About Us', route: '/about'},
    {name: 'Contact', route: '/contact'},
]

export default function Navbar({children}: {children: ReactNode}) {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <div>
        <div>
            <nav className='bg-[#f5f5f5] flex  justify-between border-b-[.1rem] border-gray-700'>
                <div className='text-left md:mx-16 mx-4 mt-2'>
                    <h2 className='text-xs md:text-sm font-semibold'>Shawarma Haiven</h2>
                    {/* <img className='font-semibold' src='#' alt='Shawarma Haiven'/> */}
                </div>

                <ul className={`${open ? 'my-6 mb-1 mx-16' :  'hidden' } md:flex md:flex-wrap'`}>
                    {navItems.map((item) => (
                        <li className='md:mx-6 mt-2 text-sm md:font-semibold active:bg-white active:rounded-full active:px-2 active:p-1 active:text-orange-400 hover:bg-white hover:rounded-full hover:px-2 hover:p-1 hover:text-orange-400 mb-2'>
                            <a href={item.route}>{item.name}</a>
                        </li>
                    ))}
                </ul>

                <SearcBar text='Search here' icon='/search.png'/>

                <div className='bg-white shadow-inner shadow-gray-700 rounded-md h-6 w-6 md:mt-1 mx-2 md:mx-10'>
                    <img className='h-4 m-1' src='/user.png'/>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={handleClick}
                        type="button"
                        className="m-2 my-2 md:hidden"
                    >
                        <svg
                        className="h-6 w-6 text-dawnorange"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    </div>
  )
}
