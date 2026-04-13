import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-28T17:30:00+07:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Ngày", value: timeLeft.days },
    { label: "Giờ", value: timeLeft.hours },
    { label: "Phút", value: timeLeft.minutes },
    { label: "Giây", value: timeLeft.seconds }
  ];

  return (
    <section className="py-24 px-4 bg-wedding-primary text-white text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-script text-white mb-12 leading-none">Countdown</h2>
          
          <div className="flex justify-center items-center gap-3 md:gap-8 text-5xl md:text-7xl lg:text-8xl font-serif text-white">
            <span>{timeLeft.days.toString().padStart(2, '0')}</span>
            <span className="mb-2 md:mb-4 font-light">:</span>
            <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
            <span className="mb-2 md:mb-4 font-light">:</span>
            <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
            <span className="mb-2 md:mb-4 font-light">:</span>
            <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
