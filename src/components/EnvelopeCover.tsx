import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface EnvelopeCoverProps {
  onOpen: () => void;
}

export function EnvelopeCover({ onOpen }: EnvelopeCoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    
    // Wait for the envelope to open and slide down, then hide the cover
    setTimeout(() => {
      setIsVisible(false);
      onOpen();
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-wedding-bg"
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {/* Blurred Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://dl.dropboxusercontent.com/scl/fi/3x4ynalnkb4r850dqrvzn/AVN_4596.JPG?rlkey=m0z9xd2utfi09yktn3ukpoxoa&st=tsf38t47')",
            filter: "blur(12px)",
            transform: "scale(1.1)"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Envelope Container */}
        <motion.div 
          className="relative w-[90%] max-w-3xl aspect-[3/2] cursor-pointer mt-12"
          onClick={handleOpen}
          animate={{ y: isOpen ? 800 : 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
        >
          {/* Envelope Back */}
          <div className="absolute inset-0 bg-wedding-primary shadow-2xl rounded-sm overflow-hidden">
             <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Envelope Flaps */}
          {/* Left Flap */}
          <div 
            className="absolute inset-0 bg-wedding-accent" 
            style={{ clipPath: "polygon(0 0, 50% 50%, 0 100%)", filter: "brightness(0.9)" }} 
          />
          {/* Right Flap */}
          <div 
            className="absolute inset-0 bg-wedding-accent" 
            style={{ clipPath: "polygon(100% 0, 50% 50%, 100% 100%)", filter: "brightness(0.9)" }} 
          />
          {/* Bottom Flap */}
          <div 
            className="absolute inset-0 bg-wedding-accent" 
            style={{ clipPath: "polygon(0 100%, 100% 100%, 50% 50%)", filter: "brightness(1.1)", zIndex: 2 }} 
          />

          {/* Top Flap (Animated) */}
          <motion.div 
            className="absolute inset-0 origin-top bg-wedding-primary"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isOpen ? 180 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ 
              clipPath: "polygon(0 0, 100% 0, 50% 50%)", 
              zIndex: isOpen ? 0 : 10,
              filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.3))"
            }}
          />

          {/* Text on Envelope */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-white/90 pointer-events-none"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 15 }}
          >
            <p className="text-xs md:text-sm tracking-[0.4em] uppercase font-light">The Wedding Invitation</p>
          </motion.div>

          {/* Wax Seal */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full shadow-xl flex items-center justify-center border-2 border-amber-700/30"
            style={{ 
              background: "radial-gradient(circle, #d97706 0%, #92400e 100%)",
              zIndex: 20,
              boxShadow: "0 4px 15px rgba(0,0,0,0.4), inset 0 2px 5px rgba(255,255,255,0.2)"
            }}
            animate={{ 
              scale: isOpen ? 0 : 1,
              opacity: isOpen ? 0 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-1 rounded-full border border-amber-500/30" />
            <span className="font-script text-3xl md:text-4xl text-amber-100 drop-shadow-md">M&H</span>
          </motion.div>
        </motion.div>

        {/* Instructions */}
        <motion.p 
          className="absolute bottom-12 text-white/80 tracking-widest uppercase text-sm"
          animate={{ opacity: isOpen ? 0 : [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Chạm để mở thiệp
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
