import { motion } from "motion/react";
import { Camera, Users, Heart, Wine } from "lucide-react";

const timelineEvents = [
  {
    time: "17:30",
    title: "Đón khách",
    description: "Đón tiếp khách mời, ổn định và chuẩn bị để bắt đầu lễ cưới",
    icon: Users
  },
  {
    time: "18:00",
    title: "Khai tiệc",
    description: "Cùng nhập tiệc và nâng ly chúc mừng hạnh phúc hai cháu",
    icon: Wine
  }
];

export function Timeline() {
  return (
    <section className="py-24 px-4 bg-wedding-primary relative text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-script text-white mb-8 leading-none">Timeline</h2>
          <div className="w-24 h-px bg-white/30 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/20 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              const Icon = event.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 text-center ${isEven ? 'md:text-left' : 'md:text-right'} mb-6 md:mb-0`}>
                    <h3 className="text-2xl font-serif text-white mb-2 uppercase">{event.title}</h3>
                    <p className="text-white/80">{event.description}</p>
                  </div>

                  {/* Icon & Time */}
                  <div className="relative flex flex-col items-center justify-center w-full md:w-2/12 z-10 my-4 md:my-0">
                    <div className="w-16 h-16 rounded-full bg-wedding-primary border border-white/30 flex items-center justify-center shadow-md mb-2">
                      <Icon className="text-white" size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-xl font-serif text-white/90">{event.time}</span>
                  </div>

                  {/* Empty space for layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
