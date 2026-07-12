import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.subject && form.message) {
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

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
            Contact Us
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Reach out to our administrative office, admissions division, or find our campus coordinates.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr', gap: '4rem' }} className="contact-grid">
          {/* Left panel: Info */}
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)' }}>Campus Contacts</h2>
            <p>
              Have any queries regarding admissions, fee frameworks, eligibility norms, or faculty vacancies? Feel free to contact our office.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'rgba(197, 160, 89, 0.15)',
                  color: 'var(--gold-dark)',
                  padding: '0.6rem',
                  borderRadius: '12px',
                  flexShrink: 0
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-blue)', margin: '0 0 0.25rem', fontSize: '1.1rem' }}>Our Address</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--slate-700)', margin: 0 }}>
                    Ravindra College of Engineering for Women (Autonomous),<br />
                    Near Venkayapalle, Pasupula Village, Nandikotkur Road,<br />
                    Kurnool - 518452, Andhra Pradesh, India.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'rgba(197, 160, 89, 0.15)',
                  color: 'var(--gold-dark)',
                  padding: '0.6rem',
                  borderRadius: '12px',
                  flexShrink: 0
                }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-blue)', margin: '0 0 0.25rem', fontSize: '1.1rem' }}>Call Hotline</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--slate-700)', margin: 0 }}>
                    Admissions: +91 8639756876 / 9948187766<br />
                    Principal Office: 08518-285088
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: 'rgba(197, 160, 89, 0.15)',
                  color: 'var(--gold-dark)',
                  padding: '0.6rem',
                  borderRadius: '12px',
                  flexShrink: 0
                }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-blue)', margin: '0 0 0.25rem', fontSize: '1.1rem' }}>Email Support</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--slate-700)', margin: 0 }}>
                    General: principal@recw.ac.in<br />
                    Placements Cell: placementofficer@recw.ac.in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Inquiry Form */}
          <div>
            <div className="card-glass" style={{ borderTop: '4px solid var(--gold)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', marginBottom: '1.5rem' }}>
                Online Inquiry Form
              </h3>

              {sent ? (
                <div style={{
                  background: 'rgba(46,139,87,0.15)',
                  color: '#2E8B57',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textAlign: 'center'
                }}>
                  Message sent successfully! Our administrative office will get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--slate-700)' }}>Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--slate-200)', borderRadius: '6px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--slate-700)' }}>Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--slate-200)', borderRadius: '6px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--slate-700)' }}>Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--slate-200)', borderRadius: '6px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.3rem', color: 'var(--slate-700)' }}>Message Details</label>
                    <textarea
                      required
                      rows="4"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '0.7rem', border: '1px solid var(--slate-200)', borderRadius: '6px', outline: 'none', resize: 'none' }}
                    ></textarea>
                  </div>

                  <button type="submit" style={{
                    background: 'var(--primary-blue)',
                    color: 'var(--white)',
                    border: 'none',
                    padding: '0.8rem',
                    borderRadius: '30px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-display)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s',
                    hover: { background: 'var(--secondary-blue)' }
                  }}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div style={{ marginTop: '5rem' }}>
          <h2 className="text-center" style={{ marginBottom: '2.5rem' }}>Find Us on Google Maps</h2>
          <div style={{
            width: '100%',
            height: '400px',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(11,34,64,0.08)',
            border: '1px solid var(--slate-200)'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.2974950005703!2d78.0772274!3d15.8357065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e3b5eaaaaaaa%3A0xe1044431f79a9cc1!2sRavindra%20College%20of%20Engineering%20for%20Women!5e0!3m2!1sen!2sin!4v1720800000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </div>
  );
}
