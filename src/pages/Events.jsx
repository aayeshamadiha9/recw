import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: 'PRAGNYA 2026 - National Level Technical Symposium',
      date: 'September 18, 2026',
      time: '09:00 AM - 05:00 PM',
      venue: 'Main Seminar Hall & CSE Block',
      desc: 'National level technical fest featuring coding drills, paper presentations, web design contests, and robotics exhibitions. Students from across the nation participate.',
      type: 'symposium'
    },
    {
      title: 'Workshop on Generative AI & Cloud Deployment',
      date: 'August 12-14, 2026',
      time: '10:00 AM - 04:00 PM',
      venue: 'Advanced Java Lab, CSE Block',
      desc: 'Three-day hands-on workshop on training neural networks, integrating Large Language Models (LLMs) via APIs, and deploying cloud containers.',
      type: 'workshop'
    },
    {
      title: 'Annual Sports & Culturals Week 2026',
      date: 'October 05-10, 2026',
      time: '08:00 AM - 06:00 PM',
      venue: 'College Playgrounds & Open Auditorium',
      desc: 'A week-long celebration showcasing athletics, throwball tournaments, dance performances, classical singing, and dramatic arts of RCEW girls.',
      type: 'sports'
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
            Events & Seminars
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Latest updates on technical symposiums, hands-on workshops, cultural weeks, and hackathons.
          </p>
        </div>
      </div>

      {/* Events Timeline */}
      <div className="container" style={{ marginTop: '5rem', maxWidth: '900px' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '2.5rem' }}>Upcoming Events Schedule</h2>
        
        <div style={{
          position: 'relative',
          borderLeft: '3px solid var(--gold)',
          paddingLeft: '2rem',
          marginLeft: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }}>
          {events.map((evt, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              {/* Bullet circle */}
              <div style={{
                position: 'absolute',
                left: '-2.4rem',
                top: '0px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--primary-blue)',
                border: '3px solid var(--gold)',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)'
              }}></div>

              <div className="card-glass" style={{ padding: '2rem' }}>
                <span style={{
                  background: 'rgba(197, 160, 89, 0.15)',
                  color: 'var(--gold-dark)',
                  padding: '0.2rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {evt.type}
                </span>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-blue)', margin: '0.75rem 0' }}>
                  {evt.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--slate-700)', marginBottom: '1.25rem' }}>
                  {evt.desc}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                  fontSize: '0.85rem',
                  color: 'var(--slate-700)',
                  borderTop: '1px solid var(--slate-200)',
                  paddingTop: '1rem'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={14} style={{ color: 'var(--gold-dark)' }} />
                    {evt.date}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={14} style={{ color: 'var(--gold-dark)' }} />
                    {evt.time}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={14} style={{ color: 'var(--gold-dark)' }} />
                    {evt.venue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
