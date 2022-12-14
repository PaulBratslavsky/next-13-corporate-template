import React from 'react'

const callToAction = () => {
  return (
    <div>
        <section className="w-full bg-indigo-600">
            <div className="w-full px-4 py-10 mx-auto text-left md:text-center md:w-3/4 lg:w-2/4">
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-white md:text-5xl md:mb-6 md:leading-tight">Start Building Your Website.</h2>
                <div className="flex mb-0 space-x-0 md:space-x-2 justify-evenly">
                <button className="inline-flex items-center justify-center w-full px-5 py-4 mb-2 text-indigo-600 bg-white border-2 rounded-md sm:w-auto sm:mb-0" href="#">
                    Get Started
                </button>
                <button className="inline-flex items-center justify-center w-full px-5 py-4 mb-2 text-white bg-indigo-600 border-2 rounded-md sm:w-auto sm:mb-0" href="#">
                    Book a Demo
                </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default callToAction