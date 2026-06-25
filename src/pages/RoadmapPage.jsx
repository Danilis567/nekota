// src/pages/RoadmapPage.jsx

import React from 'react';
// İkonlar import ediliyor
import { BsFlag, BsBoxSeam, BsPeople, BsGraphUpArrow, BsStars, BsTranslate, BsBuilding, BsGlobe, BsGlobe2 } from 'react-icons/bs';

const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

const roadmapPhases = [
    { icon: BsBoxSeam },
    { icon: BsPeople },
    { icon: BsGraphUpArrow },
    { icon: BsTranslate },
    { icon: BsBuilding },
    { icon: BsGlobe },
    { icon: BsGlobe2 },
];


const RoadmapCard = ({ item, index, totalItems }) => {
  const cardAlignmentClass = index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto';
  const iconAlignmentClass = index % 2 === 0 ? 'right-0 translate-x-[calc(100%+80px)]' : 'left-0 -translate-x-[calc(100%+80px)]';

  return (
    // Ana kapsayıcıya z-index eklendi
    <div className="relative z-10">
      {/* ▼▼▼ YENİ: Maskeleme Alanı ▼▼▼ */}
      {/* Sadece ilk kart için üst maske */}
      {index === 0 && (
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-10 md:h-1/2 top-0 bg-[#111111] z-20"></div>
      )}
      {/* Sadece son kart için alt maske */}
      {index === totalItems - 1 && (
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-10 md:h-1/2 bottom-0 bg-[#111111] z-20"></div>
      )}
      {/* ▲▲▲ Maskeleme Alanı Bitişi ▲▲▲ */}

      {/* Daire ikonu, maskenin üzerinde olması için z-30 aldı */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-30">
        <div className="h-4 w-4 rounded-full border-2 border-[#FFA800] bg-[#111111]"></div>
      </div>
      
      <div className={`absolute top-1/2 -translate-y-1/2 text-white/10 text-8xl hidden md:block ${iconAlignmentClass}`}>
        <item.icon />
      </div>

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

import { useTranslation } from 'react-i18next';

export default function RoadmapPage() {
  const { t } = useTranslation();

  const roadmapPhasesTranslated = t('roadmap.phases', { returnObjects: true }).map((phase, index) => ({
    ...phase,
    icon: roadmapPhases[index].icon
  }));

  return (
    <div className="bg-[#111111] text-white font-['Poppins']">
      <section className="relative py-24 sm:py-32" style={gridStyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t('roadmap.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              {t('roadmap.hero.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {/* ▼▼▼ DEĞİŞİKLİK: Kapsayıcıya 'relative' eklendi ▼▼▼ */}
          <div className="relative flex flex-col gap-16 md:gap-24">
            {/* ▼▼▼ YENİ: Tepeden tırnağa uzanan tek, kesikli çizgi ▼▼▼ */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-[2px] top-0 bottom-0"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #444 5px, transparent 5px)',
                backgroundSize: '100% 15px',
              }}
            ></div>
            {/* ▲▲▲ Tek çizgi ▲▲▲ */}

            {/* Kartlar bu çizginin üzerinde render edilecek */}
            {roadmapPhasesTranslated.map((item, index) => (
              <RoadmapCard 
                key={item.phase} 
                item={item} 
                index={index} 
                totalItems={roadmapPhasesTranslated.length} 
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}