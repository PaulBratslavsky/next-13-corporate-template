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
        </div>
      </header>
    </>
  )
}

export default navbar