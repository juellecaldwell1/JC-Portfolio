
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Clock = () => {
  const [time, setTime] = useState(new Date());

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
      {`Time As an Developer:  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
    </motion.div>
  );
};

export default Clock;
