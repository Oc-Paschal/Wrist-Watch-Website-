import React from 'react'
import content from '../data/Content.json'

const Brands = () => {
  const { brands } = content

  return (
    <div className="py-10 bg-black overflow-hidden">
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...brands, ...brands].map((brand, index) => (
          <span
            key={index}
            className="font-merriweather text-white text-xl font-bold opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            {brand.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Brands