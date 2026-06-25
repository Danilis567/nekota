import React, { useState, useEffect, useMemo } from 'react';
import { IoSearch } from 'react-icons/io5';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

const BlogCard = ({ post }) => {
  const { t } = useTranslation();
  return (
    // DÜZELTME: Link'i post.id yerine post.slug'a yönlendiriyoruz.
    <Link to={`/blog/${post.slug || post.id}`} className="block h-full">
      <div className="group cursor-pointer rounded-xl bg-[#191919] overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 h-full flex flex-col">
        <div className="h-48 w-full bg-[#1c1c1c] group-hover:opacity-90 transition-opacity">
          {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <span className="inline-block rounded-full bg-[#FFA800]/20 px-3 py-1 text-xs font-bold text-[#FFA800] mb-4 self-start">
            {post.category || t('blog.card.category_general')}
          </span>
          <h3 className="text-xl font-bold leading-tight text-white mb-3 group-hover:text-[#FFA800] transition-colors">
            {post.title}
          </h3>
          <p className="text-base leading-relaxed text-white/60 mb-4 flex-grow">
            {post.excerpt}
          </p>
          <div className="text-sm text-white/50 mt-auto">
            {t('blog.card.author')}: {post.author}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function BlogPage() {
  const { t } = useTranslation();
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const categories = [
    { key: 'all', label: t('blog.categories.all') },
    { key: 'announcement', label: t('blog.categories.announcement') },
    { key: 'artist', label: t('blog.categories.artist') },
    { key: 'technology', label: t('blog.categories.technology') },
    { key: 'community', label: t('blog.categories.community') },
    { key: 'culture', label: t('blog.categories.culture') },
    { key: 'development', label: t('blog.categories.development') },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const postsCollection = collection(db, 'posts');
        const q = query(
          postsCollection, 
          where("status", "==", "published"), 
          orderBy('createdAt', 'desc')
        );
        const postSnapshot = await getDocs(q);
        const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAllPosts(postList);
      } catch (error) {
        console.error("Blog yazıları getirilirken hata:", error);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);
  
  const filteredPosts = useMemo(() => {
    return allPosts
      .filter(post => {
        if (activeCategory === 'Tümü' || activeCategory === t('blog.categories.all')) return true;
        return (post.category || t('blog.card.category_general')).toUpperCase() === activeCategory.toUpperCase();
      })
      .filter(post => {
        if (searchTerm.trim() === '') return true;
        const lowerCaseSearch = searchTerm.toLowerCase();
        return (
          post.title.toLowerCase().includes(lowerCaseSearch) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(lowerCaseSearch))
        );
      });
  }, [allPosts, searchTerm, activeCategory, t]);

  return (
    <div className="bg-[#111111] text-white font-['Poppins']">
      <section className="relative py-24 sm:py-32" style={gridStyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t('blog.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">
              {t('blog.hero.description')}
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="relative w-full md:w-auto md:flex-grow md:max-w-xs">
              <input 
                type="text"
                placeholder={t('blog.search_placeholder')}
                className="w-full rounded-full border border-white/20 bg-[#191919] py-3 pl-12 pr-4 text-white placeholder:text-white/50 focus:border-[#FFA800] focus:ring-[#FFA800]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-xl" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map(cat => (
                 <button 
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.label)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors capitalize ${
                      activeCategory === cat.label ? 'bg-[#FFA800] text-black' : 'bg-[#333333] text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {cat.label.toLowerCase()}
                  </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#FFA800]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
          {!loading && filteredPosts.length === 0 && (
             <p className="text-center text-white/70">{t('blog.no_posts')}</p>
          )}
        </div>
      </section>
    </div>
  );
}

