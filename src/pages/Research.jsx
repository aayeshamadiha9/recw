import React from 'react';
import { BookOpen, FileCode, CheckCircle, Lightbulb } from 'lucide-react';

export default function Research() {
  const patentsList = [
    { title: 'IoT-Based Automated Smart Crop Irrigation System for Dry Regions', status: 'Published', year: '2024' },
    { title: 'Intelligent Real-Time Driver Drowsiness Detection using Deep Learning', status: 'Filed', year: '2023' },
    { title: 'A Wearable Assistive Device with Path-Planning for Visually Impaired', status: 'Design Approved', year: '2024' },
    { title: 'Machine Learning Algorithm for Early Prediction of Soil Nutrient Deficiency', status: 'Published', year: '2022' }
  ];

  const projectsList = [
    { title: 'Development of low-power sensor nodes for remote agricultural telemetry', agency: 'AICTE Research Promotion Scheme', funding: 'Rs. 4.8 Lakhs', status: 'Ongoing' },
    { title: 'Empowering Women Engineering Students via Smart Skill Bootcamps', agency: 'UGC Seminar Grants', funding: 'Rs. 2.1 Lakhs', status: 'Completed' }
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
            Research & Innovation
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Fostering research culture, Scopus-indexed publications, funded projects, and patent registrations.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '3rem' }} className="research-grid">
          {/* Projects & Publications */}
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)' }}>Funded Research Projects</h2>
            <p>
              RCEW encourages faculty members and students to undertake research, development, and consulting activities. The research cell helps faculty submit proposals for funding agencies like DST, AICTE, and UGC.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem', marginBottom: '3.5rem' }}>
              {projectsList.map((proj, idx) => (
                <div key={idx} style={{
                  background: 'var(--white)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  borderLeft: '4px solid var(--gold)',
                  borderInlineEnd: '1px solid var(--slate-200)',
                  borderBottom: '1px solid var(--slate-200)'
                }}>
                  <span style={{
                    background: proj.status === 'Ongoing' ? 'rgba(30,144,255,0.15)' : 'rgba(46,139,87,0.15)',
                    color: proj.status === 'Ongoing' ? '#1E90FF' : '#2E8B57',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase'
                  }}>
                    {proj.status}
                  </span>
                  <h4 style={{ color: 'var(--primary-blue)', margin: '0.5rem 0', fontSize: '1.1rem' }}>{proj.title}</h4>
                  <div style={{ fontSize: '0.88rem', color: 'var(--slate-700)' }}>
                    <strong>Agency:</strong> {proj.agency} &bull; <strong>Funding:</strong> {proj.funding}
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)' }}>Publications</h2>
            <p>
              Our faculty members publish consistently in journals indexed in Scopus, Web of Science, and UGC-CARE. In the past three academic years, RCEW has published over 150 papers in electronics, communications, computer sciences, and nanomaterials. The college supports researchers with academic incentives and conference funding.
            </p>
          </div>

          {/* Patents Board */}
          <div>
            <div className="card-glass" style={{ borderTop: '4px solid var(--primary-blue)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Lightbulb size={20} style={{ color: 'var(--gold)' }} /> Intellectual Property (Patents)
              </h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Inventive designs filed and published by the RCEW research cell:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {patentsList.map((pat, idx) => (
                  <div key={idx} style={{
                    padding: '1rem',
                    background: 'var(--white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                    border: '1px solid var(--slate-200)'
                  }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '0.3rem' }}>
                      {pat.title}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--slate-700)' }}>
                      <span>Status: <strong>{pat.status}</strong></span>
                      <span>Year: <strong>{pat.year}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 800px) {
          .research-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
