import React from 'react';
import { Target, Award, Users, ShieldAlert, Check } from 'lucide-react';

export default function Placements() {
  const statsList = [
    { value: '12 LPA', label: 'Highest Package', desc: 'Secured by CSE students at TCS Digital.' },
    { value: '92%', label: 'Placement Rate', desc: 'Among eligible final year students.' },
    { value: '250+', label: 'Offers Placed', desc: 'Across top global IT consulting MNCs.' },
    { value: '4.8 LPA', label: 'Average Package', desc: 'Substantial improvement year-on-year.' }
  ];

  const recruiters = ['TCS', 'Wipro', 'Cognizant', 'Accenture', 'Infosys', 'Capgemini', 'IBM', 'Tech Mahindra', 'HCL', 'Mindtree'];

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
            Placements & Training
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Empowering our students with job readiness. Highest packages, top recruiters, and training calendars.
          </p>
        </div>
      </div>

      {/* Stats Counter Section */}
      <div className="container" style={{ marginTop: '-2.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem'
        }}>
          {statsList.map((stat, idx) => (
            <div key={idx} style={{
              background: 'var(--white)',
              borderRadius: '16px',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              boxShadow: '0 8px 30px rgba(11,34,64,0.08)',
              borderTop: '4px solid var(--gold)',
              borderInline: '1px solid var(--slate-200)',
              borderBottom: '1px solid var(--slate-200)',
              animation: 'fadeInUp 0.3s ease'
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: '800',
                color: 'var(--primary-blue)',
                lineHeight: '1.1',
                marginBottom: '0.4rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontWeight: '700',
                fontSize: '0.95rem',
                color: 'var(--gold-dark)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem'
              }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--slate-700)' }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Placements Section */}
      <div className="container" style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }} className="placements-grid">
        {/* Left Side: Placement Cell details */}
        <div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)' }}>Training & Placement Cell</h2>
          <p>
            The Training & Placement Cell at RCEW operates with a single objective: to bridge the gap between academia and corporate standards. We recognize that technical expertise alone is insufficient in modern tech ecosystems. Therefore, we integrate corporate readiness training right from the second year of study.
          </p>
          <p>
            Our rigorous training calendar includes coding bootcamps, quantitative aptitude sessions, logical reasoning classes, resume writing workshops, mock group discussions, and technical interviews. We partner with industry training platforms to deliver intensive programming drills in Python, Java, and cloud systems.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Our Placement Framework</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.05rem' }}>
            {[
              'Coding skill drills (Python/Java/Web Technologies) under external mentors.',
              'Aptitude, analytical, and logical reasoning skill building classes.',
              'Mock coding evaluations and hackathons on platforms like HackerRank.',
              'Collaborative hackathons with premier corporate bodies.',
              'Dedicated company-specific training prior to recruitment drives.'
            ].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <Check size={18} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '4px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: TPO Card */}
        <div>
          <div className="card-glass" style={{ borderLeft: '4px solid var(--primary-blue)', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', marginBottom: '1.25rem' }}>
              Placement Officer
            </h3>
            <p style={{ fontSize: '0.95rem' }}>
              For recruiter inquiries, campus drives registration, or training partnership proposals, please reach out to our placement division.
            </p>
            <div style={{
              background: 'var(--white)',
              borderRadius: '8px',
              padding: '1rem',
              border: '1px solid var(--slate-200)',
              fontSize: '0.9rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              marginTop: '1.5rem'
            }}>
              <div><strong>Placement Officer:</strong> T&P Cell</div>
              <div><strong>Email:</strong> placementofficer@recw.ac.in</div>
              <div><strong>Mobile:</strong> +91 9948187766</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recruiter Logos */}
      <div className="container" style={{ marginTop: '5rem', textAlign: 'center' }}>
        <h2 className="text-center" style={{ marginBottom: '2.5rem' }}>Our Top Corporate Recruiters</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem'
        }}>
          {recruiters.map((rec, idx) => (
            <div key={idx} style={{
              background: 'var(--white)',
              border: '1px solid var(--slate-200)',
              borderRadius: '12px',
              padding: '1.25rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '800',
              color: 'var(--primary-blue)',
              boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
              minWidth: '150px',
              textAlign: 'center'
            }}>
              {rec}
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 800px) {
          .placements-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
