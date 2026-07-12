import React from 'react';
import { BookOpen, FileText, Download, Calendar } from 'lucide-react';

export default function Academics() {
  const filesList = [
    { type: 'Regulation', name: 'R23 Academic Regulations for B.Tech (Autonomous)', size: '1.4 MB' },
    { type: 'Regulation', name: 'R20 Academic Regulations for B.Tech (Non-Autonomous/JNTUA)', size: '1.1 MB' },
    { type: 'Calendar', name: 'Academic Calendar for B.Tech I Year (I & II Semesters) - 2026-27', size: '420 KB' },
    { type: 'Calendar', name: 'Academic Calendar for B.Tech II & III Year - 2026-27', size: '380 KB' },
    { type: 'Syllabus', name: 'CSE B.Tech Syllabus - Scheme of Instruction R23', size: '2.5 MB' },
    { type: 'Syllabus', name: 'ECE B.Tech Syllabus - Scheme of Instruction R23', size: '2.3 MB' },
    { type: 'Syllabus', name: 'AI & DS B.Tech Syllabus - Scheme of Instruction R23', size: '1.9 MB' }
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
            Academics
          </h1>
          <p style={{ color: 'var(--gold-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Course regulations, syllabi frameworks, and academic schedule plans for all semesters.
          </p>
        </div>
      </div>

      {/* Regulations Section */}
      <div className="container" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem' }} className="academics-grid">
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-blue)' }}>Autonomous Regulations</h2>
            <p>
              Conferred with Autonomous status by the University Grants Commission (UGC) and Jawahar Technological University Anantapur (JNTUA), RCEW administers its courses under modern, credit-based grading systems.
            </p>
            <p>
              Our <strong>R23 Regulations</strong> focus on Choice Based Credit System (CBCS), mandatory industrial internships (min 8 weeks), community service projects, and global technical certifications. The curriculum is updated annually under guidance from academic and industrial experts in the Board of Studies.
            </p>

            <h3 style={{ fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-blue)' }}>Evaluation & Grading</h3>
            <p>
              The evaluation pattern is split into Continuous Internal Evaluation (CIE) carrying 40% weightage, and Semester End Examinations (SEE) carrying 60% weightage. Continuous assessment is done via mid-term exams, assignments, quizzes, and project reviews.
            </p>
          </div>

          <div>
            <div className="card-glass" style={{ borderTop: '4px solid var(--gold)' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-blue)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={20} style={{ color: 'var(--gold)' }} /> Academic Downloads
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {filesList.map((file, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem',
                    background: 'var(--white)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.03)',
                    border: '1px solid var(--slate-200)'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--gold-dark)', fontWeight: '700', textTransform: 'uppercase' }}>
                        {file.type}
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--slate-900)', marginTop: '0.2rem' }}>
                        {file.name}
                      </div>
                    </div>
                    <button style={{
                      background: 'var(--primary-blue)',
                      color: 'var(--white)',
                      border: 'none',
                      padding: '0.4rem',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      hover: { background: 'var(--gold)' }
                    }}>
                      <Download size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 800px) {
          .academics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
