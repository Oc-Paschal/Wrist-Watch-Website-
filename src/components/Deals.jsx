import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsCart2 } from "react-icons/bs";
import content from "../data/Content.json";
import { useCart } from "../context/CartContext";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Deals = () => {
  const { deals } = content;
  const { addToCart } = useCart();

  const [timeLeft, setTimeLeft] = useState({
    hours: 158,
    minutes: 9,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-5 sm:px-10 lg:px-20 py-10 sm:py-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
        <h2 className="font-extrabold text-xl sm:text-2xl font-raleway">Today's Deals</h2>
        <div className="flex gap-2 items-center bg-red-500 text-white px-4 py-2 font-raleway font-bold text-sm w-fit">
          Ends In: {String(timeLeft.hours).padStart(2, "0")} :{" "}
          {String(timeLeft.minutes).padStart(2, "0")} :{" "}
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
      </div>

      {/* Product Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {deals.map((deal) => (
          <motion.div
            variants={item}
            key={deal.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group"
          >
            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold font-raleway px-2 py-1 rounded z-10">
              {deal.discount}
            </div>

            {/* Image */}
            <div className="bg-gray-50 p-4 sm:p-6 flex items-center justify-center h-36 sm:h-52">
              <img
                src={deal.image}
                alt={deal.name}
                className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Card Body */}
            <div className="p-3 sm:p-4">
              {/* Name */}
              <h3 className="font-raleway font-semibold text-gray-800 text-xs sm:text-sm mb-2 line-clamp-1">
                {deal.name}
              </h3>

              {/* Stars */}
              <div className="flex gap-1 mb-3 text-xs sm:text-base">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < deal.rating ? "text-yellow-400" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Price & Cart */}
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-red-500 font-bold font-raleway text-xs sm:text-sm block truncate">
                    ₦{deal.price.toLocaleString()}
                  </span>
                  <span className="text-gray-400 line-through text-[10px] sm:text-xs font-raleway">
                    ₦{deal.oldPrice.toLocaleString()}
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => addToCart(deal)}
                  className="text-gray-500 hover:text-red-500 cursor-pointer transition-colors duration-200 shrink-0"
                >
                  <BsCart2 className="text-lg sm:text-xl" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Deals;
