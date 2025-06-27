import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const ExtraServices = () => {
    const navigate = useNavigate();
  return (
    <div className="relative mt-4 w-272  h-[237px] rounded ml-30">
      <p className="font-semibold text-2xl mb-4">Our extra services</p>
      <div className="flex gap-3 h-full">
        <div onClick={()=>{navigate('/extraservices');scrollTo(0,0);}} className="flex-1 min-w-[250px] h-47 rounded border border-gray-200 ">
          <img src={assets.ExtraService1} alt="ExtraService1"  />
        </div>

        <div onClick={()=>{navigate('/extraservices');scrollTo(0,0);}} className="flex-1 min-w-[250px] h-47 rounded border border-gray-200 ">
          <img src={assets.ExtraService2} alt="ExtraService2"  />
        </div>

        <div onClick={()=>{navigate('/extraservices');scrollTo(0,0);}} className="flex-1 min-w-[250px] h-47 rounded border border-gray-200 ">
          <img src={assets.ExtraService3} alt="ExtraService3"  />
        </div>

        <div onClick={()=>{navigate('/extraservices');scrollTo(0,0);}} className="flex-1 min-w-[250px] h-47 rounded border border-gray-200 ">
          <img src={assets.ExtraService4} alt="ExtraService4"  />
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
