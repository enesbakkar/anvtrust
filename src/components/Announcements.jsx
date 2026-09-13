import React from 'react';
import { Calendar, Bell, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

export default function Announcements({ lang }) {
  const t = translations[lang].announcements;

  return (
    <section id="announcements" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
        </div>

        <div className="activities-grid">
          {t.items.map(item => (
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
                <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                  <a href="#contact" className="activity-btn">
                    <span>Detay & Başvuru</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
