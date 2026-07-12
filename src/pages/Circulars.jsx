import React, { useState } from 'react';
import { Search, FileText, Download } from 'lucide-react';

export default function Circulars() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const circulars = [
    { date: 'July 10, 2026', title: 'Registration Schedule for B.Tech III Semester End Examinations (R23)', category: 'exams' },
    { date: 'July 05, 2026', title: 'Instructions regarding Fee Payment for the Academic Year 2026-27', category: 'finance' },
    { date: 'June 28, 2026', title: 'College Reopening & Commencement of Class Work for II & III B.Tech', category: 'academic' },
    { date: 'June 18, 2026', title: 'Anti-Ragging Committee Constitution and Squad Details for Freshman Induction', category: 'general' },
    { date: 'June 10, 2026', title: 'Placement Drive Schedule for Accenture & Cognizant recruitment 2025 passout', category: 'placement' }
  ];

  const filteredCirculars = circulars.filter(circ => {
    const matchesSearch = circ.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || circ.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))',
        color: 'var(--white)',
        padding: '5rem 2rem 4rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
            Official Circulars & Notices
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            View academic, exam schedules, and administration notices. Search and filter by category.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        {/* Search & Filter Controls */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          background: 'var(--white)',
          padding: '1.5rem',
          borderRadius: '16px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
          border: '1px solid var(--slate-200)',
          marginBottom: '3rem'
        }}>
          {/* Search Input */}
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--slate-200)', padding: '0.6rem 1rem', borderRadius: '30px', flexGrow: 1, gap: '0.5rem', background: 'var(--white-slate)' }}>
            <Search size={18} style={{ color: 'var(--slate-400)' }} />
            <input
              type="text"
              placeholder="Search circulars by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: 'none',
                background: 'none',
                width: '100%',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              style={{
                border: '1px solid var(--slate-200)',
                padding: '0.6rem 1.5rem',
                borderRadius: '30px',
                outline: 'none',
                fontSize: '0.95rem',
                fontFamily: 'var(--font-display)',
                fontWeight: '600',
                cursor: 'pointer',
                color: 'var(--slate-700)'
              }}
            >
              <option value="all">All Categories</option>
              <option value="academic">Academics</option>
              <option value="exams">Examinations</option>
              <option value="finance">Fees & Finance</option>
              <option value="placement">Placements</option>
              <option value="general">General</option>
            </select>
          </div>
        </div>

        {/* Circulars List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredCirculars.length > 0 ? (
            filteredCirculars.map((circ, idx) => (
              <div key={idx} style={{
                background: 'var(--white)',
                padding: '1.25rem 2rem',
                borderRadius: '12px',
                border: '1px solid var(--slate-200)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                transition: 'all 0.2s',
                hover: { transform: 'translateY(-2px)' }
              }} className="circular-row">
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  {/* Date badge */}
                  <div style={{
                    background: 'var(--slate-100)',
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: 'var(--primary-blue)',
                    minWidth: '100px'
                  }}>
                    {circ.date}
                  </div>
                  <div>
                    <span style={{
                      background: 'rgba(197, 160, 89, 0.15)',
                      color: 'var(--gold-dark)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'inline-block',
                      marginBottom: '0.3rem'
                    }}>
                      {circ.category}
                    </span>
                    <h4 style={{ color: 'var(--primary-blue)', fontSize: '1.05rem', margin: 0 }}>
                      {circ.title}
                    </h4>
                  </div>
                </div>

                <button style={{
                  background: 'none',
                  border: '2px solid var(--gold)',
                  color: 'var(--gold-dark)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-display)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s'
                }} className="circ-btn">
                  <Download size={14} /> PDF
                </button>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--slate-400)' }}>
              No circulars found matching the filter criteria.
            </div>
          )}
        </div>
      </div>

      <style>{`
        .circular-row:hover {
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          border-color: rgba(197, 160, 89, 0.3) !important;
        }
        .circ-btn:hover {
          background: var(--gold) !important;
          color: var(--primary-blue) !important;
        }
      `}</style>
    </div>
  );
}
