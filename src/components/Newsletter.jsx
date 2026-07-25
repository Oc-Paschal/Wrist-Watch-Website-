import { motion } from 'framer-motion'

const Newsletter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="px-5 sm:px-10 lg:px-20 py-12 sm:py-14 bg-black text-white text-center"
    >
      {/* Header */}
      <h2 className="font-merriweather text-2xl sm:text-3xl font-bold mb-3">
        Stay in the Loop
      </h2>
      <p className="font-raleway text-gray-400 text-sm mb-8 max-w-md mx-auto">
        Subscribe to get exclusive deals, new arrivals and insider updates delivered straight to your inbox.
      </p>

      {/* Input */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="font-raleway text-sm px-6 py-4 w-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 outline-none focus:border-red-500 transition-colors duration-200"
        />
        <button className="font-raleway bg-red-500 text-white text-sm font-semibold px-8 py-4 w-full sm:w-auto hover:bg-red-600 transition-all duration-300 cursor-pointer tracking-wider uppercase whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </motion.section>
  )
}

export default Newsletter
