import React from 'react'

interface HeroTextProps {
  introText: string
  lastText: string
}

export default function HeroText({introText, lastText}: HeroTextProps) {
  return (
    <div>
        <div className="mt-[100px] font-bold">
            <h1 className="md:text-[2.7rem] lg:text-[3.2rem] text-3xl mb-2">{ introText }</h1>
            <h1 className='md:text-[2.4rem] lg:text-[2.9rem] text-[1.5rem]'>{ lastText }</h1>
        </div>
    </div>
  )
}
