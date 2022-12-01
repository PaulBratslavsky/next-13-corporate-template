import React from 'react'
import Image from 'next/image'
import Features_Column from './feature_column'

{/* <Image
    alt="Party"
    src='https://dummyimage.com/312x302'
    width={50}
    height={50}
    classNameName="absolute inset-0 object-cover w-full h-full"
    /> */}
    
const feature_section = () => {
  return (
    <div>
        <section className="px-4 py-5 mx-auto max-w-7xl">
            <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
                <div>
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Clear overview for efficient tracking</h2>
                <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-md">
                    Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like the smart search option allow you to quickly find any data you’re looking for.
                </p>
                <a href="#" className="w-full text-indigo-600 hover:text-indigo-500 sm:w-auto hover:letter-spacing: 0.025em tracking-wide hover:tracking-wide -tracking-2">View the list of UI sections &rarr;</a>
                </div>
                
                <Image
                alt="Party"
                src='https://dummyimage.com/600x360'
                width={450}
                height={450}
                classNameName="w-full h-full lg:max-w-2xl"
                />
                
            </div>
            <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
                <div className="order-none md:order-2">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">Decide how you integrate Payments</h2>
                <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
                    Love to code? Next to our ready-made and free plugins you can use our expansive yet simple API; decide how you integrate Payments and build advanced and reliable products yourself from
                    scratch.
                </p>
                <a href="#" className="w-full text-indigo-600 hover:text-indigo-500 hover:letter-spacing: 0.025em sm:w-auto tracking-wide hover:tracking-wide -tracking-2">View how to create a page &rarr;</a>
                </div>
                
                <Image
                alt="Party"
                src='https://dummyimage.com/600x360'
                width={450}
                height={450}
                classNameName="w-full h-full lg:max-w-2xl"
                />
            </div>
        </section>
        <Features_Column />
    </div>
  )
}

export default feature_section