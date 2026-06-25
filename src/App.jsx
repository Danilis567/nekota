// src/App.jsx

import { Routes, Route } from 'react-router-dom';

// Sayfaları import et
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import MissionPage from './pages/MissionPage';
import RoadmapPage from './pages/RoadmapPage';
import BlogPage from './pages/BlogPage';
import CommunityPage from './pages/CommunityPage';
import LegalPage from './pages/LegalPage'; // Yeni LegalPage'i import et
import { useState } from 'react';
import ContactPage from './pages/ContactPage';
import BlogPostPage from './pages/BlogPostPage';
import ContentsPage from './pages/ContentsPage';
import ContentDetailPage from './pages/ContentDetailPage';
import AdminTestPage from './pages/AdminTestPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="bg-[#111111]">
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/legal" element={<LegalPage searchQuery={searchQuery} />} />
          <Route path="/contents" element={<ContentsPage />} />
          <Route path="/contents/:id" element={<ContentDetailPage />} />
          <Route path="/admin/test" element={<AdminTestPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;