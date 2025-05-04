import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const words = service.description.split(" ");

  return (
    <motion.div
      className="rounded-lg overflow-hidden shadow-xl bg-gradient-to-br hover:scale-105 transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <img
        className="w-full h-56 object-cover rounded-t-lg shadow-md"
        src={service.image}
        alt={service.treatment}
      />
      <div className="p-6 flex flex-col justify-between h-full">
        <h2 className="text-2xl font-semibold hover:text-[#FFD700] transition duration-300 mb-4">
          {service.treatment}
        </h2>

        {/* Typing animation effect with line wrapping support */}
        <div className="text-sm mb-6 leading-relaxed">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <div className="flex justify-between">
          <span className="text-xl font-bold text-[#FFD700]">
            ${service.cost}
          </span>
          <motion.button
            className="bg-[#FFD700] text-[#1F2937] font-semibold px-4 py-2 rounded-full hover:scale-110 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
