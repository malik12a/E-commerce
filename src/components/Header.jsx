import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedLanguage,setSelectedLanguage] = useState("English,USD");
  const options = [
    { label: "English, USD", img: assets.flag1 },
    { label: "INR", img: assets.flag2 },
    { label: "EUR", img: assets.flag3 },
  ];

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-3 border-b border-gray-300 bg-white relative">

      {/* CENTER: Navigation Links */}
      <div className="hidden sm:flex gap-6 font-semibold">
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span className="block h-0.5 bg-gray-800"></span>
            <span className="block h-0.5 bg-gray-800"></span>
            <span className="block h-0.5 bg-gray-800"></span>
          </button>

          {open && (
            <div className="absolute left-0 mt-8 w-60 bg-white shadow-lg z-50">
              <NavLink to="/automobiles" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Automobiles</NavLink>
              <NavLink to="/clothes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Clothes and wear</NavLink>
              <NavLink to="/homeinterior" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home interiors</NavLink>
              <NavLink to="/computerandtech" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Computer and tech</NavLink>
              <NavLink to="/tools" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tools & Equipment</NavLink>
              <NavLink to="/sports" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sports & Outdoors</NavLink>
              <NavLink to="/pets" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Animals & Pets</NavLink>
              <NavLink to="/mechinary" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Machinery Tools</NavLink>
              <NavLink to="/more" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">More Categories</NavLink>
            </div>
          )}
        </div>
        <p className="text-sm font-medium">All Categories</p>
        <NavLink to="/offers" className="text-sm text-gray-700 hover:text-black">Hot Offers</NavLink>
        <NavLink to="/gift" className="text-sm text-gray-700 hover:text-black">Gift Boxes</NavLink>
        <NavLink to="/project" className="text-sm text-gray-700 hover:text-black">Projects</NavLink>
        <NavLink to="/menu" className="text-sm text-gray-700 hover:text-black">Menu Items</NavLink>
         <select className="text-sm ">
          <option>Help</option>
          <option>Books</option>
          <option>Electronics</option>
          <option>Clothing</option>
        </select>
      </div>

      {/* RIGHT: Select Dropdowns */}
      <div className="hidden sm:flex items-center gap-4">
        <select className=" text-md text-gray-700">
          <option>English, USD</option>
          <option>INR</option>
          <option>EUR</option>
        </select>
        <select className=" text-md text-gray-700">
          <option>Ship to</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
        </select>
      </div>

      {/* MOBILE MENU ICON (Only on small screens) */}
      <div className="sm:hidden flex items-center gap-4">
        <button onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
        <NavLink to="/profile" className="flex items-center gap-2">
          <img src={assets.user} alt="profile" className="w-4 h-4" /> Profile
        </NavLink>
        <NavLink to="/message" className="flex items-center gap-2">
          <img src={assets.comment_alt} alt="message" className="w-4 h-4" /> Messages
        </NavLink>
        <NavLink to="/orders" className="flex items-center gap-2">
          <img src={assets.heart} alt="orders" className="w-4 h-4" /> Orders
        </NavLink>
        <NavLink to="/cart" className="flex items-center gap-2">
          <img src={assets.shopping_cart} alt="cart" className="w-4 h-4" /> Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
