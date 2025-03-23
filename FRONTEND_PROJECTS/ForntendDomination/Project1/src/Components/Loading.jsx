import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = () => {


 
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 to-pink-500">
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
          <motion.h1
            className="text-2xl font-semibold text-white animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            Loading Awesome Products...
          </motion.h1>
        </div>
      </div>
    );

}

export default Loading;
      