import React, { useState } from 'react';
import { Building2, Copy, Check, Heart, ShieldCheck } from 'lucide-react';
import { translations } from '../data/translations';

export default function DonationPage({ lang }) {
  const [copiedBank, setCopiedBank] = useState(null);
  const t = translations[lang].donation;

  // Exact FNB Account details from anvtrust.org
  const fnbAccNo = "62427490628";
  const fnbBranch = "250655";
  const fnbAccName = "ANV";

  const handleCopy = (text, bankKey) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(bankKey);
    setTimeout(() => setCopiedBank(null), 2500);
  };

  return (
    <div className="page-content" style={{ padding: '40px 0 90px' }}>
      {/* Banner */}
      <div style={{ background: 'linear-gradient(135deg, var(--secondary-light), var(--primary-light))', padding: '60px 0', marginBottom: '60px', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">ANV TRUST BAĞIŞ</span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>{t.modalTitle}</h1>
          <p className="section-subtitle">{t.modalSubtitle}</p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '840px' }}>
        <div style={{ background: 'var(--white)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              background: 'var(--secondary-light)', 
              color: 'var(--secondary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <Heart size={32} />
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Resmi Banka Havale & EFT Bilgileri</h2>
            <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem', marginTop: '6px' }}>
              Bağışlarınız doğrudan African National View Trust resmi banka hesabına yatırılmaktadır.
            </p>
          </div>

          {/* FNB Bank Card */}
          <div className="bank-card" style={{ borderColor: 'var(--primary)', background: 'var(--primary-light)', padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Building2 size={24} color="var(--primary)" />
              <strong style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>
                Bank Name: FNB (First National Bank)
              </strong>
            </div>

            <div className="bank-row" style={{ padding: '12px 0' }}>
              <span style={{ color: 'var(--slate-600)', fontSize: '1rem' }}>Account Name:</span>
              <strong style={{ color: 'var(--dark)', fontSize: '1.05rem' }}>{fnbAccName}</strong>
            </div>

            <div className="bank-row" style={{ padding: '12px 0' }}>
              <span style={{ color: 'var(--slate-600)', fontSize: '1rem' }}>Account Number:</span>
              <code style={{ background: '#ffffff', padding: '6px 12px', borderRadius: '6px', fontWeight: 800, color: 'var(--secondary)', fontSize: '1.2rem' }}>
                {fnbAccNo}
              </code>
            </div>

            <div className="bank-row" style={{ padding: '12px 0' }}>
              <span style={{ color: 'var(--slate-600)', fontSize: '1rem' }}>Branch Code:</span>
              <strong style={{ color: 'var(--dark)', fontSize: '1.05rem' }}>{fnbBranch}</strong>
            </div>

            <button 
              onClick={() => handleCopy(fnbAccNo, 'fnb')}
              className="btn-primary"
              style={{ width: '100%', marginTop: '20px', justifyContent: 'center', padding: '14px', fontSize: '1rem' }}
            >
              {copiedBank === 'fnb' ? <Check size={18} /> : <Copy size={18} />}
              <span>{copiedBank === 'fnb' ? t.copySuccess : `Hesap Numarasını Kopyala (${fnbAccNo})`}</span>
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px', padding: '16px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)' }}>
            <ShieldCheck size={24} color="var(--primary)" />
            <p style={{ fontSize: '0.88rem', color: 'var(--slate-600)' }}>
              {t.note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
