import React from 'react'
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Region = () => {
  const navigate = useNavigate();
  return (
    <div className="relative mt-4 w-272  h-[180px] rounded ml-30">
      <p className="font-semibold text-2xl mb-4">Suppliers by region</p>
      <div className="flex gap-3 h-full">
        <div onClick={()=>{navigate('/supplierRegion');scrollTo(0,0);}} className="flex-1 min-w-[204px] h-15 rounded">
          <img src={assets.flag1} alt="flag1" />
        </div>

        <div onClick={()=>{navigate('/supplierRegion');scrollTo(0,0);}} className="flex-1 min-w-[204px] h-15 rounded">
          <img src={assets.flag2} alt="flag2" />
        </div>

        <div onClick={()=>{navigate('/supplierRegion');scrollTo(0,0);}} className="flex-1 min-w-[204px] h-15 rounded">
          <img src={assets.flag3} alt="flag3" />
        </div>

        <div onClick={()=>{navigate('/supplierRegion');scrollTo(0,0);}} className="flex-1 min-w-[204px] h-15 rounded">
          <img src={assets.flag4} alt="flag4" />
        </div>

         <div onClick={()=>{navigate('/supplierRegion');scrollTo(0,0);}} className="flex-1 min-w-[204px] h-15 rounded ">
          <img src={assets.flag5} alt="flag5" />
        </div>

        <div onClick={()=>{navigate('/supplierRegion');scrollTo(0,0);}} className="absolute ml-0 w-[207px] h-15 rounded  top-27">
          <img src={assets.flag6} alt="flag6" />
        </div>

        <div onClick={()=>{navigate('/supplierRegion');scrollTo(0,0);}} className="absolute ml-55 w-[207px] h-15 rounded  top-27">
          <img src={assets.flag7} alt="flag7" />
        </div>

        <div onClick={()=>{navigate('/supplierRegion');scrollTo(0,0);}} className="absolute ml-110 w-[207px] h-15 rounded  top-27">
          <img src={assets.flag1} alt="flag1" />
        </div>

        <div onClick={()=>{navigate('/supplierRegion');scrollTo(0,0);}} className="absolute ml-165 w-[207px] h-15 rounded  top-27">
          <img src={assets.flag9} alt="flag9" />
        </div>

        <div onClick={()=>{navigate('/supplierRegion');scrollTo(0,0);}} className="absolute ml-220 w-[207px] h-15 rounded  top-27">
          <img src={assets.flag10} alt="flag10" />
        </div>

      </div>
    </div>
  );
};

export default Region