import { CreditCard, Landmark, ShieldHalf } from "lucide-react"

const Benefits = () => {
  return (
    <div className="flex items-center justify-center w-screen">
        <div className="p-30 bg-white rounded-4xl shadow-lg">
            {/* TOP */}
            <div className="flex items-center justify-between gap-70">
                <div>
                    <p className="text-cyan-600 text-sm tracking-wider uppercase font-medium">Future Payment</p>
                    <h1 className="text-6xl mt-5 leading-tight">
                        Experience that grows<br/> with your scale.
                    </h1>
                </div>
                <div>
                    <p className="text-gray-500 text-2xl leading-relaxed">
                        Design a financial operating system that works for <br/>
                        your business and streamlined cash flow<br/>
                        management
                    </p>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="flex flex-row my-15 gap-40">
                <div>
                    <CreditCard size={60} className="my-5"/>
                    <h1 className="font-semibold font-sans text-2xl">Free transfers</h1>
                    <p className="text-gray-500">
                        Create a financial experienceay and <br/>
                        automate repeat purchases by scheduling <br/>
                        recurring payments.
                    </p>
                </div>

                <div>
                    <Landmark size={60} className="my-5" />
                    <h1 className="font-semibold font-sans text-2xl">Multiple accounts</h1>
                    <p className="text-gray-600">
                        Create a financial experienceay and <br/>
                        automate repeat purchases by scheduling <br/>
                        recurring payments.
                    </p>
                </div>

                <div>
                    <ShieldHalf size={60} className="my-5" />
                    <h1 className="font-semibold font-sans text-2xl">Unmatched security</h1>
                    <p className="text-gray-500">
                        Create a financial experienceay and <br/>
                        automate repeat purchases by scheduling <br/>
                        recurring payments.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefits
