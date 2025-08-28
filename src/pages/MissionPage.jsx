// src/pages/MissionPage.jsx

import React from 'react';

const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

export default function MissionPage() {
  return (
    <div className="bg-[#111111] text-white font-['Poppins']">
      {/* HERO */}
      <section className="relative py-24 sm:py-32" style={gridStyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Misyon ve Vizyon
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Sanatı ve sanatçıyı merkeze alan, teknolojiyle güçlendirilmiş, adil ve sürdürülebilir bir dijital yayıncılık ekosistemi yaratma hedefiyle yola çıktık.
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
              Misyonumuz
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Temel misyonumuz, Türkiye'deki bağımsız sanatçıları ve hikaye anlatıcılarını güçlendirmektir. Onlara, eserlerini adil bir gelir modeliyle geniş kitlelere ulaştırabilecekleri, telif haklarını koruyabilecekleri ve yaratıcı özgürlüklerini sonuna kadar kullanabilecekleri modern bir platform sunmayı amaçlıyoruz. Okurlar için ise, yerel yeteneklerin ürettiği zengin ve çeşitli içeriklere kolayca erişebilecekleri, canlı bir topluluğun parçası olabilecekleri bir alan yaratmayı hedefliyoruz.
            </p>
          </div>

          {/* Vizyon */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Vizyonumuz
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Vizyonumuz, Nekota'yı Türkiye'nin bağımsız dijital çizgi roman ve webtoon sahnesinin kalbi haline getirmektir. Sadece bir okuma platformu değil, aynı zamanda sanatçıların ve okurların bir araya geldiği, etkileşimde bulunduğu ve birlikte büyüdüğü bir kültür merkezi olmayı hayal ediyoruz. Uzun vadede, Türkiye'den çıkan özgün hikayeleri ve sanatçıları uluslararası arenada temsil eden, tanınan ve saygı duyulan bir marka olmayı hedefliyoruz.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}