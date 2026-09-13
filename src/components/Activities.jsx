import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { translations } from '../data/translations';

export default function Activities({ lang }) {
  const [filter, setFilter] = useState('All');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const t = translations[lang].activities;

  const filteredItems = filter === 'All' 
    ? t.items 
    : t.items.filter(item => item.category === filter);

  return (
    <section id="activities" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="filters-container">
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

        {/* Activity Cards Grid */}
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
                  <span>Detayları Gör</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Detail Modal */}
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
    </section>
  );
}
