// src/pages/ContactPage.jsx

import React, { useState } from 'react';
// DEĞİŞİKLİK: Yeni ve daha tematik ikonlar import edildi
import { FiMail, FiSend, FiUser, FiMessageSquare, FiHelpCircle, FiBriefcase, FiMic } from 'react-icons/fi';

// Grid deseni için stil objesi
const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

// DEĞİŞİKLİK: İletişim bilgileri verisi yeni ikonlarla güncellendi
const contactInfo = [
    {
        icon: FiHelpCircle,
        title: 'Genel Sorular',
        email: 'destek@nekota.app',
        description: 'Platform, abonelikler veya genel konular hakkındaki tüm sorularınız için.'
    },
    {
        icon: FiBriefcase,
        title: 'İş Ortaklıkları',
        email: 'isbirligi@nekota.app',
        description: 'Yayıncılar, markalar ve potansiyel partnerler için iş birliği fırsatları.'
    },
    {
        icon: FiMic,
        title: 'Basın ve Medya',
        email: 'basin@nekota.app',
        description: 'Röportaj talepleri, basın bültenleri ve medya ile ilgili tüm iletişimler için.'
    }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız gönderildi! (Bu bir demo bildirimidir)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-[#111111] font-['Poppins'] text-white">
      {/* 1. BÖLÜM: HERO */}
      <section className="relative py-24 sm:py-32" style={gridStyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              İletişime Geçin
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Bir sorunuz mu var, bir fikriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Sizden haber almayı çok isteriz.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: İLETİŞİM BİLGİLERİ VE FORM */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-16 px-6 lg:grid-cols-2 lg:px-8">
          
          {/* Sol Sütun: İletişim Bilgileri */}
          <div className="space-y-8">
            {contactInfo.map((info) => (
                // DEĞİŞİKLİK: Kartlara hover efekti eklendi
                <div key={info.title} className="flex items-center gap-6 rounded-2xl bg-[#191919] p-6 border border-transparent hover:border-white/10 hover:bg-[#222222] transition-all duration-300">
                    {/* DEĞİŞİKLİK: İkon arka planı gradyan yapıldı */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/10">
                        <info.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white">{info.title}</h3>
                        <p className="mt-1 text-base text-white/60">{info.description}</p>
                        <a href={`mailto:${info.email}`} className="mt-2 inline-block font-medium text-[#FFA800] hover:underline">
                            {info.email}
                        </a>
                    </div>
                </div>
            ))}
          </div>

          {/* Sağ Sütun: İletişim Formu */}
          <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-[#191919] p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">Adınız</label>
              <div className="relative">
                <FiUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required className="w-full rounded-full border border-white/20 bg-white/5 py-3 pl-10 pr-4 text-white placeholder:text-white/50 focus:border-[#FFA800] focus:ring-1 focus:ring-[#FFA800]" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">E-posta Adresiniz</label>
              <div className="relative">
                <FiMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required className="w-full rounded-full border border-white/20 bg-white/5 py-3 pl-10 pr-4 text-white placeholder:text-white/50 focus:border-[#FFA800] focus:ring-1 focus:ring-[#FFA800]" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">Mesajınız</label>
              <div className="relative">
                <FiMessageSquare className="pointer-events-none absolute left-4 top-5 text-white/50" />
                <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleInputChange} required className="w-full rounded-2xl border border-white/20 bg-white/5 py-3 pl-10 pr-4 text-white placeholder:text-white/50 focus:border-[#FFA800] focus:ring-1 focus:ring-[#FFA800]"></textarea>
              </div>
            </div>
            {/* DEĞİŞİKLİK: Butona daha iyi bir hover efekti eklendi */}
            <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-full bg-[#FFA800] px-8 py-3.5 font-bold text-black transition-all duration-300 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 transform hover:-translate-y-0.5">
              <FiSend />
              <span>Mesajı Gönder</span>
            </button>
          </form>

        </div>
      </section>
    </div>
  );
}
