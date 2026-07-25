import React from 'react'
import { BsInstagram, BsTwitterX, BsFacebook, BsYoutube, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-5 sm:px-10 lg:px-20 py-10 sm:py-14">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-12">

        {/* Brand */}
        <div>
          <h2 className="font-merriweather text-2xl font-bold mb-4">
            Kronos
          </h2>
          <p className="font-raleway text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            Precision crafted timepieces for those who value every second. Luxury watches delivered to your doorstep across Nigeria.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-xl">
              <BsInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-xl">
              <BsTwitterX />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-xl">
              <BsFacebook />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-xl">
              <BsYoutube />
            </a>
            <a href="https://wa.me/2348012345678" target="_blank" rel="noopener" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-xl">
              <BsWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-raleway font-bold text-white text-sm uppercase tracking-widest mb-6">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {['Home', 'Shop', 'New Arrivals', 'Today\'s Deals', 'About Us', 'Contact'].map((link, index) => (
              <li key={index}>
                <a href="#" className="font-raleway text-gray-400 text-sm hover:text-red-500 transition-colors duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-raleway font-bold text-white text-sm uppercase tracking-widest mb-6">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="flex flex-col gap-1">
              <span className="font-raleway text-white text-xs uppercase tracking-widest">Address</span>
              <span className="font-raleway text-gray-400 text-sm">14 Luxury Avenue, Victoria Island, Lagos, Nigeria</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-raleway text-white text-xs uppercase tracking-widest">Phone</span>
              <span className="font-raleway text-gray-400 text-sm">+234 9132945217</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-raleway text-white text-xs uppercase tracking-widest">Email</span>
              <span className="font-raleway text-gray-400 text-sm">kronoswatches@gmail.com</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-raleway text-white text-xs uppercase tracking-widest">Hours</span>
              <span className="font-raleway text-gray-400 text-sm">Mon – Sat: 9am – 6pm</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10 mb-6"></div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-raleway text-gray-500 text-xs">
          &copy; 2026 Kronos Watches. All rights reserved.
        </p>
        <p className="font-raleway text-gray-500 text-xs">
          Designed & Built by Oc-Paschal
        </p>
      </div>

    </footer>
  )
}

export default Footer