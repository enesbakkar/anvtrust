import React, { useState } from 'react';
import { X, Copy, Check, Heart, Building2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function DonationModal({ lang, onClose }) {
  const [selectedType, setSelectedType] = useState('education');
  const [copiedBank, setCopiedBank] = useState(null);

  const t = translations[lang].donation;

  // Exact bank info from anvtrust.org
  const fnbAccNo = "62427490628";
  const fnbBranch = "250655";
  const fnbAccName = "ANV";

  const handleCopy = (text, bankKey) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(bankKey);
    setTimeout(() => setCopiedBank(null), 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ 
            width: '56px', 
            height: '56px', 
            background: 'var(--secondary-light)', 
            color: 'var(--secondary)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            <Heart size={28} />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{t.modalTitle}</h2>
          <p style={{ color: 'var(--slate-600)', fontSize: '0.92rem', marginTop: '6px' }}>
            {t.modalSubtitle}
          </p>
        </div>

        {/* Cause Select */}
        <label className="form-label">{t.chooseType}</label>
        <div className="donation-options" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
          <button 
            type="button"
            onClick={() => setSelectedType('education')}
            className={`donation-type-btn ${selectedType === 'education' ? 'active' : ''}`}
          >
            {t.types.education}
          </button>
          <button 
            type="button"
            onClick={() => setSelectedType('aid')}
            className={`donation-type-btn ${selectedType === 'aid' ? 'active' : ''}`}
          >
            {t.types.aid}
          </button>
          <button 
            type="button"
            onClick={() => setSelectedType('general')}
            className={`donation-type-btn ${selectedType === 'general' ? 'active' : ''}`}
          >
            {t.types.general}
          </button>
        </div>

        {/* Bank Wire Details */}
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Building2 size={18} color="var(--primary)" />
            <span>{t.bankDetailsTitle}</span>
          </h3>

          {/* South Africa FNB Exact Details */}
          <div className="bank-card" style={{ borderColor: 'var(--primary)', background: 'var(--primary-light)' }}>
            <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '10px', color: 'var(--primary)' }}>
              Bank Name: FNB (First National Bank)
            </strong>
            <div className="bank-row">
              <span style={{ color: 'var(--slate-600)' }}>Account Name:</span>
              <strong style={{ color: 'var(--dark)' }}>{fnbAccName}</strong>
            </div>
            <div className="bank-row">
              <span style={{ color: 'var(--slate-600)' }}>Account Number:</span>
              <code style={{ background: '#ffffff', padding: '4px 8px', borderRadius: '4px', fontWeight: 800, color: 'var(--secondary)' }}>{fnbAccNo}</code>
            </div>
            <div className="bank-row">
              <span style={{ color: 'var(--slate-600)' }}>Branch Code:</span>
              <strong style={{ color: 'var(--dark)' }}>{fnbBranch}</strong>
            </div>
            <button 
              onClick={() => handleCopy(fnbAccNo, 'fnb')}
              className="btn-primary"
              style={{ width: '100%', marginTop: '14px', justifyContent: 'center', padding: '10px 16px', fontSize: '0.9rem' }}
            >
              {copiedBank === 'fnb' ? <Check size={16} /> : <Copy size={16} />}
              <span>{copiedBank === 'fnb' ? t.copySuccess : `${t.copyBtn}: ${fnbAccNo}`}</span>
            </button>
          </div>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--slate-600)', textAlign: 'center', marginBottom: '20px' }}>
          {t.note}
        </p>

        <button className="btn-secondary" onClick={onClose} style={{ width: '100%', justifyContent: 'center' }}>
          {t.closeBtn}
        </button>
      </div>
    </div>
  );
}
