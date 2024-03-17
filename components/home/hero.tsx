import React from 'react'

export default function Hero() {
  return (
    <div className='w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
      <p>
        our summer collections
      </p>
      <h2>
        the new arrival <br /> <span className='text-coral-red'>nike</span> shoes
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Delectus, eius.
      </p>

      <div className='flex items-center justify-start gap-5 leading-none'>
        <div>
          <p className='font-semibold text-3xl'>
            1k+
          </p>
          <p>
            brands
          </p>
        </div>
        <div>
          <p className='font-semibold text-3xl'>
            500+
          </p>
          <p>
            shops
          </p>
        </div>
        <div>
          <p className='font-semibold text-3xl'>
            250k+
          </p>
          <p>
            customers
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
