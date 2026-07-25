import { motion } from 'framer-motion'
import content from '../data/Content.json'

const SpecialOffer = () => {
  const { label, heading, description, button, image } = content.specialOffer

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-5 sm:px-10 lg:px-20 py-12 sm:py-16 bg-gray-100 gap-10 lg:gap-8 text-center lg:text-left">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
      >
        <h3 className='font-raleway font-bold text-red-600 mb-2 uppercase tracking-widest text-sm'>
          {label}
        </h3>
        <h1 className='font-merriweather text-3xl sm:text-4xl leading-tight font-bold mb-4 uppercase'>
          {heading}
        </h1>
        <p className="font-raleway text-sm font-medium text-gray-600 max-w-sm mb-6">
          {description}
        </p>
        <button className='font-raleway bg-transparent border border-gray-800 text-gray-800 text-sm font-semibold px-8 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300 cursor-pointer tracking-wider uppercase'>
          {button}
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <img src={image} alt="Special Offer" className="h-64 sm:h-80 lg:h-[500px] object-contain" />
      </motion.div>
    </div>
  )
}

export default SpecialOffer
