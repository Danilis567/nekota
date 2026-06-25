import React from 'react';
import { FaHandsHelping, FaUserCog } from 'react-icons/fa';
import { IoAnalyticsSharp, IoLibrarySharp } from 'react-icons/io5';
import { RiBookReadFill } from 'react-icons/ri';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  const featuresData = [
    {
      icon: FaHandsHelping,
      title: t('landing.features.items.support.title'),
      description: t('landing.features.items.support.description')
    },
    {
      icon: IoAnalyticsSharp,
      title: t('landing.features.items.revenue.title'),
      description: t('landing.features.items.revenue.description')
    },
    {
      icon: RiBookReadFill,
      title: t('landing.features.items.reading.title'),
      description: t('landing.features.items.reading.description')
    },
    {
      icon: HiOutlineDevicePhoneMobile,
      title: t('landing.features.items.community.title'),
      description: t('landing.features.items.community.description')
    },
    {
      icon: IoLibrarySharp,
      title: t('landing.features.items.library.title'),
      description: t('landing.features.items.library.description')
    },
    {
      icon: FaUserCog,
      title: t('landing.features.items.user_centric.title'),
      description: t('landing.features.items.user_centric.description')
    },
  ];

  return (
    <section className="bg-[#110F0F] py-[80px] px-[70px] font-['Poppins'] text-white">
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center">
          <h2 className="text-4xl font-bold">{t('landing.features.subtitle')}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-[16px] font-normal leading-[24px] text-white/60">
            {t('landing.features.description')}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="flex cursor-pointer flex-col items-start rounded-2xl border border-white/10 bg-[#191919] p-6 transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-500">
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="mb-2 text-left text-[28px] font-bold leading-[36px] text-white">
                {feature.title}
              </h3>

              <p className="text-left text-[16px] font-normal leading-[26px] text-white/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}