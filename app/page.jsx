import Feature_Section from '../components/feature_section'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <main className="bg-white">
          <div class="container px-6 py-16 mx-auto">
            <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                      <span className='block mb-3 font-semibold text-left text-gray-600'>NEW STRAPI x NEXT.JS STARTER</span>
                        <h1 class="text-3xl font-semibold text-gray-800 uppercase lg:text-3xl">The best way to build your Corporate Site.</h1>
                        
                        <p class="mt-2 text-gray-600 dark:text-gray-600">Get started with your Strapi business website in seconds.</p>
                       
                        {/*buttons container  */}
                      <div className="flex justify-between w-80">
                        <button class="w-full tracking-wider px-6 py-5 mt-6 text-sm uppercase transition-colors duration-300 transform bg-white text-gray-800 rounded-md lg:w-auto hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 hover:text-white border-2 border-indigo-600">Get Started</button>
                        <button class="w-full tracking-wider px-6 py-5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-indigo-600 rounded-md lg:w-auto hover:bg-indigo-700 focus:outline-none focus:bg-indigo-600">See The Code
                        </button>
                      </div>
                      
                      <p className="mt-4 text-sm text-gray-500">Want to build your own from scratch? Tutorial coming soon</p>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <Image
                    alt="Logo placement"
                    src='https://dummyimage.com/312x302'
                    width={50}
                    height={50}
                    className="w-full h-full lg:max-w-2xl"
                    />
                </div>

            </div>
        </div>
        <Feature_Section />
      </main>
    </div>
  )
}
