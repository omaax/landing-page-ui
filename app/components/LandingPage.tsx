import React from 'react'

const LandingPage = () => {
  return (
    <div className='grid grid-cols-2 gap-20'>
      {/* TEXT & EMAIL & IMAGES*/}
      <div className='p-10'>
        {/* TEXT */}
        <div className=''>
            <h1 className='font-bold text-6xl'>Get Paid Early</h1>
            <h1 className='text-6xl'>Save automatically</h1>
            <h1 className='text-6xl'>all your pay.</h1>
            <p className='text-lg text-gray-500 w-125 mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate ac risus ut semper. Duis nec scelerisque metus</p>
        </div>
        {/* EMAIL */}
        <div className='border-1 bg-gray-200 rounded-lg p-3 my-7 border-gray-400'>
            <input className='w-full' type="text" id="fname" name="fname" />
        </div>
        {/* IMAGES */}
        <div className='flex flex-row gap-16 text-3xl font-bold'>
            <h1>Klarna.</h1>
            <h1>coinbase</h1>
            <h1>Klarna.</h1>
        </div>
      </div>
      {/* IMAGE & CARD */}
      <div className='relative mt-20 ml-10'>
        {/* BIG CARD */}
        <div className='absolute bg-gray-200 rounded-2xl p-4 w-80'>
            <h1 className='text-lg font-bold mt-5'>Dipa Inhouse</h1>
            <p>dipainhouse@gmail.com</p>
            <div className='border-1 border-gray-400 rounded-xl p-4 mt-4'>
                <p>Invoice</p>
                <h1 className='font-bold text-lg'>$1.872.226</h1>
                <p>april 21,2028</p>
            </div>
            <div className='border-1 border-gray-400 p-4 rounded-xl my-2'>
                <h1>Credit Card</h1>
            </div>
            <div className='border-1 border-gray-400 p-4 rounded-xl'>
                <h1>Bank Account</h1>
            </div>
            <button className='border-1 text-white bg-gray-800 p-3 rounded-xl my-2 w-full'>Pay</button>
        </div>
        {/* SMALL CARD */}
        <div className='absolute w-55 h-66 flex flex-col items-center justify-between  bg-gray-800 text-white rounded-2xl -top-[10%] left-[30%] p-2'>
            <div className='mt-4'>
                <p className='text-sm'>Credit Card</p>
                <h1 className='text-xl'>234 **** ****</h1>
            </div>
            <div className='flex p-4 m-0 gap-20'>
                <h1>VISA</h1>
                <h1>WIFI</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
