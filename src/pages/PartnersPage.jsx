import React from 'react';
import { Building, GraduationCap, Globe2, Landmark, Heart } from 'lucide-react';
import { translations } from '../data/translations';

export default function PartnersPage({ lang }) {
  const t = translations[lang].collaborations;

  const partnerList = [
    { name: "Jamiatul Ulama South Africa", role: "İslam Alimleri Birliği", icon: Landmark },
    { name: "Hasene İnsani Yardım Derneği", role: "Uluslararası Partner", icon: Heart },
    { name: "IHH İnsani Yardım Vakfı", role: "İnsani Yardım Ortağı", icon: Building },
    { name: "University of Johannesburg", role: "Akademik Çalışma Alanı", icon: GraduationCap },
    { name: "Wits University (Witwatersrand)", role: "Akademik Söyleşiler", icon: GraduationCap },
    { name: "Karabük Üniversitesi Rektörlüğü", role: "Eğitim İş Birliği", icon: Globe2 },
  ];

  return (
    <div className="page-content" style={{ padding: '40px 0 90px' }}>
      {/* Banner */}
      <div style={{ background: 'linear-gradient(135deg, var(--primary-light), #ffffff)', padding: '60px 0', marginBottom: '60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">{t.tag}</span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>{t.title}</h1>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {partnerList.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                style={{
                  background: 'var(--white)',
                  padding: '36px 28px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border)',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition)'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <IconComp size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>{item.name}</h3>
                <span style={{ fontSize: '0.88rem', color: 'var(--secondary)', fontWeight: 700 }}>{item.role}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
