const Footer = () => {
  return (
    <div className="my-20">
        <div className="flex justify-around ">
            <h1 className='pr-10 font-bold text-gray-800'>Finepay</h1>
            {/* Solutions */}
            <div className="flex flex-row gap-20">
                <div className="">
                    <h1 className="font-semibold mb-5">Solutions</h1>
                    <div className="text-gray-400 text-sm">
                        <p>Taxes</p>
                        <p>Taxes</p>
                        <p>Taxes</p>
                        <p>Taxes</p>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-semibold  mb-5">Company</h1>
                    <div className="text-gray-400 text-sm">
                        <p>Taxes</p>
                        <p>Taxes</p>
                        <p>Taxes</p>
                        <p>Taxes</p>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-semibold  mb-5">Learn</h1>
                    <div className="text-gray-400 text-sm">
                        <p>Taxes</p>
                        <p>Taxes</p>
                        <p>Taxes</p>
                        <p>Taxes</p>
                    </div>
                </div>
            </div>
            <div className="">
                <p>Follow us on</p>
                <div className="flex flex-row">
                    <p>twitter</p>
                    <p>twitter</p>
                    <p>twitter</p>
                </div>
            </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-5">© 2026 Finpay. All rights reserved.</p>
    </div>
  )
}

export default Footer