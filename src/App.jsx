import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DonationModal from './components/DonationModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CorporatePage from './pages/CorporatePage';
import ActivitiesPage from './pages/ActivitiesPage';
import PartnersPage from './pages/PartnersPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import ContactPage from './pages/ContactPage';
import DonationPage from './pages/DonationPage';

export default function App() {
  const [lang, setLang] = useState('tr');
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          onOpenDonate={() => setDonateOpen(true)} 
        />

        <main>
          <Routes>
            <Route path="/" element={<HomePage lang={lang} onOpenDonate={() => setDonateOpen(true)} />} />
            <Route path="/about-us" element={<AboutPage lang={lang} />} />
            <Route path="/organization" element={<CorporatePage lang={lang} />} />
            <Route path="/activities" element={<ActivitiesPage lang={lang} />} />
            <Route path="/partner" element={<PartnersPage lang={lang} />} />
            <Route path="/announcements" element={<AnnouncementsPage lang={lang} />} />
            <Route path="/contact-us" element={<ContactPage lang={lang} />} />
            <Route path="/donation" element={<DonationPage lang={lang} />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage lang={lang} onOpenDonate={() => setDonateOpen(true)} />} />
          </Routes>
        </main>

        <Footer 
          lang={lang} 
          onOpenDonate={() => setDonateOpen(true)} 
        />

        {donateOpen && (
          <DonationModal 
            lang={lang} 
            onClose={() => setDonateOpen(false)} 
          />
        )}
      </div>
    </Router>
  );
}
