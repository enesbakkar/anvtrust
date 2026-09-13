import React, { useState } from 'react';
import { BookOpen, GraduationCap, HeartHandshake, CheckCircle2, ShieldCheck } from 'lucide-react';
import { translations } from '../data/translations';

export default function AboutPage({ lang }) {
  const [activeTab, setActiveTab] = useState('history');
  const t = translations[lang].about;

  return (
    <div className="page-content" style={{ padding: '40px 0 90px' }}>
      {/* Page Header Banner */}
      <div style={{ background: 'linear-gradient(135deg, var(--primary-light), var(--secondary-light))', padding: '60px 0', marginBottom: '60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">{t.tag}</span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>{t.title}</h1>
        </div>
      </div>

      <div className="container">
        <div className="about-grid">
          <div>
            <div className="about-card-box">
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

              <div style={{ padding: '16px 0' }}>
                {activeTab === 'history' && (
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px', color: 'var(--primary)' }}>
                      1998 Johannesburg Kuruluşu & Vakıf Amacı
                    </h3>
                    <p style={{ color: 'var(--slate-600)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '16px' }}>
                      {t.description}
                    </p>
                    <p style={{ color: 'var(--slate-600)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                      {t.historyContent}
                    </p>
                  </div>
                )}
                {activeTab === 'education' && (
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px', color: 'var(--primary)' }}>
                      Eğitim, Barınma & Yurt Hizmetlerimiz
                    </h3>
                    <p style={{ color: 'var(--slate-600)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                      {t.educationContent}
                    </p>
                  </div>
                )}
                {activeTab === 'humanitarian' && (
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '16px', color: 'var(--secondary)' }}>
                      İnsani Yardım & Kurban Çalışmalarımız
                    </h3>
                    <p style={{ color: 'var(--slate-600)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                      {t.humanitarianContent}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="feature-card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <div className="feature-icon">
                <GraduationCap size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Eğitim ve Danışmanlık</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)', lineHeight: '1.6' }}>
                Güney Afrika üniversitelerinde lisans ve lisansüstü eğitim gören öğrencilere akademik rehberlik ve burs imkanları.
              </p>
            </div>

            <div className="feature-card" style={{ borderLeft: '4px solid var(--secondary)' }}>
              <div className="feature-icon" style={{ background: 'var(--secondary-light)', color: 'var(--secondary)' }}>
                <HeartHandshake size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>İnsani Yardım Hizmetleri</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)', lineHeight: '1.6' }}>
                Ramazan ayı erzak paketleri, Kurban vekalet kesimleri ve muhtaç ailelere düzenli ayni ve nakdi yardımlar.
              </p>
            </div>

            <div className="feature-card" style={{ borderLeft: '4px solid var(--primary)' }}>
              <div className="feature-icon">
                <BookOpen size={28} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Yabancı Dil Desteği</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--slate-600)', lineHeight: '1.6' }}>
                Öğrencilerimizin İngilizce hazırlık sınıflarında başarı göstermeleri için yurtlarımızda oryantasyon dersleri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
