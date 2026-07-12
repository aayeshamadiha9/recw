import React from 'react';
import { ShieldCheck, FileCheck, ArrowRight, ClipboardList } from 'lucide-react';

export default function IQAC() {
  const aqars = [
    { name: 'AQAR Report - Academic Year 2024-25', status: 'Submitted to NAAC' },
    { name: 'AQAR Report - Academic Year 2023-24', status: 'Submitted to NAAC' },
    { name: 'AQAR Report - Academic Year 2022-23', status: 'Submitted to NAAC' }
  ];

  const initiatives = [
    'Implementation of Choice Based Credit System (CBCS) under Autonomous regulations (R23).',
    'Conducted academic audits across all 5 departments for syllabus conformance.',
    'Introduction of industry certification courses (AWS, Salesforce, Microsoft AI-900) in third year.',
    'Organized 5 faculty development programs (FDPs) on outcome-based education (OBE).',
    'Regular student feedback evaluation for teaching quality optimization.'
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
            IQAC Cell Details
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Internal Quality Assurance Cell - Promoting continuous, quality assessment standards across the college.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '3rem' }} className="iqac-grid">
          {/* Main Info */}
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)' }}>IQAC Objectives</h2>
            <p>
              In accordance with NAAC guidelines, the Internal Quality Assurance Cell (IQAC) of Ravindra College of Engineering for Women was established to channelize institutional efforts towards promoting holistic academic and administrative excellence.
            </p>
            <p>
              The primary aim of IQAC is to develop a conscious, consistent, and catalytic action plan to improve the academic and administrative performance of the institution. Under the leadership of the Principal, the IQAC cell reviews teaching methodologies, research outputs, evaluation processes, and support structures to ensure standard compliance.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Key Quality Initiatives</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.05rem' }}>
              {initiatives.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <ArrowRight size={18} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '4px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AQAR reports */}
          <div>
            <div className="card-glass" style={{ borderTop: '4px solid var(--gold)', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ClipboardList size={20} style={{ color: 'var(--gold)' }} /> AQAR Reports
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {aqars.map((aqar, idx) => (
                  <div key={idx} style={{
                    padding: '1rem',
                    background: 'var(--white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                    border: '1px solid var(--slate-200)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary-blue)' }}>{aqar.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: '600' }}>{aqar.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-glass" style={{ borderLeft: '4px solid var(--primary-blue)', padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-blue)', marginBottom: '0.75rem' }}>
                IQAC Coordinator
              </h3>
              <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                <strong>Coordinator:</strong> Dr. G. Sanjay Kumar<br />
                <strong>Principal (Chairman):</strong> Dr. K.E. Sreenivasa Murthy<br />
                <strong>Email:</strong> principal@recw.ac.in
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 800px) {
          .iqac-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
