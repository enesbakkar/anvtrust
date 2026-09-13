import React from 'react';
import { Building, GraduationCap, Globe2, Landmark } from 'lucide-react';
import { translations } from '../data/translations';

export default function Collaborations({ lang }) {
  const t = translations[lang].collaborations;

  const partners = [
    { name: "University of Johannesburg", type: "Akademik Ortak", icon: GraduationCap },
    { name: "University of Witwatersrand", type: "Akademik Ortak", icon: Landmark },
    { name: "Türkiye Mezunları Derneği", type: "Sivil Toplum", icon: Globe2 },
    { name: "Güney Afrika İnsani Yardım Ağı", type: "İnsani Yardım", icon: Building },
  ];

  return (
    <section id="partners" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          marginTop: '40px'
        }}>
          {partners.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'var(--white)',
                  padding: '32px 24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                  transition: 'var(--transition)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <IconComp size={28} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>{p.name}</h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--slate-600)', fontWeight: 500 }}>{p.type}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
