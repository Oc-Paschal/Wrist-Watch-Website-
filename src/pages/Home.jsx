import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Content from "../data/Content.json";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Content.hero.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const { label, heading, description, button, image, video, size } =
    Content.hero[currentSlide];

  return (
    <section className="relative flex items-center h-screen overflow-hidden bg-[#1a1a1a]">
      {/* Video Background */}
      <AnimatePresence mode="wait">
        <motion.video
          key={video}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </motion.video>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full flex items-center justify-between px-5 sm:px-10 lg:px-20">
        {/* Left - Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={heading}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xs sm:max-w-md lg:max-w-lg"
          >
            <p className="font-raleway font-semibold text-gray-400 text-[11px] sm:text-xs tracking-[0.3em] uppercase mb-4">
              {label}
            </p>
            <div className="w-12 h-[1px] bg-amber-400 my-4"></div>
            <h1 className="font-merriweather text-3xl sm:text-5xl lg:text-6xl leading-tight font-bold text-white mb-6">
              {heading}
            </h1>
            <p className="font-raleway text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
              {description}
            </p>
            <button className="font-raleway bg-red-500 text-white text-sm font-semibold px-7 sm:px-8 py-3.5 sm:py-4 hover:bg-red-600 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer tracking-wider uppercase">
              {button}
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Right - Watch Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 hidden lg:block"
          >
            <img src={image} alt="Kronos Watch" className={`${size} object-contain drop-shadow-2xl`} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {Content.hero.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index ? "bg-red-500 w-8" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
