// src/pages/Leanding/Ecosystem.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
// DEĞİŞİKLİK: Bileşen yerine doğrudan .svg dosyasını import ediyoruz
import communityIllustration from '../../assets/CommunityIllustration.svg';


export default function Ecosystem() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#000000] py-[80px] px-[70px] font-['Poppins'] text-white">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-20 lg:grid-cols-2">
        
        {/* Sol Sütun: İllüstrasyon */}
        <div className="flex justify-center">
          {/* DEĞİŞİKLİK: React bileşeni yerine standart bir <img> etiketi kullanıyoruz */}
          <img 
            src={communityIllustration} 
            alt={t('landing.ecosystem.title')} 
            className="w-full max-w-lg"
          />
        </div>

        {/* Sağ Sütun: Metin ve Buton */}
        <div className="flex flex-col items-start gap-8">
          <h2 className="text-5xl font-extrabold leading-tight text-white">
            {t('landing.ecosystem.title')}
          </h2>
          <p className="text-lg leading-relaxed text-white/70">
            {t('landing.ecosystem.description')}
          </p>
          <button className="rounded-full border-2 border-[#FFA800] px-8 py-3 font-bold uppercase text-[#FFA800] transition-colors duration-300 hover:bg-[#FFA800] hover:text-black">
            {t('landing.ecosystem.button')}
          </button>
        </div>

      </div>
    </section>
  );
}