import React from 'react'
import { BsInstagram, BsTwitterX, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import PageHeader from './PageHeader'

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        kicker="Get in touch"
        title="Let's talk watches"
        description="Questions about a piece, an order, or something custom — we're here."
        hour={9}
        index="03"
      />

      {/* Contact Section */}
      <div className="px-5 sm:px-10 lg:px-20 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

        {/* Left - Contact Info */}
        <div>
          <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-3">
            Get in Touch
          </h2>
          <div className="w-12 h-[1px] bg-red-500 mb-6"></div>
          <p className="font-raleway text-gray-500 text-sm leading-relaxed mb-8">
            Have a question about a timepiece or want to place an order? Reach out to us and we'll get back to you within 24 hours.
          </p>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-sm shrink-0">
                📍
              </div>
              <div>
                <h4 className="font-raleway font-bold text-gray-800 text-sm mb-1">Address</h4>
                <p className="font-raleway text-gray-500 text-sm">14 Luxury Avenue, Victoria Island, Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-sm shrink-0">
                📞
              </div>
              <div>
                <h4 className="font-raleway font-bold text-gray-800 text-sm mb-1">Phone</h4>
                <p className="font-raleway text-gray-500 text-sm">+234 9132945217</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-sm shrink-0">
                ✉️
              </div>
              <div>
                <h4 className="font-raleway font-bold text-gray-800 text-sm mb-1">Email</h4>
                <p className="font-raleway text-gray-500 text-sm">hello@kronoswatches.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-sm shrink-0">
                🕐
              </div>
              <div>
                <h4 className="font-raleway font-bold text-gray-800 text-sm mb-1">Hours</h4>
                <p className="font-raleway text-gray-500 text-sm">Monday – Friday: 9am – 6pm</p>
                <p className="font-raleway text-gray-500 text-sm">Saturday: 10am – 3pm</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a href="https://instagram.com" target="_blank" rel="noopener" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-200">
              <BsInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-200">
              <BsTwitterX />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-200">
              <BsFacebook />
            </a>
            <a href="https://wa.me/2348012345678" target="_blank" rel="noopener" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-black hover:text-white hover:border-black transition-all duration-200">
              <BsWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-merriweather text-3xl font-bold text-gray-900 mb-3">
            Send a Message
          </h2>
          <div className="w-12 h-[1px] bg-red-500 mb-6"></div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-raleway text-xs font-semibold text-gray-700 uppercase tracking-widest">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="font-raleway text-sm px-4 py-3 border border-gray-200 outline-none focus:border-black transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-raleway text-xs font-semibold text-gray-700 uppercase tracking-widest">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="font-raleway text-sm px-4 py-3 border border-gray-200 outline-none focus:border-black transition-colors duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-raleway text-xs font-semibold text-gray-700 uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="font-raleway text-sm px-4 py-3 border border-gray-200 outline-none focus:border-black transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-raleway text-xs font-semibold text-gray-700 uppercase tracking-widest">
                Subject
              </label>
              <input
                type="text"
                placeholder="I'd like to order a watch..."
                className="font-raleway text-sm px-4 py-3 border border-gray-200 outline-none focus:border-black transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-raleway text-xs font-semibold text-gray-700 uppercase tracking-widest">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us how we can help..."
                className="font-raleway text-sm px-4 py-3 border border-gray-200 outline-none focus:border-black transition-colors duration-200 resize-none"
              />
            </div>

            <button className="font-raleway bg-black text-white text-sm font-semibold px-8 py-4 hover:bg-red-500 transition-all duration-300 cursor-pointer tracking-wider uppercase mt-2">
              Send Message
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact