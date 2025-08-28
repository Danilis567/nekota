// src/pages/LegalPage.jsx

import React, { useRef, useState, useEffect, searchQuery } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Content from './content';

// Tüm sözleşme içeriğini ve menü yapısını tek bir veri objesinde topladık
const legalData = [
    {
        mainCategory: 'Sanatçılar için',
        accordions: [
            {
                category: 'Genel Şartlar',
                items: [
                    { id: 'madde-1-2', title: 'Taraflar ve Konu' },
                    { id: 'madde-3', title: 'Lisanslama ve Süre' },
                    { id: 'madde-6', title: 'Fikri Mülkiyet' },
                    { id: 'madde-7', title: 'Tarafların Sorumlulukları' },
                    { id: 'madde-8-9', title: 'Fesih ve Gizlilik' },
                ]
            },
            {
                category: 'Gelir Modelleri',
                items: [
                    { id: 'madde-4', title: 'Temel Gelirler' },
                    { id: 'madde-5', title: 'YouTube Promosyonu' },
                    { id: 'madde-y', title: 'Katmanlı Abonelik Modeli' },
                    { id: 'madde-z', title: 'Kitle Fonlaması Modeli' },
                ]
            },
            {
                category: 'Yasal Prosedürler',
                items: [
                    { id: 'madde-10', title: 'Mücbir Sebepler' },
                    { id: 'madde-11', title: 'Uyuşmazlıkların Çözümü' },
                    { id: 'madde-12', title: 'Anlaşmanın Bütünlüğü' },
                ]
            }
        ]
    },
    {
        mainCategory: 'Kullanıcılar için',
        accordions: [
            {
                category: 'Abonelik ve Ödemeler',
                items: [
                    { id: 'kullanici-abonelik-paketleri', title: 'Platform Abonelik Paketleri' },
                    { id: 'kullanici-odeme-ve-faturalandirma', title: 'Ödeme ve Faturalandırma' },
                    { id: 'kullanici-iptal-ve-iade', title: 'İptal ve İade Politikası' },
                ]
            },
            {
                category: 'Özel Ayrıcalıklar',
                items: [
                    { id: 'kullanici-patreon-entegrasyonu', title: 'Patreon Ayrıcalıkları' },
                ]
            }
        ]
    },
    {
        mainCategory: 'Platform Rehberleri',
        accordions: [
            {
                category: 'Hesap Yönetimi',
                items: [
                    { id: 'rehber-profil-olusturma', title: 'Profil Oluşturma ve Düzenleme' },
                    { id: 'rehber-bildirim-ayarlari', title: 'Bildirim Ayarları' },
                    { id: 'rehber-guvenlik-ve-sifre', title: 'Güvenlik ve Şifre İşlemleri' },
                ]
            },
            {
                category: 'Sanatçılar için İçerik Yönetimi',
                items: [
                    { id: 'rehber-eser-yukleme', title: 'Eser Yükleme Standartları' },
                    { id: 'rehber-bolumleme-zamanlama', title: 'Bölümleme ve Zamanlama' },
                    { id: 'rehber-sanatci-paneli', title: 'Sanatçı Paneli Kullanımı' },
                ]
            },
            {
                category: 'Okurlar için Okuma Deneyimi',
                items: [
                    { id: 'rehber-kutuphane-kullanimi', title: 'Kütüphane Nasıl Kullanılır?' },
                    { id: 'rehber-cevrimdisi-okuma', title: 'Çevrimdışı Okuma Özelliği' },
                    { id: 'rehber-icerik-kesfetme', title: 'İçerik Keşfetme ve Filtreleme' },
                ]
            }
        ]
    },
    {
        mainCategory: 'Topluluk ve Etkileşim Kuralları',
        accordions: [
            {
                category: 'Yorum ve Tartışma Adabı',
                items: [
                    { id: 'topluluk-yapici-elestiri', title: 'Yapıcı Eleştiri Nasıl Yapılır?' },
                    { id: 'topluluk-spoiler-politikasi', title: 'Spoiler Politikası' },
                ]
            },
            {
                category: 'Moderasyon Süreci',
                items: [
                    { id: 'topluluk-icerik-raporlama', title: 'İçerik Nasıl Rapor Edilir?' },
                    { id: 'topluluk-itiraz-surecleri', title: 'İtiraz ve Değerlendirme Süreçleri' },
                ]
            },
            {
                category: 'Discord ve Forum Kuralları',
                items: [
                    { id: 'topluluk-kanal-kullanimi', title: 'Kanal Kullanım Amaçları' },
                    { id: 'topluluk-etkinlik-sartlari', title: 'Etkinlik ve Yarışma Katılım Şartları' },
                ]
            }
        ]
    },
    {
        mainCategory: 'Teknik Detaylar',
        accordions: [
            {
                category: 'Kullandığımız Teknolojiler',
                items: [
                    { id: 'teknik-flutter-firebase', title: 'Neden Flutter ve Firebase?' },
                    { id: 'teknik-altyapi-guvenligi', title: 'Altyapımızın Güvenliği' },
                ]
            },
            {
                category: 'Geri Bildirim ve Hata Raporlama',
                items: [
                    { id: 'teknik-ozellik-talebi', title: 'Yeni Özellik Talebi Nasıl Yapılır?' },
                    { id: 'teknik-hata-bildirme', title: 'Hata (Bug) Bildirme Süreci' },
                ]
            },
            {
                category: 'Açık Kaynak Katkıları',
                items: [
                    { id: 'teknik-katkida-bulunma', title: 'Projeye Nasıl Katkıda Bulunabilirsiniz?' },
                    { id: 'teknik-katkida-bulunanlar', title: 'Katkıda Bulunanlar Listesi' },
                ]
            }
        ]
    },
    {
        mainCategory: 'İş Ortaklıkları ve Basın',
        accordions: [
            {
                category: 'İş Birliği Modelleri',
                items: [
                    { id: 'ortaklik-yayinci-marka', title: 'Yayıncılar ve Markalar için Fırsatlar' },
                ]
            },
            {
                category: 'Basın Kiti',
                items: [
                    { id: 'basin-logo-materyal', title: 'Logolar ve Görsel Materyaller' },
                    { id: 'basin-hakkimizda', title: 'Hakkımızda Yazısı ve İletişim' },
                ]
            },
            {
                category: 'Reklam Seçenekleri',
                items: [
                    { id: 'reklam-nasil-verilir', title: 'Platformda Nasıl Reklam Verilir?' },
                ]
            }
        ]
    }
];

// Tek bir metin bölümünü oluşturan bileşen


// Sol menüdeki açılır/kapanır ana kategori bileşeni
const MainAccordion = ({ category, accordions, openMainCategory, setOpenMainCategory }) => {
    const isOpen = openMainCategory === category;

    return (
        <div className="py-2">
            <button
                onClick={() => setOpenMainCategory(isOpen ? null : category)}
                className="flex w-full items-center text-start justify-between text-xl font-bold text-white transition-colors hover:text-[#FFA800]"
            >
                <span>{category}</span>
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


export default function LegalPage() {
    const [openMainCategory, setOpenMainCategory] = useState('Sanatçılar için'); // İlk ana kategori başlangıçta açık olsun
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const contentRef = useRef(null);

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
    const SearchResults = () => {
        if (!hasSearched) return null;

        if (searchResults.length === 0) {
            return (
                <div className="mb-8 p-4 bg-white/5 rounded-lg">
                    <p className="text-white/70">"{searchQuery}" için hiç sonuç bulunamadı.</p>
                </div>
            );
        }

        return (
            <div className="mb-8 p-4 bg-white/5 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">
                    "{searchQuery}" için {searchResults.length} sonuç bulundu:
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
                            Şartlar ve Koşullar
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white/70">
                            Nekota platformunda bir sanatçı veya kullanıcı olmanın getirdiği haklar, sorumluluklar ve politikalar hakkında tüm detaylar.
                        </p>
                    </div>
                </div>
            </section>

            <div className="mx-auto flex max-w-7xl px-6 py-16 lg:px-8">
                <aside className="sticky top-28 hidden h-[calc(100vh-8rem)] w-72 shrink-0 pr-8 lg:block">
                    <nav className="flex flex-col divide-y divide-white/10">
                        {legalData.map((main) => (
                            <MainAccordion
                                key={main.mainCategory}
                                category={main.mainCategory}
                                accordions={main.accordions}
                                openMainCategory={openMainCategory}
                                setOpenMainCategory={setOpenMainCategory}
                            />
                        ))}
                    </nav>
                </aside>

                <main className="w-full lg:pl-8">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-white">Nekota İçerik Üreticisi ve Kullanıcı Anlaşması</h2>
                        <p className="mt-4 text-lg text-white/70">Bu belge, Nekota platformunun kullanımıyla ilgili tüm taraflar (Sanatçılar, Kullanıcılar, İş Ortakları) için geçerli olan genel kuralları, politikaları ve yasal yükümlülükleri içerir.</p>
                    </div>

                    <Content />


                </main>
            </div>
        </div>
    );
}
