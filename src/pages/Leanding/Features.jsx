// src/components/Features.jsx

import React from 'react';
import { FaHandsHelping, FaUserCog } from 'react-icons/fa';
import { IoAnalyticsSharp, IoLibrarySharp } from 'react-icons/io5';
import { RiBookReadFill } from 'react-icons/ri';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';

const featuresData = [
  {
    icon: FaHandsHelping,
    title: 'Bağımsız Sanatçı Desteği',
    description: 'Yerel yeteneklerin emeklerini koruyan, telif haklarını güvence altına alan ve eserlerini geniş bir kitleyle buluşturan bir platform.'
  },
  {
    icon: IoAnalyticsSharp,
    title: 'Adil Gelir Modeli',
    description: 'Sanatçıların eserlerinden elde edilen gelirlerden şeffaf ve hakkaniyetli bir pay almasını sağlayan, sürdürülebilir bir kazanç sistemi.'
  },
  {
    icon: RiBookReadFill,
    title: 'Sürükleyici Okuma Deneyimi',
    description: 'Hikayeye odaklanmanızı sağlayan reklamsız abonelik seçenekleri ve okuma alışkanlıklarınıza göre çalışan akıllı bir öneri motoru.'
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: 'Canlı ve Etkileşimli Topluluk',
    description: 'Yorumlar, forumlar ve Discord sunucumuz üzerinden diğer okurlarla ve sanatçılarla doğrudan iletişim kurabileceğiniz bir ekosistem.'
  },
  {
    icon: IoLibrarySharp,
    title: 'Geniş İçerik Kütüphanesi',
    description: 'Hem yerli bağımsız çizgi roman ve webtoon\'lar hem de telifsiz, unutulmaz klasik manga ve animelerden oluşan zengin bir içerik arşivi.'
  },
  {
    icon: FaUserCog,
    title: 'Kullanıcı Odaklı Gelişim',
    description: 'Sürekli geri bildirimlerle büyüyen, ihtiyaçlarınıza göre şekillenen ve topluluğun söz sahibi olduğu şeffaf bir geliştirme süreci.'
  },
];

export default function Features() {
  return (
    <section className="bg-[#110F0F] py-[80px] px-[70px] font-['Poppins'] text-white">
      <div className="mx-auto max-w-[1300px]">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Nekota Ne Sunar?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-[16px] font-normal leading-[24px] text-white/60">
            Biz, sadece bir uygulama değil; sanatın ve teknolojinin buluştuğu, topluluğun gücüyle büyüyen bir ekosistem inşa ediyoruz.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              // 👇 DEĞİŞİKLİK: İmleç, geçiş ve yukarı kalkma efektleri eklendi.
              className="flex cursor-pointer flex-col items-start rounded-2xl border border-white/10 bg-[#191919] p-6 transition-transform duration-300 ease-in-out hover:-translate-y-2"
              // 👆
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