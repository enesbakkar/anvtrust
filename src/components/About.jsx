import React, { useState } from 'react';
import { BookOpen, GraduationCap, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function About({ lang }) {
  const [activeTab, setActiveTab] = useState('history');
  const t = translations[lang].about;

  return (
    <section id="about" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="about-grid">
          <div>
            <span className="section-tag">{t.tag}</span>
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle" style={{ marginBottom: '24px' }}>
              {t.description}
            </p>

            <div className="tabs-header">
              <button 
                onClick={() => setActiveTab('history')} 
                className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
              >
                {t.tabHistory}
              </button>
              <button 
                onClick={() => setActiveTab('education')} 
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              >
                {t.tabEducation}
              </button>
              <button 
                onClick={() => setActiveTab('humanitarian')} 
                className={`tab-btn ${activeTab === 'humanitarian' ? 'active' : ''}`}
              >
                {t.tabHumanitarian}
              </button>
            </div>

            <div className="tab-content-box">
              {activeTab === 'history' && (
                <div>
                  <p style={{ color: 'var(--slate-600)', fontSize: '0.98rem' }}>{t.historyContent}</p>
                </div>
              )}
              {activeTab === 'education' && (
                <div>
                  <p style={{ color: 'var(--slate-600)', fontSize: '0.98rem' }}>{t.educationContent}</p>
                </div>
              )}
              {activeTab === 'humanitarian' && (
                <div>
                  <p style={{ color: 'var(--slate-600)', fontSize: '0.98rem' }}>{t.humanitarianContent}</p>
                </div>
              )}
            </div>
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
  );
}
