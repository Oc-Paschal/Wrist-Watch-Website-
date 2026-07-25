import { motion } from 'framer-motion'

// A minimal 12-hour dial marker — ticks around a circle, with the current
// page's "hour" picked out. A quiet nod to Kronos being a watch brand,
// used in place of a breadcrumb.
const DialMark = ({ hour }) => {
  const ticks = Array.from({ length: 12 }, (_, i) => i + 1)
  const cx = 50
  const cy = 50
  const outer = 44

  return (
    <svg viewBox="0 0 100 100" className="w-14 h-14 sm:w-16 sm:h-16" aria-hidden="true">
      <circle cx={cx} cy={cy} r={47} fill="none" stroke="#3a3a3a" strokeWidth="1" />
      {ticks.map((t) => {
        const isActive = t === hour
        const angle = (t / 12) * 2 * Math.PI - Math.PI / 2
        const inner = isActive ? outer - 11 : outer - 5
        const x1 = cx + outer * Math.cos(angle)
        const y1 = cy + outer * Math.sin(angle)
        const x2 = cx + inner * Math.cos(angle)
        const y2 = cy + inner * Math.sin(angle)
        return (
          <line
            key={t}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={isActive ? '#f59e0b' : '#6b6b6b'}
            strokeWidth={isActive ? 2.5 : 1.4}
            strokeLinecap="round"
          />
        )
      })}
    </svg>
  )
}

const PageHeader = ({ kicker, title, description, hour, index, total = '03' }) => (
  <section className="bg-[#0d0d0d] text-white pt-28 sm:pt-36 pb-14 sm:pb-20 px-5 sm:px-10 lg:px-20">
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-xl"
      >
        <p className="font-raleway text-red-500 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
          {kicker}
        </p>
        <h1 className="font-merriweather text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h1>
        {description && (
          <p className="font-raleway text-gray-400 text-sm sm:text-base mt-4 max-w-md">
            {description}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className="hidden sm:flex flex-col items-center gap-2 shrink-0"
      >
        <DialMark hour={hour} />
        <span className="font-raleway text-[11px] tracking-[0.3em] text-gray-500">
          {index} / {total}
        </span>
      </motion.div>
    </div>
  </section>
)

export default PageHeader
