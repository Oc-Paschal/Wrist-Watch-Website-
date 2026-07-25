import { useState } from 'react'
import { motion } from 'framer-motion'
import { BsCart2, BsFilter } from 'react-icons/bs'
import content from '../data/Content.json'
import { useCart } from '../context/CartContext'
import PageHeader from '../components/PageHeader'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const Shop = () => {
  const { products } = content
  const { addToCart } = useCart()
  const [selectedBrand, setSelectedBrand] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const brands = ['All', ...new Set(products.map((p) => p.brand))]
  const categories = ['All', ...new Set(products.map((p) => p.category))]

  const filteredProducts = products
    .filter((p) => selectedBrand === 'All' || p.brand === selectedBrand)
    .filter((p) => selectedCategory === 'All' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'low') return a.price - b.price
      if (sortBy === 'high') return b.price - a.price
      return 0
    })

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        kicker="The Collection"
        title="Shop timepieces"
        description="Browse our full range of precision watches, curated by brand and category."
        hour={3}
        index="01"
      />

      <div className="flex flex-col lg:flex-row px-5 sm:px-10 lg:px-20 py-10 sm:py-12 gap-8 lg:gap-10">

        {/* Mobile filter toggle */}
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="lg:hidden flex items-center justify-between border border-gray-200 px-4 py-3 font-raleway text-sm font-semibold text-gray-700 cursor-pointer"
        >
          <span className="flex items-center gap-2"><BsFilter /> Filter & Sort</span>
          <span className="text-gray-400">{filtersOpen ? 'Hide' : 'Show'}</span>
        </button>

        {/* Sidebar */}
        <div className={`w-full lg:w-64 shrink-0 ${filtersOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="mb-8">
            <h4 className="font-raleway font-bold text-gray-800 text-sm uppercase tracking-widest mb-4">
              Sort By
            </h4>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border border-gray-200 px-4 py-2 font-raleway text-sm text-gray-600 outline-none cursor-pointer"
            >
              <option value="default">Default</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className="mb-8">
            <h4 className="font-raleway font-bold text-gray-800 text-sm uppercase tracking-widest mb-4">
              Category
            </h4>
            <ul className="flex flex-wrap lg:flex-col gap-x-4 gap-y-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-raleway text-sm cursor-pointer transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'text-red-500 font-semibold'
                      : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="font-raleway font-bold text-gray-800 text-sm uppercase tracking-widest mb-4">
              Brand
            </h4>
            <ul className="flex flex-wrap lg:flex-col gap-x-4 gap-y-2">
              {brands.map((brand, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedBrand(brand)}
                  className={`font-raleway text-sm cursor-pointer transition-colors duration-200 ${
                    selectedBrand === brand
                      ? 'text-red-500 font-semibold'
                      : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  {brand}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <p className="font-raleway text-gray-400 text-sm mb-6">
            Showing {filteredProducts.length} products
          </p>

          <motion.div
            key={`${selectedBrand}-${selectedCategory}-${sortBy}`}
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div
                variants={item}
                key={product.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group"
              >
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
                  <p className="font-raleway text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mb-1">
                    {product.brand}
                  </p>
                  <h3 className="font-raleway font-semibold text-gray-800 text-xs sm:text-sm mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="font-raleway text-gray-400 text-xs mb-3 leading-relaxed hidden sm:block line-clamp-2">
                    {product.description}
                  </p>

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

      </div>
    </div>
  )
}

export default Shop
