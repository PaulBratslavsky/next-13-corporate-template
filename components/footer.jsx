import React from 'react'

const footer = () => {
  return (
    <div>
        <footer className="px-4 py-12 mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
                <div className="col-span-3">
                <a href="#" title="Hellonext Home Page" className="flex items-center">
                    <img src="https://dummyimage.com/302x302" className="w-12 h-12 p-2 text-white rounded-full" alt='Strapi logo placeholder' width="86" height="24" /> Strapi
                    <span className="sr-only">Home Page</span>
                </a>
                <p className="my-4 text-xs leading-normal text-gray-600">
                    The leading open source headless CMS built with <strong>100% JavaScript</strong>. Built simple, secure and powerful APIs with Strapi
                </p>
                </div>
                <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Product</p>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#">Features</a>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#">Pricing</a>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#">Feedback</a>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#">FAQs</a>
                </nav>
                <nav className="col-span-2 md:col-span-1 lg:col-span-2">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Support</p>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#">Chat</a>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#"> Email Support </a>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#"> Help </a>
                </nav>
                <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Resources</p>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#">Blog</a>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#"> Twitter </a>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#">Alternatives</a>
                </nav>
                <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Company</p>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#">About Us</a>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#">Privacy</a>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#">Terms</a>
                <a className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-indigo-600" href="#">Status</a>
                </nav>
            </div>
            <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-indigo-600 md:flex-row md:items-center">
                <p className="mb-2 text-xs text-left text-gray-600 md:mb-0">Built by developers, for developers.</p>
                <p className="mb-0 text-xs text-left text-gray-600 md:mb-0">Copyright &copy; 2022/23 JAMstack</p>
            </div>
        </footer>
    </div>
  )
}

export default footer