// src/pages/AboutPage.jsx

import React from 'react';

const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

export default function AboutPage() {
  return (
    <div className="bg-[#111111] text-white font-['Poppins']">
      {/* 1. BÖLÜM: HERO */}
      <section className="relative py-24 sm:py-32" style={gridStyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Biz Kimiz?
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Bizler yeni nesil bir yayıncı, bağımsız sanatın gücüne inanan tutkulu bir grup geliştirici, tasarımcı ve hikaye anlatıcısıyız. Her zaman görmek istediğimiz platformu yaratmak için bir araya geldik: Türkiye'nin sanatçılarının gelişebileceği ve okurların eşsiz dünyalar keşfedebileceği bir alan.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: DETAY (GÖRSEL VE METİN) */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-16 gap-y-10 px-6 lg:grid-cols-2 lg:px-8">
          
          <div className="flex h-96 items-center justify-center rounded-2xl bg-[#191919]">
            <span className="text-white/50">Görsel Alanı</span>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold leading-7 text-[#FFA800]">NEKOTA</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white">
              Sanatçılar İçin, Sanatçılar Tarafından Kuruldu.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Türkiye'de yetenekli bağımsız çizgi roman ve webtoon sanatçılarının hak ettikleri değeri görmediğini fark ettik. Bu soruna bir çözüm sunan, sanatçıları merkeze alan yeni nesil bir dijital yayıncılık platformu olarak Nekota'yı kurduk.
              <br/><br/>
              Amacımız, sanatçıların emeklerinin karşılığını alabildiği, telif haklarının korunduğu ve okurların da yeni dünyalar keşfettiği sürdürülebilir bir ekosistem yaratmaktır. Her çizginin, her hikayenin bir değeri olduğuna inanıyoruz ve bu değeri hak ettiği kitleyle buluşturmak için çalışıyoruz.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}