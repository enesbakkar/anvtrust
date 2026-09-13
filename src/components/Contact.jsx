import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { translations } from '../data/translations';

export default function Contact({ lang }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const t = translations[lang].contact;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="contact-grid">
          {/* Info Card */}
          <div className="contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '24px' }}>{t.addressTitle}</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>Johannesburg HQ</strong>
                  <span style={{ fontSize: '0.88rem', opacity: 0.85 }}>
                    {t.saAddress}
                  </span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>{t.phoneTitle}</strong>
                  <a href="tel:+27818216936" style={{ fontSize: '0.95rem', color: 'var(--secondary)', fontWeight: 700 }}>
                    +27 81 821 6936
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.95rem' }}>{t.emailTitle}</strong>
                  <a href="mailto:info@anvtrust.org" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                    info@anvtrust.org
                  </a>
                </div>
              </div>
            </div>

            <div style={{ paddingTop: '20px', borderTop: '1px solid var(--dark-surface)' }}>
              <span style={{ fontSize: '0.82rem', opacity: 0.7 }}>
                African National View Trust • Official Registration in Johannesburg, South Africa
              </span>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'var(--bg-light)', padding: '36px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle size={56} color="var(--primary)" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Teşekkür Ederiz!</h3>
                <p style={{ color: 'var(--slate-600)', fontSize: '0.95rem', marginBottom: '24px' }}>
                  {t.formSuccess}
                </p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">{t.formName} *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    placeholder="Adınız Soyadınız"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">{t.formEmail} *</label>
                    <input 
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="ornek@domain.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t.formPhone}</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      placeholder="+27 XX XXX XXXX"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{t.formSubject}</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Burs Başvurusu / Bağış Bilgisi"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t.formMessage} *</label>
                  <textarea 
                    required 
                    rows={4} 
                    className="form-textarea" 
                    placeholder="Mesajınızı buraya yazabilirsiniz..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={sending}
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
                >
                  <Send size={18} />
                  <span>{sending ? t.formSending : t.formSubmit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
