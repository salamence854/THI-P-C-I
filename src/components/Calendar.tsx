import { motion } from "motion/react";

export function Calendar() {
  // April 2026 calendar
  const days = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  const startDay = 2; // April 1, 2026 is a Wednesday (index 2: Mon=0, Tue=1, Wed=2)

  return (
    <section className="py-20 px-4 bg-wedding-bg">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-widest text-wedding-primary mb-2">Rất hân hạnh được đón tiếp</p>
          <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-script text-wedding-primary mb-12 leading-none">Save the date</h2>

          <div className="border border-wedding-secondary p-8 rounded-xl bg-white/50">
            <h3 className="text-2xl font-serif text-wedding-primary mb-8 uppercase tracking-widest">Tháng 4</h3>
            
            <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
              {days.map(day => (
                <div key={day} className="text-xs md:text-sm font-medium text-wedding-text/60 uppercase">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2 md:gap-4">
              {Array.from({ length: startDay }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}
              
              {dates.map(date => {
                const isWeddingDay = date === 28;
                return (
                  <div 
                    key={date} 
                    className={`aspect-square flex items-center justify-center text-sm md:text-lg rounded-full transition-all duration-300
                      ${isWeddingDay 
                        ? 'bg-wedding-primary text-white shadow-lg scale-110 font-serif' 
                        : 'text-wedding-text hover:bg-wedding-secondary/30'
                      }`}
                  >
                    {date}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
