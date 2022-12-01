import React from 'react'
import Testimonial from './testimonial_card'
import Newsletter from './newsletter'

const testimonial_layout = () => {
  return (
    <>
    <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-4 lg:px-8">
            <div class="mx-auto max-w-xl text-center">
                <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
                    Read trusted reviews from our customers
                </h2>

                <p class="text-gring-offset-warm-gray-500 mx-auto mt-4 max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                    praesentium natus sapiente commodi. Aliquid sunt tempore iste
                    repellendus explicabo dignissimos placeat, autem harum dolore
                    reprehenderit quis! Quo totam dignissimos earum.
                </p>
            </div>
            
        </div>
        <Testimonial />
        {/* Logo section */}
            <div class="px-4 py-6 mx-auto max-w-3xl">
                <div class="grid grid-cols-3 gap-5">
                    <div class="flex items-center justify-center">
                        <div class='h-12 w-12 rounded-full bg-gray-400'></div>
                    </div>
                    <div class="flex items-center justify-center">
                        <div class='h-12 w-12 rounded-full bg-gray-400'></div>
                    </div>
                    <div class="flex items-center justify-center">
                        <div class='h-12 w-12 rounded-full bg-gray-400'></div>
                    </div>
                </div>
            </div>
        </section>
        <Newsletter />
    </>
  )
}

export default testimonial_layout