import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Globe, Heart, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { translations } from '../data/translations';

export default function Navbar({ lang, setLang, onOpenDonate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang].nav;

  const toggleLang = () => {
    setLang(prev => (prev === 'tr' ? 'en' : 'tr'));
  };

  return (
    <header className="header">
      <div className="container navbar">
        {/* Official Logo */}
        <Link to="/" className="logo-link">
          <Logo height={44} />
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
              {t.home}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t.about}
            </NavLink>
          </li>
          <li>
            <NavLink to="/organization" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t.corporate}
            </NavLink>
          </li>
          <li>
            <NavLink to="/activities" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t.activities}
            </NavLink>
          </li>
          <li>
            <NavLink to="/partner" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t.partners}
            </NavLink>
          </li>
          <li>
            <NavLink to="/announcements" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t.announcements}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              {t.contact}
            </NavLink>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button onClick={toggleLang} className="lang-btn" title="Dil Seçimi / Switch Language">
            <Globe size={16} />
            <span>{lang.toUpperCase()}</span>
          </button>
          
          <Link to="/donation" className="btn-primary">
            <Heart size={18} />
            <span>{t.donate}</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="mobile-menu-drawer">
          <NavLink to="/" className="nav-link" onClick={() => setMobileOpen(false)} end>{t.home}</NavLink>
          <NavLink to="/about-us" className="nav-link" onClick={() => setMobileOpen(false)}>{t.about}</NavLink>
          <NavLink to="/organization" className="nav-link" onClick={() => setMobileOpen(false)}>{t.corporate}</NavLink>
          <NavLink to="/activities" className="nav-link" onClick={() => setMobileOpen(false)}>{t.activities}</NavLink>
          <NavLink to="/partner" className="nav-link" onClick={() => setMobileOpen(false)}>{t.partners}</NavLink>
          <NavLink to="/announcements" className="nav-link" onClick={() => setMobileOpen(false)}>{t.announcements}</NavLink>
          <NavLink to="/contact-us" className="nav-link" onClick={() => setMobileOpen(false)}>{t.contact}</NavLink>
          <Link 
            to="/donation" 
            onClick={() => setMobileOpen(false)} 
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
          >
            <Heart size={18} />
            <span>{t.donate}</span>
          </Link>
        </div>
      )}
    </header>
  );
}
