import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product } = useAppContext();
  const { addToCart } = useAppContext();
  const { saveForLater } = useAppContext();
  const [thumbnail, setThumbnail] = useState(null);
  const [activeTab, setActiveTab] = useState("Description");
  const tabs = ["Description", "Reviews", "Shipping", "About seller"];

  const product1 = product.find((item) => item._id === parseInt(id));

  const relatedProducts = product.filter(
    (item) =>
      item.category === product1?.category && item._id !== product1._id
  ).slice(0, 4);

  useEffect(() => {
    if (product1?.image?.length) {
      setThumbnail(product1.image[0]);
    }
  }, [product1]);

  if (!product1) return <div className="p-6">Product not found</div>;

  return (
    <div>
      <div className="p-6 pb-2 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN - Images */}
        <div className="col-span-1">
          <div className="border border-gray-200 rounded-md overflow-hidden mb-4 w-300 h-[460px]">
            <img src={thumbnail} alt="Main Product" className="object-contain w-60 border rounded border-gray-300 h-60 ml-8 mt-4" />
            <div className="flex gap-1">
              {product1.image.map((img, index) => (
                <img
                  key={index}
                  onClick={() => setThumbnail(img)}
                  src={img}
                  alt={`Thumb ${index + 1}`}
                  className={`w-10 h-10 border rounded mt-6 ml-2 cursor-pointer object-contain ${
                    thumbnail === img ? "ring-2 ring-blue-500" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CENTER COLUMN - Product Info */}
        <div className="col-span-1 space-y-2">
          <h1 className="text-md text-green-500 mt-2 font-semibold">{product1.inStock}</h1>
          <h1 className="text-2xl font-semibold">{product1.name}</h1>
          <p className="text-orange-600 text-xl font-bold">
            {product1.rating} <span className='text-gray-500 text-sm font-semibold'>📝32 reviews</span> <span className='text-gray-500 text-sm font-semibold'>📦  154 sold</span>
          </p>
          <div className="bg-orange-50 h-20 p-4 rounded-md border relative">
            <div className='absolute'>
              <p className="text-red-600 font-bold">{product1.price}</p>
              <p className='text-xs'>50-100 pcs</p>
            </div>
            <div className='ml-24 absolute border-l pl-2 border-gray-300'>
              <p className='font-bold'>{product1.price2}</p>
              <p className='text-xs'>100-700 pcs</p>
            </div>
            <div className='absolute ml-48 border-l pl-2 border-gray-300'>
              <p className='font-bold'>{product1.price3}</p>
              <p className='text-xs'>700+ pcs</p>
            </div>
          </div>
          <div className="space-y-1 text-sm text-gray-700">
            <p className='flex gap-30 border-b border-gray-200 pb-4 mb-2'><span className='text-gray-400'>Price:</span> Negotiable</p>
            <p className='flex gap-30 '><span className='text-gray-400'>Type:</span> {product1.category}</p>
            <p className='flex gap-24 '><span className='text-gray-400'>Material:</span> Plastic material</p>
            <p className='flex gap-26 border-b border-gray-200 pb-4 mb-2'><span className='text-gray-400'>Design:</span> Modern nice</p>
            <p className='flex gap-14 '><span className='text-gray-400'>Customization:</span> Customized logo/design packages</p>
            <p className='flex gap-20 '><span className='text-gray-400'>Protection:</span> Refund Policy</p>
            <p className='flex gap-22 border-b border-gray-200 pb-4 mb-2'><span className='text-gray-400'>Warranty:</span> 2 years full warranty</p>
          </div>
        </div>

        {/* RIGHT COLUMN - Seller Info */}
        <div className="col-span-1 border border-gray-300 rounded-md h-[250px] ml-25 mt-4 w-60 space-y-2">
          <img src={assets.seller} alt="seller" className='h-10 mt-5 ml-2' />
          <p className="text-sm text-gray-500 ml-4">📍 Germany, Birth</p>
          <p className="text-sm text-gray-500 ml-4">✅ Verified Seller</p>
          <p className="text-sm ml-4">🌍 Worldwide shipping</p>
          <button className="w-50 h-10 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 ml-4">
            Send Inquiry 
          </button>
          <button className="w-50 text-blue-600 border rounded h-8 ml-4">Seller's profile</button>
          <button
             onClick={() => saveForLater(product1)} className="text-lg font-semibold ml-16 mt-4 text-blue-500 hover:underline cursor-pointer">♡ Save for later</button>
        </div>
      </div>

      {/* Description section */}
      <div className='col-span-2 w-306 h-[540px]'>
        <div className='col-span-1 w-230 border border-gray-200 ml-5 rounded h-[530px] pb-2'>
          <div className="flex gap-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-lg ml-4 mt-2 font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-6 ml-4 space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>{product1.description}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-md">
            <table className="w-140 ml-4 mt-6 border border-gray-200 text-left text-sm">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-medium bg-gray-50">Model</td>
                  <td className="p-2">#8786867</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-medium bg-gray-50">Style</td>
                  <td className="p-2">Classic style</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-medium bg-gray-50">Certificate</td>
                  <td className="p-2">ISO-898921212</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-medium bg-gray-50">Size</td>
                  <td className="p-2">34mm x 450mm x 19mm</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium bg-gray-50">Memory</td>
                  <td className="p-2">36GB RAM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="space-y-1 ml-4 mt-4">
            {["Some great feature name here", "Lorem ipsum dolor sit amet, consectetur", "Duis aute irure dolor in reprehenderit", "Some great feature name here"].map((feature, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* You may like section */}
      <div className='h-[440px] w-69 border ml-237 absolute top-157 rounded border-gray-200 overflow-y-auto'>
  <h1 className='mt-2 ml-2 font-semibold'>You may like</h1>
  
  <div className="flex flex-col gap-2 p-2">
    {relatedProducts.map((item) => (
      <div
        key={item._id}
        onClick={() => navigate(`/details/${item._id}`)}
        className="flex items-center gap-3 rounded p-2 hover:shadow cursor-pointer"
      >
        <img
          src={item.image[0]}
          alt={item.name}
          className="h-14 w-14 object-contain"
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium">{item.name}</p>
          <p className="text-xs text-gray-500">{item.category}</p>
          <p className="text-sm font-semibold text-green-600">{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>
 {/* You may like section Grid */}
<div className='h-55 ml-5 w-300 border top-300 rounded border-gray-200 overflow-y-auto p-2'>
  <h1 className='text-lg font-semibold mb-2'>You may like</h1>

  <div className="grid grid-cols-4 md:grid-cols-6 ">
    {relatedProducts.map((item) => (
      <div
        key={item._id}
        onClick={() => navigate(`/details/${item._id}`)}
        className=" w-30 rounded p-2 hover:shadow cursor-pointer"
      >
        <img
          src={item.image[0]}
          alt={item.name}
          className=" h-20 w-full object-contain mb-2"
        />
        <p className="text-sm ml-4 font-medium truncate">{item.name}</p>
        <p className="text-xs ml-4 text-gray-500">{item.category}</p>
        <p className="text-sm ml-4 font-semibold text-green-600">{item.price}</p>
      </div>
    ))}
  </div>
</div>

 <div className='relative w-300 h-30 border border-gray-200 ml-5 mt-4 rounded overflow-hidden'>
  <img src={assets.BannerBottom} alt="BannerBottom" className='w-300 h-full object-cover' />

  <button onClick={()=>navigate(`/cart`)} className='absolute bottom-10 left-260 bg-orange-400 text-white h-11 w-32 rounded shadow-md hover:bg-orange-600'>
    Shop Now
  </button>
</div>


    </div>
  );
};

export default ProductDetails;
