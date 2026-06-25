// src/components/NavBar.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { IoSearch, IoArrowBack } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const DropdownIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1671 7.64174c-0.1561-0.15519-0.3673-0.24231-0.5875-0.24231s-0.4314 0.08712-0.5875 0.24231L10.0004 10.5917l-2.9917-2.94996c-0.1561-0.15519-0.3673-0.24231-0.5875-0.24231s-0.4314 0.08712-0.5875 0.24231c-0.0781 0.07746-0.1401 0.16963-0.1824 0.27118s-0.0642 0.21101-0.0642 0.32101 0.0219 0.21955 0.0642 0.32109c0.0423 0.10156 0.1043 0.19372 0.1824 0.27119l3.5333 3.53333c0.0775 0.0781 0.1696 0.1401 0.2712 0.1824s0.211 0.0642 0.321 0.0642 0.2195-0.0219 0.3211-0.0642c0.1015-0.0423 0.1937-0.1043 0.2712-0.1824l3.5417-3.53333c0.0781-0.07747 0.1401-0.16963 0.1824-0.27118 0.0423-0.10154 0.0641-0.21046 0.0641-0.32047s-0.0218-0.21893-0.0641-0.32048c-0.0423-0.10155-0.1043-0.19372-0.1824-0.27118Z" fill="white" /></svg>
);

const HamburgerIcon = () => (
  <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const location = useLocation();
  const isDiscoverPage = location.pathname.startsWith('/legal') || location.pathname.startsWith('/contents');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (text) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(text);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#111111]/50 backdrop-blur-lg border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
        <div className="flex w-full items-center justify-between px-4 py-6 sm:px-8 lg:px-[70px]">

          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex shrink-0 items-center gap-3">
              <img className="h-10 w-auto" src={logo} alt="Nekota Logo" />
              <div className="font-['Poppins'] text-base font-bold uppercase text-white">Nekota</div>
            </Link>
          </div>

          {/* Desktop Menü */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-4">
              {/* Language Switcher (Her zaman görünür) */}
              <button 
                onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/60 transition-all hover:border-[#FFA800] hover:text-[#FFA800]"
              >
                {i18n.language.split('-')[0].toUpperCase() === 'TR' ? 'EN' : 'TR'}
              </button>

              {isDiscoverPage ? (
                <>
                  <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                    <IoArrowBack />
                    <span className="text-sm font-medium">{t('navbar.home')}</span>
                  </Link>
                  <form className="relative hidden">
                    <input
                      type="text"
                      placeholder={t('legal.search.placeholder')}
                      className="w-64 rounded-full border border-white/20 bg-white/5 py-2 pl-10 pr-4 text-white placeholder:text-white/50 focus:border-[#FFA800] focus:ring-1 focus:ring-[#FFA800]"
                    />
                    <IoSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50" />
                  </form>
                </>
              ) : (
                <>
                  <nav className="flex items-center gap-2">
                    {/* 1. Dropdown Menü */}
                    <div
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('what_is_nekota')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 transition-colors hover:bg-white/10">
                        <div className="text-base font-medium leading-5 tracking-[0.32px] text-white font-['Poppins']">
                          {t('navbar.what_is_nekota')}
                        </div>
                        <div className={`${openDropdown === 'what_is_nekota' ? 'rotate-180' : ''} transition-transform duration-200`}>
                          <DropdownIcon />
                        </div>
                      </div>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-xl bg-black/30 backdrop-blur-xl ring-1 ring-white/10 transition-all duration-300 ease-in-out ${openDropdown === 'what_is_nekota' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                        <div className="flex flex-col p-2">
                          <Link to="/about" className="whitespace-nowrap rounded-md px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
                            {t('navbar.dropdown.who_are_we')}
                          </Link>
                          <Link to="/mission" className="whitespace-nowrap rounded-md px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
                            {t('navbar.dropdown.mission_vision')}
                          </Link>
                          <Link to="/roadmap" className="whitespace-nowrap rounded-md px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white">
                            {t('navbar.dropdown.roadmap')}
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* 2. Normal Link */}
                    <Link to="/blog" className="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 transition-colors hover:bg-white/10">
                      <div className="text-base font-medium leading-5 tracking-[0.32px] text-white font-['Poppins']">
                        {t('navbar.blog')}
                      </div>
                    </Link>

                    <Link to="/contents" className="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 transition-colors hover:bg-white/10">
                      <div className="text-base font-medium leading-5 tracking-[0.32px] text-white font-['Poppins']">
                        {t('navbar.contents', 'İçerikler')}
                      </div>
                    </Link>

                    {/* 3. Normal Link */}
                    <Link to="/legal" className="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 transition-colors hover:bg-white/10">
                      <div className="text-base font-medium leading-5 tracking-[0.32px] text-white font-['Poppins']">
                        {t('navbar.discover')}
                      </div>
                    </Link>
                  </nav>

                  {/* Contact Button */}
                  <NavLink to="/contact">
                    <button className="rounded-[1000px] border border-[#FFA800] px-6 py-[10px] text-sm font-bold uppercase text-[#FFA800] hover:bg-[#FFA800] hover:text-black">
                      {t('navbar.contact_us')}
                    </button>
                  </NavLink>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menü Butonu */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menü */}
      <div className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex h-full flex-col items-center justify-center gap-8">
          <div className="text-center">
            <span className="text-2xl font-semibold text-white/80">{t('navbar.what_is_nekota')}</span>
            <div className="flex flex-col gap-4 mt-4">
              <Link to="/about" className="text-xl font-medium text-white/60 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                {t('navbar.dropdown.who_are_we')}
              </Link>
              <Link to="/mission" className="text-xl font-medium text-white/60 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                {t('navbar.dropdown.mission_vision')}
              </Link>
              <Link to="/roadmap" className="text-xl font-medium text-white/60 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                {t('navbar.dropdown.roadmap')}
              </Link>
            </div>
          </div>

          <Link to="/blog" className="text-2xl font-semibold text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            {t('navbar.blog')}
          </Link>
          <Link to="/contents" className="text-2xl font-semibold text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            {t('navbar.contents', 'İçerikler')}
          </Link>
          <Link to="/legal" className="text-2xl font-semibold text-white/80 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            {t('navbar.discover')}
          </Link>

          <button onClick={() => setIsMobileMenuOpen(false)} className="mt-4 rounded-[1000px] border border-[#FFA800] px-8 py-3 text-base font-bold uppercase text-[#FFA800] hover:bg-[#FFA800] hover:text-black">
            <Link to="/contact">
              {t('navbar.contact_us')}
            </Link>
          </button>

          {/* Mobile Language Switcher */}
          <button 
            onClick={() => i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')}
            className="mt-4 text-white/40 text-sm font-bold uppercase hover:text-white"
          >
            {i18n.language.split('-')[0].toUpperCase() === 'TR' ? 'Switch to English' : 'Türkçe\'ye Geç'}
          </button>
        </div>
      </div>
    </>
  );
}
