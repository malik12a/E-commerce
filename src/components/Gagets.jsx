import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Gagets = () => {
  return (
    <div className='absolute mt-125 w-275 ml-30 h-[216px]'>
       <div className='flex h-full'>
          <div className=' h-[216px] w-60 rounded' >
               <Link to={"gagets"}>
       <img src={assets.gadget} alt="gagets" />
       <h1 className='ml-4 absolute top-6 font-semibold'>Consumer <br /> electronics and <br />gadgets</h1>
       <button className='bg-white ml-4 rounded w-25 h-8 absolute top-25'>Source now</button>
       </Link>
          </div>
          <div className=' h-[108px] w-55 border border-gray-200'>
               <Link to={"gagets"}>
       <img src={assets.watch} alt="watch" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Smart watches</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 19</h2>
       </Link>
          </div>

           <div className=' h-[108px] w-55 border border-gray-200'>
              <Link to={"gagets"}>
       <img src={assets.camera} alt="camera" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Cameras</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 89</h2>
       </Link>
          </div>

           <div className=' h-[108px] w-55 border border-gray-200'>
              <Link to={"gagets"}>
       <img src={assets.headset2} alt="headset" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Headphones</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 10</h2>
       </Link>
          </div>

          <div className=' h-[108px] w-55 border border-gray-200 '>
              <Link to={"gagets"}>
       <img src={assets.jug} alt="jug" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Smart Watches</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 90</h2>
       </Link>
          </div>
           <div className=' h-[108px] w-54 absolute mt-27 ml-59 border border-gray-200 '>
               <Link to={"gagets"}>
       <img src={assets.headset1} alt="headset" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Gaming set</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 35</h2>
       </Link>
          </div>
          <div className=' h-[108px] w-54 absolute mt-27 ml-113 border border-gray-200 '>
               <Link to={"gagets"}>
       <img src={assets.laptop} alt="laptop" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Laptop & PC</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 340</h2>
       </Link>
          </div>
          <div className=' h-[108px] w-54 absolute mt-27 ml-167 border border-gray-200 '>
               <Link to={"gagets"}>
       <img src={assets.tablet} alt="tablet" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Tablets</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 19</h2>
       </Link>
          </div>
          <div className=' h-[108px] w-54 absolute mt-27 ml-221 border border-gray-200 '>
               <Link to={"gagets"}>
       <img src={assets.mobile1} alt="plant" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Smart phones</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 240</h2>
       </Link>
          </div>
        </div>
    </div>
  )
}

export default Gagets