// src/pages/ContentDetailPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { 
  IoArrowBack, 
  IoTime, 
  IoShieldCheckmark, 
  IoCash, 
  IoWallet, 
  IoInformationCircle,
  IoCheckmarkCircle
} from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function ContentDetailPage() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const currentLang = i18n.language.split('-')[0] === 'en' ? 'en' : 'tr';

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "contents", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          // Check visibility
          if (data.isVisible !== false) {
            setItem({ id: docSnap.id, ...data });
          }
        }
      } catch (error) {
        console.error("Error fetching content detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#FFA800]"></div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-[#111111] pt-32 px-4 text-center">
        <h2 className="text-2xl text-white/40 italic">İçerik bulunamadı veya henüz yayında değil.</h2>
        <Link to="/contents" className="mt-8 inline-flex items-center gap-2 text-[#FFA800] hover:underline">
          <IoArrowBack /> Tüm İçeriklere Dön
        </Link>
      </div>
    );
  }

  const title = currentLang === 'en' ? (item.title_en || item.title) : (item.title_tr || item.title);
  const shortDesc = currentLang === 'en' ? (item.shortDescription_en || item.shortDescription) : (item.shortDescription_tr || item.shortDescription);
  const detailedSummary = currentLang === 'en' ? (item.detailedSummary_en || item.detailedSummary) : (item.detailedSummary_tr || item.detailedSummary);

  return (
    <div className="min-h-screen bg-[#111111] pt-32 pb-20 px-4 sm:px-8 lg:px-[70px]">
      <Helmet>
        <title>{`${title} | Nekota Platform`}</title>
        <meta name="description" content={shortDesc} />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link 
          to="/contents" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-[#FFA800] transition-colors mb-8 group"
        >
          <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
          {t('common.back', 'Geri Dön')}
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden aspect-[21/9] mb-12 border border-white/5 shadow-2xl group"
        >
          <img 
            src={item.image_horizontal || item.image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-8 left-8 right-8">
            <span className="px-3 py-1 rounded-full bg-[#FFA800] text-black text-[10px] font-bold uppercase tracking-wider mb-4 inline-block">
              {item.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {title}
            </h1>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <IoInformationCircle className="text-[#FFA800]" />
                {t('contents.summary_title', 'Özet')}
              </h2>
              <p className="text-lg text-white/60 leading-relaxed italic mb-6">
                {shortDesc}
              </p>
              <div className="text-white/80 leading-relaxed whitespace-pre-wrap">
                {detailedSummary}
              </div>
            </section>

            {/* Lisans/Destek Bilgisi VEYA Planlama Aşamaları */}
            {item.hasLicenseInfo ? (
              <motion.section 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-[#FFA800]/5 border border-[#FFA800]/20 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <IoShieldCheckmark size={120} className="text-[#FFA800]" />
                </div>
                
                <h2 className="text-2xl font-bold text-[#FFA800] mb-10 flex items-center gap-3">
                  <IoShieldCheckmark />
                  Lisans & Destek Bilgileri
                </h2>

                <div className="space-y-10 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2.5 rounded-xl bg-[#FFA800]/10 text-[#FFA800]">
                      <IoInformationCircle size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1.5">Telif Türü</p>
                      <p className="text-xl text-white font-bold">{item.license || 'CC-BY 4.0'}</p>
                      <p className="text-white/40 text-sm mt-2 leading-relaxed max-w-xl">
                        Bu lisans, eserin kaynak gösterilerek ticari amaçla kullanılabilmesine ve değiştirilebilmesine olanak sağlar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2.5 rounded-xl bg-[#FFA800]/10 text-[#FFA800]">
                      <IoCash size={24} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1.5">Gelir Modeli</p>
                      <p className="text-lg text-white/80 leading-relaxed italic">
                        {item.revenueModel || 'standart gelir modeli ile kişi/kurum/kuruluşlara bagış/ödeme yapılması'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-8 border-t border-white/10">
                    <div className="mt-1 p-2.5 rounded-xl bg-[#FFA800]/10 text-[#FFA800]">
                      <IoWallet size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-3">Bağış / Destek Bağlantısı</p>
                      {item.donationAddress ? (
                        <a 
                          href={item.donationAddress} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#FFA800] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#ffb733] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#FFA800]/20"
                        >
                          <IoWallet />
                          Destek Ol / Bağış Yap
                        </a>
                      ) : (
                        <div className="bg-black/40 p-4 rounded-xl border border-white/10 italic text-white/20 text-sm">
                          Henüz bir bağlantı belirtilmedi.
                        </div>
                      )}
                      <p className="mt-4 text-xs text-white/30 leading-relaxed max-w-lg">
                        Bu proje, sanatçı/kuruluş/topluluk standart gelir modeli üzerinden desteklenmektedir. 
                        Katkılarınız projenin devamlılığı için değerlidir.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
            ) : (
              <section>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                  <IoTime className="text-[#FFA800]" />
                  {t('contents.planning_title', 'Planlama Aşamaları')}
                </h2>
                <div className="space-y-6">
                  {(item.planningStages || []).map((stage, index) => (
                    <div 
                      key={index}
                      className="relative pl-8 border-l-2 border-white/10 py-1"
                    >
                      <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#111111] border-2 border-[#FFA800]" />
                      <h4 className="text-white font-bold mb-1">{stage.title}</h4>
                      <p className="text-white/50 text-sm">{stage.description}</p>
                    </div>
                  ))}
                  {(!item.planningStages || item.planningStages.length === 0) && (
                    <p className="text-white/20 italic">Henüz planlama aşaması eklenmemiş.</p>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
              <h3 className="text-lg font-bold text-white mb-6">Proje Detayları</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40">Kategori</span>
                  <span className="text-white font-medium">{item.category}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40">Durum</span>
                  <span className="text-[#FFA800] font-bold flex items-center gap-1">
                    <IoCheckmarkCircle />
                    {item.hasLicenseInfo ? 'Tamamlandı' : 'Geliştiriliyor'}
                  </span>
                </div>
              </div>
            </div>

            {/* Poster Sidebar */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl">
              <img 
                src={item.image} 
                alt={title} 
                className="w-full aspect-[2/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
