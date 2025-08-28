// src/components/NavBar.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { IoSearch, IoArrowBack } from 'react-icons/io5';

const navLinks = [
  {
    text: 'Nekota Nedir?',
    dropdownItems: [
      { text: 'Biz Kimiz?', path: '/about' },
      { text: 'Misyon ve Vizyon', path: '/mission' },
      { text: 'Yol Haritası', path: '/roadmap' },
    ]
  },
  { text: 'Blog', path: '/blog' },
  { text: 'Keşfet', path: '/legal' },
  { text: 'Topluluk', path: '/community' },
];

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const location = useLocation();
  const isDiscoverPage = location.pathname.startsWith('/legal');

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 10) };
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
    timeoutRef.current = setTimeout(() => { setOpenDropdown(null); }, 200);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#111111]/50 backdrop-blur-lg border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
        <div className="flex w-full items-center justify-between px-4 py-6 sm:px-8 lg:px-[70px]">

          <div className="flex items-center gap-6">
            <Link to="/" className="flex shrink-0 items-center gap-3">
              <img className="h-10 w-auto" src={logo} alt="Nekota Logo" />
              <div className="text-base font-bold uppercase leading-[108%] text-white font-['Bio_Sans']">Nekota</div>
            </Link>

            {isDiscoverPage && (
              <Link to="/" className="hidden lg:flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <IoArrowBack />
                <span className="text-sm font-medium">Ana Sayfa</span>
              </Link>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {isDiscoverPage ? (
              <form className="relative hidden">
                <input
                  type="text"
                  placeholder="Dokümanlarda ara..."
                  className="w-64 rounded-full border border-white/20 bg-white/5 py-2 pl-10 pr-4 text-white placeholder:text-white/50 focus:border-[#FFA800] focus:ring-1 focus:ring-[#FFA800]"
                />
                <IoSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50" />
              </form>
            ) : (
              <>
                <nav className="flex items-center gap-2">
                  {navLinks.map((link) => (
                    <div key={link.text} className="relative" onMouseEnter={() => handleMouseEnter(link.text)} onMouseLeave={handleMouseLeave}>
                      {link.path ? (
                        <Link to={link.path} className="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 transition-colors hover:bg-white/10">
                          <div className="text-base font-medium leading-5 tracking-[0.32px] text-white font-['Poppins']">{link.text}</div>
                        </Link>
                      ) : (
                        <div className="flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 transition-colors hover:bg-white/10">
                          <div className="text-base font-medium leading-5 tracking-[0.32px] text-white font-['Poppins']">{link.text}</div>
                          {link.dropdownItems && <div className={`${openDropdown === link.text ? 'rotate-180' : ''} transition-transform duration-200`}><DropdownIcon /></div>}
                        </div>
                      )}
                      {link.dropdownItems && (
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-xl bg-black/30 backdrop-blur-xl ring-1 ring-white/10 transition-all duration-300 ease-in-out ${openDropdown === link.text ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                          <div className="flex flex-col p-2">
                            {link.dropdownItems.map((item) => <Link key={item.text} to={item.path} className="whitespace-nowrap rounded-md px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white">{item.text}</Link>)}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <NavLink to={"/contact"}>
                  <button className="rounded-[1000px] border border-[#FFA800] px-6 py-[10px] text-sm font-bold uppercase leading-normal text-[#FFA800] transition-colors hover:bg-[#FFA800] hover:text-black">Bizimle İletişime Geç</button>
                </NavLink>

              </>
            )}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-lg transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) =>
            link.dropdownItems ? (
              <div key={link.text} className="text-center">
                <span className="text-2xl font-semibold text-white/80">{link.text}</span>
                <div className="flex flex-col gap-4 mt-4">
                  {link.dropdownItems.map(item => (
                    <Link to={item.path} key={item.text} className="text-xl font-medium text-white/60 transition-colors hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.text} to={link.path || '#'} className="text-2xl font-semibold text-white/80 transition-colors hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                {link.text}
              </Link>
            ))}
          <button onClick={() => setIsMobileMenuOpen(false)} className="mt-4 rounded-[1000px] border border-[#FFA800] px-8 py-3 text-base font-bold uppercase leading-normal text-[#FFA800] transition-colors hover:bg-[#FFA800] hover:text-black">
            Bizimle İletişime Geç
          </button>
        </div>
      </div>
    </>
  );
}