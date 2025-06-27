import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HomeAndOutdoor = () => {
  return (
    <div className='absolute mt-68 w-275 ml-30 h-[216px]'>
        <div className='flex h-full'>
          <div className=' h-[216px] w-60 rounded' >
               <Link to={"homeAndOutdoor"}>
       <img src={assets.Home_and_outdoor} alt="homeAndOutdoor" />
       <h1 className='ml-4 absolute top-6 font-semibold'>Home and <br /> outdoor</h1>
       <button className='bg-white ml-4 rounded w-25 h-8 absolute top-20'>Source now</button>
       </Link>
          </div>
          <div className=' h-[108px] w-55 border border-gray-200'>
               <Link to={"homeAndOutdoor"}>
       <img src={assets.sofa1} alt="sofa" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Soft chair</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 19</h2>
       </Link>
          </div>

           <div className=' h-[108px] w-55 border border-gray-200'>
              <Link to={"homeAndOutdoor"}>
       <img src={assets.lamp} alt="lamp" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Lamp</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 19</h2>
       </Link>
          </div>

           <div className=' h-[108px] w-55 border border-gray-200'>
              <Link to={"homeAndOutdoor"}>
       <img src={assets.bed} alt="bed" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Kitchen Dishes</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 19</h2>
       </Link>
          </div>

          <div className=' h-[108px] w-55 border border-gray-200 '>
              <Link to={"homeAndOutdoor"}>
       <img src={assets.pot} alt="pot" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Kitchen items</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 19</h2>
       </Link>
          </div>
           <div className=' h-[108px] w-54 absolute mt-27 ml-59 border border-gray-200 '>
               <Link to={"homeAndOutdoor"}>
       <img src={assets.juicemaker} alt="juicemaker" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Kitchen mixer</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 100</h2>
       </Link>
          </div>
          <div className=' h-[108px] w-54 absolute mt-27 ml-113 border border-gray-200 '>
               <Link to={"homeAndOutdoor"}>
       <img src={assets.coffeemaker} alt="coffeemaker" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Coffee maker</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 39</h2>
       </Link>
          </div>
          <div className=' h-[108px] w-54 absolute mt-27 ml-167 border border-gray-200 '>
               <Link to={"homeAndOutdoor"}>
       <img src={assets.stand} alt="stand" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Home appliences</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 19</h2>
       </Link>
          </div>
          <div className=' h-[108px] w-54 absolute mt-27 ml-221 border border-gray-200 '>
               <Link to={"homeAndOutdoor"}>
       <img src={assets.plant} alt="plant" className='w-15 absolute mt-10 ml-36'/>
       <h1 className='ml-4 absolute top-2 font-semibold'>Decoration pieces</h1>
       <h4 className='text-sm absolute mt-8 ml-4'>From</h4>
       <h2 className='text-sm absolute mt-12 ml-4'>USD 10</h2>
       </Link>
          </div>
        </div>
    </div>
  )
}

export default HomeAndOutdoor