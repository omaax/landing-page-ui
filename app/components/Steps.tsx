const Steps = () => {
  return (
    <div className="bg-custom-navy-blue text-white mt-30 py-30 px-30">
        <div>
            <p className="text-custom-light-blue">STEP</p>
            <h1 className="text-5xl mt-5">Maximize your returns with a<br/> Reserve account that generates.</h1>
        </div>
        {/* STEPS */}
        <div className="mt-10 flex flex-row gap-10">
            <div className="bg-[#0B3A4F] p-12 rounded-xl">
                <h1 className="inline-block text-8xl font-bold
                                bg-gradient-to-b from-white from-10% to-[#0B3A4F] to-80%
                                bg-clip-text text-transparent">1</h1>
                <h1 className="text-2xl pb-3">Open your account</h1>
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem.</p>    
            </div>    
            <div className="bg-[#0B3A4F] p-12 rounded-xl">
                <h1 className="inline-block text-8xl font-bold
                                bg-gradient-to-b from-white to-[#0B3A4F] to-75%
                                bg-clip-text text-transparent">2</h1>
                <h1 className="text-2xl pb-3">Transfer your money</h1>
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem.</p>    
            </div>    
            <div className="bg-[#0B3A4F] p-12 rounded-xl">
                <h1 className="inline-block text-8xl font-bold to-75%
                                bg-gradient-to-b from-white to-[#0B3A4F]
                                bg-clip-text text-transparent">3</h1>
                <h1 className="text-2xl pb-3">Watch your balance grow</h1>
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem.</p>    
            </div>    
        </div>
    </div>
  )
}

export default Steps
