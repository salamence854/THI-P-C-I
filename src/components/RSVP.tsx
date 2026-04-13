import React, { useState } from "react";
import { motion } from "motion/react";

export function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attendance: 'yes',
    guests: '1',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const WEBHOOK_URL = "https://hook.us2.make.com/hcabed94cx4y0usyjth84ohr5y4o4n8l";

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        attendance: formData.attendance === 'yes' ? 'Có' : 'Không',
        guests: formData.guests,
        message: formData.message,
        timestamp: new Date().toLocaleString('vi-VN')
      };

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 bg-wedding-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-wedding-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-7xl md:text-8xl lg:text-[10rem] font-script text-wedding-primary mb-6 leading-none">RSVP</h2>
          <p className="text-wedding-text/80 leading-relaxed max-w-2xl mx-auto">
            Sự hiện diện của Quý vị là niềm vinh hạnh lớn lao đối với gia đình chúng tôi. Kính mong Quý vị vui lòng xác nhận sự tham dự trước ngày 20.04.2026 để gia đình có thể chuẩn bị đón tiếp được chu đáo nhất.
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 bg-wedding-bg/50 border border-wedding-secondary rounded-2xl"
          >
            <h3 className="text-7xl md:text-8xl lg:text-[10rem] font-script text-wedding-primary mb-6 leading-none">Thank you!</h3>
            <p className="text-wedding-text/80">
              Xin chân thành cảm ơn Quý vị đã dành thời gian phản hồi. Sự hiện diện của Quý vị là món quà vô giá đối với gia đình chúng tôi.
            </p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/50 p-8 md:p-12 rounded-2xl border border-wedding-secondary/50"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-wedding-text/70">Họ và tên Quý khách</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-wedding-secondary/50 rounded-lg focus:outline-none focus:border-wedding-primary transition-colors"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-wedding-text/70">Số điện thoại</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-wedding-secondary/50 rounded-lg focus:outline-none focus:border-wedding-primary transition-colors"
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-wedding-text/70">Quý khách sẽ tham dự chứ?</label>
              <select 
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-wedding-secondary/50 rounded-lg focus:outline-none focus:border-wedding-primary transition-colors appearance-none"
              >
                <option value="yes">Có, tôi sẽ tham dự</option>
                <option value="no">Rất tiếc, tôi không thể tham dự</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-wedding-text/70">Số lượng người tham dự</label>
              <select 
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-wedding-secondary/50 rounded-lg focus:outline-none focus:border-wedding-primary transition-colors appearance-none"
              >
                <option value="1">1 người</option>
                <option value="2">2 người</option>
                <option value="3">3 người</option>
                <option value="4">4 người</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-widest text-wedding-text/70">Lời chúc</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-wedding-secondary/50 rounded-lg focus:outline-none focus:border-wedding-primary transition-colors resize-none"
                placeholder="Gửi lời chúc đến hai cháu..."
              />
            </div>

            <div className="pt-4 text-center">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 bg-wedding-primary text-white rounded-full hover:bg-wedding-accent transition-colors duration-300 uppercase tracking-widest text-sm w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Đang gửi..." : "Gửi xác nhận"}
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}
