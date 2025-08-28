// src/pages/RoadmapPage.jsx

import React from 'react';
// Yeni ikonları import ediyoruz
import { BsFlag, BsBoxSeam, BsPeople, BsGraphUpArrow, BsStars } from 'react-icons/bs';

const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

// 👇 DEĞİŞİKLİK: Veri yapısına her aşama için bir ikon ekledik
const roadmapPhases = [
  {
    phase: '1. Aşama: Temel Atma (Mevcut)',
    title: 'MVP ve İlk Sanatçılar',
    description: 'Uygulamanın temel okuma özelliklerini içeren Minimum Uygulanabilir Ürün (MVP) versiyonunun yayınlanması. Platformu test edecek ve ilk içerikleri üretecek öncü sanatçılarla iş birliklerinin başlatılması.',
    icon: BsBoxSeam,
  },
  {
    phase: '2. Aşama: Topluluk İnşası (2026 1. Çeyrek)',
    title: 'Mobil Uygulamalar ve Etkileşim',
    description: 'iOS ve Android için native mobil uygulamaların yayınlanması. Yorum yapma, sanatçıları takip etme ve puanlama gibi temel topluluk özelliklerinin entegre edilmesi. Discord sunucusunun aktif hale getirilmesi.',
    icon: BsPeople,
  },
  {
    phase: '3. Aşama: Büyüme ve Sürdürülebilirlik (2026 3. Çeyrek)',
    title: 'Gelişmiş Gelir Modelleri ve Genişleme',
    description: 'Abonelik ve "bölüm başına ödeme" gibi gelişmiş gelir modellerinin devreye alınması. Uluslararası sanatçıları ve eserleri platforma dahil etme çalışmalarının başlaması.',
    icon: BsGraphUpArrow,
  },
  {
    phase: '4. Aşama: Gelecek (2027 ve Ötesi)',
    title: 'İnovasyon ve Küresel Erişim',
    description: 'Yapay zeka tabanlı kişiselleştirilmiş içerik önerileri, çeviri araçları ve Türkiye\'den çıkan eserlerin global pazarlara sunulması için altyapı oluşturulması.',
    icon: BsStars,
  },
];

const RoadmapCard = ({ item, index }) => {
  const cardAlignmentClass = index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto';
  // İkonu kartın konumuna göre sağa veya sola yerleştirecek sınıf
  const iconAlignmentClass = index % 2 === 0 ? 'right-0 translate-x-[calc(100%+80px)]' : 'left-0 -translate-x-[calc(100%+80px)]';

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-8 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
        <div className="h-4 w-4 rounded-full border-2 border-[#FFA800] bg-[#111111]"></div>
      </div>
      
      {/* 👇 DEĞİŞİKLİK: Karşı boşluğa tematik ikonu ekliyoruz */}
      <div className={`absolute top-1/2 -translate-y-1/2 text-white/10 text-8xl hidden md:block ${iconAlignmentClass}`}>
        <item.icon />
      </div>
      {/* 👆 */}

      <div className={`w-full rounded-2xl bg-[#191919] p-8 md:w-5/12 ${cardAlignmentClass}`}>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <BsFlag className="h-6 w-6 text-[#FFA800]" />
            <p className="text-sm font-bold text-[#FFA800]">{item.phase}</p>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {item.title}
          </h2>
          <p className="text-base leading-7 text-white/70">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function RoadmapPage() {
  return (
    <div className="bg-[#111111] text-white font-['Poppins']">
      <section className="relative py-24 sm:py-32" style={gridStyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Yol Haritası
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Nekota'yı şeffaf ve topluluk odaklı bir süreçle geliştiriyoruz. İşte gelecekte bizi nelerin beklediğine dair genel bir bakış.
            </p>
          </div>
        </div>
      </section>

      {/* 👇 DEĞİŞİKLİK: Hero ile arasında boşluk olması için 'py-24' eklendi */}
      <section className="py-24 sm:pb-32">
      {/* 👆 */}
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div 
            className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #444 5px, transparent 5px)',
              backgroundSize: '100% 15px',
            }}
          ></div>
          <div className="flex flex-col gap-16 md:gap-24">
            {roadmapPhases.map((item, index) => (
              <RoadmapCard key={item.phase} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}