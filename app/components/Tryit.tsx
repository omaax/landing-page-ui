import { ArrowUpRight } from "lucide-react"

const Tryit = () => {
  return (
    <div className="mb-20">
      <div className='flex flex-row items-center justify-between gap-80 bg-custom-navy-blue rounded-2xl px-20 py-20 mx-35'>
        {/* TEXT */}
        <div>
            <p className='uppercase text-custom-light-blue'>try it now</p>
            <h1 className='text-white text-4xl my-3 leading-normal'>Ready to level up your<br/> payment process?</h1> 
            <p className='text-sm text-gray-400'>Supports small businesses with small invoicing, powerful<br/> integrations, and cash flow management tools.</p>
        </div>
        {/* BUTTONS */}
        <div className='flex items-center justify-center gap-4 text-white'>
            <button className='rounded-2xl px-9 py-4 bg-custom-light-blue cursor-pointer'>Get Started Now</button>
            <button className='flex gap-2 border-1 rounded-2xl px-9 py-4 hover:bg-white hover:text-black cursor-pointer'>Learn More <ArrowUpRight size={25} strokeWidth={1.5}/> </button>
        </div>
      </div>
    </div>
  )
}

export default Tryit
