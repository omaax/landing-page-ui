import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='bg-custom-blue'>
      <div className='flex items-center justify-between mx-auto px-20 sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-450'>
        {/* LOGO & LINKS */}
        <div className='flex p-8'>
          <Link href="/">
            <h1 className='pr-10 cursor-pointer font-bold text-4xl text-[#023347]'>Finepay</h1>
          </Link>
          <div className='flex gap-15 text-lg mt-2 ml-20'>
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
          <button className='rounded-2xl cursor-pointer border border-gray-400 hover:bg-gray-100 text-lg px-8 py-3'>Login</button>
          <button className='rounded-2xl cursor-pointer bg-custom-light-blue hover:bg-custom-navy-blue text-lg text-white px-8 py-3'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
