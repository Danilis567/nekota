import React, { useState } from 'react';
import { FiMail, FiSend, FiUser, FiMessageSquare, FiHelpCircle, FiBriefcase, FiMic, FiArrowRight } from 'react-icons/fi';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useTranslation } from 'react-i18next';

const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
  backgroundSize: '80px 80px',
};

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState({ loading: false, error: null, success: false });

  const contactInfo = [
    {
        icon: FiHelpCircle,
        title: t('contact.info.general.title'),
        email: 'destek@nekota.com.tr',
        description: t('contact.info.general.description'),
        className: "lg:col-span-6"
    },
    {
        icon: FiBriefcase,
        title: t('contact.info.partnership.title'),
        email: 'isbirligi@nekota.com.tr',
        description: t('contact.info.partnership.description'),
        className: "lg:col-span-6"
    },
    {
        icon: FiMic,
        title: t('contact.info.media.title'),
        email: 'basin@nekota.com.tr',
        description: t('contact.info.media.description'),
        className: "lg:col-span-12"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ loading: true, error: null, success: false });

    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        sentAt: serverTimestamp(),
        status: 'AKTIF'
      });
      
      setFormState({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState(prev => ({ ...prev, success: false })), 5000);
    } catch (error) {
      console.error("Error: ", error);
      setFormState({ loading: false, error: t('contact.form.error_message'), success: false });
    }
  };

  return (
    <div className="bg-[#111111] font-['Poppins'] text-white min-h-screen selection:bg-[#FFA800] selection:text-black">
      {/* Standard Hero Section */}
      <section className="relative py-24 sm:py-32" style={gridStyle}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
              {t('contact.hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/50">
              {t('contact.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Different Approach: Bento Grid Section */}
      <section className="pb-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Form (The Main Piece) */}
            <div className="lg:col-span-7 group relative">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FFA800]/20 to-orange-600/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              
              <div className="relative h-full rounded-[2.5rem] bg-[#161616] p-8 sm:p-12 border border-white/5 shadow-2xl">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-white mb-2">{t('contact.form.title')}</h2>
                  <p className="text-white/40">{t('contact.form.subtitle')}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        name="name" 
                        placeholder={t('contact.form.name_label')}
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                        className="w-full bg-[#1A1A1A] border-b-2 border-white/5 py-4 px-2 text-white placeholder:text-white/20 outline-none focus:border-[#FFA800] transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="email" 
                        name="email" 
                        placeholder={t('contact.form.email_label')}
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                        className="w-full bg-[#1A1A1A] border-b-2 border-white/5 py-4 px-2 text-white placeholder:text-white/20 outline-none focus:border-[#FFA800] transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <textarea 
                      name="message" 
                      placeholder={t('contact.form.message_label')}
                      rows="6" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      required 
                      className="w-full bg-[#1A1A1A] border-b-2 border-white/5 py-4 px-2 text-white placeholder:text-white/20 outline-none focus:border-[#FFA800] transition-all duration-300 resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState.loading}
                    className="flex items-center justify-between w-full sm:w-auto px-8 py-4 bg-[#FFA800] text-black font-black rounded-2xl hover:bg-white transition-all duration-500 group/btn"
                  >
                    <span>{formState.loading ? t('contact.form.button_sending') : t('contact.form.button_send')}</span>
                    <FiArrowRight className="ml-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>

                  {formState.success && <p className="text-green-500 font-bold">{t('contact.form.success_message')}</p>}
                </form>
              </div>
            </div>

            {/* Right Column: Info Cards (Bento Style) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
              {contactInfo.map((info, idx) => (
                <div 
                  key={info.title} 
                  className={`${info.className} group relative overflow-hidden rounded-3xl bg-[#161616] p-8 border border-white/5 hover:bg-[#1E1E1E] transition-all duration-500`}
                >
                  {/* Background Icon Watermark */}
                  <info.icon className="absolute -right-4 -bottom-4 h-24 w-24 text-white/[0.02] group-hover:text-[#FFA800]/[0.05] transition-all duration-700" />
                  
                  <div className="relative z-10">
                    <div className="h-12 w-12 rounded-xl bg-[#FFA800]/10 flex items-center justify-center mb-6 group-hover:bg-[#FFA800] transition-all duration-500">
                      <info.icon className="h-6 w-6 text-[#FFA800] group-hover:text-black transition-all duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFA800] transition-colors">{info.title}</h3>
                    <p className="text-sm text-white/30 leading-relaxed mb-4">{info.description}</p>
                    <a href={`mailto:${info.email}`} className="text-sm font-black text-white hover:text-[#FFA800] transition-colors flex items-center gap-2">
                      {info.email}
                    </a>
                  </div>
                </div>
              ))}

              {/* Extra Social Card */}
              <div className="lg:col-span-12 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-600 p-8 flex items-center justify-between group cursor-pointer overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-black">{t('contact.community_card.title')}</h3>
                  <p className="text-black/60 text-sm font-bold">{t('contact.community_card.description')}</p>
                </div>
                <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center text-white relative z-10 group-hover:scale-110 transition-transform">
                  <FiArrowRight className="h-6 w-6" />
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 h-full w-32 bg-white/10 skew-x-12 translate-x-16 group-hover:translate-x-0 transition-transform duration-700" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
