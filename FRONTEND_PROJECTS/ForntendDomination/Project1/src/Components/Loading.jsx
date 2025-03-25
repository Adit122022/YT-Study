import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 via-cyan-200 to-teal-300 animate-pulse">
      {/* Spinner */}
      <motion.div
        className="w-20 h-20 border-4 border-white/50 border-t-blue-500 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
      />
      
      {/* Loading Text */}
      <motion.h1
        className="mt-5 text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Loading Awesome Products...
      </motion.h1>

      {/* Subtext with Wave Effect */}
      <motion.p
        className="mt-2 text-gray-600 text-sm  tracking-wider"
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        Please wait a moment ⏳
      </motion.p>
    </div>
  );
};

export default Loading;
