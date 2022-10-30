import React from 'react'

interface ButtonProps {
    img: string
    text: string
    route?: string
}

export default function Button({img, text, route}: ButtonProps) {
  return (
    <div>
        <button  className='bg-white flex mr-2 md:px-5 px-3 font-medium rounded-full text-xs p-2'>
            <a className='flex' href={route}>
                <img className='h-4 mx-2' src={img}/>
                {text}
            </a>
        </button>
    </div>
  )
}
