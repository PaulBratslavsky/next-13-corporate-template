import React from 'react'

const layout = ({children}) => {
  return (
    <section className="px-4 pt-24 pb-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="block pb-2 mb-5 text-4xl font-extrabold leading-none tracking-normal text-transparent md:text-6xl md:tracking-tight bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Our Price, Your Choice
            </h1>
            <p className="px-0 mb-10 text-lg text-gray-500 md:text-xl lg:px-24">Pricing that works for companies of any size.</p>
        </div>

        {/* pricing box containers */}
        <div className="w-full mx-auto xl:w-4/5">
          {children}
        </div>
    </section>
  )
}

export default layout