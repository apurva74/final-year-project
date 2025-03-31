import React from 'react'

function Banner() {
  return (
    <>
    {/* here mt is margin for small device or normal device used in 2nd div */}
    {/* md for midium device */}
    {/* you can use hooks for */}

    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  my-20">
        <div className='m-full  order-2 md:order-1  md:w-1/2 mt-12 md:mt-40' >
            <div className='space-y-12'>
                <h1 className='text-4xl font-bold'>Your Gateway to <span className='text-yellow-400'>Local Opportunities </span>in Education and Employment</h1>
                <p className='text-xl'>Bridging the Gap Between Students, Colleges, and Companies in Lucknow with Area-Specific Channels for Internships, Jobs, and Educational Resources.</p>
            </div>
        </div>
        {/* here in tailwindcss there is the class called order. */}
        <div className='order-1 m-full md:w-1/2'>
            <img src='banner2.png' className='w-92 h-92'></img>
        </div>
    </div>

    </>
  )
}
export default Banner;