import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Clock = () => {
  const startDate = new Date('2024-08-20');
  const [time, setTime] = useState(new Date());

  const calculateTimeAsDeveloper = () => {
    const now = new Date();
    const diffTime = now - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = diffDays % 30;
    return `${years} years, ${months} months, and ${days} days`;
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="text-2xl text-red-600 font-bold"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      {`Time as a Developer: ${calculateTimeAsDeveloper()} `}
    </motion.div>
  );
};

export default Clock;
