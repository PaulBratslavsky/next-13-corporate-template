import React from 'react'
import Image from 'next/image'
import Link from "next/link"

const NavBar = () => {
  return (
    <>
      <nav className="border-gray-200 border-b-2 py-6 sm:py-2">
        <div className="container flex flex-row items-center justify-between">
          {/* Content aligned to the left */}
          <div className="flex flex-row items-center">
            <Link href="/">
              <a className="h-8 w-32">
                <Image width={120} height={33} alt={'Hello Guvnah'} media={navbar.logo} />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar