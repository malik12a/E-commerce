import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Deals = () => {
  return (
    <div className='absolute mt-2 w-275 ml-30 h-[400px]'>
     <div className='flex h-full'>
     <div className=' h-[250px] w-70 border border-gray-200 rounded'>
        <img src={assets.countdown} alt="countdown"  className='absolute mt-6 ml-3'/>
     </div>
     <div className=' h-[250px] w-50 border border-gray-200'>
        <Link to={"offers"}>
       <img src={assets.watch} alt="watches" />
       <img src={assets.offer1} alt="offer1" className='ml-7'/>
       </Link>
     </div>

     <div className=' h-[250px] w-50 border border-gray-200'>
       <Link to={"offers"}>
       <img src={assets.laptop} alt="laptops" />
       <img src={assets.offer2} alt="offer2" className='ml-13'/>
       
       </Link>
     </div>

     <div className=' h-[250px] w-50 border border-gray-200'>
       <Link to={"offers"}>
       <img src={assets.camera} alt="cameras" />
       <img src={assets.offer3} alt="offer3" className='ml-8'/>
       </Link>
     </div>

     <div className=' h-[250px] w-50 border border-gray-200'>
       <Link to={"offers"}>
       <img src={assets.headset1} alt="headsets" />
       <img src={assets.offer4} alt="offer4" className='ml-10'/>
       </Link>
     </div>

     <div className=' h-[250px] w-50 border border-gray-200'>
       <Link to={"offers"}>
       <img src={assets.mobile2} alt="mobiles" />
       <img src={assets.offer5} alt="offer5" className='ml-6'/>
       </Link>
     </div>

     </div>
    </div>
  )
}

export default Deals