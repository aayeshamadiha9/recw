import React from 'react';

export default function Management() {
  const managementList = [
    {
      role: 'FOUNDER & INSPIRATION',
      name: 'Sri G. Pullaiah',
      bio: 'Sri G. Pullaiah was a legendary educationalist of Kurnool whose vision transformed the educational landscape of Rayalaseema. He believed that engineering education for women is the cornerstone of societal progress. His philanthropic spirit and relentless focus on quality discipline continue to guide our group of institutions today.',
      image: '/images/pulliahSir.jpg', // placeholder
      quote: '"Discipline is the bridge between goals and accomplishment."'
    },
    {
      role: 'CHAIRMAN',
      name: 'Sri G.V.M. Mohan Kumar',
      bio: 'Sri G.V.M. Mohan Kumar, a visionary administrator, has led the Sri Sai Krishna Educational Society with outstanding dedication. Under his stewardship, Ravindra College of Engineering for Women has achieved Autonomous status, NAAC A+ accreditation, and recorded exceptional placement records. He continues to steer the college towards international recognition.',
      image: '/images/mohanSir.jpg', // placeholder
      quote: '"We do not just train engineering graduates; we empower independent, confident women ready to lead industries."'
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
            College Management
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            The visionary leadership behind the Sri Sai Krishna Educational Society and RCEW.
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="container" style={{ marginTop: '5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {managementList.map((member, idx) => (
            <div key={idx} style={{
              display: 'grid',
              gridTemplateColumns: idx % 2 === 0 ? '1fr 2.5fr' : '2.5fr 1fr',
              gap: '3rem',
              alignItems: 'center',
              background: 'var(--white)',
              padding: '3rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(11,34,64,0.05)',
              border: '1px solid var(--slate-200)'
            }} className="management-card">
              {/* Image side */}
              <div style={{
                textAlign: 'center',
                order: idx % 2 === 0 ? 1 : 2
              }}>
                <div style={{
                  width: '220px',
                  height: '280px',
                  margin: '0 auto',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '4px solid var(--gold)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Text side */}
              <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                <span style={{
                  color: 'var(--gold-dark)',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  fontFamily: 'var(--font-display)'
                }}>
                  {member.role}
                </span>
                <h2 style={{
                  fontSize: '2rem',
                  color: 'var(--primary-blue)',
                  margin: '0.5rem 0 1.5rem',
                  fontFamily: 'var(--font-display)'
                }}>
                  {member.name}
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--slate-700)' }}>
                  {member.bio}
                </p>
                <div style={{
                  background: 'var(--slate-100)',
                  borderLeft: '4px solid var(--gold)',
                  padding: '1rem 1.5rem',
                  borderRadius: '0 8px 8px 0',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: 'var(--primary-blue)',
                  fontWeight: '500',
                  marginTop: '1.5rem'
                }}>
                  {member.quote}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .management-card {
            grid-template-columns: 1fr !important;
            padding: 2rem !important;
            gap: 2rem !important;
          }
          .management-card > div {
            order: unset !important;
          }
        }
      `}</style>
    </div>
  );
}
