import React from 'react';
import { CheckCircle, Info, FileText, Phone } from 'lucide-react';

export default function Admissions() {
  const intakeData = [
    { code: 'CSE', name: 'Computer Science & Engineering', duration: '4 Years', intake: 180 },
    { code: 'ECE', name: 'Electronics & Communication Engineering', duration: '4 Years', intake: 120 },
    { code: 'AI & DS', name: 'Artificial Intelligence & Data Science', duration: '4 Years', intake: 60 },
    { code: 'AI & ML', name: 'Artificial Intelligence & Machine Learning', duration: '4 Years', intake: 60 }
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
            Admissions 2026-27
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Apply to our B.Tech courses. Read details on eligibility criteria, intake capacity, and documents.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        {/* Intake capacity table */}
        <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)' }}>Approved Intake Capacity</h2>
        <p>
          The college offers four-year undergraduate programs leading to the Bachelor of Technology (B.Tech) degree in the following disciplines:
        </p>

        <div style={{
          overflowX: 'auto',
          marginTop: '1.5rem',
          marginBottom: '3.5rem',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          border: '1px solid var(--slate-200)'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ background: 'var(--primary-blue)', color: 'var(--white)', fontFamily: 'var(--font-display)' }}>
                <th style={{ padding: '1rem' }}>Course Code</th>
                <th style={{ padding: '1rem' }}>Specialization</th>
                <th style={{ padding: '1rem' }}>Duration</th>
                <th style={{ padding: '1rem', textAlign: 'right' }}>Annual Intake</th>
              </tr>
            </thead>
            <tbody>
              {intakeData.map((row, idx) => (
                <tr key={idx} style={{
                  background: idx % 2 === 0 ? 'var(--white)' : 'var(--slate-100)',
                  borderBottom: '1px solid var(--slate-200)'
                }}>
                  <td style={{ padding: '1rem', fontWeight: '700', color: 'var(--primary-blue)' }}>{row.code}</td>
                  <td style={{ padding: '1rem', fontWeight: '500' }}>{row.name}</td>
                  <td style={{ padding: '1rem' }}>{row.duration}</td>
                  <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '700', color: 'var(--gold-dark)' }}>{row.intake}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Eligibility & Criteria */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="admissions-grid">
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)' }}>Eligibility & Process</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.4rem', fontSize: '1.1rem' }}>Category A (Convener Quota - 70%)</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  Candidates must have passed 10+2 (Intermediate) with Mathematics, Physics, and Chemistry as options, and must secure a rank in the State EAPCET (Engineering, Agriculture and Pharmacy Common Entrance Test) counseling conducted by APSCHE.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.4rem', fontSize: '1.1rem' }}>Category B (Management Quota - 30%)</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  Open to candidates who satisfy intermediate percentage norms (minimum 45% aggregate in science subjects). Admitted directly based on merit index or JEE Mains scores under state guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Checklist & Fee Box */}
          <div>
            <div className="card-glass" style={{ borderLeft: '4px solid var(--gold)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', marginBottom: '1.25rem' }}>
                Required Documents Checklist
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                {[
                  'AP EAPCET Rank Card & Hall Ticket',
                  '10th Standard SSC Original Marks Sheet',
                  'Intermediate/10+2 Marks Sheet & Pass Certificate',
                  'Transfer Certificate (T.C.) & Study Certificate (6th to Inter)',
                  'Income Certificate & Caste Certificate (if applicable)',
                  'Residence Certificate or Aadhar Card copy',
                  'Passport size photographs (4 copies)'
                ].map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <CheckCircle size={16} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              
              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--slate-200)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  background: 'rgba(197,160,89,0.15)',
                  padding: '0.6rem',
                  borderRadius: '50%',
                  color: 'var(--gold-dark)'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate-400)' }}>Admissions In-charge</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--primary-blue)' }}>Mrs. G. Spandana</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--slate-700)' }}>Mobile: +91 8639756876</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 800px) {
          .admissions-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
