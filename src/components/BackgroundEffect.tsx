import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function BackgroundEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050a12]">
      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-75" />

      {/* Cyber gradient background glow */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050a12]/80 to-[#050a12] pointer-events-none" />

      {/* Animated glowing orbs */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[100px] pointer-events-none"
        animate={{
          x: [100, 300, 200, 100],
          y: [100, 200, 400, 100],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          top: '10%',
          left: '15%',
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[120px] pointer-events-none"
        animate={{
          x: [400, 100, 300, 400],
          y: [300, 500, 100, 300],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          bottom: '15%',
          right: '10%',
        }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-blue-600/5 blur-[90px] pointer-events-none"
        animate={{
          x: [-100, 100, 0, -100],
          y: [200, 100, 300, 200],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          top: '50%',
          left: '40%',
        }}
      />

      {/* Mouse tracker glow card */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-[150px] pointer-events-none transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </div>
  );
}
