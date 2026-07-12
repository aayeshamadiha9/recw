import React from 'react';
import { Calendar, AlertCircle, FileText, CheckSquare, ClipboardList } from 'lucide-react';

export default function Exams() {
  const notifications = [
    { date: 'July 10, 2026', title: 'Notification for B.Tech II & III Semester Regular/Supplementary Exams - July 2026', link: '#' },
    { date: 'June 25, 2026', title: 'Time Table for B.Tech I Semester Supplementary Examinations - July 2026', link: '#' },
    { date: 'June 15, 2026', title: 'B.Tech IV Year II Semester (R20) Advanced Supplementary Examinations Results', link: '#' },
    { date: 'May 30, 2026', title: 'Recounting and Revaluation Notification for B.Tech III Semester Regular Exams', link: '#' }
  ];

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
            Examination Cell
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Autonomous Examination Board - Timetables, Fee Registrations, and Semester Results.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.1fr', gap: '3rem' }} className="exams-layout-grid">
          {/* Left panel: Info & notifications */}
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)' }}>Autonomous Examination Branch</h2>
            <p>
              The Examination Branch is a confidential wing of Ravindra College of Engineering for Women, responsible for the conduction of end-semester evaluations, assessment coding, results preparation, and grading reports processing under the Autonomous rules framework.
            </p>
            <p>
              Headed by the <strong>Controller of Examinations (CoE)</strong>, the exam branch is fully automated using modern educational ERP systems to ensure error-free and rapid publication of semester grade transcripts.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>
              Recent Examinations Notifications
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {notifications.map((item, idx) => (
                <div key={idx} style={{
                  background: 'var(--white)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                  borderLeft: '4px solid var(--gold)',
                  borderInlineEnd: '1px solid var(--slate-200)',
                  borderBottom: '1px solid var(--slate-200)'
                }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--slate-400)', fontWeight: '700', marginBottom: '0.3rem' }}>
                    {item.date}
                  </div>
                  <a href={item.link} style={{
                    fontSize: '1.02rem',
                    fontWeight: '600',
                    color: 'var(--primary-blue)',
                    lineHeight: '1.4',
                    display: 'block',
                    hover: { color: 'var(--gold-dark)' }
                  }} className="exam-notif-link">
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Fast utilities */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card-glass" style={{ borderTop: '4px solid var(--primary-blue)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckSquare size={20} style={{ color: 'var(--gold)' }} /> Fast Actions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="#/circulars" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--white)',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  border: '1px solid var(--slate-200)',
                  fontWeight: '600',
                  color: 'var(--slate-900)'
                }} className="fast-btn-lnk">
                  <ClipboardList size={16} style={{ color: 'var(--gold-dark)' }} />
                  <span>Exam Fee Registration Portal</span>
                </a>

                <a href="#/circulars" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'var(--white)',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  border: '1px solid var(--slate-200)',
                  fontWeight: '600',
                  color: 'var(--slate-900)'
                }} className="fast-btn-lnk">
                  <Calendar size={16} style={{ color: 'var(--gold-dark)' }} />
                  <span>Download Timetables</span>
                </a>
              </div>
            </div>

            <div className="card-glass" style={{
              background: 'rgba(197,160,89,0.06)',
              border: '1px solid var(--gold)',
              padding: '1.5rem',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'flex-start'
            }}>
              <AlertCircle size={24} style={{ color: 'var(--gold-dark)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: 'var(--primary-blue)', margin: 0, fontSize: '0.95rem' }}>Note on Grading:</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-700)', margin: '0.3rem 0 0', lineHeight: '1.4' }}>
                  Students are reminded that CGPA calculations are compiled using the UGC 10-point scale (O, S, A, B, C, D, F). In case of recounting claims, submit forms to the CoE within 7 days of result announcements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .exam-notif-link:hover {
          color: var(--gold-dark) !important;
          text-decoration: underline;
        }
        .fast-btn-lnk:hover {
          border-color: var(--gold) !important;
          transform: translateX(4px);
        }
        @media (max-width: 800px) {
          .exams-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
