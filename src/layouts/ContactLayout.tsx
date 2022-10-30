import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'

export default function ContactLayout({children}: {children: ReactNode}) {
  return (
    <>
        <Navbar children={undefined}/>
        {children}
    </>
  )
}
