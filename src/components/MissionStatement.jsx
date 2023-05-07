import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MissionStatement = ({ mode }) => {
  const logoLight = 'https://i.imgur.com/lRg7Y1p.png';
  const logoDark = 'https://i.imgur.com/jlknZ4r.png';
  const [showLogo, setShowLogo] = useState(false);
  const [showMissionStatement, setShowMissionStatement] = useState(false);

  useEffect(() => {
    setShowLogo(true);
    setTimeout(() => {
      setShowMissionStatement(true);
    }, 1500);
  }, []);

  return (
    <div className={`flex flex-col h-screen ${mode === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="relative flex items-center justify-center h-screen">
        <AnimatePresence>
          {showLogo && (
            <motion.img
              src={mode === 'dark' ? logoDark : logoLight}
              alt="Inova Hive Logo"
              className="absolute w-4/12"
              style={{
                left: showMissionStatement ? 'calc(50% + 6rem)' : '50%',
                bottom: '25%',
                transform: showMissionStatement ? 'translate(-50%, -50%)' : 'translate(-50%, 0)',
              }}
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ y: '0', opacity: 1, left: showMissionStatement ? 'calc(50% + 6rem)' : '50%' }}
              exit={{ y: '-50vh', opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showMissionStatement && (
            <motion.div
              className="absolute left-0 w-full h-full overflow-y-auto"
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: '0', opacity: 1 }}
              exit={{ x: '-100vw', opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div className="container mx-auto px-4 py-4 pt-32 flex items-center">
                <motion.p
                  className={`text-2xl font-bold max-w-xl mx-4 my-8 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}
                >
                  At Inova Hive, our mission is to transform businesses through
                  cutting-edge website design and development. We believe in using
                  innovative solutions and collaborative partnerships to help our
                  clients achieve their online goals and unlock their full potential.
                  Our team of experts works tirelessly to create custom websites that
                  drive engagement, enhance user experience, and increase conversions.
                  We are dedicated to delivering exceptional service and building
                  lasting relationships with our clients, so they can focus on what they
                  do best – running their business. At Nova Hive, we are committed to
                  being a trusted partner for our clients and helping them thrive in the
                  ever-evolving world of technology.
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MissionStatement;
