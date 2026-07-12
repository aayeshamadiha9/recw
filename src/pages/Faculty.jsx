import React, { useState } from 'react';
import { Search, Mail, BookOpen } from 'lucide-react';

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('all');

  const facultyData = [
    { name: 'Dr. G. Sanjay Kumar', title: 'Professor & HOD', dept: 'cse', qual: 'M.Tech, Ph.D.', email: 'sanjaykumar.g@recw.ac.in', expertise: 'Cloud Computing, Cybersecurity', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200' },
    { name: 'Dr. V. Hari Prasad', title: 'Professor & HOD', dept: 'ece', qual: 'M.Tech, Ph.D.', email: 'hariprasad.v@recw.ac.in', expertise: 'VLSI Systems, Signal Processing', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200' },
    { name: 'Dr. M. Sreenivasulu', title: 'Professor & HOD', dept: 'aids', qual: 'M.Tech, Ph.D.', email: 'sreenivasulu.m@recw.ac.in', expertise: 'Big Data, Predictive Modeling', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200' },
    { name: 'Dr. P. Rajendra Prasad', title: 'Professor & HOD', dept: 'aiml', qual: 'M.Tech, Ph.D.', email: 'rajendraprasad.p@recw.ac.in', expertise: 'Deep Learning, NLP', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200' },
    { name: 'Dr. K. Srilatha', title: 'Assoc. Professor & HOD', dept: 'hs', qual: 'M.Sc, Ph.D. (Chemistry)', email: 'srilatha.k@recw.ac.in', expertise: 'Nanomaterial Synthesis', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200' },
    { name: 'Mrs. G. Spandana', title: 'Asst. Professor', dept: 'cse', qual: 'M.Tech', email: 'spandana.g@recw.ac.in', expertise: 'Web Development, Java Coding', img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200&h=200' },
    { name: 'Mr. T. Ramanjaneyulu', title: 'Asst. Professor', dept: 'ece', qual: 'M.Tech', email: 'ramanjaneyulu.t@recw.ac.in', expertise: 'Embedded Systems, IoT Design', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200' }
  ];

  const filteredFaculty = facultyData.filter(fac => {
    const matchesSearch = fac.name.toLowerCase().includes(searchTerm.toLowerCase()) || fac.expertise.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter === 'all' || fac.dept === deptFilter;
    return matchesSearch && matchesDept;
  });

  const depts = [
    { id: 'all', name: 'All Departments' },
    { id: 'cse', name: 'CSE' },
    { id: 'ece', name: 'ECE' },
    { id: 'aids', name: 'AI & DS' },
    { id: 'aiml', name: 'AI & ML' },
    { id: 'hs', name: 'Humanities & Sciences' }
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
            Faculty Directory
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Meet our highly qualified, research-driven educators and leaders.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '4rem' }}>
        {/* Search & Filter Controls */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          background: 'var(--white)',
          padding: '1.5rem',
          borderRadius: '16px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
          border: '1px solid var(--slate-200)',
          marginBottom: '3rem'
        }}>
          {/* Search Input */}
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--slate-200)', padding: '0.6rem 1rem', borderRadius: '30px', flexGrow: 1, gap: '0.5rem', background: 'var(--white-slate)' }}>
            <Search size={18} style={{ color: 'var(--slate-400)' }} />
            <input
              type="text"
              placeholder="Search faculty by name or area of expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                border: 'none',
                background: 'none',
                width: '100%',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {depts.map((d) => (
              <button
                key={d.id}
                onClick={() => setDeptFilter(d.id)}
                style={{
                  border: '1px solid var(--slate-200)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '20px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: deptFilter === d.id ? 'var(--primary-blue)' : 'var(--white)',
                  color: deptFilter === d.id ? 'var(--white)' : 'var(--slate-700)'
                }}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {filteredFaculty.map((fac, idx) => (
            <div key={idx} className="card-glass" style={{
              padding: '2rem 1.5rem',
              textAlign: 'center',
              borderTop: '4px solid var(--gold)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              {/* Photo */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid var(--gold)',
                marginBottom: '1.25rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>
                <img
                  src={fac.img}
                  alt={fac.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Text */}
              <span style={{
                background: 'rgba(11,34,64,0.06)',
                color: 'var(--primary-blue)',
                fontSize: '0.7rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                {fac.dept.toUpperCase()}
              </span>

              <h4 style={{ fontSize: '1.15rem', color: 'var(--primary-blue)', marginBottom: '0.25rem' }}>{fac.name}</h4>
              <div style={{ fontSize: '0.85rem', color: 'var(--gold-dark)', fontWeight: '600', marginBottom: '0.75rem' }}>
                {fac.title} &bull; {fac.qual}
              </div>

              <div style={{
                borderTop: '1px solid var(--slate-200)',
                paddingTop: '1rem',
                marginTop: 'auto',
                width: '100%',
                textAlign: 'left',
                fontSize: '0.85rem',
                color: 'var(--slate-700)'
              }}>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <Mail size={14} style={{ color: 'var(--gold-dark)' }} />
                  <span style={{
                    wordBreak: 'break-all'
                  }}>{fac.email}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
                  <BookOpen size={14} style={{ color: 'var(--gold-dark)', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Research:</strong> {fac.expertise}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
