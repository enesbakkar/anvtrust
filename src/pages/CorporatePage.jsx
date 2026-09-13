import React from 'react';
import { UserCheck, ShieldCheck, Landmark } from 'lucide-react';
import { translations } from '../data/translations';

export default function CorporatePage({ lang }) {
  const t = translations[lang].corporate;

  return (
    <div className="page-content" style={{ padding: '40px 0 90px' }}>
      {/* Banner */}
      <div style={{ background: 'linear-gradient(135deg, var(--primary-light), var(--bg-light))', padding: '60px 0', marginBottom: '60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">{t.tag}</span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>{t.title}</h1>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
      </div>

      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto 50px', textTransform: 'none', background: '#fff', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={24} />
            <span>African National View Trust Yönetim Organları</span>
          </h2>
          <p style={{ color: 'var(--slate-600)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            1998 yılında Güney Afrika Cumhuriyeti'nin Johannesburg şehrinde resmi olarak kurulan Afrika Millî Görüş Vakfı (ANV Trust), şeffaflık, liyakat ve toplumsal hizmet prensipleri doğrultusunda yönetim kurulu üyelerimizin liderliğinde faaliyetlerini sürdürmektedir.
          </p>
        </div>

        <div className="board-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
          {t.members.map((member, idx) => (
            <div key={idx} className="board-card" style={{ padding: '32px 24px', borderTop: '4px solid var(--primary)' }}>
              <div className="board-avatar" style={{ width: '64px', height: '64px', fontSize: '1.3rem' }}>
                {member.initial}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '6px' }}>
                {member.name}
              </h3>
              <span style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 700, display: 'block' }}>
                {member.role}
              </span>
              <p style={{ fontSize: '0.82rem', color: 'var(--slate-600)', marginTop: '12px' }}>
                African National View Trust
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
