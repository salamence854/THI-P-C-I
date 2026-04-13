import { motion } from "motion/react";

export function DressCode() {
  return (
    <section className="py-24 px-4 bg-wedding-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-script text-wedding-primary mb-8 leading-none">Dress code</h2>
          <p className="text-xl font-serif text-wedding-primary mb-8 uppercase tracking-widest">Blue Symphony</p>

          <div className="flex justify-center items-center gap-2 md:gap-4 mb-12">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#213b6c] shadow-md border border-black/5" />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f8efe4] shadow-md border border-black/5" />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#000000] shadow-md border border-black/5" />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ffffff] shadow-md border border-black/5" />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#87ceeb] shadow-md border border-black/5" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden border border-wedding-secondary rounded-2xl bg-white flex flex-col shadow-sm"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img 
                  src="https://dl.dropboxusercontent.com/scl/fi/eo8e8vxgwtp186cg5cong/AVN_3718.JPG?rlkey=lg64yrfjbhl3gva5jgyju30nh&st=r5mkv2oq" 
                  alt="Trang phục nam" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-lg uppercase tracking-widest text-wedding-primary mb-4">Dành cho nam</h3>
                <p className="text-wedding-text/70">Vest hoặc trang phục trang trọng</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden border border-wedding-secondary rounded-2xl bg-white flex flex-col shadow-sm"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img 
                  src="https://dl.dropboxusercontent.com/scl/fi/7ll8ili5jbsiteg0v898r/AVN_3509.JPG?rlkey=cng71cvaldors9x17sj3kc2jv&st=dfunpd7t" 
                  alt="Trang phục nữ" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-center">
                <h3 className="text-lg uppercase tracking-widest text-wedding-primary mb-4">Dành cho nữ</h3>
                <p className="text-wedding-text/70">Váy dạ hội thanh lịch</p>
              </div>
            </motion.div>
          </div>

          <p className="mt-16 text-lg md:text-xl font-serif text-wedding-text/80 leading-relaxed max-w-3xl mx-auto">
            Ngày vui của hai gia đình sẽ thêm phần trọn vẹn với sự hiện diện quý báu của Quý vị. Gia đình chúng tôi chân thành mong được đón tiếp Quý vị trong dịp đặc biệt này, để cùng chứng kiến và chia sẻ những khoảnh khắc hạnh phúc của hai con chúng tôi.
          </p>
          <p className="mt-8 text-2xl font-script text-wedding-primary">Trân trọng kính mời!</p>
        </motion.div>
      </div>
    </section>
  );
}
