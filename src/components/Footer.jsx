import { Phone, Mail, MapPin, Award, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--primary-blue)',
      color: 'var(--white-slate)',
      fontFamily: 'var(--font-sans)',
      borderTop: '5px solid var(--gold)',
      paddingTop: '4rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2.5rem',
        paddingBottom: '3rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {/* Column 1: Profile & Motto */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <div style={{
              background: 'var(--gold)',
              color: 'var(--primary-blue)',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '0.9rem',
              border: '1px solid var(--white)'
            }}>
              R
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: '800',
              fontSize: '1.25rem',
              color: 'var(--white)',
              letterSpacing: '0.05em'
            }}>
              RCEW
            </span>
          </div>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--slate-400)',
            marginBottom: '1rem',
            lineHeight: '1.5'
          }}>
            Ravindra College of Engineering for Women (Autonomous) is a premier engineering college in Kurnool, AP, committed to fostering excellence in women's education.
          </p>
          <div style={{
            fontStyle: 'italic',
            color: 'var(--gold)',
            fontSize: '0.9rem',
            fontWeight: '600',
            borderLeft: '2px solid var(--gold)',
            paddingLeft: '0.75rem',
            margin: '1rem 0'
          }}>
            "Join to Learn and Leave to Serve"
          </div>
          {/* Accreditation Small Badges */}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '0.25rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.7rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <Award size={12} style={{ color: 'var(--gold)' }} />
              <span>NAAC A+ Grade</span>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '0.25rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.7rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              <CheckCircle2 size={12} style={{ color: 'var(--gold)' }} />
              <span>UGC Autonomous</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 style={{
            color: 'var(--white)',
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            position: 'relative'
          }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { name: 'About College', hash: '#/about' },
              { name: 'Admissions Info', hash: '#/admissions' },
              { name: 'Placements Office', hash: '#/placements' },
              { name: 'Departments & Labs', hash: '#/departments?dept=cse' },
              { name: 'Faculty Directory', hash: '#/faculty' },
              { name: 'IQAC Cell Details', hash: '#/iqac' }
            ].map((link, idx) => (
              <li key={idx}>
                <a href={link.hash} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.9rem',
                  color: 'var(--slate-400)',
                  transition: '0.2s'
                }} className="footer-link">
                  <ChevronRight size={14} style={{ color: 'var(--gold)' }} />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Bulletin Board */}
        <div>
          <h4 style={{
            color: 'var(--white)',
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '1.5rem'
          }}>
            Bulletins & Portal
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { name: 'Latest Events Calendar', hash: '#/events' },
              { name: 'Official Circulars', hash: '#/circulars' },
              { name: 'Examination Notice Board', hash: '#/exams' },
              { name: 'Student Resource Center', hash: '#/student-resources' },
              { name: 'Research Publications', hash: '#/research' },
              { name: 'Campus Facilities', hash: '#/campus-life' }
            ].map((link, idx) => (
              <li key={idx}>
                <a href={link.hash} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.9rem',
                  color: 'var(--slate-400)'
                }} className="footer-link">
                  <ChevronRight size={14} style={{ color: 'var(--gold)' }} />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h4 style={{
            color: 'var(--white)',
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '1.5rem'
          }}>
            Contact Info
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--slate-400)' }}>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <MapPin size={18} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
              <span>
                Ravindra College of Engineering for Women (Autonomous)<br />
                Near Venkayapalle, Nandikotkur Road,<br />
                Kurnool - 518452, Andhra Pradesh, India.
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <Phone size={16} style={{ color: 'var(--gold)' }} />
              <span>Admissions: +91 8639756876 / 9948187766</span>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <Mail size={16} style={{ color: 'var(--gold)' }} />
              <span>principal@recw.ac.in</span>
            </div>
            
            {/* Newsletter Sign Up */}
            <div style={{ marginTop: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--slate-400)', fontWeight: '600' }}>Stay Updated:</span>
              <div style={{ display: 'flex', marginTop: '0.4rem', borderRadius: '4px', overflow: 'hidden' }}>
                <input
                  type="email"
                  placeholder="Enter email"
                  style={{
                    padding: '0.4rem 0.8rem',
                    border: 'none',
                    background: 'rgba(255,255,255,0.08)',
                    color: 'var(--white)',
                    fontSize: '0.85rem',
                    flexGrow: 1,
                    outline: 'none'
                  }}
                />
                <button style={{
                  background: 'var(--gold)',
                  color: 'var(--primary-blue)',
                  border: 'none',
                  padding: '0.4rem 0.8rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}>
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 1.5rem',
        flexWrap: 'wrap',
        gap: '1rem',
        fontSize: '0.85rem',
        color: 'var(--slate-400)'
      }}>
        <div>
          &copy; {new Date().getFullYear()} Ravindra College of Engineering for Women (Autonomous). All Rights Reserved.
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#" className="social-icon" style={{ opacity: 0.7 }} aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" className="social-icon" style={{ opacity: 0.7 }} aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" className="social-icon" style={{ opacity: 0.7 }} aria-label="Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a href="#" className="social-icon" style={{ opacity: 0.7 }} aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--white) !important;
          transform: translateX(4px);
        }
        .social-icon:hover {
          color: var(--gold) !important;
          opacity: 1 !important;
        }
      `}</style>
    </footer>
  );
}
