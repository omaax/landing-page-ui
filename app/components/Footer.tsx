import { Facebook, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-custom-blue pt-60 p-20">
        <div className="flex justify-around">
            <h1 className='pr-10 font-bold text-3xl text-custom-navy-blue text-gray-800'>Finepay</h1>
            {/* Solutions */}
            <div className="flex flex-row gap-20">
                <div className="">
                    <h1 className="font-semibold mb-5">Solutions</h1>
                    <div className="text-gray-400 text-sm">
                        <Link href="/"><p>Small Bussiness</p></Link>
                        <Link href="/"><p className="py-2">Freelancers</p></Link>
                        <Link href="/"><p>Customers</p></Link>
                        <Link href="/"><p className="py-2">Taxes</p></Link>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-semibold  mb-5">Company</h1>
                    <div className="text-gray-400 text-sm">
                        <Link href="/"><p>About Us</p></Link>
                        <Link href="/"><p className="py-2">Careeer</p></Link>
                        <Link href="/"><p>Contact</p></Link>
                    </div>
                </div>
                <div className="">
                    <h1 className="font-semibold  mb-5">Learn</h1>
                    <div className="text-gray-400 text-sm">
                        <Link href="/"><p>Blog</p></Link>
                        <Link href="/"><p className="py-2">Ebooks</p></Link>
                        <Link href="/"><p>Guides</p></Link>
                        <Link href="/"><p className="py-2">Templates</p></Link>
                    </div>
                </div>
            </div>
            <div className="">
                <p>Follow us on</p>
                <div className="flex flex-row gap-3 mt-3">
                    <Link href="/"><Twitter /></Link>
                    <Link href="/"><Facebook /></Link>
                    <Link href="/"><Linkedin /></Link>
                </div>
            </div>
        </div>
        <p className="text-center text-custom-navy-blue text-sm mt-5">©2026 Finpay. All rights reserved.</p>
    </div>
  )
}

export default Footer