import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://dl.dropboxusercontent.com/scl/fi/3x4ynalnkb4r850dqrvzn/AVN_4596.JPG?rlkey=m0z9xd2utfi09yktn3ukpoxoa&st=tsf38t47')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 tracking-widest uppercase text-sm md:text-base font-light"
        >
          Save The Date
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-script text-6xl md:text-8xl lg:text-9xl mb-4 drop-shadow-lg"
        >
          Ngọc Minh <br className="md:hidden" /> <span className="text-4xl md:text-6xl mx-4">&</span> <br className="md:hidden" /> Thu Hương
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex flex-col items-center space-y-2"
        >
          <p className="text-xl md:text-2xl font-serif tracking-wider">28 . 04 . 2026</p>
          <div className="w-16 h-px bg-white/70 my-4" />
          <p className="text-sm md:text-base font-light tracking-widest uppercase">Trống Đồng Lãng Yên, Hà Nội</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
