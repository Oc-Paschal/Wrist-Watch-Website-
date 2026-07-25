import { AnimatePresence, motion } from 'framer-motion'
import { BsX, BsDash, BsPlus, BsTrash3, BsWhatsapp, BsBagX } from 'react-icons/bs'
import { useCart } from '../context/CartContext'
import { sendCartToWhatsApp } from '../utils/whatsapp'

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems,
  } = useCart()

  const handleCheckout = () => {
    sendCartToWhatsApp(cart)
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Panel */}
          <motion.aside
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#0d0d0d] text-white z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div>
                <h2 className="font-merriweather text-xl font-bold">Your Bag</h2>
                <p className="font-raleway text-xs text-gray-400 mt-1">
                  {totalItems === 0 ? 'No items yet' : `${totalItems} item${totalItems > 1 ? 's' : ''}`}
                </p>
              </div>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="text-white/70 hover:text-red-500 hover:rotate-90 transition-all duration-300 text-2xl cursor-pointer"
              >
                <BsX />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16">
                  <BsBagX className="text-5xl text-white/20" />
                  <p className="font-raleway text-gray-400 text-sm max-w-[220px]">
                    Your bag is empty. Add a watch to start your order.
                  </p>
                  <button
                    onClick={closeCart}
                    className="font-raleway text-xs uppercase tracking-widest text-red-500 border-b border-red-500 pb-1 hover:text-red-400 hover:border-red-400 transition-colors cursor-pointer"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                <ul className="flex flex-col gap-5">
                  <AnimatePresence initial={false}>
                    {cart.map((item) => (
                      <motion.li
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 40, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex gap-4 border-b border-white/10 pb-5"
                      >
                        <div className="w-20 h-20 bg-white/5 rounded-md shrink-0 flex items-center justify-center overflow-hidden">
                          <img src={item.image} alt={item.name} className="h-full object-contain" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-raleway font-semibold text-sm leading-snug pr-2">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              aria-label={`Remove ${item.name}`}
                              className="text-white/40 hover:text-red-500 transition-colors cursor-pointer shrink-0"
                            >
                              <BsTrash3 className="text-sm" />
                            </button>
                          </div>
                          <p className="font-raleway text-red-500 text-sm font-bold mt-1">
                            ₦{item.price.toLocaleString()}
                          </p>

                          <div className="flex items-center gap-3 mt-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center border border-white/20 text-white/70 hover:border-red-500 hover:text-red-500 transition-colors cursor-pointer"
                            >
                              <BsDash />
                            </button>
                            <span className="font-raleway text-sm w-5 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center border border-white/20 text-white/70 hover:border-red-500 hover:text-red-500 transition-colors cursor-pointer"
                            >
                              <BsPlus />
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="px-6 py-6 border-t border-white/10 bg-[#0d0d0d]">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-raleway text-sm text-gray-400 uppercase tracking-widest">Total</span>
                  <span className="font-merriweather text-2xl font-bold">₦{totalPrice.toLocaleString()}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-black font-raleway font-bold text-sm uppercase tracking-widest py-4 hover:bg-[#1fb855] active:scale-[0.98] transition-all duration-200 cursor-pointer rounded"
                >
                  <BsWhatsapp className="text-lg" />
                  Checkout via WhatsApp
                </button>
                <p className="font-raleway text-[11px] text-gray-500 text-center mt-3 leading-relaxed">
                  You'll be redirected to WhatsApp with your order pre-filled to send to our team.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
