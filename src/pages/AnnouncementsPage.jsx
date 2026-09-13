import React from 'react';
import { Calendar, Bell, ArrowRight, FileText } from 'lucide-react';
import { translations } from '../data/translations';

export default function AnnouncementsPage({ lang }) {
  const t = translations[lang].announcements;

  return (
    <div className="page-content" style={{ padding: '40px 0 90px' }}>
      {/* Banner */}
      <div style={{ background: 'linear-gradient(135deg, var(--secondary-light), var(--bg-light))', padding: '60px 0', marginBottom: '60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">{t.tag}</span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>{t.title}</h1>
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
          {t.items.map(item => (
            <div key={item.id} className="activity-card" style={{ borderTop: '4px solid var(--primary)' }}>
              <div className="activity-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="activity-badge">{item.badge}</span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--slate-600)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} />
                    {item.date}
                  </span>
                </div>
                <h3 className="activity-title" style={{ fontSize: '1.25rem' }}>{item.title}</h3>
                <p className="activity-desc" style={{ fontSize: '0.95rem' }}>{item.desc}</p>
                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                  <a href="#contact" className="activity-btn">
                    <FileText size={16} />
                    <span>Detay İncele & İletişime Geç</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
