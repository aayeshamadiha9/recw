import React, { useState } from 'react';
import { LogIn, BookOpen, AlertCircle, FileText } from 'lucide-react';

export default function StudentResources() {
  const [grievance, setGrievance] = useState({ name: '', roll: '', email: '', type: 'academic', message: '' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (grievance.name && grievance.roll && grievance.email && grievance.message) {
      setSuccess(true);
      setGrievance({ name: '', roll: '', email: '', type: 'academic', message: '' });
    }
  };

  const portalResources = [
    { title: 'ERP Student Portal', icon: <LogIn size={28} />, desc: 'Check your semester attendance, internal marks ledger, fee statements, and registration status.' },
    { title: 'LMS E-Learning Portal', icon: <BookOpen size={28} />, desc: 'Access study materials, download PPTs, view lecture recordings, and submit course assignments.' },
    { title: 'Digital Library Search (OPAC)', icon: <FileText size={28} />, desc: 'Search for physical books, check availability, or access subscribed IEEE/Elsevier research journals.' }
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
            Student Resources
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Access academic portals, online learning platforms, and register grievances.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        {/* Portals grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {portalResources.map((res, idx) => (
            <div key={idx} className="card-glass" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1rem',
              borderTop: '4px solid var(--gold)'
            }}>
              <div style={{
                color: 'var(--gold-dark)',
                background: 'rgba(197,160,89,0.15)',
                padding: '0.6rem',
                borderRadius: '10px'
              }}>
                {res.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', margin: 0 }}>{res.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-700)', lineHeight: '1.5', marginBottom: '1rem' }}>
                {res.desc}
              </p>
              <button style={{
                background: 'var(--primary-blue)',
                color: 'var(--white)',
                border: 'none',
                padding: '0.5rem 1.25rem',
                borderRadius: '20px',
                fontFamily: 'var(--font-display)',
                fontWeight: '600',
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginTop: 'auto'
              }} onClick={() => alert(`${res.title} login simulator opened.`)}>
                Launch Portal &rarr;
              </button>
            </div>
          ))}
        </div>

        {/* Grievance Cell */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr', gap: '4rem', alignItems: 'flex-start' }} className="resources-layout-grid">
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)' }}>Online Grievance Box</h2>
            <p>
              Under UGC Autonomous guidelines, RCEW maintains a transparent, secure Grievance Redressal Cell. Students can register any academic, exam-related, hostel-related, or general issues directly.
            </p>
            <p>
              All submissions are encrypted and reviewed directly by the Grievance Review Committee headed by the Principal to ensure speedy resolutions within 48 hours.
            </p>
            
            <div style={{
              background: 'rgba(11,34,64,0.03)',
              border: '1px solid var(--slate-200)',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'flex-start',
              marginTop: '1.5rem'
            }}>
              <AlertCircle size={22} style={{ color: 'var(--gold-dark)', flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.85rem', color: 'var(--slate-700)', lineHeight: '1.4' }}>
                <strong>Strict Confidentiality:</strong> Your identity will only be visible to the review committee members. Anti-Ragging complaints can also be filed here.
              </div>
            </div>
          </div>

          <div>
            <div className="card-glass" style={{ borderLeft: '4px solid var(--gold)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', marginBottom: '1.25rem' }}>
                Submit Grievance Form
              </h3>

              {success ? (
                <div style={{
                  background: 'rgba(46,139,87,0.15)',
                  color: '#2E8B57',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  textAlign: 'center'
                }}>
                  Thank you! Your grievance request has been securely registered. Reference Ticket ID: RCEW-{Math.floor(1000 + Math.random()*9000)}.
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--slate-700)' }}>Full Name</label>
                      <input
                        type="text"
                        required
                        value={grievance.name}
                        onChange={(e) => setGrievance({ ...grievance, name: e.target.value })}
                        style={{ width: '100%', padding: '0.6rem', border: '1px solid var(--slate-200)', borderRadius: '6px', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--slate-700)' }}>Roll Number</label>
                      <input
                        type="text"
                        required
                        value={grievance.roll}
                        onChange={(e) => setGrievance({ ...grievance, roll: e.target.value })}
                        style={{ width: '100%', padding: '0.6rem', border: '1px solid var(--slate-200)', borderRadius: '6px', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--slate-700)' }}>Email Address</label>
                    <input
                      type="email"
                      required
                      value={grievance.email}
                      onChange={(e) => setGrievance({ ...grievance, email: e.target.value })}
                      style={{ width: '100%', padding: '0.6rem', border: '1px solid var(--slate-200)', borderRadius: '6px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--slate-700)' }}>Grievance Category</label>
                    <select
                      value={grievance.type}
                      onChange={(e) => setGrievance({ ...grievance, type: e.target.value })}
                      style={{ width: '100%', padding: '0.6rem', border: '1px solid var(--slate-200)', borderRadius: '6px', outline: 'none', cursor: 'pointer' }}
                    >
                      <option value="academic">Academic / Teaching quality</option>
                      <option value="exams">Examinations & CIE Marks</option>
                      <option value="hostel">Hostel & Dining Facilities</option>
                      <option value="ragging">Ragging / Harassment concern</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--slate-700)' }}>Elaborate Grievance Details</label>
                    <textarea
                      required
                      rows="4"
                      value={grievance.message}
                      onChange={(e) => setGrievance({ ...grievance, message: e.target.value })}
                      style={{ width: '100%', padding: '0.6rem', border: '1px solid var(--slate-200)', borderRadius: '6px', outline: 'none', resize: 'none' }}
                    ></textarea>
                  </div>

                  <button type="submit" style={{
                    background: 'var(--gold)',
                    color: 'var(--primary-blue)',
                    border: 'none',
                    padding: '0.75rem',
                    borderRadius: '30px',
                    fontWeight: '700',
                    fontFamily: 'var(--font-display)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    marginTop: '0.5rem',
                    hover: { background: 'var(--gold-dark)' }
                  }}>
                    Submit Grievance Securly
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .resources-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
