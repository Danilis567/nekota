// src/pages/CommunityPage.jsx

import React from 'react';
import { FaPatreon, FaDiscord, FaInstagram, FaTiktok, FaReddit } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo.svg';

const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

const socialLinks = [
  { name: 'Patreon', icon: FaPatreon, href: '#', color: '#FF424D' },
  { name: 'Discord', icon: FaDiscord, href: '#', color: '#5865F2' },
  { name: 'Instagram', icon: FaInstagram, href: '#', color: '#E4405F' },
  { name: 'X (Twitter)', icon: FaXTwitter, href: '#', color: '#FFFFFF' },
  { name: 'TikTok', icon: FaTiktok, href: '#', color: '#00F2EA' },
  { name: 'Reddit', icon: FaReddit, href: '#', color: '#FF4500' },
];

// İkonların yörünge konumları büyüyen alana göre ayarlandı
const iconPositions = [
  'top-0 left-1/2 -translate-x-1/2',
  'top-1/4 right-0',
  'bottom-1/4 right-0',
  'bottom-0 left-1/2 -translate-x-1/2',
  'bottom-1/4 left-0',
  'top-1/4 left-0',
];

export default function CommunityPage() {
  return (
    <div className="bg-[#111111] text-white font-['Poppins']">
      <section className="relative py-24 sm:py-32" style={gridStyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Topluluğumuz
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Sanatçılarla ve diğer okurlarla bağ kurun, tartışmalara katılın ve Nekota evreninin bir parçası olun.
            </p>
          </div>
        </div>
      </section>

      {/* 👇 DEĞİŞİKLİK: Bölümün tamamı yeni tasarıma göre yeniden yapılandırıldı */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-20 gap-y-16 px-6 lg:grid-cols-2 lg:px-8">
          
          {/* Sol Sütun: Büyütülmüş İkon Merkezi */}
          <div className="flex items-center justify-center">
            <div className="relative h-96 w-96">
              <div className="absolute left-1/2 top-1/2 z-10 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/50 bg-[#191919]">
                <img src={logo} alt="Nekota Logo" className="w-32" />
              </div>

              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`animate-float absolute flex h-20 w-20 items-center justify-center rounded-full bg-[#191919] transition-all duration-300 hover:scale-110 hover:[animation-play-state:paused] hover:-translate-y-1 ${iconPositions[index]}`}
                  style={{ animationDuration: `${8 + index * 0.5}s` }}
                >
                  <social.icon className="text-4xl" style={{ color: social.color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Sağ Sütun: Metin ve Buton */}
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Topluluğun Kalbine Katıl
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Tartışmalara katılın, favori sanatçılarınızla doğrudan sohbet edin, özel içeriklere ilk siz ulaşın ve Nekota'nın geleceğini şekillendiren kararlarda söz sahibi olun. Burası sadece bir platform değil, ortak bir tutkuyu paylaştığımız bir aile.
            </p>
            <button className="mt-8 rounded-full border-2 border-[#FFA800] px-8 py-3 font-bold uppercase text-[#FFA800] transition-colors duration-300 hover:bg-[#FFA800] hover:text-black">
              Discord Sunucumuza Katıl
            </button>
          </div>
          
        </div>
      </section>
      {/* 👆 DEĞİŞİKLİK BİTTİ */}
    </div>
  );
}