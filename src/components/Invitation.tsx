import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export function Invitation() {
  return (
    <section className="py-24 px-4 bg-wedding-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-wedding-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-script text-wedding-primary mb-10 leading-none">Lời mời</h2>
          
          <div className="glass-panel p-8 md:p-12 rounded-2xl relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-wedding-bg rounded-full flex items-center justify-center border border-wedding-secondary">
              <span className="font-script text-2xl text-wedding-primary">M&H</span>
            </div>

            <p className="text-lg md:text-xl font-serif text-wedding-text/80 mb-8 leading-relaxed">
              "Gia đình chúng tôi trân trọng kính mời Quý vị cùng gia đình tới dự lễ thành hôn của hai con chúng tôi!"
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-10">
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-wedding-primary mb-2">Nhà Trai</p>
                <p className="font-serif text-lg text-wedding-text/80">Ông Phạm Ngọc Hải</p>
                <p className="font-serif text-lg text-wedding-text/80">Bà Lê Thị Hiền</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-wedding-secondary" />
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-wedding-primary mb-2">Nhà Gái</p>
                <p className="font-serif text-lg text-wedding-text/80">Ông &#272;ỗ Đức Toàn</p>
                <p className="font-serif text-lg text-wedding-text/80">Bà Lê Thị Thảo</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <p className="text-sm uppercase tracking-widest text-wedding-text/60">Lễ thành hôn được tổ chức vào hồi</p>
              <p className="text-2xl md:text-3xl font-serif text-wedding-primary">17:30 - Thứ Ba</p>
              <p className="text-3xl md:text-4xl font-serif text-wedding-primary">28 . 04 . 2026</p>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-wedding-text/60">Tại</p>
              <p className="text-xl font-serif">Trống Đồng Lãng Yên</p>
              <p className="text-wedding-text/80 text-sm md:text-base max-w-md mx-auto">
                Số 2 Lãng Yên, Phường Bạch Đằng, Quận Hai Bà Trưng, Hà Nội
              </p>
              
              <a 
                href="https://maps.app.goo.gl/XSfawUQvza5Cva2SA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-wedding-primary text-white rounded-full hover:bg-wedding-accent transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                <MapPin size={16} />
                Chỉ đường
              </a>

              {/* Google Maps Embed */}
              <div className="mt-10 w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-wedding-secondary/50">
                <iframe 
                  src="https://maps.google.com/maps?q=Trống%20Đồng%20Palace%20Lãng%20Yên&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ địa điểm cưới"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
