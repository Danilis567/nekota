import React from 'react';
// Logoyu yerel varlıklar (assets) klasöründen import et
import logo from '../assets/logo.svg';

// 1. Footer linklerini veri olarak tanımla
const footerSections = [
  {
    title: 'Hakkımızda',
    links: ['Biz Kimiz?', 'Misyon ve Vizyon', 'Yol Haritası', 'İletişim'],
  },
  {
    title: 'Yasal & İletişim',
    links: ['Gizlilik Politikası', 'Kullanım Koşulları', 'destek@nekota.app'],
  },
  {
    title: 'Topluluk',
    links: ['Patreon', 'Instagram', 'X (Twitter)', 'Discord', 'Reddit'],
  },
];

// 2. Her bir footer sütununu oluşturan yeniden kullanılabilir bileşen
const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col items-start gap-6">
    <h3 className="font-['Poppins'] text-base font-bold tracking-[0.32px] text-white">
      {title}
    </h3>
    <div className="flex flex-col items-start gap-3">
      {links.map((link) => (
        <a 
          key={link} 
          href="#" 
          className="font-['Archivo'] text-base font-medium tracking-[0.32px] text-white/60 transition-colors hover:text-white"
        >
          {link}
        </a>
      ))}
    </div>
  </div>
);

// Ana Footer bileşeni
export default function Footer() {
  return (
    <footer className="w-full bg-black px-[70px] py-20 pb-10">
      <div className="flex flex-wrap justify-between gap-10">
        
        {/* 3. Veriyi kullanarak footer sütunlarını dinamik olarak oluştur */}
        {footerSections.map((section) => (
          <FooterColumn key={section.title} title={section.title} links={section.links} />
        ))}

        {/* E-posta Abonelik Bölümü */}
        <div className="flex w-full max-w-[400px] flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <img className="h-10 w-auto" src={logo} alt="Nekota Logo" />
            <div className="font-['Poppins'] text-base font-bold uppercase text-white">
              Nekota
            </div>
          </div>
          <p className="font-['Poppins'] text-sm font-light tracking-[0.28px] text-white/60">
            Gelişmelerden haberdar olmak için bültenimize abone olun.
          </p>
          <form className="flex w-full items-center gap-3">
            <input
              type="email"
              placeholder="E-posta adresiniz..."
              className="flex-grow rounded-full border border-[#A1AEBF] bg-[#0F0F0F] px-4 py-2.5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            />
            <button
              type="submit"
              className="rounded-full bg-[#FFA800] px-4 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}