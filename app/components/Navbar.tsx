import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#F5F9FA]'>
      <div className='flex items-center justify-between mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-450'>
        {/* LOGO & LINKS */}
        <div className='flex p-8'>
          <h1 className='pr-10 font-bold text-4xl text-[#023347]'>Finepay</h1>
          <div className='flex gap-15 text-xl mt-2 ml-20'>
              <Link href="/">
                <p className='cursor-pointer'>Products</p>
              </Link>
              <Link href="/">
                <p className='cursor-pointer'>Customers</p>
              </Link>
              <Link href="/">
                <p className='cursor-pointer'>Pricing</p>
              </Link>
              <Link href="/">
                <p className='cursor-pointer'>Learn</p>
              </Link>
          </div>
        </div>
        {/* LOGIN & SIGNUP */}
        <div className='flex items-center justify-end gap-3'>
          <button className='rounded-2xl border border-gray-400 text-lg px-8 py-3'>Login</button>
          <button className='rounded-2xl bg-custom-light-blue text-lg text-white px-8 py-3'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
