// src/pages/AdminTestPage.jsx

import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from 'firebase/firestore';
import { IoTrash, IoAdd, IoClose, IoPencil, IoSearch, IoStatsChart, IoList, IoDocumentText, IoCog, IoEye, IoEyeOff } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  'Manga',
  'Animasyon',
  'Webtoon',
  'Light Novel',
  'Web Novel',
  'Roman',
  'Kısa Hikaye',
  'Yaoi',
  'Yuri',
  'BL (Boys\' Love)',
  'GL (Girls\' Love)',
  'Manhwa',
  'Manhua',
  'Doujinshi',
  'One-shot',
  'Oyun Geliştirme',
  'Grafik Tasarım',
  'Yazılım',
  'Ses & Müzik',
  'Diğer'
];

export default function AdminTestPage() {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState('basic'); // 'basic', 'description', 'technical'
  const [searchQuery, setSearchQuery] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    title_tr: '',
    title_en: '',
    category: CATEGORIES[0],
    shortDescription_tr: '',
    shortDescription_en: '',
    detailedSummary_tr: '',
    detailedSummary_en: '',
    image: '',
    image_horizontal: '',
    isVisible: true,
    license: 'CC-BY 4.0',
    revenueModel: 'standart gelir modeli ile kişi/kurum/kuruluşlara bagış/ödeme yapılması',
    donationAddress: '',
    hasLicenseInfo: false,
  });

  const [planningStages, setPlanningStages] = useState([{ tr: '', en: '' }]);
  const [technicalDetails, setTechnicalDetails] = useState([{ key: '', value: '' }]);

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    try {
      const q = query(collection(db, "contents"), orderBy("title_tr"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setContents(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contents: ", error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Planning Stages Handlers
  const addStage = () => setPlanningStages([...planningStages, { tr: '', en: '' }]);
  const removeStage = (index) => setPlanningStages(planningStages.filter((_, i) => i !== index));
  const updateStage = (index, lang, value) => {
    const newStages = [...planningStages];
    newStages[index][lang] = value;
    setPlanningStages(newStages);
  };

  // Technical Details Handlers
  const addDetail = () => setTechnicalDetails([...technicalDetails, { key: '', value: '' }]);
  const removeDetail = (index) => setTechnicalDetails(technicalDetails.filter((_, i) => i !== index));
  const updateDetail = (index, field, value) => {
    const newDetails = [...technicalDetails];
    newDetails[index][field] = value;
    setTechnicalDetails(newDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare tech details as an object
      const techObj = {};
      technicalDetails.forEach(d => {
        if (d.key && d.value) techObj[d.key] = d.value;
      });

      const finalData = {
        ...formData,
        planningStages: planningStages.filter(s => s.tr.trim() !== '' || s.en.trim() !== ''),
        technicalDetails: techObj,
        updatedAt: new Date().toISOString()
      };

      if (editingId) {
        await updateDoc(doc(db, "contents", editingId), finalData);
        alert("İçerik başarıyla güncellendi!");
      } else {
        finalData.createdAt = new Date().toISOString();
        await addDoc(collection(db, "contents"), finalData);
        alert("İçerik başarıyla eklendi!");
      }

      // Reset Form
      setFormData({
        title_tr: '', title_en: '',
        category: CATEGORIES[0],
        shortDescription_tr: '', shortDescription_en: '',
        detailedSummary_tr: '', detailedSummary_en: '',
        image: '',
        image_horizontal: '',
        isVisible: true,
        license: 'CC-BY 4.0',
        revenueModel: 'standart gelir modeli ile kişi/kurum/kuruluşlara bagış/ödeme yapılması',
        donationAddress: '',
        hasLicenseInfo: false
      });
      setPlanningStages([{ tr: '', en: '' }]);
      setTechnicalDetails([{ key: '', value: '' }]);
      setEditingId(null);

      fetchContents();
    } catch (error) {
      console.error("Error saving document: ", error);
      alert("Hata oluştu!");
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      title_tr: item.title_tr || '',
      title_en: item.title_en || '',
      category: item.category || CATEGORIES[0],
      shortDescription_tr: item.shortDescription_tr || '',
      shortDescription_en: item.shortDescription_en || '',
      detailedSummary_tr: item.detailedSummary_tr || '',
      detailedSummary_en: item.detailedSummary_en || '',
      image: item.image || '',
      image_horizontal: item.image_horizontal || '',
      isVisible: item.isVisible !== undefined ? item.isVisible : true,
      license: item.license || 'CC-BY 4.0',
      revenueModel: item.revenueModel || 'standart gelir modeli ile kişi/kurum/kuruluşlara bagış/ödeme yapılması',
      donationAddress: item.donationAddress || '',
      hasLicenseInfo: item.hasLicenseInfo || false,
    });

    if (item.planningStages && item.planningStages.length > 0) {
      setPlanningStages(item.planningStages);
    } else {
      setPlanningStages([{ tr: '', en: '' }]);
    }

    if (item.technicalDetails) {
      const details = Object.entries(item.technicalDetails).map(([key, value]) => ({ key, value }));
      setTechnicalDetails(details.length > 0 ? details : [{ key: '', value: '' }]);
    } else {
      setTechnicalDetails([{ key: '', value: '' }]);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Bu içeriği silmek istediğinize emin misiniz?")) {
      try {
        await deleteDoc(doc(db, "contents", id));
        fetchContents();
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  const filteredContents = contents.filter(item =>
    (item.title_tr || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.title_en || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.category || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = {
    total: contents.length,
    categories: new Set(contents.map(c => c.category)).size,
    lastUpdate: contents.length > 0 ? new Date(Math.max(...contents.map(c => new Date(c.updatedAt || 0)))).toLocaleDateString('tr-TR') : '-'
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a] pt-32 pb-20 px-4 sm:px-8 lg:px-[70px]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Admin <span className="text-[#FFA800]">Panel</span></h1>
            <p className="text-white/40">İçerik yönetim sistemi ve platform istatistikleri</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
              <div className="text-white/40 text-xs uppercase tracking-wider mb-1">Toplam İçerik</div>
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                <IoList className="text-[#FFA800]" /> {stats.total}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
              <div className="text-white/40 text-xs uppercase tracking-wider mb-1">Kategoriler</div>
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                <IoStatsChart className="text-[#FFA800]" /> {stats.categories}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
              <div className="p-8 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <IoDocumentText className="text-[#FFA800]" />
                    {editingId ? 'İçeriği Düzenle' : 'Yeni İçerik Ekle'}
                  </h2>
                </div>
                {editingId && (
                  <button
                    onClick={() => {
                      setEditingId(null);
                      setFormData({ title_tr: '', title_en: '', category: CATEGORIES[0], shortDescription_tr: '', shortDescription_en: '', detailedSummary_tr: '', detailedSummary_en: '', image: '' });
                      setPlanningStages([{ tr: '', en: '' }]);
                      setTechnicalDetails([{ key: '', value: '' }]);
                    }}
                    className="bg-white/5 hover:bg-white/10 text-white/60 hover:text-white px-4 py-2 rounded-xl text-sm transition-all"
                  >
                    Düzenlemeyi İptal Et
                  </button>
                )}
              </div>

              {/* Tab Navigation */}
              <div className="flex px-8 border-b border-white/10 bg-white/[0.01]">
                {[
                  { id: 'basic', label: 'Temel Bilgiler', icon: IoDocumentText },
                  { id: 'description', label: 'Açıklamalar', icon: IoList },
                  { id: 'technical', label: 'Teknik & Planlama', icon: IoCog },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all relative ${activeTab === tab.id ? 'text-[#FFA800]' : 'text-white/40 hover:text-white/60'
                      }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFA800]"
                      />
                    )}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                <AnimatePresence mode="wait">
                  {activeTab === 'basic' && (
                    <motion.div
                      key="basic"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-white/60 text-xs font-bold uppercase tracking-wider">Başlık (TR)</label>
                          <input
                            type="text" name="title_tr" value={formData.title_tr} onChange={handleInputChange} required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#FFA800] focus:bg-white/[0.08] outline-none transition-all placeholder:text-white/20"
                            placeholder="İçerik başlığı..."
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-white/60 text-xs font-bold uppercase tracking-wider">Title (EN)</label>
                          <input
                            type="text" name="title_en" value={formData.title_en} onChange={handleInputChange} required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#FFA800] focus:bg-white/[0.08] outline-none transition-all placeholder:text-white/20"
                            placeholder="Content title..."
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-white/60 text-xs font-bold uppercase tracking-wider">Kategori</label>
                          <div className="relative">
                            <select
                              name="category" value={formData.category} onChange={handleInputChange}
                              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#FFA800] focus:bg-white/[0.08] outline-none transition-all appearance-none"
                            >
                              {CATEGORIES.map(cat => (
                                <option key={cat} value={cat} className="bg-[#1a1a1a]">{cat}</option>
                              ))}
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                              <IoCog size={18} />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-white/60 text-xs font-bold uppercase tracking-wider">Dikey Görsel URL (Poster)</label>
                          <input
                            type="url" name="image" value={formData.image} onChange={handleInputChange} required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#FFA800] focus:bg-white/[0.08] outline-none transition-all placeholder:text-white/20"
                            placeholder="https://... (2:3 oran önerilir)"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-white/60 text-xs font-bold uppercase tracking-wider">Yatay Görsel URL (Banner)</label>
                          <input
                            type="url" name="image_horizontal" value={formData.image_horizontal} onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#FFA800] focus:bg-white/[0.08] outline-none transition-all placeholder:text-white/20"
                            placeholder="https://... (21:9 oran önerilir)"
                          />
                        </div>
                      </div>

                      {/* Visibility Toggle */}
                      <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                        <div>
                          <div className="text-white font-medium flex items-center gap-2">
                            {formData.isVisible ? <IoEye className="text-[#FFA800]" /> : <IoEyeOff className="text-white/40" />}
                            Platformda Görünsün
                          </div>
                          <div className="text-white/40 text-xs mt-1">İşaretli ise içerik tüm kullanıcılar tarafından görülebilir.</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, isVisible: !prev.isVisible }))}
                          className={`relative w-14 h-7 rounded-full transition-all duration-300 ${formData.isVisible ? 'bg-[#FFA800]' : 'bg-white/10'}`}
                        >
                          <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${formData.isVisible ? 'translate-x-7' : 'translate-x-0'}`} />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'description' && (
                    <motion.div
                      key="description"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-8"
                    >
                      <div className="space-y-6">
                        <h3 className="text-white/40 text-xs font-bold uppercase tracking-wider">Kısa Açıklamalar</h3>
                        <div className="grid grid-cols-1 gap-6">
                          <textarea
                            name="shortDescription_tr" value={formData.shortDescription_tr} onChange={handleInputChange} required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#FFA800] focus:bg-white/[0.08] outline-none transition-all h-24 placeholder:text-white/20"
                            placeholder="Türkçe kısa açıklama..."
                          />
                          <textarea
                            name="shortDescription_en" value={formData.shortDescription_en} onChange={handleInputChange} required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#FFA800] focus:bg-white/[0.08] outline-none transition-all h-24 placeholder:text-white/20"
                            placeholder="English short description..."
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-white/40 text-xs font-bold uppercase tracking-wider">Detaylı Özetler</h3>
                        <div className="grid grid-cols-1 gap-6">
                          <textarea
                            name="detailedSummary_tr" value={formData.detailedSummary_tr} onChange={handleInputChange} required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#FFA800] focus:bg-white/[0.08] outline-none transition-all h-40 placeholder:text-white/20"
                            placeholder="Türkçe detaylı özet..."
                          />
                          <textarea
                            name="detailedSummary_en" value={formData.detailedSummary_en} onChange={handleInputChange} required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-[#FFA800] focus:bg-white/[0.08] outline-none transition-all h-40 placeholder:text-white/20"
                            placeholder="English detailed summary..."
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'technical' && (
                    <motion.div
                      key="technical"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        <label className="text-white/60 text-xs font-bold uppercase tracking-wider flex justify-between">
                          Planlama Aşamaları
                          <button type="button" onClick={addStage} className="text-[#FFA800] lowercase flex items-center gap-1 hover:underline">
                            <IoAdd /> Yeni Ekle
                          </button>
                        </label>
                        <div className="space-y-3">
                          {planningStages.map((stage, index) => (
                            <motion.div
                              layout
                              key={index}
                              className="p-5 bg-white/[0.02] rounded-2xl border border-white/5 relative group"
                            >
                              <button type="button" onClick={() => removeStage(index)} className="absolute top-4 right-4 text-white/20 hover:text-red-500 transition-colors">
                                <IoClose size={20} />
                              </button>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                  type="text" placeholder="TR Aşama" value={stage.tr} onChange={(e) => updateStage(index, 'tr', e.target.value)}
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-[#FFA800] outline-none transition-all"
                                />
                                <input
                                  type="text" placeholder="EN Stage" value={stage.en} onChange={(e) => updateStage(index, 'en', e.target.value)}
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-[#FFA800] outline-none transition-all"
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-white/60 text-xs font-bold uppercase tracking-wider flex justify-between">
                          Teknik Özellikler
                          <button type="button" onClick={addDetail} className="text-[#FFA800] lowercase flex items-center gap-1 hover:underline">
                            <IoAdd /> Yeni Ekle
                          </button>
                        </label>
                        <div className="space-y-3">
                          {technicalDetails.map((detail, index) => (
                            <motion.div
                              layout
                              key={index}
                              className="flex gap-3 items-center group"
                            >
                              <input
                                type="text" placeholder="Özellik" value={detail.key} onChange={(e) => updateDetail(index, 'key', e.target.value)}
                                className="w-1/3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-[#FFA800] outline-none transition-all"
                              />
                              <input
                                type="text" placeholder="Değer" value={detail.value} onChange={(e) => updateDetail(index, 'value', e.target.value)}
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-[#FFA800] outline-none transition-all"
                              />
                              <button type="button" onClick={() => removeDetail(index)} className="text-white/20 hover:text-red-500 p-2 transition-colors">
                                <IoClose size={22} />
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Telif ve Destek Bölümü */}
                      <div className="space-y-6 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <h3 className="text-white/40 text-xs font-bold uppercase tracking-wider">Telif & Destek Bilgileri</h3>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, hasLicenseInfo: !prev.hasLicenseInfo }))}
                            className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${formData.hasLicenseInfo ? 'bg-[#FFA800] text-black' : 'bg-white/10 text-white/40'}`}
                          >
                            {formData.hasLicenseInfo ? 'AKTİF' : 'PASİF'}
                          </button>
                        </div>

                        {formData.hasLicenseInfo && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-4 overflow-hidden"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <label className="text-white/60 text-[10px] uppercase font-bold">Lisans Türü</label>
                                <input
                                  type="text" name="license" value={formData.license} onChange={handleInputChange}
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-[#FFA800] outline-none transition-all"
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-white/60 text-[10px] uppercase font-bold">Gelir Modeli</label>
                                <input
                                  type="text" name="revenueModel" value={formData.revenueModel} onChange={handleInputChange}
                                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-[#FFA800] outline-none transition-all"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-white/60 text-[10px] uppercase font-bold">Bağış / Destek Bağlantısı (URL)</label>
                              <input
                                type="url" name="donationAddress" value={formData.donationAddress} onChange={handleInputChange}
                                placeholder="https://platform.com/bagis-adresi"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:border-[#FFA800] outline-none transition-all"
                              />
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-12 pt-8 border-t border-white/10 flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#FFA800] text-black font-bold py-5 rounded-2xl hover:bg-[#ffb733] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#FFA800]/20"
                  >
                    {editingId ? 'Güncellemeleri Kaydet' : 'İçeriği Yayınla'}
                  </button>
                  {activeTab !== 'technical' && (
                    <button
                      type="button"
                      onClick={() => setActiveTab(activeTab === 'basic' ? 'description' : 'technical')}
                      className="px-8 bg-white/5 text-white font-medium rounded-2xl hover:bg-white/10 transition-all border border-white/10"
                    >
                      Sonraki Adım
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* List Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col gap-4">
              <div className="relative group">
                <IoSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#FFA800] transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="İçeriklerde ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-5 py-4 text-white focus:border-[#FFA800] focus:bg-white/[0.08] outline-none transition-all"
                />
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl max-h-[800px] flex flex-col">
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
                <h2 className="text-lg font-bold text-white">Mevcut İçerikler</h2>
                <span className="text-xs font-bold text-white/20 uppercase tracking-widest">{filteredContents.length} Kayıt</span>
              </div>

              <div className="p-4 overflow-y-auto custom-scrollbar">
                {loading ? (
                  <div className="py-20 flex flex-col items-center justify-center text-white/20 gap-4">
                    <div className="w-10 h-10 border-4 border-[#FFA800] border-t-transparent rounded-full animate-spin" />
                    <p className="animate-pulse">Veriler çekiliyor...</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <AnimatePresence mode="popLayout">
                      {filteredContents.map(item => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          key={item.id}
                          className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#FFA800]/30 p-4 rounded-2xl flex items-center justify-between transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <img src={item.image} alt={item.title_tr} className="w-14 h-14 rounded-xl object-cover bg-white/10 border border-white/10" />
                              <div className="absolute -top-2 -right-2 bg-[#FFA800] text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                                {item.category?.split(' ')[0]}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-white font-semibold group-hover:text-[#FFA800] transition-colors line-clamp-1">{item.title_tr || item.title || 'Başlıksız'}</h3>
                              <p className="text-white/40 text-xs flex items-center gap-1 mt-1">
                                {new Date(item.updatedAt || item.createdAt).toLocaleDateString('tr-TR')}
                                <span className="mx-1">•</span>
                                <span className={item.isVisible !== false ? 'text-[#FFA800]' : 'text-red-500'}>
                                  {item.isVisible !== false ? 'Yayında' : 'Gizli'}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleEdit(item)}
                              className="text-white/20 hover:text-[#FFA800] hover:bg-[#FFA800]/10 p-2.5 rounded-xl transition-all"
                              title="Düzenle"
                            >
                              <IoPencil size={18} />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="text-white/20 hover:text-red-500 hover:bg-red-500/10 p-2.5 rounded-xl transition-all"
                              title="Sil"
                            >
                              <IoTrash size={20} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {filteredContents.length === 0 && (
                      <div className="py-20 text-center space-y-4">
                        <div className="text-white/10 flex justify-center"><IoSearch size={48} /></div>
                        <p className="text-white/20 italic">Aramanızla eşleşen içerik bulunamadı.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
