import React from 'react';
import { Eye, Rocket, Heart, Award } from 'lucide-react';

export default function VisionMission() {
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
            Vision, Mission & Motto
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            The institutional guidelines that drive our academic policies and define our core identity.
          </p>
        </div>
      </div>

      {/* Motto Box */}
      <div className="container" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <div className="card-glass" style={{
          background: 'rgba(11, 34, 64, 0.03)',
          border: '2px dashed var(--gold)',
          padding: '2.5rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--gold-dark)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Our Golden Motto
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            color: 'var(--primary-blue)',
            marginTop: '0.5rem',
            marginBottom: '0',
            fontStyle: 'italic'
          }}>
            "Join to Learn and Leave to Serve"
          </h2>
          <p style={{ margin: '1rem 0 0', color: 'var(--slate-700)', fontSize: '1.1rem' }}>
            This motto captures the transformation that every student undergoes in our campus—entering to absorb knowledge and graduating to make meaningful contributions to engineering, society, and the nation.
          </p>
        </div>
      </div>

      {/* Vision & Mission Grid */}
      <div className="container" style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="vm-grid">
        {/* Vision Card */}
        <div className="card-glass" style={{ borderTop: '4px solid var(--primary-blue)' }}>
          <div style={{
            background: 'rgba(11, 34, 64, 0.1)',
            color: 'var(--primary-blue)',
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <Eye size={32} />
          </div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Vision</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            To prepare professionally competent women technocrats in the field of engineering with an innovative and ethical culture.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            We aim to be a global model for women's education in engineering, technology, and management, emerging as a globally competitive institution by leveraging cutting-edge technologies and cultivating human excellence.
          </p>
        </div>

        {/* Mission Card */}
        <div className="card-glass" style={{ borderTop: '4px solid var(--gold)' }}>
          <div style={{
            background: 'rgba(197, 160, 89, 0.15)',
            color: 'var(--gold-dark)',
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <Rocket size={32} />
          </div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Mission</h2>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontSize: '1.05rem',
            lineHeight: '1.6'
          }}>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>&bull;</span>
              <span>To be a pioneer among peer engineering institutes in interdisciplinary research and engineering education.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>&bull;</span>
              <span>To motivate students to strive for the overall upliftment of mankind.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>&bull;</span>
              <span>To promote strong industry-institute interaction and collaborative programs.</span>
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>&bull;</span>
              <span>To provide value-based education that equips students with professional ethics and technical expertise.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="container" style={{ marginTop: '5rem' }}>
        <h2 className="text-center" style={{ marginBottom: '3rem' }}>Institutional Core Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Academic Rigor', desc: 'Fostering excellence through structured curriculum, advanced laboratories, and research programs.', icon: <Award size={24} /> },
            { title: 'Inclusivity', desc: 'Promoting an accessible environment that empowers women from diverse backgrounds to thrive.', icon: <Heart size={24} /> },
            { title: 'Innovation', desc: 'Encouraging problem-solving, entrepreneurship, and creative design thinking.', icon: <Rocket size={24} /> },
            { title: 'Social Ethics', desc: 'Instilling discipline, human values, and social responsibility.', icon: <Eye size={24} /> }
          ].map((val, idx) => (
            <div key={idx} className="card-glass" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{
                color: 'var(--gold-dark)',
                marginBottom: '1rem',
                display: 'inline-flex',
                background: 'rgba(197, 160, 89, 0.1)',
                padding: '0.75rem',
                borderRadius: '50%'
              }}>
                {val.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{val.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-700)', marginBottom: 0 }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .vm-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
