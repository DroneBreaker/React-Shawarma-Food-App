import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'

export default function MenuLayout({children}: {children: ReactNode}) {
  return (
    <>
        <Navbar children={undefined}/>
        {children}
    </>
  )
}
