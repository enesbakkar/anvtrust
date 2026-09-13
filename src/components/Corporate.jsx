import React from 'react';
import { UserCheck, Shield } from 'lucide-react';
import { translations } from '../data/translations';

export default function Corporate({ lang }) {
  const t = translations[lang].corporate;

  return (
    <section id="corporate" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="board-grid">
          {t.members.map((member, idx) => (
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
      </div>
    </section>
  );
}
