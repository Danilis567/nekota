// src/pages/ContentsPage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Helmet } from 'react-helmet-async';

export default function ContentsPage() {
  const { t, i18n } = useTranslation();
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentLang = i18n.language.split('-')[0] === 'en' ? 'en' : 'tr';

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const q = query(collection(db, "contents"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })).filter(item => item.isVisible !== false);
        setContents(data);
      } catch (error) {
        console.error("Error fetching contents: ", error);
        // Fallback: If createdAt index is not ready, try without order
        try {
          const querySnapshot = await getDocs(collection(db, "contents"));
          const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })).filter(item => item.isVisible !== false);
          setContents(data);
        } catch (e) {
          console.error("Total failure: ", e);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchContents();
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] pt-32 pb-20 px-4 sm:px-8 lg:px-[70px]">
      <Helmet>
        <title>{t('contents.seo_title', 'İçerikler | Nekota Platform')}</title>
        <meta name="description" content={t('contents.seo_description', 'Nekota platformunda geliştirilen tüm projelerin detaylı özetlerine ve planlama aşamalarına buradan ulaşabilirsiniz.')} />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contents.title', 'İçerikler')}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">
            {t('contents.description', 'Nekota platformunda geliştirilen tüm projelerin detaylı özetlerine ve planlama aşamalarına buradan ulaşabilirsiniz.')}
          </p>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#FFA800]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {contents.map((item) => (
              <div 
                key={item.id} 
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#FFA800]/50 transition-colors"
              >
                {/* Image */}
                <div className="aspect-[2/3] w-full overflow-hidden relative group">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#FFA800] text-black text-[10px] font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-1 group-hover:text-[#FFA800] transition-colors">
                    {currentLang === 'en' 
                      ? (item.title_en || item.title) 
                      : (item.title_tr || item.title)}
                  </h3>
                  <p className="text-white/40 text-sm mb-6 line-clamp-2 h-10">
                    {currentLang === 'en' 
                      ? (item.shortDescription_en || item.shortDescription) 
                      : (item.shortDescription_tr || item.shortDescription)}
                  </p>
                  <Link 
                    to={`/contents/${item.id}`}
                    className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl bg-[#FFA800] text-black font-bold hover:bg-[#ffb733] hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    {t('contents.review_button', 'İncele')}
                  </Link>
                </div>
              </div>
            ))}
            {contents.length === 0 && (
              <div className="col-span-full text-center py-20 text-white/20 italic">
                Henüz içerik eklenmemiş.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
