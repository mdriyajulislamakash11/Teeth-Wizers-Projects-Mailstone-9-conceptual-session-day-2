import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="hero min-h-[600px] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-black/80 backdrop-blur-sm"></div>
      <div className="hero-content text-center text-white z-10 px-4">
        <motion.div
          className="max-w-3xl mx-auto p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="mb-6 text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_0_20px_#4EE1EC]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Smile{" "}
            <span className="text-[#4EE1EC] drop-shadow-[0_0_10px_#4EE1EC]">
              Care
            </span>{" "}
            - Your{" "}
            <span className="text-[#FFD700] drop-shadow-[0_0_10px_#FFD700]">
              Trusted Dental
            </span>{" "}
            Partner
          </motion.h1>

          <motion.p
            className="mb-6 text-lg text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            <span className="text-[#00FFE5] font-semibold">
              <Typewriter
                words={[
                  "We ensure bright smiles with gentle, expert care.",
                  "Your healthy teeth is our priority.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </motion.p>

          <motion.button
            className="btn px-8 py-3 bg-gradient-to-r from-[#4EE1EC] to-[#A855F7] border-none text-white font-bold rounded-full hover:scale-105 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
