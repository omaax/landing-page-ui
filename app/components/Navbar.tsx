import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
        {/* LOGO & LINKS */}
      <div className='flex p-8'>
        <h1 className='pr-10 font-bold text-gray-800'>Finepay</h1>
        <div className='flex gap-10'>
            <p>products</p>
            <p>products</p>
            <p>products</p>
            <p>products</p>
        </div>
      </div>
      {/* LOGIN & SIGNUP */}
      <div className='flex items-center justify-end gap-3'>
        <button className='rounded-2xl bg-gray-200 p-3'>Login</button>
        <button className='rounded-2xl bg-gray-800 text-white p-3'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
