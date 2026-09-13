import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Award, ShieldCheck, BookOpen, GraduationCap, HeartHandshake, Calendar } from 'lucide-react';
import { translations } from '../data/translations';

export default function HomePage({ lang, onOpenDonate }) {
  const t = translations[lang];

  return (
    <div className="page-content">
      {/* Hero Banner */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <Award size={16} color="var(--primary)" />
              <span>{t.hero.badge}</span>
            </div>
            
            <h1 className="hero-title">
              <span className="teal-text">{t.hero.titleStart}</span> <br />
              <span className="orange-text">{t.hero.titleHighlight}</span>
            </h1>

            <p className="hero-subtitle">
              {t.hero.subtitle}
            </p>

            <div className="hero-buttons">
              <button onClick={onOpenDonate} className="btn-primary">
                <Heart size={18} />
                <span>{t.hero.btnDonate}</span>
              </button>
              
              <Link to="/about-us" className="btn-secondary">
                <span>{t.hero.btnDiscover}</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-number">{t.hero.stats.founded}</span>
                <span className="stat-label">{t.hero.stats.foundedLabel}</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{t.hero.stats.students}</span>
                <span className="stat-label">{t.hero.stats.studentsLabel}</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{t.hero.stats.aidFamilies}</span>
                <span className="stat-label">{t.hero.stats.aidLabel}</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{t.hero.stats.countries}</span>
                <span className="stat-label">{t.hero.stats.countriesLabel}</span>
              </div>
            </div>
          </div>

          <div className="hero-card-container">
            <div className="hero-image-card">
              <img 
                src="https://anvtrust.org/wp-content/uploads/2022/01/african-national-01.jpg" 
                alt="African National View Trust" 
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

      {/* About Summary Block */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-tag">{t.about.tag}</span>
              <h2 className="section-title">{t.about.title}</h2>
              <p className="section-subtitle" style={{ marginBottom: '24px' }}>
                {t.about.description}
              </p>
              
              <Link to="/about-us" className="btn-primary" style={{ marginTop: '16px' }}>
                <span>{t.about.readMore}</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon">
                  <GraduationCap size={24} />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Eğitim & Yurt</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--slate-600)' }}>
                  Yükseköğrenim öğrencilerine barınma, rehberlik ve akademik burs desteği.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <HeartHandshake size={24} />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>İnsani Yardım</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--slate-600)' }}>
                  Ramazan paketleri, Kurban organizasyonu ve ihtiyaç sahibi ailelere destek.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <BookOpen size={24} />
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Dil Eğitimi</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--slate-600)' }}>
                  Uluslararası standartlarda İngilizce hazırlık ve akademik danışmanlık.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Summary */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.activities.tag}</span>
            <h2 className="section-title">{t.activities.title}</h2>
            <p className="section-subtitle">{t.activities.subtitle}</p>
          </div>

          <div className="activities-grid">
            {t.activities.items.slice(0, 3).map(item => (
              <div key={item.id} className="activity-card">
                <div className="activity-body">
                  <span className="activity-badge">{item.categoryName}</span>
                  <h3 className="activity-title">{item.title}</h3>
                  <p className="activity-desc">{item.desc}</p>
                  <Link to="/activities" className="activity-btn">
                    <span>Detayları Gör</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/activities" className="btn-secondary">
              <span>Tüm Faaliyetleri Görüntüle</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Summary / Board Preview */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.corporate.tag}</span>
            <h2 className="section-title">{t.corporate.title}</h2>
            <p className="section-subtitle">{t.corporate.subtitle}</p>
          </div>

          <div className="board-grid">
            {t.corporate.members.map((member, idx) => (
              <div key={idx} className="board-card">
                <div className="board-avatar">
                  {member.initial}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '4px' }}>
                  {member.name}
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 700, display: 'block' }}>
                  {member.role}
                </span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link to="/organization" className="btn-secondary">
              <span>Kurumsal Yapımızı İnceleyin</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.announcements.tag}</span>
            <h2 className="section-title">{t.announcements.title}</h2>
          </div>

          <div className="activities-grid">
            {t.announcements.items.map(item => (
              <div key={item.id} className="activity-card" style={{ borderTop: '4px solid var(--primary)' }}>
                <div className="activity-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="activity-badge">{item.badge}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--slate-600)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="activity-title" style={{ fontSize: '1.15rem' }}>{item.title}</h3>
                  <p className="activity-desc">{item.desc}</p>
                  <Link to="/announcements" className="activity-btn">
                    <span>Detaylar</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
