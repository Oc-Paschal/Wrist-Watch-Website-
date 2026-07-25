import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { BsCart2, BsList, BsX } from "react-icons/bs";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const CartButton = ({ totalItems, onClick, className = "" }) => (
  <button
    onClick={onClick}
    aria-label="Open cart"
    className={`relative cursor-pointer text-white hover:text-red-500 transition-colors duration-200 ${className}`}
  >
    <BsCart2 className="text-2xl" />
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.span
          key={totalItems}
          initial={{ scale: 0.4 }}
          animate={{ scale: [1.4, 1] }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center"
        >
          {totalItems}
        </motion.span>
      )}
    </AnimatePresence>
  </button>
)

const Navbar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const { totalItems, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isHome ? window.innerHeight * 0.7 : window.innerHeight * 0.15
      setScrolled(window.scrollY > threshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = (path) =>
    `relative hover:text-red-500 cursor-pointer transition-colors duration-200 ${
      location.pathname === path ? 'text-red-500' : 'text-white'
    }`

  return (
    <>
      <nav className={`flex items-center justify-between px-5 sm:px-8 lg:px-12 py-5 lg:py-6 w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled || !isHome ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}>
        {/* Logo */}
        <Link to="/" className="flex gap-2 items-center shrink-0">
          <img src="/images/Logs.png" alt="Kronos logo" className="h-7 w-7 sm:h-8 sm:w-8 object-contain" />
          <div className="text-xl sm:text-2xl font-merriweather font-extrabold text-white">Kronos</div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-sm font-semibold font-raleway">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link className={linkStyle(link.to)} to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Cart */}
        <div className="hidden md:block">
          <CartButton totalItems={totalItems} onClick={openCart} />
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="md:hidden flex items-center gap-5">
          <CartButton totalItems={totalItems} onClick={openCart} />
          <button
            className="text-white text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <BsX /> : <BsList />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md z-50 flex flex-col items-center gap-6 py-8 overflow-hidden"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  className={linkStyle(link.to)}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
