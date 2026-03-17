import { CreditCard, Landmark } from 'lucide-react'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='bg-custom-blue h-[1100px] pl-30'>
        <div className='grid grid-cols-2 mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-450'>
            {/* TEXT & EMAIL & IMAGES*/}
            <div className='p-10'>
                {/* TEXT */}
                <div className='text-custom-navy-blue text-6xl mt-20 leading-20'>
                    <h1>
                        <span  className='font-semibold text-4xl lg:text-6xl'>Get paid early</span><br/> save automatically<br/> all your pay.
                    </h1>
                    <p className='text-xl text-gray-500 w-125 my-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate ac risus ut semper.</p>
                </div>
                {/* EMAIL */}
                <div className='relative border bg-white rounded-2xl border-gray-200 w-fit'>
                    <button className='absolute right-1 top-1 hover:bg-custom-navy-blue cursor-pointer rounded-2xl bg-[#2A8E9E] text-lg text-white p-3'>Get Started</button>
                    <input className='w-125 h-15 p-5 focus:outline-none placeholder:text-gray-400' placeholder='Your bussiness email' type="text" id="fname" name="fname" />
                </div>
                {/* IMAGES */}
                <div className='flex flex-row gap-16 text-4xl text-custom-navy-blue font-bold mt-10'>
                    <h1>Klarna.</h1>
                    <h1>coinbase</h1>
                    <h1>instacart</h1>
                </div>
            </div>
            {/* IMAGE & CARD */}
            <div className='relative mt-20'>
                {/* BIG CARD */}
                <div className='absolute bg-white rounded-2xl p-4 w-100'>
                    <h1 className='text-lg font-bold mt-5'>Omar Adel</h1>
                    <p>Omaradel1v9@gmail.com</p>
                    <div className='border border-gray-300 rounded-xl p-4 mt-4'>
                        <p className='text-xs text-gray-800'>Invoice</p>
                        <h1 className='text-xl font-semibold'>$1.872.226</h1>
                        <p className='text-xs text-gray-800'>april 21,2028</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 border-2 border-custom-light-blue p-4 rounded-xl my-2'>
                        <CreditCard />
                        <h1 className='text-sm font-sans'>Credit Card</h1>
                    </div>
                    <div className='flex flex-row items-center gap-2 border border-gray-300 p-4 rounded-xl'>
                        <Landmark />
                        <h1 className='text-sm '>Bank Account</h1>
                    </div>
                    <button className='border text-white bg-custom-navy-blue p-3 rounded-xl my-2 w-full'>Pay</button>
                </div>
                {/* SMALL CARD */}
                <div className='absolute w-55 h-66 flex flex-col items-center justify-between  bg-custom-light-blue text-white rounded-2xl -top-[10%] left-[30%]'>
                    <div className='mt-4'>
                        <p className='text-sm'>Credit Card</p>
                        <h1 className='text-xl'>234 **** ****</h1>
                    </div>
                    <div className='flex justify-between w-full bg-custom-navy-blue p-5 rounded-b-2xl'>
                        <h1 className='font-bold'>VISA</h1>
                        <h1>WIFI</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage
