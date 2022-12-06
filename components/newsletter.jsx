import React from 'react'

const newsletter = () => {
  return (
    <div>
        <section className="bg-gray-100">
            <div className="p-8 mt-10 md:p-12 lg:px-16 lg:py-10">
                <div className="max-w-lg mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                    Subscribed To Our Newsletter
                </h2>
                </div>

                <div className="max-w-xl mx-auto mt-8">
                <form action="#" className="sm:flex sm:gap-4">
                    <div className="sm:flex-1">
                    <label for="email" className="sr-only">Email</label>

                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full p-3 text-gray-700 transition bg-white border-indigo-600 rounded-md shadow-sm focus:border-white focus:outline-none focus:ring focus:ring-indigo-500"
                    />
                    </div>

                    <button
                    type="submit"
                    className="flex items-center justify-center w-full px-5 py-3 mt-4 text-indigo-600 transition bg-white border-2 border-indigo-600 rounded-md group focus:outline-none sm:mt-0 sm:w-auto"
                    >
                    <span className="text-sm font-medium"> Sign Up </span>
                    </button>
                </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default newsletter