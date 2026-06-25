import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs, doc, updateDoc, increment } from 'firebase/firestore';
import { marked } from 'marked';
import { useTranslation } from 'react-i18next';

export default function BlogPostPage() {
  const { t } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPostBySlug = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docSnap = querySnapshot.docs[0];
          setPost({ id: docSnap.id, ...docSnap.data() });

          const docRef = doc(db, "posts", docSnap.id);
          await updateDoc(docRef, { viewCount: increment(1) });
        } else {
          console.log("Bu slug ile bir yazı bulunamadı!");
          setPost(null);
        }
      } catch (error) {
        console.error("Yazı getirilirken hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostBySlug();
  }, [slug]);

  const getMarkdownText = () => {
    if (!post || !post.content) return { __html: '' };
    const rawMarkup = marked.parse(post.content);
    return { __html: rawMarkup };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111] flex justify-center items-center text-white">
        <div className="animate-spin rounded-full h-16 w-16  border-b-2 border-[#FFA800]"></div>
      </div>
    );
  }

  if (!post) {
    return <div className="min-h-screen bg-[#111111] flex justify-center items-center text-white">{t('blog.post_not_found')}</div>;
  }

  return (
    <div className="bg-[#111111] text-white font-['Poppins'] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <article>
          <header className="text-center mb-12">
            <p className="text-base font-semibold leading-7 text-[#FFA800]">{post.category}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">{post.title}</h1>
            <p className="mt-6 text-lg leading-8 text-white/60">{t('blog.author')}: {post.author}</p>
          </header>

          {post.imageUrl && (
            <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl mb-12" />
          )}

          <div
            className="prose-styles"
            dangerouslySetInnerHTML={getMarkdownText()}
          />
        </article>
      </div>

      <style>{`
        .prose-styles h2 {
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 700;
          color: white;
          margin-top: 2em;
          margin-bottom: 1em;
        }
        .prose-styles p {
          font-size: 1.125rem;
          line-height: 1.75rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.25em;
        }
        .prose-styles a {
          color: #FFA800;
          text-decoration: underline;
        }
        .prose-styles a:hover {
          color: #ffc966;
        }
        .prose-styles strong {
          color: #FFA800;
          font-weight: 600;
        }
        .prose-styles ul {
          list-style-type: disc;
          padding-left: 1.5em;
          margin-bottom: 1.25em;
        }
        .prose-styles ol {
          list-style-type: decimal;
          padding-left: 1.5em;
          margin-bottom: 1.25em;
        }
        .prose-styles li {
          margin-bottom: 0.5em;
          color: rgba(255, 255, 255, 0.8);
        }
        .prose-styles blockquote {
          border-left: 4px solid #FFA800;
          padding-left: 1em;
          font-style: italic;
          color: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </div>
  );
}
