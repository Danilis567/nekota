import React, { useRef, useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import Content from './content';

// Sol menüdeki açılır/kapanır ana kategori bileşeni
const MainAccordion = ({ category, categoryId, accordions, openMainCategory, setOpenMainCategory }) => {
    const isOpen = openMainCategory === categoryId;

    return (
        <div className="py-2">
            <button
                onClick={() => setOpenMainCategory(isOpen ? null : categoryId)}
                className="flex w-full items-center text-start justify-between text-xl font-bold text-white transition-colors hover:text-[#FFA800]"
            >
                <span className="pr-2">{category}</span>
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-0' : '-rotate-90'}`}>
                    <FiChevronDown />
                </span>
            </button>
            <div className={`flex flex-col gap-4 overflow-hidden pl-2 transition-all duration-300 ${isOpen ? 'mt-4 max-h-screen' : 'max-h-0'}`}>
                {accordions.map((accordion) => (
                    <div key={accordion.category}>
                        <h3 className="mb-2 text-md font-semibold text-white/80">{accordion.category}</h3>
                        <div className="flex flex-col gap-1">
                            {accordion.items.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="block rounded-md px-3 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default function LegalPage({ searchQuery }) {
    const { t } = useTranslation();
    const [openMainCategory, setOpenMainCategory] = useState('artist'); 
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const contentRef = useRef(null);

    // Tüm sözleşme içeriğini ve menü yapısını tek bir veri objesinde topladık
    const legalData = [
        {
            id: 'artist',
            mainCategory: t('legal.menu.artist.main'),
            accordions: [
                {
                    category: t('legal.menu.artist.general_terms'),
                    items: [
                        { id: 'madde-1-2', title: t('legal.menu.artist.items.parties') },
                        { id: 'madde-3', title: t('legal.menu.artist.items.licensing') },
                        { id: 'madde-6', title: t('legal.menu.artist.items.intellectual_property') },
                        { id: 'madde-7', title: t('legal.menu.artist.items.responsibilities') },
                        { id: 'madde-8-9', title: t('legal.menu.artist.items.termination') },
                    ]
                },
                {
                    category: t('legal.menu.artist.revenue_models'),
                    items: [
                        { id: 'madde-4', title: t('legal.menu.artist.items.basic_revenue') },
                        { id: 'madde-5', title: t('legal.menu.artist.items.youtube') },
                        { id: 'madde-y', title: t('legal.menu.artist.items.tiered_subscription') },
                        { id: 'madde-z', title: t('legal.menu.artist.items.crowdfunding') },
                    ]
                },
                {
                    category: t('legal.menu.artist.legal_procedures'),
                    items: [
                        { id: 'madde-10', title: t('legal.menu.artist.items.force_majeure') },
                        { id: 'madde-11', title: t('legal.menu.artist.items.dispute_resolution') },
                        { id: 'madde-12', title: t('legal.menu.artist.items.entire_agreement') },
                    ]
                }
            ]
        },
        {
            id: 'user',
            mainCategory: t('legal.menu.user.main'),
            accordions: [
                {
                    category: t('legal.menu.user.subscription_payments'),
                    items: [
                        { id: 'kullanici-abonelik-paketleri', title: t('legal.menu.user.items.packages') },
                        { id: 'kullanici-odeme-ve-faturalandirma', title: t('legal.menu.user.items.billing') },
                        { id: 'kullanici-iptal-ve-iade', title: t('legal.menu.user.items.cancellation') },
                    ]
                },
                {
                    category: t('legal.menu.user.special_privileges'),
                    items: [
                        { id: 'kullanici-patreon-entegrasyonu', title: t('legal.menu.user.items.patreon') },
                    ]
                }
            ]
        },
        {
            id: 'guides',
            mainCategory: t('legal.menu.guides.main'),
            accordions: [
                {
                    category: t('legal.menu.guides.account_management'),
                    items: [
                        { id: 'rehber-profil-olusturma', title: t('legal.menu.guides.items.profile') },
                        { id: 'rehber-bildirim-ayarlari', title: t('legal.menu.guides.items.notifications') },
                        { id: 'rehber-guvenlik-ve-sifre', title: t('legal.menu.guides.items.security') },
                    ]
                },
                {
                    category: t('legal.menu.guides.content_management'),
                    items: [
                        { id: 'rehber-eser-yukleme', title: t('legal.menu.guides.items.upload') },
                        { id: 'rehber-bolumleme-zamanlama', title: t('legal.menu.guides.items.scheduling') },
                        { id: 'rehber-sanatci-paneli', title: t('legal.menu.guides.items.artist_panel') },
                    ]
                },
                {
                    category: t('legal.menu.guides.reading_experience'),
                    items: [
                        { id: 'rehber-kutuphane-kullanimi', title: t('legal.menu.guides.items.library') },
                        { id: 'rehber-cevrimdisi-okuma', title: t('legal.menu.guides.items.offline') },
                        { id: 'rehber-icerik-kesfetme', title: t('legal.menu.guides.items.discovery') },
                    ]
                }
            ]
        },
        {
            id: 'community',
            mainCategory: t('legal.menu.community.main'),
            accordions: [
                {
                    category: t('legal.menu.community.etiquette'),
                    items: [
                        { id: 'topluluk-yapici-elestiri', title: t('legal.menu.community.items.criticism') },
                        { id: 'topluluk-spoiler-politikasi', title: t('legal.menu.community.items.spoiler') },
                    ]
                },
                {
                    category: t('legal.menu.community.moderation'),
                    items: [
                        { id: 'topluluk-icerik-raporlama', title: t('legal.menu.community.items.reporting') },
                        { id: 'topluluk-itiraz-surecleri', title: t('legal.menu.community.items.appeals') },
                    ]
                },
                {
                    category: t('legal.menu.community.discord_forum'),
                    items: [
                        { id: 'topluluk-kanal-kullanimi', title: t('legal.menu.community.items.channels') },
                        { id: 'topluluk-etkinlik-sartlari', title: t('legal.menu.community.items.events') },
                    ]
                }
            ]
        },
        {
            id: 'technical',
            mainCategory: t('legal.menu.technical.main'),
            accordions: [
                {
                    category: t('legal.menu.technical.technologies'),
                    items: [
                        { id: 'teknik-flutter-firebase', title: t('legal.menu.technical.items.flutter_firebase') },
                        { id: 'teknik-altyapi-guvenligi', title: t('legal.menu.technical.items.infrastructure') },
                    ]
                },
                {
                    category: t('legal.menu.technical.feedback'),
                    items: [
                        { id: 'teknik-ozellik-talebi', title: t('legal.menu.technical.items.feature_request') },
                        { id: 'teknik-hata-bildirme', title: t('legal.menu.technical.items.bug_reporting') },
                    ]
                },
                {
                    category: t('legal.menu.technical.open_source'),
                    items: [
                        { id: 'teknik-katkida-bulunma', title: t('legal.menu.technical.items.contributing') },
                        { id: 'teknik-katkida-bulunanlar', title: t('legal.menu.technical.items.contributors') },
                    ]
                }
            ]
        },
        {
            id: 'partnership',
            mainCategory: t('legal.menu.partnership.main'),
            accordions: [
                {
                    category: t('legal.menu.partnership.models'),
                    items: [
                        { id: 'ortaklik-yayinci-marka', title: t('legal.menu.partnership.items.opportunities') },
                    ]
                },
                {
                    category: t('legal.menu.partnership.press_kit'),
                    items: [
                        { id: 'basin-logo-materyal', title: t('legal.menu.partnership.items.materials') },
                        { id: 'basin-hakkimizda', title: t('legal.menu.partnership.items.about_press') },
                    ]
                },
                {
                    category: t('legal.menu.partnership.advertising'),
                    items: [
                        { id: 'reklam-nasil-verilir', title: t('legal.menu.partnership.items.how_to_advertise') },
                    ]
                }
            ]
        }
    ];

    const performSearch = () => {
        if (!searchQuery || searchQuery.trim() === '') {
            setSearchResults([]);
            setHasSearched(false);
            return;
        }

        const query = searchQuery.toLowerCase().trim();
        const results = [];

        // Tüm içerikte arama yap
        const contentElements = contentRef.current.querySelectorAll('section');
        contentElements.forEach(section => {
            const textContent = section.textContent.toLowerCase();
            if (textContent.includes(query)) {
                results.push({
                    id: section.id,
                    title: section.querySelector('h2').textContent,
                    content: textContent
                });
            }
        });

        setSearchResults(results);
        setHasSearched(true);

        // Eğer sonuç varsa ilk sonuca scroll yap
        if (results.length > 0) {
            setTimeout(() => {
                const element = document.getElementById(results[0].id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });

                    // Vurgulama efekti için geçici class ekle
                    element.classList.add('bg-yellow-500/10');
                    setTimeout(() => {
                        element.classList.remove('bg-yellow-500/10');
                    }, 2000);
                }
            }, 100);
        }
    };

    // searchQuery değiştiğinde arama yap
    useEffect(() => {
        performSearch();
    }, [searchQuery]);

    // Arama sonuçlarını gösteren bileşen
    const SearchResultsComponent = () => {
        if (!hasSearched) return null;

        if (searchResults.length === 0) {
            return (
                <div className="mb-8 p-4 bg-white/5 rounded-lg">
                    <p className="text-white/70">{t('legal.search.no_results', { query: searchQuery })}</p>
                </div>
            );
        }

        return (
            <div className="mb-8 p-4 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">
                    {t('legal.search.results_for', { query: searchQuery, count: searchResults.length })}
                </h3>
                <div className="space-y-2">
                    {searchResults.map((result, index) => (
                        <div key={index} className="p-3 rounded-md hover:bg-white/10 transition-colors">
                            <a
                                href={`#${result.id}`}
                                className="text-[#FFA800] font-medium block mb-1"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(result.id).scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {result.title}
                            </a>
                            <p className="text-white/60 text-sm line-clamp-2">
                                {result.content.substring(0, 150)}...
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="bg-[#111111] font-['Poppins'] text-white">
            <section className="relative border-b border-white/10 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            {t('legal.hero.title')}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white/70">
                            {t('legal.hero.description')}
                        </p>
                    </div>
                </div>
            </section>

            <div className="mx-auto flex max-w-7xl px-6 py-16 lg:px-8">
                <aside className="sticky top-28 hidden h-[calc(100vh-8rem)] w-72 shrink-0 overflow-y-auto pr-4 lg:block custom-sidebar-scroll">
                    <nav className="flex flex-col divide-y divide-white/10">
                        {legalData.map((main) => (
                            <MainAccordion
                                key={main.id}
                                category={main.mainCategory}
                                categoryId={main.id}
                                accordions={main.accordions}
                                openMainCategory={openMainCategory}
                                setOpenMainCategory={setOpenMainCategory}
                            />
                        ))}
                    </nav>
                </aside>

                <main className="w-full lg:pl-8" ref={contentRef}>
                    <SearchResultsComponent />
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-white">{t('legal.main_title')}</h2>
                        <p className="mt-4 text-lg text-white/70">{t('legal.main_description')}</p>
                    </div>

                    <Content />

                </main>
            </div>

            <style>{`
                .custom-sidebar-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-sidebar-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-sidebar-scroll::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-sidebar-scroll::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 168, 0, 0.3);
                }
            `}</style>
        </div>
    );
}
