import React from 'react';
import { ShieldCheck, Award, BookOpen, UserCheck } from 'lucide-react';

export default function About() {
  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))',
        color: 'var(--white)',
        padding: '5rem 2rem 4rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container">
          <span style={{
            background: 'var(--gold)',
            color: 'var(--primary-blue)',
            padding: '0.3rem 1rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Established 2008
          </span>
          <h1 style={{ color: 'var(--white)', fontSize: '3rem', marginTop: '1rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
            About Our College
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Ravindra College of Engineering for Women (Autonomous) - Conferred Autonomous status by UGC for the period 2023-24 to 2032-33.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="container" style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', flexWrap: 'wrap' }}>
        {/* Left column */}
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>Institutional Profile</h2>
          <p>
            Ravindra College of Engineering for Women (RCEW) was established in 2008 under the aegis of the Sri Sai Krishna Educational Society. Founded by the visionary educationalist Late Sri G. Pullaiah, the institution stands tall as a beacon of learning, dedicated exclusively to the empowerment of women in engineering and technology.
          </p>
          <p>
            The institution has grown significantly since its inception and is widely regarded as one of the best women's engineering colleges in the state of Andhra Pradesh. With modern laboratories, excellent placement opportunities, highly qualified faculty, and a secure and thriving campus, RCEW nurtures young minds to become future-ready engineering professionals.
          </p>
          <p>
            Holding the prestigious <strong>NAAC 'A+' Grade Accreditation</strong> and having its key courses (CSE & ECE) accredited by the <strong>NBA</strong>, RCEW is committed to teaching excellence, industrial relevance, and ethical values. The college is conferred with <strong>Autonomous Status by the UGC</strong>, giving it the academic freedom to curate state-of-the-art curricula matching contemporary technology demands.
          </p>

          <h3 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Core Features & Objectives</h3>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '1.05rem' }}>
            <li>Provide rigorous technical education coupled with hands-on industrial experiences.</li>
            <li>Promote women leadership and self-reliance through coding bootcamps, fests, and expert sessions.</li>
            <li>Foster innovative thinking and research to address real-world local and global challenges.</li>
            <li>Inculcate values of discipline, social responsibility, and professional ethics.</li>
          </ul>
        </div>

        {/* Right column (Accreditations & Certificates) */}
        <div>
          <div className="card-glass" style={{ border: '2px solid var(--gold)', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--primary-blue)', textAlign: 'center' }}>
              Accreditations
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Award size={36} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1rem', margin: 0 }}>NAAC A+ Grade</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--slate-700)', margin: 0 }}>Accredited with an outstanding cumulative score representing top quality.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <ShieldCheck size={36} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1rem', margin: 0 }}>UGC Autonomous</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--slate-700)', margin: 0 }}>Academic freedom to deliver direct industry-relevant syllabus (2023-33).</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <BookOpen size={36} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1rem', margin: 0 }}>NBA Accredited</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--slate-700)', margin: 0 }}>CSE and ECE B.Tech programs hold official NBA credentials.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <UserCheck size={36} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '1rem', margin: 0 }}>Affiliated with JNTUA</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--slate-700)', margin: 0 }}>Affiliated with Jawaharlal Nehru Technological University, Anantapur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
