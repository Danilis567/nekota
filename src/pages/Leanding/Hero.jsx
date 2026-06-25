import React from 'react';
import backgroundBlob from '../../assets/bg.svg';
import { useSubscriptionForm } from '../../hook/useSubscriptionForm';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const gridStyle = {
    backgroundImage:
      'linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
    backgroundSize: '80px 80px',
  };

  // YENİ: Hook'u çağırarak form için gerekli state ve fonksiyonları alıyoruz
  const { email, setEmail, message, loading, handleSubscribe } = useSubscriptionForm();

  return (
    <section 
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#111111] font-['Poppins']"
      style={gridStyle}
    >
      <img
        src={backgroundBlob}
        alt="Arkaplan Deseni"
        className="absolute bottom-0 right-0 w-3/4 translate-x-1/3 translate-y-1/3 opacity-50 blur-3xl lg:w-2/3"
      />
      
      <div className="z-30 flex w-[523px] flex-col items-start gap-8 text-left text-white">
        <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
          {t('landing.hero.title_start')} <span className="bg-gradient-to-b from-[#E39848] to-[#DE6861] bg-clip-text text-transparent">{t('landing.hero.title_highlight')}</span> {t('landing.hero.title_end')}
        </h1>
        <p className="text-base text-white/70 md:text-lg">
          {t('landing.hero.description')}
        </p>
        
        {/* YENİ: Formu fonksiyonel hale getirdik */}
        <form onSubmit={handleSubscribe} className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full flex-col items-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder={t('landing.hero.email_placeholder')}
              className="w-full flex-grow rounded-full border border-white/30 bg-white/5 px-6 py-3 text-white placeholder:text-white/50 transition-colors focus:border-[#FFA800] focus:outline-none focus:ring-1 focus:ring-[#FFA800]"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              className="w-full shrink-0 rounded-full bg-[#FFA800] px-8 py-3 font-bold text-black transition-opacity hover:opacity-90 sm:w-auto disabled:opacity-50"
              disabled={loading}
            >
              {loading ? '...' : t('landing.hero.button')}
            </button>
          </div>
          {/* YENİ: Kullanıcıya geri bildirim mesajı gösteriyoruz */}
          {message && <p className="text-sm text-white/70 w-full">{message}</p>}
        </form>
      </div>

      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#111111] to-transparent z-20"></div>
    </section>
  );
}
