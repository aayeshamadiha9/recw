import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Award, ShieldAlert, Library } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      title: 'About',
      items: [
        { name: 'College Profile', hash: '#/about' },
        { name: 'Vision & Mission', hash: '#/vision-mission' },
        { name: 'Management', hash: '#/management' },
        { name: 'Principal\'s Message', hash: '#/principal-message' }
      ]
    },
    {
      title: 'Academics',
      items: [
        { name: 'Regulations & Syllabus', hash: '#/academics' },
        { name: 'Faculty Directory', hash: '#/faculty' },
        { name: 'Student Resources', hash: '#/student-resources' }
      ]
    },
    {
      title: 'Departments',
      items: [
        { name: 'Computer Science & Engineering', hash: '#/departments?dept=cse' },
        { name: 'Electronics & Communication', hash: '#/departments?dept=ece' },
        { name: 'Artificial Intelligence & DS', hash: '#/departments?dept=aids' },
        { name: 'Artificial Intelligence & ML', hash: '#/departments?dept=aiml' },
        { name: 'Humanities & Sciences', hash: '#/departments?dept=hs' }
      ]
    },
    { name: 'Admissions', hash: '#/admissions' },
    { name: 'Placements', hash: '#/placements' },
    { name: 'IQAC', hash: '#/iqac' },
    {
      title: 'Campus Life',
      items: [
        { name: 'Campus Facilities', hash: '#/campus-life' },
        { name: 'Media Gallery', hash: '#/gallery' }
      ]
    },
    {
      title: 'Bulletins',
      items: [
        { name: 'Events & Fests', hash: '#/events' },
        { name: 'Official Circulars', hash: '#/circulars' },
        { name: 'Exam Notifications', hash: '#/exams' }
      ]
    },
    { name: 'Contact Us', hash: '#/contact' }
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: 999,
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: scrolled ? '0 4px 20px rgba(11, 34, 64, 0.08)' : '0 2px 10px rgba(11, 34, 64, 0.04)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.8rem 1.5rem',
        minHeight: '75px'
      }}>
        {/* Brand/Logo Section */}
        <a href="#/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} onClick={() => setIsOpen(false)}>
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-blue))',
            color: 'var(--gold)',
            width: '46px',
            height: '46px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '1.25rem',
            boxShadow: '0 4px 10px rgba(11, 34, 64, 0.15)',
            border: '2px solid var(--gold)'
          }}>
            R
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: '800',
              fontSize: '1.2rem',
              color: 'var(--primary-blue)',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}>
              RAVINDRA
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: '600',
              fontSize: '0.72rem',
              color: 'var(--gold-dark)',
              letterSpacing: '0.04em',
              lineHeight: '1.2'
            }}>
              COLLEGE OF ENGINEERING FOR WOMEN
            </div>
            <div style={{
              fontSize: '0.62rem',
              textTransform: 'uppercase',
              color: 'var(--slate-400)',
              fontWeight: '700',
              marginTop: '1px'
            }}>
              Autonomous &bull; NAAC A+ &bull; JNTUA Affiliated
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {navLinks.map((link, idx) => (
            <div
              key={idx}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.items && setActiveDropdown(idx)}
              onMouseLeave={() => link.items && setActiveDropdown(null)}
            >
              {link.items ? (
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '600',
                    fontSize: '0.92rem',
                    color: 'var(--primary-blue)',
                    padding: '0.6rem 0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    borderRadius: '8px',
                    transition: 'all 0.2s'
                  }}
                  className="nav-link-btn"
                >
                  {link.title}
                  <ChevronDown size={14} style={{
                    transform: activeDropdown === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                    color: 'var(--gold)'
                  }} />
                </button>
              ) : (
                <a
                  href={link.hash}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: '600',
                    fontSize: '0.92rem',
                    color: 'var(--primary-blue)',
                    padding: '0.6rem 0.9rem',
                    borderRadius: '8px',
                    display: 'block'
                  }}
                  className="nav-link"
                >
                  {link.name}
                </a>
              )}

              {/* Dropdown Menu */}
              {link.items && activeDropdown === idx && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  minWidth: '240px',
                  background: 'var(--white)',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.15)',
                  border: '1px solid var(--slate-200)',
                  borderRadius: '12px',
                  padding: '0.75rem 0',
                  zIndex: 100,
                  animation: 'fadeInUp 0.2s ease-out'
                }}>
                  {link.items.map((subItem, sIdx) => (
                    <a
                      key={sIdx}
                      href={subItem.hash}
                      style={{
                        display: 'block',
                        padding: '0.6rem 1.25rem',
                        fontSize: '0.88rem',
                        fontWeight: '550',
                        color: 'var(--slate-700)',
                        transition: 'all 0.2s'
                      }}
                      className="dropdown-item"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="nav-hamburger-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--primary-blue)',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'none'
          }}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="mobile-menu-panel" style={{
          position: 'fixed',
          top: '75px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 75px)',
          background: 'var(--white)',
          zIndex: 998,
          overflowY: 'auto',
          padding: '1.5rem',
          boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.05)',
          animation: 'fadeInUp 0.3s ease'
        }}>
          {navLinks.map((link, idx) => (
            <div key={idx} style={{ marginBottom: '1.25rem' }}>
              {link.items ? (
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: '700',
                    fontSize: '1rem',
                    color: 'var(--primary-blue)',
                    borderBottom: '1px solid var(--slate-200)',
                    paddingBottom: '0.4rem',
                    marginBottom: '0.5rem'
                  }}>
                    {link.title}
                  </div>
                  <div style={{ paddingLeft: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {link.items.map((subItem, sIdx) => (
                      <a
                        key={sIdx}
                        href={subItem.hash}
                        onClick={() => setIsOpen(false)}
                        style={{
                          fontSize: '0.92rem',
                          color: 'var(--slate-700)',
                          display: 'block'
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={link.hash}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: '700',
                    fontSize: '1rem',
                    color: 'var(--primary-blue)',
                    display: 'block'
                  }}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Global CSS adjustments for Hover state and Media Queries */}
      <style>{`
        .nav-link:hover, .dropdown-item:hover {
          color: var(--gold-dark) !important;
          background: var(--slate-100);
        }
        .dropdown-item {
          border-left: 2px solid transparent;
        }
        .dropdown-item:hover {
          border-left-color: var(--gold);
          padding-left: 1.5rem !important;
        }
        .nav-link-btn:hover {
          background-color: var(--slate-100) !important;
        }
        @media (max-width: 1024px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-hamburger-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
