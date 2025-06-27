import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"],
    },
    {
      title: "Partnership",
      links: ["About Us", "Find Store", "Categories", "Blogs"],
    },
    {
      title: "Information",
      links: ["Help center", "Money Refund", "Shopping", "Contact Us"],
    },
    {
      title: "For users",
      links: ["Login", "Register", "Settings", "My Orders"],
    },
    {
      title: "Get app",
      type: "apps", // identifies image section
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 absolute z-0 mt-6 w-full">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 py-8 border-b border-gray-500/30 text-gray-500">
        <div>
          <img className="w-34 md:w-32" src={assets.logo_colored} alt="logo" />
          <p className="max-w-[410px] mt-6">
            Best information about <br /> the company lies here!
          </p>
        </div>

        <div className="flex flex-wrap w-full md:w-[65%] gap-10">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>

              {section.type === "apps" ? (
                <div className="flex flex-col space-y-3">
                  <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                    <img src={assets.playstore} alt="Play Store" className="w-32" />
                  </a>
                  <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.appstore} alt="App Store" className="w-32" />
                  </a>
                </div>
              ) : (
                <ul className="text-sm space-y-1">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="hover:underline transition">{link}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © E-commerce.
      </p>
    </div>
  );
};

export default Footer;
