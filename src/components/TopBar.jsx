import React from 'react';
import { Phone, Mail, GraduationCap, Calendar, Users, Award } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="topbar-container" style={{
      width: '100%',
      background: 'var(--primary-blue)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'var(--white)',
      fontSize: '0.85rem',
      fontFamily: 'var(--font-display)',
      zIndex: 1000
    }}>
      {/* Announcement Marquee Ticker */}
      <div className="announcement-bar" style={{
        background: 'var(--gold)',
        color: 'var(--primary-blue)',
        padding: '0.4rem 1rem',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        fontWeight: '700',
        letterSpacing: '0.03em'
      }}>
        <div style={{
          background: 'var(--primary-blue)',
          color: 'var(--white)',
          padding: '0.2rem 0.8rem',
          borderRadius: '4px',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          marginRight: '1rem',
          whiteSpace: 'nowrap',
          zIndex: 2,
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          Updates
        </div>
        <div style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: 'marquee 25s linear infinite',
          paddingLeft: '100%'
        }}>
          <span style={{ marginRight: '3rem' }}>🎉 Admissions Open for Academic Year 2026-27 (B.Tech - CSE, ECE, AI&DS, AI&ML)</span>
          <span style={{ marginRight: '3rem' }}>🌟 RCEW Conferred Autonomous Status by UGC (2023-24 to 2032-33)</span>
          <span style={{ marginRight: '3rem' }}>🏆 Accredited by NAAC with 'A+' Grade</span>
          <span style={{ marginRight: '3rem' }}>🎓 NBA Accredited Programs (CSE & ECE) - Affiliated with JNTUA, Anantapur</span>
          <span style={{ marginRight: '3rem' }}>💼 Outstanding Placement Records for 2025: Highest Package 12 LPA!</span>
        </div>
      </div>

      {/* Main Info Section */}
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1.5rem',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        {/* Contact Links */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="tel:+918639756876" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', opacity: 0.9 }}>
            <Phone size={14} style={{ color: 'var(--gold)' }} />
            <span>Admissions Helpline: +91 8639756876</span>
          </a>
          <a href="mailto:principal@recw.ac.in" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', opacity: 0.9 }}>
            <Mail size={14} style={{ color: 'var(--gold)' }} />
            <span>principal@recw.ac.in</span>
          </a>
        </div>

        {/* Quick Utilities */}
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#/circulars" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', opacity: 0.85, hover: { opacity: 1 } }}>
            <Calendar size={14} style={{ color: 'var(--gold)' }} />
            <span>Academic Calendar</span>
          </a>
          <a href="#/student-resources" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', opacity: 0.85 }}>
            <Users size={14} style={{ color: 'var(--gold)' }} />
            <span>Student Portal</span>
          </a>
          <a href="#/admissions" style={{
            background: 'rgba(197, 160, 89, 0.15)',
            border: '1px solid var(--gold)',
            color: 'var(--gold-light)',
            padding: '0.2rem 0.75rem',
            borderRadius: '15px',
            fontSize: '0.8rem',
            fontWeight: '600',
            transition: 'all 0.3s'
          }}>
            Apply Online 2026
          </a>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
      `}</style>
    </div>
  );
}
