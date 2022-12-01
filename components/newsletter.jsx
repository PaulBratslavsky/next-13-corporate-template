import React from 'react'

const newsletter = () => {
  return (
    <div>
        <section class="bg-gray-100">
            <div class="p-8 md:p-12 lg:px-16 lg:py-10 mt-10">
                <div class="mx-auto max-w-lg text-center">
                <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                    Subscribed To Our Newsletter
                </h2>
                </div>

                <div class="mx-auto mt-8 max-w-xl">
                <form action="#" class="sm:flex sm:gap-4">
                    <div class="sm:flex-1">
                    <label for="email" class="sr-only">Email</label>

                    <input
                        type="email"
                        placeholder="Email address"
                        class="w-full rounded-md border-indigo-600 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-indigo-500"
                    />
                    </div>

                    <button
                    type="submit"
                    class="group mt-4 flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-indigo-600 transition focus:outline-none sm:mt-0 sm:w-auto border-2 border-indigo-600"
                    >
                    <span class="text-sm font-medium"> Sign Up </span>
                    </button>
                </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default newsletter