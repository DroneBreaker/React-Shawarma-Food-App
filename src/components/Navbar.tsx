import React, { ReactNode } from 'react'
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
  return (
    <div>
        <div>
            <nav className='bg-[#f5f5f5] md:flex border-b-[.1rem] border-gray-700'>
                <div className='text-left md:mx-16 mx-8 mt-2'>
                    <h2 className='font-semibold'>Shawarma Haiven</h2>
                    {/* <img className='font-semibold' src='#' alt='Shawarma Haiven'/> */}
                </div>

                <ul className='md:flex hidden'>
                    {navItems.map((item) => (
                        <li className='md:mx-6 mt-2 text-sm md:font-semibold active:bg-white active:rounded-full active:px-4 active:text-orange-400 hover:bg-white hover:rounded-full hover:px-4 hover:text-orange-400 mb-2'>
                            <a href={item.route}>{item.name}</a>
                        </li>
                    ))}
                </ul>

                <SearcBar text='Search here' icon='/search.png'/>

                <div className='bg-white shadow-inner shadow-gray-700 rounded-md h-6 w-6 md:mt-1 mx-2 md:mx-10'>
                    <img className='h-4 m-1' src='/user.png'/>
                </div>
            </nav>
        </div>
    </div>
  )
}
