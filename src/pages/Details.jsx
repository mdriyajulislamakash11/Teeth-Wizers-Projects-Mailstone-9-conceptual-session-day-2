import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';

const Details = () => {
  const singleData = useLoaderData();
  const { treatment, image, description, cost, time, specialist } = singleData || {};

  return (
    <div
      className="relative max-w-4xl mx-auto p-6 mt-10 min-h-[600px] bg-cover bg-center rounded-xl"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-white p-6"
      >
        <h1 className="text-3xl font-bold mb-4">{treatment}</h1>
        <p className="text-sm mb-4">{description}</p>

        <div className="flex items-center justify-between mb-6">
          <span className="text-xl font-semibold text-yellow-400">
            Cost: ${cost}
          </span>
          {time && (
            <span className="text-sm">
              Duration: {time}
            </span>
          )}
        </div>

        {specialist && (
          <p className="text-sm mb-4">
            Specialist: <span className="font-semibold">{specialist}</span>
          </p>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full shadow-md transition duration-300"
        >
          Book Appointments
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Details;
