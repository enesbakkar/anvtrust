import React, { useState } from 'react';
import { Search, X, Calendar, Tag } from 'lucide-react';
import { translations } from '../data/translations';

export default function ActivitiesPage({ lang }) {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const t = translations[lang].activities;

  const filteredItems = t.items.filter(item => {
    const matchesFilter = filter === 'All' || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="page-content" style={{ padding: '40px 0 90px' }}>
      {/* Banner */}
      <div style={{ background: 'linear-gradient(135deg, var(--secondary-light), var(--primary-light))', padding: '60px 0', marginBottom: '50px', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">{t.tag}</span>
          <h1 className="section-title" style={{ fontSize: '3rem' }}>{t.title}</h1>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
      </div>

      <div className="container">
        {/* Search & Filter Bar */}
        <div style={{ background: '#fff', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginBottom: '40px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Faaliyetler ve etkinlikler içinde ara..." 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ paddingLeft: '44px' }}
              />
              <Search size={20} color="var(--slate-400)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>

            {/* Category Filter Buttons */}
            <div className="filters-container" style={{ margin: 0, justifyContent: 'flex-start' }}>
              <button 
                onClick={() => setFilter('All')}
                className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
              >
                {t.filterAll}
              </button>
              <button 
                onClick={() => setFilter('Education')}
                className={`filter-btn ${filter === 'Education' ? 'active' : ''}`}
              >
                {t.filterEducation}
              </button>
              <button 
                onClick={() => setFilter('Aid')}
                className={`filter-btn ${filter === 'Aid' ? 'active' : ''}`}
              >
                {t.filterAid}
              </button>
              <button 
                onClick={() => setFilter('Culture')}
                className={`filter-btn ${filter === 'Culture' ? 'active' : ''}`}
              >
                {t.filterCulture}
              </button>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="activities-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="activity-card">
              <div className="activity-body">
                <span className="activity-badge">{item.categoryName}</span>
                <h3 className="activity-title">{item.title}</h3>
                <p className="activity-desc">{item.desc}</p>
                <button 
                  onClick={() => setSelectedActivity(item)}
                  className="activity-btn"
                >
                  <span>Detayları Okuyun</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedActivity && (
        <div className="modal-backdrop" onClick={() => setSelectedActivity(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedActivity(null)}>
              <X size={20} />
            </button>
            <span className="activity-badge" style={{ marginBottom: '16px' }}>{selectedActivity.categoryName}</span>
            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>{selectedActivity.title}</h2>
            <p style={{ color: 'var(--slate-600)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              {selectedActivity.fullDetail}
            </p>
            <button className="btn-primary" onClick={() => setSelectedActivity(null)} style={{ width: '100%', justifyContent: 'center' }}>
              {t.modalClose}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
