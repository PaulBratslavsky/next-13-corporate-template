import React from 'react'
import Testimonial from './testimonial_card'

const testimonial_layout = () => {
  return (
    <>
    <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 sm:py-4 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Read trusted reviews from our customers
                </h2>

                <p className="max-w-lg mx-auto mt-4 text-gring-offset-warm-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                    praesentium natus sapiente commodi. Aliquid sunt tempore iste
                    repellendus explicabo dignissimos placeat, autem harum dolore
                    reprehenderit quis! Quo totam dignissimos earum.
                </p>
            </div>
            
        </div>
        <Testimonial />
        {/* Logo section */}
            <div className="max-w-3xl px-4 py-6 mx-auto">
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex items-center justify-center">
                        <div className='w-12 h-12 bg-gray-400 rounded-full'></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className='w-12 h-12 bg-gray-400 rounded-full'></div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className='w-12 h-12 bg-gray-400 rounded-full'></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default testimonial_layout