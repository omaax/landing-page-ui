const ThirdSection = () => {
  return (
    <div className="mt-180 mx-50">
      <div className='flex flex-col items-center justify-center'>
        <p className='text-cyan-600 text-sm'>WHY US</p>
        <h1 className="text-4xl">Why they prefer Finpay</h1>
      </div>
      {/* GRID */}
      <div className='grid grid-cols-2 mt-15 gap-10'>
        <div className="bg-gray-200 p-15 rounded-3xl">
            <h1 className="text-9xl font-semibold text-cyan-600">3K+</h1>
            <h1 className="text-2xl font-bold pt-15">Businesses already running <br/> on Finpay</h1>
        </div>
        <div className="bg-gray-200 p-10 rounded-3xl">
            <h1 className="text-2xl w-80">Instant Withdraw your funds at any time</h1>
            <h1 className="mt-20 font-bold text-lg">icons</h1>
        </div>
        <div className="bg-gray-200 p-10 rounded-3xl w-full col-span-full flex flex-row gap-10">
            <div>
                <h1 className="text-4xl">No asset volatility</h1>
                <p className="text-gray-500 w-70 mt-5">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-white w-100 h-50 ml-20 rounded-xl p-5">
                <p>Summary</p>
                <h1 className="text-2xl font-bold">$1,876,123</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection
