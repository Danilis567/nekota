import React, { useState, useCallback } from 'react';
import logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';

// Gerekli hook'u dosya içine taşıdık, böylece harici bir dosyaya ihtiyaç kalmadı.
const useSubscriptionForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = useCallback(async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage(t('footer.message_empty_email'));
      return;
    }
    setLoading(true);
    setMessage('');

    // API çağrısını simüle etmek için 1.5 saniyelik bir gecikme
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Başarılı senaryo
    setLoading(false);
    setMessage(t('footer.message_success'));
    setEmail('');

    // 3 saniye sonra mesajı temizle
    setTimeout(() => setMessage(''), 3000);
  }, [email, t]);

  return { email, setEmail, message, loading, handleSubscribe };
};

const FooterColumn = ({ title, links }) => (
  <div className="flex flex-col items-start gap-6">
    <h3 className="font-['Poppins'] text-base font-bold tracking-[0.32px] text-white">
      {title}
    </h3>
    <div className="flex flex-col items-start gap-3">
      {links.map((link) => (
        <a 
          key={link.name} 
          href={link.href} 
          target={link.href.startsWith('http') ? "_blank" : "_self"}
          rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
          className="font-['Archivo'] text-base font-medium tracking-[0.32px] text-white/60 transition-colors hover:text-white"
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
);

function Footer() {
  const { t } = useTranslation();
  const { email, setEmail, message, loading, handleSubscribe } = useSubscriptionForm();

  const footerSections = [
    { 
      title: t('footer.columns.about.title'), 
      links: [
        { name: t('footer.columns.about.links.who_are_we'), href: '/about' },
        { name: t('footer.columns.about.links.mission_vision'), href: '/mission' },
        { name: t('footer.columns.about.links.roadmap'), href: '/roadmap' },
        { name: t('footer.columns.about.links.contact'), href: '/contact' }
      ], 
    },
    { 
      title: t('footer.columns.contact.title'), 
      links: [
        { name: 'destek@nekota.com.tr', href: 'mailto:destek@nekota.com.tr' }
      ], 
    },
    { 
      title: t('footer.columns.community.title'), 
      links: [
        { name: t('footer.columns.community.links.patreon'), href: 'https://www.patreon.com/c/NekotaApp' },
        { name: t('footer.columns.community.links.x_twitter'), href: 'https://x.com/nekotaapptr' },
        { name: t('footer.columns.community.links.discord'), href: 'https://discord.gg/7bZGFDEmQE' },
        { name: t('footer.columns.community.links.reddit'), href: 'https://www.reddit.com/r/NekotaApp/' }
      ], 
    },
  ];

  return (
    <footer className="w-full bg-black px-8 md:px-[70px] py-20 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-between gap-10">
          {footerSections.map((section) => (
            <FooterColumn key={section.title} title={section.title} links={section.links} />
          ))}
          <div className="flex w-full max-w-[400px] flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              {/* Logo SVG olarak doğrudan eklendi */}
              <img className="h-10 w-auto" src={logo} alt="Nekota Logo" />
              <div className="font-['Poppins'] text-base font-bold uppercase text-white">
                Nekota
              </div>
            </div>
            <p className="font-['Poppins'] text-sm font-light tracking-[0.28px] text-white/60">
              {t('footer.subscription_text')}
            </p>
            
            <form onSubmit={handleSubscribe} className="w-full flex flex-col items-start gap-3">
              <div className="flex w-full items-center gap-3">
                  <input
                      type="email"
                      placeholder={t('footer.email_placeholder')}
                      className="flex-grow rounded-full border border-[#A1AEBF]/50 bg-[#0F0F0F] px-4 py-2.5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      required
                  />
                  <button
                      type="submit"
                      className="flex-shrink-0 rounded-full bg-[#FFA800] px-4 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={loading}
                  >
                      {loading ? t('footer.loading_button') : t('footer.subscribe_button')}
                  </button>
              </div>
              {message && <p className={`text-sm ${message === t('footer.message_success') ? 'text-green-400' : 'text-yellow-400'}`}>{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;