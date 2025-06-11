import React from 'react'
import { assets } from '../assets/assets'
import { Navigate, NavLink } from 'react-router-dom';


const NavBar = () => {
 const [open, setOpen] = React.useState(false)
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to={"/"}>
                <img className="h-9" src={assets.logo_colored} alt="logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                

      <div className="flex absolute start-90 items-center border border-blue-500 rounded-lg overflow-hidden max-w-md w-[600px]">
      <input
        type="text"
        placeholder="Search"
        className="flex-grow w-90 px-4 py-2 focus:outline-none"
      />
      <select className="bg-white px-3 py-2 text-gray-700 border-l border-blue-500 focus:outline-none">
        <option>All category</option>
        <option>Books</option>
        <option>Electronics</option>
        <option>Clothing</option>
      </select>
      <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
        Search
      </button>
    </div>

                <NavLink to={"/profile"}><img src={assets.user} alt="profile" /></NavLink>
                <NavLink to={"/message"}> <img src={assets.comment_alt} alt="message" /> </NavLink>
                <NavLink to={"/orders"}> <img src={assets.heart} alt="orders" /> </NavLink>
                <NavLink to={"/cart"}> <img src={assets.shopping_cart} alt="cart" /> </NavLink>
               
            </div>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                 <NavLink to={"/profile"}><img src={assets.user} alt="profile" /></NavLink>
                <NavLink to={"/message"}> <img src={assets.comment_alt} alt="message" /> </NavLink>
                <NavLink to={"/orders"}> <img src={assets.heart} alt="orders" /> </NavLink>
                <NavLink to={"/cart"}> <img src={assets.shopping_cart} alt="cart" /> </NavLink>
                
            </div>

        </nav>
    )
}

export default NavBar