import { ArrowUpRight } from "lucide-react"

const Mission = () => {
  return (
    <div className=''>
      <div className='flex flex-col items-center justify-center mt-35 mb-70'>
        {/* TEXT */}
        <div className='text-center'>
            <p className='uppercase text-lg text-cyan-600'>our mission</p>
            <h1 className='font-sans font-semibold text-6xl my-5'>We've helped<br/>innovative companies</h1>
            <p className='text-gray-600 font-sans text-2xl'>Hundreds of all sizes and across all industries<br/> have made a big improvemnets with us.</p>
        </div>
        {/* percentage */}
        <div className='flex flex-row my-25 text-center gap-30'>
            <div>
                <h1 className='text-8xl'>24%</h1>
                <p className="text-3xl font-sans mt-5">Revenue Business</p>
            </div>
            <div>
                <h1 className='text-8xl'>180K</h1>
                <p className="text-3xl font-sans mt-5">In annual revenue</p>
            </div>
            <div>
                <h1 className='text-8xl '>10+</h1>
                <p className="text-3xl font-sans mt-5">Months of runway</p>
            </div>
        </div>
        {/* PLAN */}
        <p className='uppercase text-xl font-sans font-semibold mb-5'>choose plan:</p>
        <div className='flex-row flex gap-10 mt-5'>
            {/* PLUS */}
            <div className='w-[600px] h-[280px] bg-[#E9F3F4] rounded-2xl flex flex-col justify-between p-15'>
                <h1 className='text-6xl font-bold'>Plus</h1>
                <div className='flex justify-between'>
                    <p className="text-4xl">$2.99/Month</p>
                    <ArrowUpRight size={40} strokeWidth={1.5}/>
                </div>
            </div>
            {/* PREMIUM */}
            <div className='w-[600px] h-[280px] text-white bg-custom-light-blue rounded-2xl flex flex-col justify-between p-15'>
                <h1 className='text-6xl font-bold'>Premium</h1>
                <div className='flex justify-between'>
                    <p className='text-4xl'>$6.99/Month</p>
                    <ArrowUpRight size={40} strokeWidth={1.5}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mission