import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div  className='absolute mt-182 w-275 ml-30 h-[325px] rounded bg-zinc-500'>
      <img src={assets.hero} alt="hero" className='h-[325px] w-275 rounded' />
      <h1 className='absolute top-8 text-white text-xl ml-4 font-semibold'>An easy way to send <br />requests to all suppliers</h1>
      <h2 className='absolute top-23 text-white text-sm ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Pariatur quisquam rem blanditiis </h2>
      <div className='absolute top-4 rounded ml-178 bg-white h-[280px] w-90'>
          <h1 className='ml-3 font-bold absolute mt-4'>Send qoute to suppliers</h1>
          <input type="text" placeholder='What item you need? ' className='absolute mt-14 w-80 border border-zinc-200 rounded ml-3 text-black-500 overflow-hidden' />
          <input type="text" placeholder='Type more details ' className='absolute mt-23 w-80 h-20 border border-zinc-200 rounded ml-3 text-black-500' />
          <input type="text" placeholder='Type more details ' className='absolute h-7 mt-45 w-35  border border-zinc-200 rounded ml-3 text-black-500' />
          <select className="absolute mt-45 ml-40 border border-zinc-200 rounded w-18 h-7">
              <option>Pcs</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
          <button className='absolute mt-55 h-7 w-25 text-sm bg-blue-500 text-white rounded ml-3'>Send inquiry</button>
      </div>
    </div>
  )
}

export default Hero