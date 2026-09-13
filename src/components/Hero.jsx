import React from 'react';
import { ArrowRight, Heart, Award, ShieldCheck } from 'lucide-react';
import { translations } from '../data/translations';

export default function Hero({ lang, onOpenDonate }) {
  const t = translations[lang].hero;

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <Award size={16} color="var(--primary)" />
            <span>{t.badge}</span>
          </div>
          
          <h1 className="hero-title">
            <span className="teal-text">{t.titleStart}</span> <br />
            <span className="orange-text">{t.titleHighlight}</span>
          </h1>

          <p className="hero-subtitle">
            {t.subtitle}
          </p>

          <div className="hero-buttons">
            <button onClick={onOpenDonate} className="btn-primary">
              <Heart size={18} />
              <span>{t.btnDonate}</span>
            </button>
            
            <a href="#about" className="btn-secondary">
              <span>{t.btnDiscover}</span>
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">{t.stats.founded}</span>
              <span className="stat-label">{t.stats.foundedLabel}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{t.stats.students}</span>
              <span className="stat-label">{t.stats.studentsLabel}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{t.stats.aidFamilies}</span>
              <span className="stat-label">{t.stats.aidLabel}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{t.stats.countries}</span>
              <span className="stat-label">{t.stats.countriesLabel}</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="hero-card-container">
          <div className="hero-image-card">
            <img 
              src="https://anvtrust.org/wp-content/uploads/2022/01/african-national-01.jpg" 
              alt="African National View Trust Students" 
              className="hero-img" 
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80";
              }}
            />
            <div className="hero-overlay-badge">
              <div className="overlay-icon">
                <ShieldCheck size={24} color="#ffffff" />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.95rem' }}>Resmi & Kurumsal Vakıf</strong>
                <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>Johannesburg, South Africa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
