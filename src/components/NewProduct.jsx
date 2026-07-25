import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BsCart2, BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import content from '../data/Content.json'
import { useCart } from '../context/CartContext'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const NewProduct = () => {
  const { newProducts } = content
  const { addToCart } = useCart()
  const [current, setCurrent] = useState(0)
  const itemsPerView = 4

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? Math.max(newProducts.length - itemsPerView, 0) : prev - 1))
  }

  const handleNext = () => {
    setCurrent((prev) => (prev >= newProducts.length - itemsPerView ? 0 : prev + 1))
  }

  const visibleProducts = newProducts.slice(current, current + itemsPerView)

  return (
    <div className="px-5 sm:px-10 lg:px-20 py-10 sm:py-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-extrabold text-xl sm:text-2xl font-raleway">New Products</h2>
          <div className="w-12 h-[1px] bg-amber-400 mt-2"></div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="border border-gray-300 p-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-pointer"
          >
            <BsChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="border border-gray-300 p-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200 cursor-pointer"
          >
            <BsChevronRight />
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <motion.div
        key={current}
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {visibleProducts.map((product) => (
          <motion.div
            variants={item}
            key={product.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group"
          >
            {/* Badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold font-raleway px-2 py-1 rounded z-10">
              {product.badge}
            </div>

            {/* Image */}
            <div className="bg-gray-50 p-4 sm:p-6 flex items-center justify-center h-36 sm:h-52">
              <img
                src={product.image}
                alt={product.name}
                className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Card Body */}
            <div className="p-3 sm:p-4">
              {/* Brand */}
              <p className="font-raleway text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mb-1">
                {product.brand}
              </p>

              {/* Name */}
              <h3 className="font-raleway font-semibold text-gray-800 text-xs sm:text-sm mb-2 line-clamp-1">
                {product.name}
              </h3>

              {/* Stars */}
              <div className="flex gap-1 mb-3 text-xs sm:text-base">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Price & Cart */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-red-500 font-bold font-raleway text-xs sm:text-sm truncate">
                  ₦{product.price.toLocaleString()}
                </span>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => addToCart(product)}
                  className="text-gray-500 hover:text-red-500 cursor-pointer transition-colors duration-200 shrink-0"
                >
                  <BsCart2 className="text-lg sm:text-xl" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default NewProduct
