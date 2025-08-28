// src/pages/BlogPage.jsx

import React from 'react';
import { IoSearch } from 'react-icons/io5'; // Arama ikonu

// Grid deseni için stil objesi
const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

// Şimdilik örnek blog gönderileri
const blogPosts = [
  { id: 1, category: 'DUYURU', title: 'Nekota Platformu Çok Yakında Sizlerle!', excerpt: 'Aylardır üzerinde çalıştığımız projemizin detaylarını ve çıkış tarihini duyurmaktan heyecan duyuyoruz...', image: '/placeholder-img.png', author: 'Danil K.' },
  { id: 2, category: 'SANATÇI', title: 'Bir Çizerin Gözünden: [Sanatçı Adı] ile Röportaj', excerpt: 'Platformumuzun ilk sanatçılarından biriyle yaratım süreci, ilham kaynakları ve Nekota hakkındaki düşünceleri üzerine konuştuk.', image: '/placeholder-img.png', author: 'Ayşe Y.' },
  { id: 3, category: 'TEKNOLOJİ', title: 'Flutter ile Cross-Platform Bir Deneyim Yaratmak', excerpt: 'Neden mobil uygulamamızı geliştirirken Flutter\'ı seçtik? Teknik ekibimizden geliştirme sürecinin detayları...', image: '/placeholder-img.png', author: 'Ahmet C.' },
  { id: 4, category: 'TOPLULUK', title: 'Discord Sunucumuzda Neler Oluyor?', excerpt: 'Topluluğumuzun kalbinin attığı Discord sunucumuzdaki etkinlikler, yarışmalar ve sohbet kanalları hakkında her şey.', image: '/placeholder-img.png', author: 'Nekota Ekibi' },
  { id: 5, category: 'KÜLTÜR', title: 'Webtoon Nedir? Geleneksel Çizgi Romandan Farkları', excerpt: 'Dijital çağın popüler formatı webtoon\'ları mercek altına alıyoruz. Tarihi, özellikleri ve neden bu kadar sevildiği üzerine bir inceleme.', image: '/placeholder-img.png', author: 'Elif S.' },
  { id: 6, category: 'GELİŞİM', title: 'Yol Haritamızda Bir Sonraki Adım: İnteraktif Hikayeler', excerpt: 'Okuyucuların hikayenin gidişatına yön verebileceği yeni nesil interaktif içerikler üzerine çalışmalarımız başladı.', image: '/placeholder-img.png', author: 'Proje Yönetimi' },
];

// Tek bir blog kartını oluşturan bileşen
const BlogCard = ({ post }) => (
  <div className="group cursor-pointer rounded-xl bg-[#191919] overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2">
    <div className="h-48 w-full bg-[#5e388c] group-hover:opacity-90 transition-opacity">
      {/* <img src={post.image} alt={post.title} className="w-full h-full object-cover" /> */}
    </div>
    <div className="p-6">
      <span className="inline-block rounded-full bg-[#FFA800]/20 px-3 py-1 text-xs font-bold text-[#FFA800] mb-4">
        {post.category}
      </span>
      <h3 className="text-xl font-bold leading-tight text-white mb-3 group-hover:text-[#FFA800] transition-colors">
        {post.title}
      </h3>
      <p className="text-base leading-relaxed text-white/60 mb-4">
        {post.excerpt}
      </p>
      <div className="text-sm text-white/50">
        Yazar: {post.author}
      </div>
    </div>
  </div>
);


export default function BlogPage() {
  return (
    <div className="bg-[#111111] text-white font-['Poppins']">
      {/* 1. BÖLÜM: HERO */}
      <section className="relative py-24 sm:py-32" style={gridStyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Nekota evreninden en son haberler, sanatçı röportajları, teknik makaleler ve topluluk hikayeleri.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BÖLÜM: ARAMA VE FİLTRELEME */}
      <section className="py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="relative w-full md:w-auto md:flex-grow md:max-w-xs">
              <input 
                type="text"
                placeholder="Blogda ara..."
                className="w-full rounded-full border border-white/20 bg-[#191919] py-3 pl-12 pr-4 text-white placeholder:text-white/50 focus:border-[#FFA800] focus:ring-[#FFA800]"
              />
              <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-xl" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button className="rounded-full bg-[#FFA800] px-4 py-2 text-sm font-semibold text-black">Tümü</button>
              <button className="rounded-full bg-[#333333] px-4 py-2 text-sm font-semibold text-white/70 hover:bg-white/20">Duyurular</button>
              <button className="rounded-full bg-[#333333] px-4 py-2 text-sm font-semibold text-white/70 hover:bg-white/20">Sanatçı</button>
              <button className="rounded-full bg-[#333333] px-4 py-2 text-sm font-semibold text-white/70 hover:bg-white/20">Teknoloji</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BÖLÜM: BLOG KARTLARI */}
      <section className="py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}