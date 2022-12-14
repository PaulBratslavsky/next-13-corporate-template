import React from 'react'

const feature_column = () => {
  return (
    <div>
        <section className="bg-white">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                    <div className='w-8 h-8 bg-gray-400 rounded-full'></div>

                        <h1 className="mt-4 text-xl font-semibold text-gray-800">Default Taiwindcss Config</h1>

                        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                    </div>

                    <div>
                    <div className='w-8 h-8 bg-gray-400 rounded-full'></div>

                        <h1 className="mt-4 text-xl font-semibold text-gray-800">Fully Responsive Components</h1>

                        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                    </div>

                    <div>
                        <div className='w-8 h-8 bg-gray-400 rounded-full'></div>

                        <h1 className="mt-4 text-xl font-semibold text-gray-800">RTL Languages Support</h1>

                        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim fusce tortor, ac sed malesuada blandit. Et mi gravida sem feugiat.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default feature_column