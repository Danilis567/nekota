// src/components/News.jsx

import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';

const newsData = [
  {
    category: 'DUYURU',
    title: 'İlk Sanatçımız [Sanatçının Adı] Aramızda!',
    linkText: 'Gönderiyi Oku',
    linkHref: '#',
    image: true,
    categoryColor: 'bg-[#FFA800]/20 text-[#FFA800]',
  },
  {
    category: 'TOPLULUK',
    title: 'Nekota Discord Sunucusu Açıldı!',
    linkText: 'Topluluğa Katıl',
    linkHref: '#',
    categoryColor: 'bg-[#FFA800]/20 text-[#FFA800]',
  },
  {
    category: 'GELİŞİM',
    title: 'MVP\'den İlk Ekran Görüntüleri!',
    linkText: 'Detayları İncele',
    linkHref: '#',
    categoryColor: 'bg-[#FFA800]/20 text-[#FFA800]',
  },
  {
    category: 'TEKNOLOJİ',
    title: 'Flutter ve Firebase ile Yola Çıkış Hikayemiz',
    linkText: 'Read more',
    linkHref: '#',
    image: true,
    categoryColor: 'bg-[#FFA800]/20 text-[#FFA800]',
  },
  {
    category: 'İŞ BİRLİĞİ',
    title: 'Çizgi Roman Okurları Platformu ile Ortaklık Duyurusu',
    linkText: 'Daha Fazla Bilgi',
    linkHref: '#',
    categoryColor: 'bg-[#FFA800]/20 text-[#FFA800]',
  },
  {
    category: 'KÜLTÜR',
    title: 'Telifsiz Klasikler Ne Anlama Geliyor?',
    linkText: 'Blog Yazısını Oku',
    linkHref: '#',
    categoryColor: 'bg-[#FFA800]/20 text-[#FFA800]',
  },
];

// Tek bir haber kartını oluşturan bileşen
const NewsCard = ({ item }) => (
  <a 
    href={item.linkHref}
    // 👇 DEĞİŞİKLİK: Kenarlık kaldırıldı, köşe yuvarlaklığı ve arkaplan rengi güncellendi.
    className="flex w-full transform cursor-pointer flex-col items-start gap-6 rounded-xl  bg-[#191919] p-6 transition-transform duration-300 ease-in-out hover:-translate-y-1"
    // 👆
  >
    {item.image && (
      <div className="h-[120px] w-full rounded-sm bg-[#5e388c]"></div>
    )}
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${item.categoryColor}`}>
      {item.category}
    </span>
    <h3 className="text-left text-2xl font-bold leading-tight text-white">
      {item.title}
    </h3>
    <div className="mt-auto flex items-center gap-2 text-base font-medium text-white/70 transition-colors hover:text-white">
      {item.linkText} <BsArrowRightCircle className="inline-block" />
    </div>
  </a>
);


export default function News() {
  return (
    <section className="bg-[#110F0F] py-[80px] px-[70px] font-['Poppins'] text-white">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-x-20 gap-y-10 lg:grid-cols-2">
        
        <div className="flex flex-col items-start pt-[20px] lg:sticky lg:top-[120px]">
          <h2 className="text-5xl font-extrabold leading-tight">Nekota Evreninden Haberler</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            En son gelişmeler, iş birlikleri ve topluluk duyurularımız. Bu blogda, bir projenin doğuşuna dair tüm hikayelere ulaşabilirsiniz.
          </p>
          <button className="mt-8 rounded-full border-2 border-[#FFA800] px-8 py-3 font-bold uppercase text-[#FFA800] transition-colors duration-300 hover:bg-[#FFA800] hover:text-black">
            TÜM BLOGA GİT
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-8">
                <NewsCard item={newsData[0]} />
                <NewsCard item={newsData[2]} />
                <NewsCard item={newsData[4]} />
            </div>
            <div className="flex flex-col gap-8">
                <NewsCard item={newsData[1]} />
                <NewsCard item={newsData[3]} />
                <NewsCard item={newsData[5]} />
            </div>
        </div>
      </div>
    </section>
  );
}