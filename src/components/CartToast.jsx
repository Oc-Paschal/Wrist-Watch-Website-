import { AnimatePresence, motion } from 'framer-motion'
import { BsCheckCircleFill } from 'react-icons/bs'
import { useCart } from '../context/CartContext'

const CartToast = () => {
  const { toast } = useCart()

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[80] pointer-events-none px-4 w-full flex justify-center">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="flex items-center gap-2 bg-black text-white font-raleway text-sm px-5 py-3 rounded-full shadow-xl border border-white/10 max-w-[90vw]"
          >
            <BsCheckCircleFill className="text-red-500 shrink-0" />
            <span className="truncate">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CartToast
