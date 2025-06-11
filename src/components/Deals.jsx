import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Deals = () => {
  return (
    <div className='absolute mt-2 w-275 ml-30 h-[400px]'>
     <div className='flex h-full'>
     <div className=' h-[250px] w-70 border border-gray-400'>
        <img src={assets.countdown} alt="countdown"  className='absolute mt-6 ml-3'/>
     </div>
     <div className=' h-[250px] w-50 border border-gray-400'>
        <Link to={"offers"}>
       <img src={assets.watch} alt="watches" />
       <h1 className='ml-8 font-semibold'>Smart watches</h1>
       </Link>
     </div>

     <div className=' h-[250px] w-50 border border-gray-400'>
       <Link to={"offers"}>
       <img src={assets.laptop} alt="laptops" />
       <h1 className='ml-14 font-semibold'>Laptops</h1>
       </Link>
     </div>

     <div className=' h-[250px] w-50 border border-gray-400'>
       <Link to={"offers"}>
       <img src={assets.camera} alt="cameras" />
       <h1 className='ml-8 font-semibold'>GoPro cameras</h1>
       </Link>
     </div>

     <div className=' h-[250px] w-50 border border-gray-400'>
       <Link to={"offers"}>
       <img src={assets.headset1} alt="headsets" />
       <h1 className='ml-10 font-semibold'>Headphones</h1>
       </Link>
     </div>

     <div className=' h-[250px] w-50 border border-gray-400'>
       <Link to={"offers"}>
       <img src={assets.mobile2} alt="mobiles" />
       <h1 className='ml-14 font-semibold'>Mobiles</h1>
       </Link>
     </div>

     </div>
    </div>
  )
}

export default Deals