import { motion } from "motion/react";

const images = [
  "https://dl.dropboxusercontent.com/scl/fi/xbncgj9eenoa4vbh09vjv/VAN_2400.JPG?rlkey=vtok0l5584jmj5u9cgzwixyf2&st=e1xkw9pm",
  "https://dl.dropboxusercontent.com/scl/fi/zoyubj7lrv5rdkdjn1ap0/AVN_4202.JPG?rlkey=qu2av978rzfqhl7rfpxarraqn&st=3n79d4dq",
  "https://dl.dropboxusercontent.com/scl/fi/blf9tfp6z7ujad1ec410t/AVN_4480.JPG?rlkey=d12dtr5v2dgpt8c6khfnpdixm&st=kph5ucot",
  "https://dl.dropboxusercontent.com/scl/fi/jnoq6cn0uhiptmfj14geu/AVN_3966.JPG?rlkey=q6zli4ifbhwzgrifu84k7796l&st=g5tb7u8e",
  "https://dl.dropboxusercontent.com/scl/fi/9y995itgk57rthmq43lvo/AVN_4156.JPG?rlkey=rsjew0gdhrbfb5zl1orcc05t8&st=iqzf2ece",
  "https://dl.dropboxusercontent.com/scl/fi/005p120ky98e6umg0jgf5/AVN_3825.JPG?rlkey=2zjagvxm1a1gldyersqxd9twc&st=iu4uvm5d",
  "https://dl.dropboxusercontent.com/scl/fi/lvwsf6ns5x1k9iqjrv5uw/AVN_3874.JPG?rlkey=ytdqdprijlsv9zcnbj9m4hetu&st=z07vqt8n",
];

export function Gallery() {
  return (
    <section className="py-24 px-4 bg-wedding-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-8 md:mb-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[80%] md:w-3/4"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl group">
              <img 
                src={images[0]} 
                alt="Wedding photo 1" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[20%] md:w-1/4 flex justify-center"
          >
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-script text-white capitalize leading-none -rotate-90 whitespace-nowrap origin-center">
              The album
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {images.slice(1).map((src, index) => (
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.15 }}
              className="relative aspect-[3/4] overflow-hidden rounded-xl group"
            >
              <img 
                src={src} 
                alt={`Wedding photo ${index + 2}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
