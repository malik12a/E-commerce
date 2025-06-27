import React from 'react'

const News = () => {
  return (
    <div className='relative bg-zinc-200  mt-4 w-full  h-[237px] rounded '>
        <div className='absolute mt-10'>
           <h1 className='ml-135 font-semibold text-lg'>Subscribe on our newsletter</h1>
        </div>
            
        <div className='absolute mt-17'>
            <h1 className='ml-107 text-gray-500 text-sm'>Get dialy news on upcoming offers from many suppliers all over the world</h1>
        </div>

        <div className='absolute mt-27 h-8 w-60 bg-white ml-120 rounded '>
            <input type="text" placeholder='Email' className='ml-3 absolute mt-1' />
        </div>
        
        <div className='absolute mt-27 h-8 w-25 bg-indigo-500 ml-182 rounded '>
            <button className='ml-4 absolute mt-1 text-white'>Subscribe</button>
        </div>

    </div>
  )
}

export default News