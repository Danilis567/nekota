import React from 'react';
import logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';

const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#111111] text-white font-['Poppins']">
      {/* 1. BÖLÜM: HERO */}
      <section className="relative py-24 sm:py-32" style={gridStyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {t('about.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: DETAY (GÖRSEL VE METİN) */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-16 gap-y-10 px-6 lg:grid-cols-2 lg:px-8">

          <div className="flex  items-center justify-center">
            <img src={logo} alt="" className='h-94' />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold leading-7 text-[#FFA800]">{t('about.details.subtitle')}</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">
              {t('about.details.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70 whitespace-pre-line">
              {t('about.details.description')}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}