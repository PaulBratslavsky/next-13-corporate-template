import React from 'react'
// import Image from 'next/image'
import Link from "next/link"
import { Menu } from '@headlessui/react'

const NavBar = () => {
  return (
    <header className="text-gray-600">
          <div className="container flex flex-col flex-wrap items-center p-1 mx-auto lg:p-0 md:flex-row">
            <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
              {/* will substitute strapi logo here, first designing navbar */}
              <img src="https://dummyimage.com/302x302" className="w-12 h-12 p-2 text-white rounded-full" alt='Strapi logo placeholder' />
              <span className="ml-3 text-xl">Strapi</span>
            </a>
            <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4">
              <Link className='mr-5 hover:text-gray-900' href='/'>Pricing</Link>
              <Link className='mr-5 hover:text-gray-900' href="/posts">Contact</Link>
            </nav>
            <div className="flex justify-between w-auto">
            <button className="inline-flex items-center px-4 py-2 mt-4 text-base text-indigo-600 bg-white border-2 border-indigo-600 rounded focus:outline-none hover:bg-gray-200 md:mt-0 hover:text-black">Sign Up
            </button>
            {/* <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">En
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button> */}
            <div className="relative inline-flex items-stretch bg-white border rounded-md">
              <Menu>
                <Menu.Button>🌏 En </Menu.Button>
                  <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                  <Menu.Items>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${active && "block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}
                          
                        >
                          En
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${active && "block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}
                          
                        >
                          Fr
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                  </div>
                </Menu>
            </div>
            </div>
          </div>
        </header>
  )
}

export default NavBar