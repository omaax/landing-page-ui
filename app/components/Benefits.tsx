const Benefits = () => {
  return (
    <div className="m-5 p-5 bg-gray-200 rounded-2xl shadow-lg">
        {/* TOP */}
        <div className="flex items-center justify-between">
            <div>
                <p className="text-cyan-600 mt-5 uppercase">Future Payment</p>
                <h1 className="text-4xl mt-2 w-100">Experience that grows with your scale.</h1>
            </div>
            <div>
                <p className="w-110 mt-10 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-row my-10">
            <div>
                <h1 className="my-5">icon</h1>
                <h1 className="font-bold text-lg">Title</h1>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <h1 className="my-5">icon</h1>
                <h1 className="font-bold text-lg">Title</h1>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <h1 className="my-5">icon</h1>
                <h1 className="font-bold text-lg">Title</h1>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </div>
  )
}

export default Benefits
