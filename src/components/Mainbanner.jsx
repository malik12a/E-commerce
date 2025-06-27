import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Mainbanner = () => {
  const navigate = useNavigate();
  return (
    <div className='w-280 h-[400px] mt-3 ml-25'>

       <div className='absolute mt-3 w-[755px] h-[380px] px-10 ml-58'>
            <img src={assets.main_banner_image} alt="mainbanner" />
             <div className="text-zinc-900 absolute top-25 left-45 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
             <h1 className='text-xl'>Latest trending</h1>
             <h1 className='text-2xl font-bold'>Electronic items</h1>
             <button className='bg-zinc-100 rounded h-8 w-30 absolute mt-6'>Learn more</button>
             </div>
            
        </div>
        <div className='absolute mt-3 bg-blue-100 w-[170px] rounded ml-238 h-35 my-2'>
            <img className='absolute mt-3 ml-2' src={assets.Avatar} alt="avatar" />
            <p className='ml-14 absolute mt-3'>Hi! user <br /> lets get started</p>
            <button onClick={()=>navigate('/register')} className='btn-primary rounded bg-blue-500 h-6 w-[150px] ml-3 absolute mt-18 text-white text-sm'>Join now</button>
            <button onClick={()=>navigate('/login')} className='btn-primary rounded bg-zinc-100 h-6 text-blue-500 text-sm w-[150px] ml-3 absolute mt-26'>Login</button>
        </div>
         <div className='absolute mt-40 bg-orange-400 w-[170px] rounded ml-238 my-2 h-25'>
           <p className='ml-3 absolute mt-2 text-zinc-100 text-md'>Get US $10 off <br /> with a new <br />supplier</p>
        </div>
        <div className='absolute mt-67 bg-[#55BDC3] w-[170px] rounded ml-238 h-25'>
            <p className='ml-3 absolute mt-2 text-zinc-100 text-md'>Send quotes with <br /> supplier <br />preferences</p>
        </div>
    </div>
  )
}

export default Mainbanner