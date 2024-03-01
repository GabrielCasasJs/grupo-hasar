import { useEffect } from 'react';

import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import dogIcon from '../../assets/dogIcon.png';

function Splash() {
  const navigation = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation('/home');
    }, 1000 * 3);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <div className="h-screen flex justify-center items-center bg-slate-800 w-full">
      <motion.img
        src={dogIcon}
        className="w-48 md:w-80"
        alt="grupo hasar icon splash"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}

export default Splash;
