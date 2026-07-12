import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, BookOpen, UserCheck, Flame, Compass, ChevronRight, GraduationCap, ChevronLeft, Calendar, FileText, CheckCircle } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeBoardTab, setActiveBoardTab] = useState('news');
  const [stats, setStats] = useState({ years: 0, placements: 0, intake: 0, awards: 0 });

  // Slide definitions for Hero Carousel
  const slides = [
    {
      img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1500&h=800',
      badge: 'NAAC A+ Accredited',
      title: 'Empowering Women Technocrats of the Future',
      desc: 'Ravindra College of Engineering for Women (Autonomous) offers a world-class academic environment dedicated to teaching excellence, ethical values, and job readiness.'
    },
    {
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1500&h=800',
      badge: 'Autonomous Status',
      title: 'Industry-Conformed Academic Syllabus',
      desc: 'Conferred Autonomous status by the UGC. We design custom curriculums matching the latest tech trends in Web Dev, Generative AI, IoT, and Cloud computing.'
    },
    {
      img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1500&h=800',
      badge: 'Outstanding Placements',
      title: 'Where Careers are Constructed',
      desc: 'Recording 92%+ placement success with salary packages up to 12 LPA. Top recruiters include TCS, Cognizant, Wipro, and Accenture.'
    }
  ];

  // Auto transition slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Animating Stats Counter
  useEffect(() => {
    const targets = { years: 18, placements: 92, intake: 420, awards: 15 };
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount++;
      setStats({
        years: Math.min(Math.round((targets.years / steps) * stepCount), targets.years),
        placements: Math.min(Math.round((targets.placements / steps) * stepCount), targets.placements),
        intake: Math.min(Math.round((targets.intake / steps) * stepCount), targets.intake),
        awards: Math.min(Math.round((targets.awards / steps) * stepCount), targets.awards)
      });

      if (stepCount >= steps) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div style={{ width: '100%' }}>
      {/* Hero Slider */}
      <div className="hero-slider">
        {slides.map((slide, idx) => (
          <div key={idx} className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}>
            <img src={slide.img} alt={slide.title} className="hero-img" />
            <div className="hero-content">
              <span className="hero-badge">{slide.badge}</span>
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#/admissions" className="btn btn-gold">Explore Admissions</a>
                <a href="#/about" className="btn btn-outline-white">Read Profile</a>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel buttons */}
        <button onClick={prevSlide} style={{
          position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.1)', color: 'var(--white)', border: 'none',
          width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer', zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)'
        }}>
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} style={{
          position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.1)', color: 'var(--white)', border: 'none',
          width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer', zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)'
        }}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Accreditation Highlights Banner */}
      <div style={{
        background: 'var(--white)',
        borderBottom: '1px solid var(--slate-200)',
        padding: '2rem 1.5rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Award size={40} style={{ color: 'var(--gold)' }} />
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary-blue)' }}>NAAC A+ Accredited</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--slate-700)' }}>Top-tier quality benchmark</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={40} style={{ color: 'var(--gold)' }} />
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary-blue)' }}>UGC Autonomous Status</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--slate-700)' }}>Curriculum freedom until 2033</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <BookOpen size={40} style={{ color: 'var(--gold)' }} />
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary-blue)' }}>NBA Accredited Programs</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--slate-700)' }}>B.Tech CSE & ECE credentials</span>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome & Founder Message */}
      <div className="container welcome-grid" style={{ padding: '6rem 1.5rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <span style={{ color: 'var(--gold-dark)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Welcome to RCEW Kurnool
          </span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-blue)', margin: '0.5rem 0 1.5rem' }}>
            Nurturing Engineering Leadership in Women
          </h2>
          <p>
            Established in 2008 by the Sri Sai Krishna Educational Society, Ravindra College of Engineering for Women (Autonomous) was founded on the principles of discipline, high academic rigor, and empowering young women to take the lead in global technology sectors.
          </p>
          <p>
            With a state-of-the-art campus, modern coding labs, active research outputs, and industry collaborations, we ensure our students graduate not just with a degree, but as confident engineering professionals prepared for Tier-1 multinational firms.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a href="#/about" className="btn btn-primary">Discover Our Profile <ChevronRight size={16} /></a>
          </div>
        </div>

        {/* Vision, Mission, Motto Preview */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card-glass" style={{ borderLeft: '4px solid var(--primary-blue)' }}>
            <h4 style={{ color: 'var(--primary-blue)', fontSize: '1.15rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Compass size={18} style={{ color: 'var(--gold)' }} /> Institutional Motto
            </h4>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: 0 }}>
              "Join to Learn and Leave to Serve"
            </p>
          </div>

          <div className="card-glass" style={{ borderLeft: '4px solid var(--gold)' }}>
            <h4 style={{ color: 'var(--primary-blue)', fontSize: '1.15rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Flame size={18} style={{ color: 'var(--gold-dark)' }} /> Vision Statement
            </h4>
            <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>
              To prepare professionally competent women technocrats in the field of engineering with an innovative and ethical culture.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Statistics Counter */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))',
        color: 'var(--white)',
        padding: '5rem 1.5rem'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>
              {stats.years}+
            </div>
            <div style={{ fontSize: '1rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Years of Excellence</div>
          </div>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>
              {stats.placements}%
            </div>
            <div style={{ fontSize: '1rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Placement Rate</div>
          </div>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>
              {stats.intake}+
            </div>
            <div style={{ fontSize: '1rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Annual Intake</div>
          </div>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>
              {stats.awards}+
            </div>
            <div style={{ fontSize: '1rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Research Patents</div>
          </div>
        </div>
      </div>

      {/* Departments Grid Summary */}
      <div className="container" style={{ padding: '6rem 1.5rem' }}>
        <h2 className="text-center" style={{ marginBottom: '4rem' }}>Departments & Specializations</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { key: 'cse', name: 'Computer Science & Engineering', code: 'CSE', desc: 'Focuses on software engineering, web technologies, and computational theories. NBA Accredited.', link: '#/departments?dept=cse' },
            { key: 'ece', name: 'Electronics & Communication', code: 'ECE', desc: 'Covers VLSI, embedded hardware, optical fibers, and digital networking. NBA Accredited.', link: '#/departments?dept=ece' },
            { key: 'aids', name: 'Artificial Intelligence & DS', code: 'AI & DS', desc: 'Covers machine learning models, database modeling, and predictive metrics. UGC Approved.', link: '#/departments?dept=aids' },
            { key: 'aiml', name: 'Artificial Intelligence & ML', code: 'AI & ML', desc: 'Focuses on deep learning algorithms, computer vision, and expert robotics systems.', link: '#/departments?dept=aiml' }
          ].map((dept, idx) => (
            <div key={idx} className="card-glass" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              borderTop: '4px solid var(--gold)'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--gold-dark)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {dept.code} Department
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-blue)', marginBottom: '0.75rem' }}>{dept.name}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-700)', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                {dept.desc}
              </p>
              <a href={dept.link} style={{
                marginTop: 'auto',
                fontWeight: '700',
                color: 'var(--primary-blue)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.9rem',
                textDecoration: 'underline'
              }}>
                Explore Labs & Curriculum <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Side-by-side Tabs for Announcements / Exam Cell / Events */}
      <div className="container" style={{ padding: '0 1.5rem 6rem' }}>
        <div className="bulletins-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4.5rem' }}>
          {/* Active Board */}
          <div>
            <div style={{ display: 'flex', borderBottom: '2px solid var(--slate-200)', gap: '1.5rem', marginBottom: '2rem' }}>
              <button
                onClick={() => setActiveBoardTab('news')}
                style={{
                  border: 'none', background: 'none', padding: '0.75rem 0', fontSize: '1.1rem',
                  fontFamily: 'var(--font-display)', fontWeight: '700', cursor: 'pointer',
                  borderBottom: activeBoardTab === 'news' ? '3px solid var(--gold)' : '3px solid transparent',
                  color: activeBoardTab === 'news' ? 'var(--primary-blue)' : 'var(--slate-400)'
                }}
              >
                Latest Announcements
              </button>
              <button
                onClick={() => setActiveBoardTab('exams')}
                style={{
                  border: 'none', background: 'none', padding: '0.75rem 0', fontSize: '1.1rem',
                  fontFamily: 'var(--font-display)', fontWeight: '700', cursor: 'pointer',
                  borderBottom: activeBoardTab === 'exams' ? '3px solid var(--gold)' : '3px solid transparent',
                  color: activeBoardTab === 'exams' ? 'var(--primary-blue)' : 'var(--slate-400)'
                }}
              >
                Examination Board
              </button>
            </div>

            {/* TAB CONTENT: NEWS */}
            {activeBoardTab === 'news' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', animation: 'fadeInUp 0.3s' }}>
                {[
                  { date: 'July 10, 2026', title: 'Admissions open for B.Tech CSE, ECE, AI&DS, AI&ML. Fee discount counseling guidelines released.' },
                  { date: 'June 28, 2026', title: 'UGC Conferred Autonomous regulations guidelines (R23 syllabus) applied for freshman year.' },
                  { date: 'June 15, 2026', title: 'Recruitment Drive: Capgemini & Cognizant off-campus schedules released by the Placement cell.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'rgba(197, 160, 89, 0.15)', color: 'var(--gold-dark)',
                      padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700',
                      textAlign: 'center', minWidth: '100px'
                    }}>
                      {item.date}
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--primary-blue)', margin: '0 0 0.3rem', fontSize: '1.05rem' }}>{item.title}</h4>
                      <a href="#/circulars" style={{ fontSize: '0.85rem', color: 'var(--gold-dark)', fontWeight: '700', textDecoration: 'underline' }}>
                        Read Details &rarr;
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB CONTENT: EXAMS */}
            {activeBoardTab === 'exams' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', animation: 'fadeInUp 0.3s' }}>
                {[
                  { date: 'July 05, 2026', title: 'B.Tech II & III Semester regular/supplementary examinations fee registration link open.' },
                  { date: 'June 20, 2026', title: 'Time Table published for Supplementary Examinations commencing in July 2026.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{
                      background: 'rgba(11,34,64,0.06)', color: 'var(--primary-blue)',
                      padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700',
                      textAlign: 'center', minWidth: '100px'
                    }}>
                      {item.date}
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--primary-blue)', margin: '0 0 0.3rem', fontSize: '1.05rem' }}>{item.title}</h4>
                      <a href="#/exams" style={{ fontSize: '0.85rem', color: 'var(--gold-dark)', fontWeight: '700', textDecoration: 'underline' }}>
                        Download TimeTable &rarr;
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right column: Quick links card board */}
          <div>
            <div className="card-glass" style={{ borderLeft: '4px solid var(--gold)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', marginBottom: '1.25rem' }}>
                Quick Downloads
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <a href="#/academics" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <FileText size={16} style={{ color: 'var(--gold-dark)' }} />
                  <span>Academic regulations R23</span>
                </a>
                <a href="#/admissions" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <FileText size={16} style={{ color: 'var(--gold-dark)' }} />
                  <span>Intake eligibility checklist</span>
                </a>
                <a href="#/circulars" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <FileText size={16} style={{ color: 'var(--gold-dark)' }} />
                  <span>Anti-Ragging Squad list</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placements & Recruiter Logos Sliding Marquee */}
      <div style={{
        background: 'var(--white)',
        borderTop: '1px solid var(--slate-200)',
        borderBottom: '1px solid var(--slate-200)',
        padding: '4rem 1.5rem',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--gold-dark)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Career Pathways
          </span>
          <h2 className="text-center" style={{ marginBottom: '2rem' }}>Leading Corporates Recruit RCEW Girls</h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            {['TCS', 'Wipro', 'Cognizant', 'Accenture', 'Infosys', 'Capgemini', 'IBM', 'Tech Mahindra'].map((rec, idx) => (
              <div key={idx} style={{
                background: 'var(--slate-100)',
                border: '1px solid var(--slate-200)',
                borderRadius: '8px',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '800',
                color: 'var(--primary-blue)',
                minWidth: '130px'
              }}>
                {rec}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Achievements */}
      <div className="container" style={{ padding: '6rem 1.5rem' }}>
        <h2 className="text-center" style={{ marginBottom: '3.5rem' }}>Student Achievements</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {[
            { title: 'TCS HackQuest Winners', desc: 'RCEW third-year engineering students won first prize in TCS HackQuest security competitions.', student: 'Miss A. Deepthi (CSE)' },
            { title: 'JNTUA Gold Medalist', desc: 'Secured state-level university first rank in Electronics and Communications syllabus metrics.', student: 'Miss G. Bhavani (ECE)' }
          ].map((ach, idx) => (
            <div key={idx} className="card-glass" style={{ borderLeft: '4px solid var(--gold)', padding: '2rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--gold-dark)', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                {ach.student}
              </span>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>{ach.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-700)', marginBottom: 0 }}>{ach.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .welcome-grid, .bulletins-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
