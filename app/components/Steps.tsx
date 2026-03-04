const Steps = () => {
  return (
    <div className="bg-gray-600 text-white mt-20 py-30 px-20">
        <div>
            <p className="text-cyan-600">STEP</p>
            <h1 className="w-150 font-bold text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum.</h1>
        </div>
        {/* STEPS */}
        <div className="mt-10 flex flex-row gap-5">
            <div className="bg-cyan-800 p-5 rounded-xl">
                <h1 className="font-bold text-5xl">1</h1>
                <h1 className="text-xl my-4">Open your account</h1>
                <p className="w-70 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem</p>    
            </div>    
            <div className="bg-cyan-800 p-5 rounded-xl">
                <h1 className="font-bold text-5xl">2</h1>
                <h1 className="text-xl my-4">Open your account</h1>
                <p className="w-70 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem</p>    
            </div>    
            <div className="bg-cyan-800 p-5  rounded-xl">
                <h1 className="font-bold text-5xl">3</h1>
                <h1 className="text-xl my-4">Open your account</h1>
                <p className="w-70 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem</p>    
            </div>    
        </div>
    </div>
  )
}

export default Steps
