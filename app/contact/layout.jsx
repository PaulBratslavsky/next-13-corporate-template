import React from 'react'

const layout = ({children}) => {
  return (
    <section className="relative text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col w-full mb-12 text-center">
             <h1 className="block pb-2 mb-5 text-4xl font-extrabold leading-none tracking-normal text-transparent md:text-6xl md:tracking-tight bg-clip-text bg-gradient-to-l from-blue-600 to-indigo-600">Get in touch</h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">We&apos;d love to hear from you.</p>
            </div>
            
            <div>{children}</div>
            
            <div className="container flex flex-col items-center px-4 py-12 mx-auto mt-10 text-center bg-indigo-600">
                <h2 className="max-w-2xl mx-auto text-3xl font-semibold tracking-tight text-white xl:text-4xl">
                    Join the Strapi community for the latest updates and features
                </h2>

                <p className="max-w-4xl mt-6 text-center text-gray-300">
                    Stay in touch with us on Discord, Twitter, YouTube and Discourse for the latest Strapi news and product updates.
                </p>

                <div className="inline-flex w-full mt-6 sm:w-auto">
                    <a href="https://discord.com/invite/strapi" className="inline-flex items-center justify-center w-full px-6 py-4 font-semibold text-white capitalize duration-300 border border-white rounded hover:text-black hover:border-black focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        JOIN NOW
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default layout