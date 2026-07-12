import React from 'react';
import { Home, BookOpen, Trophy, Bus, Coffee, ShieldAlert } from 'lucide-react';

export default function CampusLife() {
  const facilities = [
    {
      title: 'Women\'s Hostel',
      icon: <Home size={32} />,
      desc: 'Our on-campus hostel provides a secure, home-away-from-home environment for female students. Features 24/7 security surveillance, high-speed Wi-Fi, mineral drinking water plant, nutritious vegetarian/non-vegetarian dining, and an on-call physician medical room.'
    },
    {
      title: 'Central Library',
      icon: <BookOpen size={32} />,
      desc: 'A massive repository of knowledge, stocking over 25,000 volumes, national/international journals, and digital resources. Provides subscriptions to IEEE, Elsevier, and DELNET. Features a silent reading room and digital library terminal access.'
    },
    {
      title: 'Sports & Gymnasium',
      icon: <Trophy size={32} />,
      desc: 'Promoting physical well-being, the college has outdoor courts for volleyball, throwball, basketball, and badminton, alongside indoor facilities for chess and table tennis. A well-equipped fitness gym is available for hostel borders.'
    },
    {
      title: 'College Transportation',
      icon: <Bus size={32} />,
      desc: 'A fleet of modern, comfortable college buses operates across all major routes of Kurnool town and nearby suburban locations, ensuring safe and punctual transit for students and staff.'
    },
    {
      title: 'Campus Cafeteria',
      icon: <Coffee size={32} />,
      desc: 'The cafeteria serves hygienic, nutritious food, snacks, and beverages at subsidized rates. It serves as a relaxed space for peer discussions and socializing.'
    },
    {
      title: 'Security & CCTV',
      icon: <ShieldAlert size={32} />,
      desc: 'RCEW is a completely secured campus. Guarded round-the-clock by security personnel, with all pathways, hallways, laboratories, and hostels under active CCTV camera surveillance, ensuring absolute safety for women.'
    }
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
            Campus Life & Facilities
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Explore our state-of-the-art student facilities, secure hostels, library, and campus transit.
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="container" style={{ marginTop: '4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem'
        }}>
          {facilities.map((fac, idx) => (
            <div key={idx} className="card-glass" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1.25rem',
              borderTop: idx % 2 === 0 ? '4px solid var(--primary-blue)' : '4px solid var(--gold)'
            }}>
              <div style={{
                color: idx % 2 === 0 ? 'var(--primary-blue)' : 'var(--gold-dark)',
                background: idx % 2 === 0 ? 'rgba(11,34,64,0.06)' : 'rgba(197,160,89,0.15)',
                padding: '0.8rem',
                borderRadius: '12px'
              }}>
                {fac.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                  {fac.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--slate-700)', lineHeight: '1.6', marginBottom: 0 }}>
                  {fac.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
