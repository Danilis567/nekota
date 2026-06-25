import React, { useState, useEffect } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

// Tek bir haber kartını oluşturan bileşen
const NewsCard = ({ post }) => {
  const { t } = useTranslation();
  return (
    // Karta tıklandığında doğru yazıya gitmesi için Link ile sarmalıyoruz
    <Link 
      to={`/blog/${post.slug || post.id}`}
      className="flex w-full transform cursor-pointer flex-col items-start gap-6 rounded-xl bg-[#191919] p-6 transition-transform duration-300 ease-in-out hover:-translate-y-1 h-full"
    >
      {/* Eğer yazının resmi varsa göster, yoksa gösterme */}
      {post.imageUrl && (
        <div className="h-[120px] w-full overflow-hidden rounded-md">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
      )}
      <span className={`inline-block rounded-full bg-[#FFA800]/20 px-3 py-1 text-xs font-bold text-[#FFA800]`}>
        {post.category || t('landing.news.category_general')}
      </span>
      <h3 className="text-left text-2xl font-bold leading-tight text-white">
        {post.title}
      </h3>
      <div className="mt-auto flex items-center gap-2 text-base font-medium text-white/70 transition-colors hover:text-white">
        {t('landing.news.read_post')} <BsArrowRightCircle className="inline-block" />
      </div>
    </Link>
  );
};


export default function News() {
  const { t } = useTranslation();
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      setLoading(true);
      try {
        const postsRef = collection(db, "posts");
        const q = query(
          postsRef,
          where("status", "==", "published"), // Sadece yayınlanmış olanları al
          orderBy("createdAt", "desc"), // En yeniden eskiye sırala
          limit(6) // Sadece en son 6 tanesini al
        );
        const querySnapshot = await getDocs(q);
        const postsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setLatestPosts(postsList);
      } catch (error) {
        console.error("Son yazılar getirilirken hata:", error);
      }
      setLoading(false);
    };

    fetchLatestPosts();
  }, []);

  // Yazıları iki sütuna ayırmak için
  const leftColumnPosts = latestPosts.filter((_, index) => index % 2 === 0);
  const rightColumnPosts = latestPosts.filter((_, index) => index % 2 !== 0);

  return (
    <section className="bg-[#110F0F] py-[80px] px-4 sm:px-[70px] font-['Poppins'] text-white">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-x-20 gap-y-10 lg:grid-cols-2">
        
        <div className="flex flex-col items-start pt-[20px] lg:sticky lg:top-[120px]">
          <h2 className="text-5xl font-extrabold leading-tight">{t('landing.news.title')}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            {t('landing.news.description')}
          </p>
          {/* Butonu /blog sayfasına yönlendir */}
          <Link to="/blog">
            <button className="mt-8 rounded-full border-2 border-[#FFA800] px-8 py-3 font-bold uppercase text-[#FFA800] transition-colors duration-300 hover:bg-[#FFA800] hover:text-black">
              {t('landing.news.button')}
            </button>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-full md:col-span-1">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFA800]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-8">
              {leftColumnPosts.map(post => <NewsCard key={post.id} post={post} />)}
            </div>
            <div className="flex flex-col gap-8 md:mt-8"> {/* Sağ sütunu biraz aşağıdan başlat */}
              {rightColumnPosts.map(post => <NewsCard key={post.id} post={post} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

