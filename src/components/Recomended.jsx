import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const Recomended = () => {
    const {products1} = useAppContext();
  return (
    <div className='mt-270'>
      <p className='text-2xl md:text-2xl font-semibold ml-30'>Recomended</p>
      <div className='grid grid-cols-5 mt-8 gap-3 w-275 lg:grid-cols-5 mt-6 ml-30'>
        {
          products1.filter((product)=>product.inStock).slice(0,10).map((product,index)=><ProductCard key={index} product={product}/>)
        }
        
      </div>
    </div>
  )
}

export default Recomended