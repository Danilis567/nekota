// src/pages/MissionPage.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';

const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

export default function MissionPage() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#111111] text-white font-['Poppins']">
      {/* HERO */}
      <section className="relative py-24 sm:py-32" style={gridStyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {t('mission.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              {t('mission.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto flex max-w-4xl flex-col gap-16 px-6 lg:px-8">

          {/* Misyon */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('mission.mission.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              {t('mission.mission.description')}
            </p>
          </div>

          {/* Vizyon */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('mission.vision.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              {t('mission.vision.description')}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}