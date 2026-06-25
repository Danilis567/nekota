import React from 'react';
import { useSubscriptionForm } from '../../hook/useSubscriptionForm';
import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation();
  // YENİ: Hook'u çağırarak form için gerekli state ve fonksiyonları alıyoruz
  const { email, setEmail, message, loading, handleSubscribe } = useSubscriptionForm();

  return (
    <section className="bg-[#110F0F] py-[80px] px-4 sm:px-[70px] font-['Poppins']">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-8 rounded-2xl bg-[#FFA800] py-16 px-8 text-center">
        <h2 className="text-4xl font-bold text-black">
          {t('landing.cta.title')}
        </h2>
        <p className="max-w-2xl text-lg text-black/80">
          {t('landing.cta.description')}
        </p>
        
        {/* YENİ: Formu fonksiyonel hale getirdik */}
        <form onSubmit={handleSubscribe} className="mt-4 w-full max-w-lg flex flex-col items-center gap-3">
            <div className="flex w-full items-center rounded-full bg-white p-2">
                <input
                    type="email"
                    placeholder={t('landing.cta.email_placeholder')}
                    className="w-full flex-grow appearance-none border-none bg-transparent px-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-0"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="shrink-0 rounded-full bg-black px-8 py-3 font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? '...' : t('landing.cta.button')}
                </button>
            </div>
            {/* YENİ: Kullanıcıya geri bildirim mesajı gösteriyoruz */}
            {message && <p className="text-sm text-black/70">{message}</p>}
        </form>
      </div>
    </section>
  );
}
