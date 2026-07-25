import { motion } from 'framer-motion'
import content from '../data/Content.json'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Testimonials = () => {
  const { testimonials } = content

  return (
    <section className="px-5 sm:px-10 lg:px-20 py-10 sm:py-14 bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="font-merriweather text-2xl sm:text-3xl font-bold text-gray-900">What Our Customers Say</h2>
        <div className="w-12 h-[1px] bg-amber-400 mt-3 mx-auto"></div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            variants={item}
            key={testimonial.id}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={testimonial.images}
              alt={testimonial.name}
              className="h-16 w-16 rounded-full object-cover mb-4"
            />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review */}
            <p className="font-raleway text-gray-600 text-sm leading-relaxed mb-6">
              {testimonial.review}
            </p>

            {/* Customer */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold font-raleway text-sm">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-raleway font-bold text-gray-800 text-sm">{testimonial.name}</h4>
                <p className="font-raleway text-gray-400 text-xs">{testimonial.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Testimonials
