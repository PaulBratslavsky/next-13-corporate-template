import React from 'react'
import Image from 'next/image'
import Link from "next/link"

const navbar = () => {
  return (
    <>
      <header className="relative text-gray-800 bg-white shadow-md">
        <div className="container flex flex-col flex-wrap items-center p-1 mx-auto lg:p-0 md:flex-row">
          <div className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            
            <Image
              alt="Logo placement"
              src='https://dummyimage.com/312x302'
              width={950}
              height={950}
              className="w-12 h-12 p-2 text-white rounded-full"
              />
            <Link href="/"><span className="ml-3 text-xl">Strapi</span></Link>
          </div>
          <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4">
              <Link className='mr-5 hover:text-gray-900' href="/pricing">Pricing</Link>
              <Link className='mr-5 hover:text-gray-900' href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default navbar